! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.osrm = t()
    }
}(function() {
    var t;
    return function e(t, i, n) {
        function o(a, r) {
            if (!i[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!r && l) return l(a, !0);
                    if (s) return s(a, !0);
                    var h = new Error("Cannot find module '" + a + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var u = i[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports, function(e) {
                    var i = t[a][1][e];
                    return o(i ? i : e)
                }, u, u.exports, e, t, i, n)
            }
            return i[a].exports
        }
        for (var s = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
        return o
    }({
        1: [function(t, e, i) {
            e.exports = {
                name: "Deutsch",
                Link: "Link",
                "Open in editor": "Im Editor öffnen",
                "Open in JOSM": "In JSOM öffnen",
                "Download as GPX": "Als GPX herunterladen",
                Short: "Verkürzt",
                "Select language and units": "Sprache und Einheiten auswählen",
                Print: "Drucken"
            }
        }, {}],
        2: [function(t, e, i) {
            e.exports = {
                name: "English",
                Link: "Link",
                "Open in editor": "Open in editor",
                "Open in JOSM": "Open in JSOM",
                "Download as GPX": "Download as GPX",
                Short: "Short",
                "Select language and units": "Select language and units",
                Print: "Print"
            }
        }, {}],
        3: [function(e, i, n) {
            (function(e) {
                ! function(o) {
                    function s(t) {
                        throw RangeError(A[t])
                    }

                    function a(t, e) {
                        for (var i = t.length, n = []; i--;) n[i] = e(t[i]);
                        return n
                    }

                    function r(t, e) {
                        var i = t.split("@"),
                            n = "";
                        i.length > 1 && (n = i[0] + "@", t = i[1]), t = t.replace(O, ".");
                        var o = t.split("."),
                            s = a(o, e).join(".");
                        return n + s
                    }

                    function l(t) {
                        for (var e, i, n = [], o = 0, s = t.length; s > o;) e = t.charCodeAt(o++), e >= 55296 && 56319 >= e && s > o ? (i = t.charCodeAt(o++), 56320 == (64512 & i) ? n.push(((1023 & e) << 10) + (1023 & i) + 65536) : (n.push(e), o--)) : n.push(e);
                        return n
                    }

                    function h(t) {
                        return a(t, function(t) {
                            var e = "";
                            return t > 65535 && (t -= 65536, e += B(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += B(t)
                        }).join("")
                    }

                    function u(t) {
                        return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : x
                    }

                    function c(t, e) {
                        return t + 22 + 75 * (26 > t) - ((0 != e) << 5)
                    }

                    function d(t, e, i) {
                        var n = 0;
                        for (t = i ? I(t / E) : t >> 1, t += I(t / e); t > R * C >> 1; n += x) t = I(t / R);
                        return I(n + (R + 1) * t / (t + D))
                    }

                    function p(t) {
                        var e, i, n, o, a, r, l, c, p, m, _ = [],
                            f = t.length,
                            g = 0,
                            v = S,
                            y = T;
                        for (i = t.lastIndexOf(M), 0 > i && (i = 0), n = 0; i > n; ++n) t.charCodeAt(n) >= 128 && s("not-basic"), _.push(t.charCodeAt(n));
                        for (o = i > 0 ? i + 1 : 0; f > o;) {
                            for (a = g, r = 1, l = x; o >= f && s("invalid-input"), c = u(t.charCodeAt(o++)), (c >= x || c > I((w - g) / r)) && s("overflow"), g += c * r, p = y >= l ? b : l >= y + C ? C : l - y, !(p > c); l += x) m = x - p, r > I(w / m) && s("overflow"), r *= m;
                            e = _.length + 1, y = d(g - a, e, 0 == a), I(g / e) > w - v && s("overflow"), v += I(g / e), g %= e, _.splice(g++, 0, v)
                        }
                        return h(_)
                    }

                    function m(t) {
                        var e, i, n, o, a, r, h, u, p, m, _, f, g, v, y, L = [];
                        for (t = l(t), f = t.length, e = S, i = 0, a = T, r = 0; f > r; ++r) _ = t[r], 128 > _ && L.push(B(_));
                        for (n = o = L.length, o && L.push(M); f > n;) {
                            for (h = w, r = 0; f > r; ++r) _ = t[r], _ >= e && h > _ && (h = _);
                            for (g = n + 1, h - e > I((w - i) / g) && s("overflow"), i += (h - e) * g, e = h, r = 0; f > r; ++r)
                                if (_ = t[r], e > _ && ++i > w && s("overflow"), _ == e) {
                                    for (u = i, p = x; m = a >= p ? b : p >= a + C ? C : p - a, !(m > u); p += x) y = u - m, v = x - m, L.push(B(c(m + y % v, 0))), u = I(y / v);
                                    L.push(B(c(u, 0))), a = d(i, g, n == o), i = 0, ++n
                                }++i, ++e
                        }
                        return L.join("")
                    }

                    function _(t) {
                        return r(t, function(t) {
                            return k.test(t) ? p(t.slice(4).toLowerCase()) : t
                        })
                    }

                    function f(t) {
                        return r(t, function(t) {
                            return U.test(t) ? "xn--" + m(t) : t
                        })
                    }
                    var g = "object" == typeof n && n && !n.nodeType && n,
                        v = "object" == typeof i && i && !i.nodeType && i,
                        y = "object" == typeof e && e;
                    (y.global === y || y.window === y || y.self === y) && (o = y);
                    var L, P, w = 2147483647,
                        x = 36,
                        b = 1,
                        C = 26,
                        D = 38,
                        E = 700,
                        T = 72,
                        S = 128,
                        M = "-",
                        k = /^xn--/,
                        U = /[^\x20-\x7E]/,
                        O = /[\x2E\u3002\uFF0E\uFF61]/g,
                        A = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        R = x - b,
                        I = Math.floor,
                        B = String.fromCharCode;
                    if (L = {
                            version: "1.3.2",
                            ucs2: {
                                decode: l,
                                encode: h
                            },
                            decode: p,
                            encode: m,
                            toASCII: f,
                            toUnicode: _
                        }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function() {
                        return L
                    });
                    else if (g && v)
                        if (i.exports == g) v.exports = L;
                        else
                            for (P in L) L.hasOwnProperty(P) && (g[P] = L[P]);
                    else o.punycode = L
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        4: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            e.exports = function(t, e, i, s) {
                e = e || "&", i = i || "=";
                var a = {};
                if ("string" != typeof t || 0 === t.length) return a;
                var r = /\+/g;
                t = t.split(e);
                var l = 1e3;
                s && "number" == typeof s.maxKeys && (l = s.maxKeys);
                var h = t.length;
                l > 0 && h > l && (h = l);
                for (var u = 0; h > u; ++u) {
                    var c, d, p, m, _ = t[u].replace(r, "%20"),
                        f = _.indexOf(i);
                    f >= 0 ? (c = _.substr(0, f), d = _.substr(f + 1)) : (c = _, d = ""), p = decodeURIComponent(c), m = decodeURIComponent(d), n(a, p) ? o(a[p]) ? a[p].push(m) : a[p] = [a[p], m] : a[p] = m
                }
                return a
            };
            var o = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        }, {}],
        5: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                if (t.map) return t.map(e);
                for (var i = [], n = 0; n < t.length; n++) i.push(e(t[n], n));
                return i
            }
            var o = function(t) {
                switch (typeof t) {
                    case "string":
                        return t;
                    case "boolean":
                        return t ? "true" : "false";
                    case "number":
                        return isFinite(t) ? t : "";
                    default:
                        return ""
                }
            };
            e.exports = function(t, e, i, r) {
                return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? n(a(t), function(a) {
                    var r = encodeURIComponent(o(a)) + i;
                    return s(t[a]) ? n(t[a], function(t) {
                        return r + encodeURIComponent(o(t))
                    }).join(e) : r + encodeURIComponent(o(t[a]))
                }).join(e) : r ? encodeURIComponent(o(r)) + i + encodeURIComponent(o(t)) : ""
            };
            var s = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                a = Object.keys || function(t) {
                    var e = [];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                    return e
                }
        }, {}],
        6: [function(t, e, i) {
            "use strict";
            i.decode = i.parse = t("./decode"), i.encode = i.stringify = t("./encode")
        }, {
            "./decode": 4,
            "./encode": 5
        }],
        7: [function(t, e, i) {
            function n() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }

            function o(t, e, i) {
                if (t && h(t) && t instanceof n) return t;
                var o = new n;
                return o.parse(t, e, i), o
            }

            function s(t) {
                return l(t) && (t = o(t)), t instanceof n ? t.format() : n.prototype.format.call(t)
            }

            function a(t, e) {
                return o(t, !1, !0).resolve(e)
            }

            function r(t, e) {
                return t ? o(t, !1, !0).resolveObject(e) : e
            }

            function l(t) {
                return "string" == typeof t
            }

            function h(t) {
                return "object" == typeof t && null !== t
            }

            function u(t) {
                return null === t
            }

            function c(t) {
                return null == t
            }
            var d = t("punycode");
            i.parse = o, i.resolve = a, i.resolveObject = r, i.format = s, i.Url = n;
            var p = /^([a-z0-9.+-]+:)/i,
                m = /:[0-9]*$/,
                _ = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
                f = ["{", "}", "|", "\\", "^", "`"].concat(_),
                g = ["'"].concat(f),
                v = ["%", "/", "?", ";", "#"].concat(g),
                y = ["/", "?", "#"],
                L = 255,
                P = /^[a-z0-9A-Z_-]{0,63}$/,
                w = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
                x = {
                    javascript: !0,
                    "javascript:": !0
                },
                b = {
                    javascript: !0,
                    "javascript:": !0
                },
                C = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                D = t("querystring");
            n.prototype.parse = function(t, e, i) {
                if (!l(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var n = t;
                n = n.trim();
                var o = p.exec(n);
                if (o) {
                    o = o[0];
                    var s = o.toLowerCase();
                    this.protocol = s, n = n.substr(o.length)
                }
                if (i || o || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var a = "//" === n.substr(0, 2);
                    !a || o && b[o] || (n = n.substr(2), this.slashes = !0)
                }
                if (!b[o] && (a || o && !C[o])) {
                    for (var r = -1, h = 0; h < y.length; h++) {
                        var u = n.indexOf(y[h]); - 1 !== u && (-1 === r || r > u) && (r = u)
                    }
                    var c, m;
                    m = -1 === r ? n.lastIndexOf("@") : n.lastIndexOf("@", r), -1 !== m && (c = n.slice(0, m), n = n.slice(m + 1), this.auth = decodeURIComponent(c)), r = -1;
                    for (var h = 0; h < v.length; h++) {
                        var u = n.indexOf(v[h]); - 1 !== u && (-1 === r || r > u) && (r = u)
                    } - 1 === r && (r = n.length), this.host = n.slice(0, r), n = n.slice(r), this.parseHost(), this.hostname = this.hostname || "";
                    var _ = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!_)
                        for (var f = this.hostname.split(/\./), h = 0, E = f.length; E > h; h++) {
                            var T = f[h];
                            if (T && !T.match(P)) {
                                for (var S = "", M = 0, k = T.length; k > M; M++) S += T.charCodeAt(M) > 127 ? "x" : T[M];
                                if (!S.match(P)) {
                                    var U = f.slice(0, h),
                                        O = f.slice(h + 1),
                                        A = T.match(w);
                                    A && (U.push(A[1]), O.unshift(A[2])), O.length && (n = "/" + O.join(".") + n), this.hostname = U.join(".");
                                    break
                                }
                            }
                        }
                    if (this.hostname.length > L ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !_) {
                        for (var R = this.hostname.split("."), I = [], h = 0; h < R.length; ++h) {
                            var B = R[h];
                            I.push(B.match(/[^A-Za-z0-9_-]/) ? "xn--" + d.encode(B) : B)
                        }
                        this.hostname = I.join(".")
                    }
                    var z = this.port ? ":" + this.port : "",
                        N = this.hostname || "";
                    this.host = N + z, this.href += this.host, _ && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== n[0] && (n = "/" + n))
                }
                if (!x[s])
                    for (var h = 0, E = g.length; E > h; h++) {
                        var Z = g[h],
                            W = encodeURIComponent(Z);
                        W === Z && (W = escape(Z)), n = n.split(Z).join(W)
                    }
                var j = n.indexOf("#"); - 1 !== j && (this.hash = n.substr(j), n = n.slice(0, j));
                var G = n.indexOf("?");
                if (-1 !== G ? (this.search = n.substr(G), this.query = n.substr(G + 1), e && (this.query = D.parse(this.query)), n = n.slice(0, G)) : e && (this.search = "", this.query = {}), n && (this.pathname = n), C[s] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    var z = this.pathname || "",
                        B = this.search || "";
                    this.path = z + B
                }
                return this.href = this.format(), this
            }, n.prototype.format = function() {
                var t = this.auth || "";
                t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
                var e = this.protocol || "",
                    i = this.pathname || "",
                    n = this.hash || "",
                    o = !1,
                    s = "";
                this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && h(this.query) && Object.keys(this.query).length && (s = D.stringify(this.query));
                var a = this.search || s && "?" + s || "";
                return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || C[e]) && o !== !1 ? (o = "//" + (o || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : o || (o = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), i = i.replace(/[?#]/g, function(t) {
                    return encodeURIComponent(t)
                }), a = a.replace("#", "%23"), e + o + i + a + n
            }, n.prototype.resolve = function(t) {
                return this.resolveObject(o(t, !1, !0)).format()
            }, n.prototype.resolveObject = function(t) {
                if (l(t)) {
                    var e = new n;
                    e.parse(t, !1, !0), t = e
                }
                var i = new n;
                if (Object.keys(this).forEach(function(t) {
                        i[t] = this[t]
                    }, this), i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
                if (t.slashes && !t.protocol) return Object.keys(t).forEach(function(e) {
                    "protocol" !== e && (i[e] = t[e])
                }), C[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i;
                if (t.protocol && t.protocol !== i.protocol) {
                    if (!C[t.protocol]) return Object.keys(t).forEach(function(e) {
                        i[e] = t[e]
                    }), i.href = i.format(), i;
                    if (i.protocol = t.protocol, t.host || b[t.protocol]) i.pathname = t.pathname;
                    else {
                        for (var o = (t.pathname || "").split("/"); o.length && !(t.host = o.shift()););
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== o[0] && o.unshift(""), o.length < 2 && o.unshift(""), i.pathname = o.join("/")
                    }
                    if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
                        var s = i.pathname || "",
                            a = i.search || "";
                        i.path = s + a
                    }
                    return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
                }
                var r = i.pathname && "/" === i.pathname.charAt(0),
                    h = t.host || t.pathname && "/" === t.pathname.charAt(0),
                    d = h || r || i.host && t.pathname,
                    p = d,
                    m = i.pathname && i.pathname.split("/") || [],
                    o = t.pathname && t.pathname.split("/") || [],
                    _ = i.protocol && !C[i.protocol];
                if (_ && (i.hostname = "", i.port = null, i.host && ("" === m[0] ? m[0] = i.host : m.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === o[0] ? o[0] = t.host : o.unshift(t.host)), t.host = null), d = d && ("" === o[0] || "" === m[0])), h) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, m = o;
                else if (o.length) m || (m = []), m.pop(), m = m.concat(o), i.search = t.search, i.query = t.query;
                else if (!c(t.search)) {
                    if (_) {
                        i.hostname = i.host = m.shift();
                        var f = i.host && i.host.indexOf("@") > 0 ? i.host.split("@") : !1;
                        f && (i.auth = f.shift(), i.host = i.hostname = f.shift())
                    }
                    return i.search = t.search, i.query = t.query, u(i.pathname) && u(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
                }
                if (!m.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
                for (var g = m.slice(-1)[0], v = (i.host || t.host) && ("." === g || ".." === g) || "" === g, y = 0, L = m.length; L >= 0; L--) g = m[L], "." == g ? m.splice(L, 1) : ".." === g ? (m.splice(L, 1), y++) : y && (m.splice(L, 1), y--);
                if (!d && !p)
                    for (; y--; y) m.unshift("..");
                !d || "" === m[0] || m[0] && "/" === m[0].charAt(0) || m.unshift(""), v && "/" !== m.join("/").substr(-1) && m.push("");
                var P = "" === m[0] || m[0] && "/" === m[0].charAt(0);
                if (_) {
                    i.hostname = i.host = P ? "" : m.length ? m.shift() : "";
                    var f = i.host && i.host.indexOf("@") > 0 ? i.host.split("@") : !1;
                    f && (i.auth = f.shift(), i.host = i.hostname = f.shift())
                }
                return d = d || i.host && m.length, d && !P && m.unshift(""), m.length ? i.pathname = m.join("/") : (i.pathname = null, i.path = null), u(i.pathname) && u(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
            }, n.prototype.parseHost = function() {
                var t = this.host,
                    e = m.exec(t);
                e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
            }
        }, {
            punycode: 3,
            querystring: 6
        }],
        8: [function(t, e, i) {
            function n(t, e, i) {
                function n(t) {
                    return t >= 200 && 300 > t || 304 === t
                }

                function o() {
                    void 0 === r.status || n(r.status) ? e.call(r, null, r) : e.call(r, r, null)
                }
                var s = !1;
                if ("undefined" == typeof window.XMLHttpRequest) return e(Error("Browser not supported"));
                if ("undefined" == typeof i) {
                    var a = t.match(/^\s*https?:\/\/[^\/]*/);
                    i = a && a[0] !== location.protocol + "//" + location.domain + (location.port ? ":" + location.port : "")
                }
                var r = new window.XMLHttpRequest;
                if (i && !("withCredentials" in r)) {
                    r = new window.XDomainRequest;
                    var l = e;
                    e = function() {
                        if (s) l.apply(this, arguments);
                        else {
                            var t = this,
                                e = arguments;
                            setTimeout(function() {
                                l.apply(t, e)
                            }, 0)
                        }
                    }
                }
                return "onload" in r ? r.onload = o : r.onreadystatechange = function() {
                    4 === r.readyState && o()
                }, r.onerror = function(t) {
                    e.call(this, t || !0, null), e = function() {}
                }, r.onprogress = function() {}, r.ontimeout = function(t) {
                    e.call(this, t, null), e = function() {}
                }, r.onabort = function(t) {
                    e.call(this, t, null), e = function() {}
                }, r.open("GET", t, !0), r.send(null), s = !0, r
            }
            "undefined" != typeof e && (e.exports = n)
        }, {}],
        9: [function(t, e, i) {
            function n() {}

            function o(t, e, i) {
                function o() {
                    l.parentNode && l.parentNode.removeChild(l), window[c] = n, h && clearTimeout(h)
                }

                function r() {
                    window[c] && o()
                }
                "function" == typeof e && (i = e, e = {}), e || (e = {});
                var l, h, u = e.prefix || "__jp",
                    c = e.name || u + a++,
                    d = e.param || "callback",
                    p = null != e.timeout ? e.timeout : 6e4,
                    m = encodeURIComponent,
                    _ = document.getElementsByTagName("script")[0] || document.head;
                return p && (h = setTimeout(function() {
                    o(), i && i(new Error("Timeout"))
                }, p)), window[c] = function(t) {
                    s("jsonp got", t), o(), i && i(null, t)
                }, t += (~t.indexOf("?") ? "&" : "?") + d + "=" + m(c), t = t.replace("?&", "?"), s('jsonp req "%s"', t), l = document.createElement("script"), l.src = t, _.parentNode.insertBefore(l, _), r
            }
            var s = t("debug")("jsonp");
            e.exports = o;
            var a = 0
        }, {
            debug: 10
        }],
        10: [function(t, e, i) {
            function n() {
                return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }

            function o() {
                var t = arguments,
                    e = this.useColors;
                if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + i.humanize(this.diff), !e) return t;
                var n = "color: " + this.color;
                t = [t[0], n, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                var o = 0,
                    s = 0;
                return t[0].replace(/%[a-z%]/g, function(t) {
                    "%%" !== t && (o++, "%c" === t && (s = o))
                }), t.splice(s, 0, n), t
            }

            function s() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function a(t) {
                try {
                    null == t ? h.removeItem("debug") : h.debug = t
                } catch (e) {}
            }

            function r() {
                var t;
                try {
                    t = h.debug
                } catch (e) {}
                return t
            }

            function l() {
                try {
                    return window.localStorage
                } catch (t) {}
            }
            i = e.exports = t("./debug"), i.log = s, i.formatArgs = o, i.save = a, i.load = r, i.useColors = n;
            var h;
            h = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : l(), i.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], i.formatters.j = function(t) {
                return JSON.stringify(t)
            }, i.enable(r())
        }, {
            "./debug": 11
        }],
        11: [function(t, e, i) {
            function n() {
                return i.colors[u++ % i.colors.length]
            }

            function o(t) {
                function e() {}

                function o() {
                    var t = o,
                        e = +new Date,
                        s = e - (h || e);
                    t.diff = s, t.prev = h, t.curr = e, h = e, null == t.useColors && (t.useColors = i.useColors()), null == t.color && t.useColors && (t.color = n());
                    var a = Array.prototype.slice.call(arguments);
                    a[0] = i.coerce(a[0]), "string" != typeof a[0] && (a = ["%o"].concat(a));
                    var r = 0;
                    a[0] = a[0].replace(/%([a-z%])/g, function(e, n) {
                        if ("%%" === e) return e;
                        r++;
                        var o = i.formatters[n];
                        if ("function" == typeof o) {
                            var s = a[r];
                            e = o.call(t, s), a.splice(r, 1), r--
                        }
                        return e
                    }), "function" == typeof i.formatArgs && (a = i.formatArgs.apply(t, a));
                    var l = o.log || i.log || console.log.bind(console);
                    l.apply(t, a)
                }
                e.enabled = !1, o.enabled = !0;
                var s = i.enabled(t) ? o : e;
                return s.namespace = t, s
            }

            function s(t) {
                i.save(t);
                for (var e = (t || "").split(/[\s,]+/), n = e.length, o = 0; n > o; o++) e[o] && (t = e[o].replace(/\*/g, ".*?"), "-" === t[0] ? i.skips.push(new RegExp("^" + t.substr(1) + "$")) : i.names.push(new RegExp("^" + t + "$")))
            }

            function a() {
                i.enable("")
            }

            function r(t) {
                var e, n;
                for (e = 0, n = i.skips.length; n > e; e++)
                    if (i.skips[e].test(t)) return !1;
                for (e = 0, n = i.names.length; n > e; e++)
                    if (i.names[e].test(t)) return !0;
                return !1
            }

            function l(t) {
                return t instanceof Error ? t.stack || t.message : t
            }
            i = e.exports = o, i.coerce = l, i.disable = a, i.enable = s, i.enabled = r, i.humanize = t("ms"), i.names = [], i.skips = [], i.formatters = {};
            var h, u = 0
        }, {
            ms: 12
        }],
        12: [function(t, e, i) {
            function n(t) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var i = parseFloat(e[1]),
                        n = (e[2] || "ms").toLowerCase();
                    switch (n) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return i * c;
                        case "days":
                        case "day":
                        case "d":
                            return i * u;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return i * h;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return i * l;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return i * r;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return i
                    }
                }
            }

            function o(t) {
                return t >= u ? Math.round(t / u) + "d" : t >= h ? Math.round(t / h) + "h" : t >= l ? Math.round(t / l) + "m" : t >= r ? Math.round(t / r) + "s" : t + "ms"
            }

            function s(t) {
                return a(t, u, "day") || a(t, h, "hour") || a(t, l, "minute") || a(t, r, "second") || t + " ms"
            }

            function a(t, e, i) {
                return e > t ? void 0 : 1.5 * e > t ? Math.floor(t / e) + " " + i : Math.ceil(t / e) + " " + i + "s"
            }
            var r = 1e3,
                l = 60 * r,
                h = 60 * l,
                u = 24 * h,
                c = 365.25 * u;
            e.exports = function(t, e) {
                return e = e || {}, "string" == typeof t ? n(t) : e["long"] ? s(t) : o(t)
            }
        }, {}],
        13: [function(e, i, n) {
            ! function(n) {
                var o;
                if ("function" == typeof t && t.amd) t(["leaflet"], n);
                else if ("undefined" != typeof i) o = e("leaflet"), i.exports = n(o);
                else {
                    if ("undefined" == typeof window.L) throw "Leaflet must be loaded first";
                    n(window.L)
                }
            }(function(t) {
                "use strict";
                return t.Control.Geocoder = t.Control.extend({
                    options: {
                        showResultIcons: !1,
                        collapsed: !0,
                        expand: "click",
                        position: "topright",
                        placeholder: "Search...",
                        errorMessage: "Nothing found."
                    },
                    _callbackId: 0,
                    initialize: function(e) {
                        t.Util.setOptions(this, e), this.options.geocoder || (this.options.geocoder = new t.Control.Geocoder.Nominatim)
                    },
                    onAdd: function(e) {
                        var i, n = "leaflet-control-geocoder",
                            o = t.DomUtil.create("div", n + " leaflet-bar"),
                            s = t.DomUtil.create("a", "leaflet-control-geocoder-icon", o),
                            a = this._form = t.DomUtil.create("form", n + "-form", o);
                        return s.innerHTML = "&nbsp;", s.href = "#", this._map = e, this._container = o, i = this._input = t.DomUtil.create("input"), i.type = "text", i.placeholder = this.options.placeholder, t.DomEvent.addListener(i, "keydown", this._keydown, this), this._errorElement = document.createElement("div"), this._errorElement.className = n + "-form-no-error", this._errorElement.innerHTML = this.options.errorMessage, this._alts = t.DomUtil.create("ul", n + "-alternatives leaflet-control-geocoder-alternatives-minimized"), a.appendChild(i), this._container.appendChild(this._errorElement), o.appendChild(this._alts), t.DomEvent.addListener(a, "submit", this._geocode, this), this.options.collapsed ? "click" === this.options.expand ? t.DomEvent.addListener(s, "click", function(t) {
                            0 === t.button && 2 !== t.detail && this._toggle()
                        }, this) : (t.DomEvent.addListener(s, "mouseover", this._expand, this), t.DomEvent.addListener(s, "mouseout", this._collapse, this), this._map.on("movestart", this._collapse, this)) : this._expand(), t.DomEvent.disableClickPropagation(o), o
                    },
                    _geocodeResult: function(e) {
                        if (t.DomUtil.removeClass(this._container, "leaflet-control-geocoder-throbber"), 1 === e.length) this._geocodeResultSelected(e[0]);
                        else if (e.length > 0) {
                            this._alts.innerHTML = "", this._results = e, t.DomUtil.removeClass(this._alts, "leaflet-control-geocoder-alternatives-minimized");
                            for (var i = 0; i < e.length; i++) this._alts.appendChild(this._createAlt(e[i], i))
                        } else t.DomUtil.addClass(this._errorElement, "leaflet-control-geocoder-error")
                    },
                    markGeocode: function(e) {
                        return this._map.fitBounds(e.bbox), this._geocodeMarker && this._map.removeLayer(this._geocodeMarker), this._geocodeMarker = new t.Marker(e.center).bindPopup(e.html || e.name).addTo(this._map).openPopup(), this
                    },
                    _geocode: function(e) {
                        return t.DomEvent.preventDefault(e), t.DomUtil.addClass(this._container, "leaflet-control-geocoder-throbber"), this._clearResults(), this.options.geocoder.geocode(this._input.value, this._geocodeResult, this), !1
                    },
                    _geocodeResultSelected: function(t) {
                        this.options.collapsed ? this._collapse() : this._clearResults(), this.markGeocode(t)
                    },
                    _toggle: function() {
                        this._container.className.indexOf("leaflet-control-geocoder-expanded") >= 0 ? this._collapse() : this._expand()
                    },
                    _expand: function() {
                        t.DomUtil.addClass(this._container, "leaflet-control-geocoder-expanded"), this._input.select()
                    },
                    _collapse: function() {
                        this._container.className = this._container.className.replace(" leaflet-control-geocoder-expanded", ""), t.DomUtil.addClass(this._alts, "leaflet-control-geocoder-alternatives-minimized"), t.DomUtil.removeClass(this._errorElement, "leaflet-control-geocoder-error")
                    },
                    _clearResults: function() {
                        t.DomUtil.addClass(this._alts, "leaflet-control-geocoder-alternatives-minimized"), this._selection = null, t.DomUtil.removeClass(this._errorElement, "leaflet-control-geocoder-error")
                    },
                    _createAlt: function(e, i) {
                        var n = t.DomUtil.create("li"),
                            o = t.DomUtil.create("a", "", n),
                            s = this.options.showResultIcons && e.icon ? t.DomUtil.create("img", "", o) : null,
                            a = e.html ? void 0 : document.createTextNode(e.name),
                            r = function(i) {
                                t.DomEvent.preventDefault(i), this._geocodeResultSelected(e)
                            };
                        return s && (s.src = e.icon), n.setAttribute("data-result-index", i), e.html ? o.innerHTML = e.html : o.appendChild(a), t.DomEvent.addListener(o, "click", r, this), t.DomEvent.addListener(n, "click", r, this), n
                    },
                    _keydown: function(e) {
                        var i = this,
                            n = function(e) {
                                i._selection && (t.DomUtil.removeClass(i._selection, "leaflet-control-geocoder-selected"), i._selection = i._selection[e > 0 ? "nextSibling" : "previousSibling"]), i._selection || (i._selection = i._alts[e > 0 ? "firstChild" : "lastChild"]), i._selection && t.DomUtil.addClass(i._selection, "leaflet-control-geocoder-selected")
                            };
                        switch (e.keyCode) {
                            case 27:
                                this.options.collapsed && this._collapse();
                                break;
                            case 38:
                                n(-1), t.DomEvent.preventDefault(e);
                                break;
                            case 40:
                                n(1), t.DomEvent.preventDefault(e);
                                break;
                            case 13:
                                if (this._selection) {
                                    var o = parseInt(this._selection.getAttribute("data-result-index"), 10);
                                    this._geocodeResultSelected(this._results[o]), this._clearResults(), t.DomEvent.preventDefault(e)
                                }
                        }
                        return !0
                    }
                }), t.Control.geocoder = function(e) {
                    return new t.Control.Geocoder(e)
                }, t.Control.Geocoder.callbackId = 0, t.Control.Geocoder.jsonp = function(e, i, n, o, s) {
                    var a = "_l_geocoder_" + t.Control.Geocoder.callbackId++;
                    i[s || "callback"] = a, window[a] = t.Util.bind(n, o);
                    var r = document.createElement("script");
                    r.type = "text/javascript", r.src = e + t.Util.getParamString(i), r.id = a, document.getElementsByTagName("head")[0].appendChild(r)
                }, t.Control.Geocoder.getJSON = function(e, i, n) {
                    var o = new XMLHttpRequest;
                    o.onreadystatechange = function() {
                        return 4 == o.readyState ? 200 != o.status && 304 != o.status ? void n("") : void n(JSON.parse(o.response)) : void 0
                    }, o.open("GET", e + t.Util.getParamString(i), !0), o.setRequestHeader("Accept", "application/json"), o.send(null)
                }, t.Control.Geocoder.template = function(e, i, n) {
                    return e.replace(/\{ *([\w_]+) *\}/g, function(e, n) {
                        var o = i[n];
                        return void 0 === o ? o = "" : "function" == typeof o && (o = o(i)), t.Control.Geocoder.htmlEscape(o)
                    })
                }, t.Control.Geocoder.htmlEscape = function() {
                    function t(t) {
                        return n[t]
                    }
                    var e = /[&<>"'`]/g,
                        i = /[&<>"'`]/,
                        n = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        };
                    return function(n) {
                        return null == n ? "" : n ? (n = "" + n, i.test(n) ? n.replace(e, t) : n) : n + ""
                    }
                }(), t.Control.Geocoder.Nominatim = t.Class.extend({
                    options: {
                        serviceUrl: "//nominatim.openstreetmap.org/",
                        geocodingQueryParams: {},
                        reverseQueryParams: {},
                        htmlTemplate: function(e) {
                            var i = e.address,
                                n = [];
                            return (i.road || i.building) && n.push("{building} {road} {house_number}"), (i.city || i.town || i.village) && n.push('<span class="' + (n.length > 0 ? "leaflet-control-geocoder-address-detail" : "") + '">{postcode} {city} {town} {village}</span>'), (i.state || i.country) && n.push('<span class="' + (n.length > 0 ? "leaflet-control-geocoder-address-context" : "") + '">{state} {country}</span>'), t.Control.Geocoder.template(n.join("<br/>"), i, !0)
                        }
                    },
                    initialize: function(e) {
                        t.Util.setOptions(this, e)
                    },
                    geocode: function(e, i, n) {
                        t.Control.Geocoder.jsonp(this.options.serviceUrl + "search/", t.extend({
                            q: e,
                            limit: 5,
                            format: "json",
                            addressdetails: 1
                        }, this.options.geocodingQueryParams), function(e) {
                            for (var o = [], s = e.length - 1; s >= 0; s--) {
                                for (var a = e[s].boundingbox, r = 0; 4 > r; r++) a[r] = parseFloat(a[r]);
                                o[s] = {
                                    icon: e[s].icon,
                                    name: e[s].display_name,
                                    html: this.options.htmlTemplate ? this.options.htmlTemplate(e[s]) : void 0,
                                    bbox: t.latLngBounds([a[0], a[2]], [a[1], a[3]]),
                                    center: t.latLng(e[s].lat, e[s].lon),
                                    properties: e[s]
                                }
                            }
                            i.call(n, o)
                        }, this, "json_callback")
                    },
                    reverse: function(e, i, n, o) {
                        t.Control.Geocoder.jsonp(this.options.serviceUrl + "reverse/", t.extend({
                            lat: e.lat,
                            lon: e.lng,
                            zoom: Math.round(Math.log(i / 256) / Math.log(2)),
                            addressdetails: 1,
                            format: "json"
                        }, this.options.reverseQueryParams), function(e) {
                            var i, s = [];
                            e && e.lat && e.lon && (i = t.latLng(e.lat, e.lon), s.push({
                                name: e.display_name,
                                html: this.options.htmlTemplate ? this.options.htmlTemplate(e) : void 0,
                                center: i,
                                bounds: t.latLngBounds(i, i),
                                properties: e
                            })), n.call(o, s)
                        }, this, "json_callback")
                    }
                }), t.Control.Geocoder.nominatim = function(e) {
                    return new t.Control.Geocoder.Nominatim(e)
                }, t.Control.Geocoder.Bing = t.Class.extend({
                    initialize: function(t) {
                        this.key = t
                    },
                    geocode: function(e, i, n) {
                        t.Control.Geocoder.jsonp("//dev.virtualearth.net/REST/v1/Locations", {
                            query: e,
                            key: this.key
                        }, function(e) {
                            var o = [];
                            if (e.resourceSets.length > 0)
                                for (var s = e.resourceSets[0].resources.length - 1; s >= 0; s--) {
                                    var a = e.resourceSets[0].resources[s],
                                        r = a.bbox;
                                    o[s] = {
                                        name: a.name,
                                        bbox: t.latLngBounds([r[0], r[1]], [r[2], r[3]]),
                                        center: t.latLng(a.point.coordinates)
                                    }
                                }
                            i.call(n, o)
                        }, this, "jsonp")
                    },
                    reverse: function(e, i, n, o) {
                        t.Control.Geocoder.jsonp("//dev.virtualearth.net/REST/v1/Locations/" + e.lat + "," + e.lng, {
                            key: this.key
                        }, function(e) {
                            for (var i = [], s = e.resourceSets[0].resources.length - 1; s >= 0; s--) {
                                var a = e.resourceSets[0].resources[s],
                                    r = a.bbox;
                                i[s] = {
                                    name: a.name,
                                    bbox: t.latLngBounds([r[0], r[1]], [r[2], r[3]]),
                                    center: t.latLng(a.point.coordinates)
                                }
                            }
                            n.call(o, i)
                        }, this, "jsonp")
                    }
                }), t.Control.Geocoder.bing = function(e) {
                    return new t.Control.Geocoder.Bing(e)
                }, t.Control.Geocoder.RaveGeo = t.Class.extend({
                    options: {
                        querySuffix: "",
                        deepSearch: !0,
                        wordBased: !1
                    },
                    jsonp: function(e, i, n) {
                        var o = "_l_geocoder_" + t.Control.Geocoder.callbackId++,
                            s = [];
                        e.prepend = o + "(", e.append = ")";
                        for (var a in e) s.push(a + "=" + escape(e[a]));
                        window[o] = t.Util.bind(i, n);
                        var r = document.createElement("script");
                        r.type = "text/javascript", r.src = this._serviceUrl + "?" + s.join("&"), r.id = o, document.getElementsByTagName("head")[0].appendChild(r)
                    },
                    initialize: function(e, i, n) {
                        t.Util.setOptions(this, n), this._serviceUrl = e, this._scheme = i
                    },
                    geocode: function(e, i, n) {
                        t.Control.Geocoder.jsonp(this._serviceUrl, {
                            address: e + this.options.querySuffix,
                            scheme: this._scheme,
                            outputFormat: "jsonp",
                            deepSearch: this.options.deepSearch,
                            wordBased: this.options.wordBased
                        }, function(e) {
                            for (var o = [], s = e.length - 1; s >= 0; s--) {
                                var a = e[s],
                                    r = t.latLng(a.y, a.x);
                                o[s] = {
                                    name: a.address,
                                    bbox: t.latLngBounds([r]),
                                    center: r
                                }
                            }
                            i.call(n, o)
                        }, this)
                    }
                }), t.Control.Geocoder.raveGeo = function(e, i, n) {
                    return new t.Control.Geocoder.RaveGeo(e, i, n)
                }, t.Control.Geocoder.MapQuest = t.Class.extend({
                    options: {
                        serviceUrl: "//www.mapquestapi.com/geocoding/v1"
                    },
                    initialize: function(e, i) {
                        this._key = decodeURIComponent(e), t.Util.setOptions(this, i)
                    },
                    _formatName: function() {
                        var t, e = [];
                        for (t = 0; t < arguments.length; t++) arguments[t] && e.push(arguments[t]);
                        return e.join(", ")
                    },
                    geocode: function(e, i, n) {
                        t.Control.Geocoder.jsonp(this.options.serviceUrl + "/address", {
                            key: this._key,
                            location: e,
                            limit: 5,
                            outFormat: "json"
                        }, function(e) {
                            var o, s, a = [];
                            if (e.results && e.results[0].locations)
                                for (var r = e.results[0].locations.length - 1; r >= 0; r--) o = e.results[0].locations[r], s = t.latLng(o.latLng), a[r] = {
                                    name: this._formatName(o.street, o.adminArea4, o.adminArea3, o.adminArea1),
                                    bbox: t.latLngBounds(s, s),
                                    center: s
                                };
                            i.call(n, a)
                        }, this)
                    },
                    reverse: function(e, i, n, o) {
                        t.Control.Geocoder.jsonp(this.options.serviceUrl + "/reverse", {
                            key: this._key,
                            location: e.lat + "," + e.lng,
                            outputFormat: "json"
                        }, function(e) {
                            var i, s, a = [];
                            if (e.results && e.results[0].locations)
                                for (var r = e.results[0].locations.length - 1; r >= 0; r--) i = e.results[0].locations[r], s = t.latLng(i.latLng), a[r] = {
                                    name: this._formatName(i.street, i.adminArea4, i.adminArea3, i.adminArea1),
                                    bbox: t.latLngBounds(s, s),
                                    center: s
                                };
                            n.call(o, a)
                        }, this)
                    }
                }), t.Control.Geocoder.mapQuest = function(e, i) {
                    return new t.Control.Geocoder.MapQuest(e, i)
                }, t.Control.Geocoder.Mapbox = t.Class.extend({
                    options: {
                        service_url: "https://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/"
                    },
                    initialize: function(t) {
                        this._access_token = t
                    },
                    geocode: function(e, i, n) {
                        t.Control.Geocoder.getJSON(this.options.service_url + encodeURIComponent(e) + ".json", {
                            access_token: this._access_token
                        }, function(e) {
                            var o, s, a, r = [];
                            if (e.features && e.features.length)
                                for (var l = 0; l <= e.features.length - 1; l++) o = e.features[l], s = t.latLng(o.center.reverse()), a = o.hasOwnProperty("bbox") ? t.latLngBounds(t.latLng(o.bbox.slice(0, 2).reverse()), t.latLng(o.bbox.slice(2, 4).reverse())) : t.latLngBounds(s, s), r[l] = {
                                    name: o.place_name,
                                    bbox: a,
                                    center: s
                                };
                            i.call(n, r)
                        })
                    },
                    suggest: function(t, e, i) {
                        return this.geocode(t, e, i)
                    },
                    reverse: function(e, i, n, o) {
                        t.Control.Geocoder.getJSON(this.options.service_url + encodeURIComponent(e.lng) + "," + encodeURIComponent(e.lat) + ".json", {
                            access_token: this._access_token
                        }, function(e) {
                            var i, s, a, r = [];
                            if (e.features && e.features.length)
                                for (var l = 0; l <= e.features.length - 1; l++) i = e.features[l], s = t.latLng(i.center.reverse()), a = i.hasOwnProperty("bbox") ? t.latLngBounds(t.latLng(i.bbox.slice(0, 2).reverse()), t.latLng(i.bbox.slice(2, 4).reverse())) : t.latLngBounds(s, s), r[l] = {
                                    name: i.place_name,
                                    bbox: a,
                                    center: s
                                };
                            n.call(o, r)
                        })
                    }
                }), t.Control.Geocoder.mapbox = function(e) {
                    return new t.Control.Geocoder.Mapbox(e)
                }, t.Control.Geocoder.What3Words = t.Class.extend({
                    options: {
                        serviceUrl: "http://api.what3words.com/"
                    },
                    initialize: function(t) {
                        this._accessToken = t
                    },
                    geocode: function(e, i, n) {
                        t.Control.Geocoder.getJSON(this.options.serviceUrl + "w3w", {
                            key: this._accessToken,
                            string: e.split(/\s+/).join(".")
                        }, function(e) {
                            var o, s, a, r = [];
                            e.position && e.position.length && (o = e.words, s = t.latLng(e.position[0], e.position[1]), a = t.latLngBounds(s, s), r[0] = {
                                name: o.join("."),
                                bbox: a,
                                center: s
                            }), i.call(n, r)
                        })
                    },
                    suggest: function(t, e, i) {
                        return this.geocode(t, e, i)
                    },
                    reverse: function(e, i, n, o) {
                        t.Control.Geocoder.getJSON(this.options.serviceUrl + "position", {
                            key: this._accessToken,
                            position: [e.lat, e.lng].join(",")
                        }, function(e) {
                            var i, s, a, r = [];
                            e.position && e.position.length && (i = e.words, s = t.latLng(e.position[0], e.position[1]), a = t.latLngBounds(s, s), r[0] = {
                                name: i.join("."),
                                bbox: a,
                                center: s
                            }), n.call(o, r)
                        })
                    }
                }), t.Control.Geocoder.what3words = function(e) {
                    return new t.Control.Geocoder.What3Words(e)
                }, t.Control.Geocoder.Google = t.Class.extend({
                    options: {
                        service_url: "https://maps.googleapis.com/maps/api/geocode/json"
                    },
                    initialize: function(t) {
                        this._key = t
                    },
                    geocode: function(e, i, n) {
                        var o = {
                            address: e
                        };
                        this._key && this._key.length && (o.key = this._key), t.Control.Geocoder.getJSON(this.options.service_url, o, function(e) {
                            var o, s, a, r = [];
                            if (e.results && e.results.length)
                                for (var l = 0; l <= e.results.length - 1; l++) o = e.results[l], s = t.latLng(o.geometry.location), a = t.latLngBounds(t.latLng(o.geometry.viewport.northeast), t.latLng(o.geometry.viewport.southwest)), r[l] = {
                                    name: o.formatted_address,
                                    bbox: a,
                                    center: s
                                };
                            i.call(n, r)
                        })
                    },
                    reverse: function(e, i, n, o) {
                        var s = {
                            latlng: encodeURIComponent(e.lat) + "," + encodeURIComponent(e.lng)
                        };
                        this._key && this._key.length && (s.key = this._key), t.Control.Geocoder.getJSON(this.options.service_url, s, function(e) {
                            var i, s, a, r = [];
                            if (e.results && e.results.length)
                                for (var l = 0; l <= e.results.length - 1; l++) i = e.results[l], s = t.latLng(i.geometry.location), a = t.latLngBounds(t.latLng(i.geometry.viewport.northeast), t.latLng(i.geometry.viewport.southwest)), r[l] = {
                                    name: i.formatted_address,
                                    bbox: a,
                                    center: s
                                };
                            n.call(o, r)
                        })
                    }
                }), t.Control.Geocoder.google = function(e) {
                    return new t.Control.Geocoder.Google(e)
                }, t.Control.Geocoder.Photon = t.Class.extend({
                    options: {
                        serviceUrl: "//photon.komoot.de/api/"
                    },
                    initialize: function(e) {
                        t.setOptions(this, e)
                    },
                    geocode: function(e, i, n) {
                        var o = t.extend({
                            q: e
                        }, this.options.geocodingQueryParams);
                        t.Control.Geocoder.getJSON(this.options.serviceUrl, o, function(e) {
                            var o, s, a, r, l, h, u = [];
                            if (e && e.features)
                                for (o = 0; o < e.features.length; o++) s = e.features[o], a = s.geometry.coordinates, r = t.latLng(a[1], a[0]), l = s.properties.extent, h = l ? t.latLngBounds([l[1], l[0]], [l[3], l[2]]) : t.latLngBounds(r, r), u.push({
                                    name: s.properties.name,
                                    center: r,
                                    bbox: h
                                });
                            i.call(n, u)
                        })
                    },
                    suggest: function(t, e, i) {
                        return this.geocode(t, e, i)
                    },
                    reverse: function(t, e, i) {
                        e.call(i, [])
                    }
                }), t.Control.Geocoder.photon = function(e) {
                    return new t.Control.Geocoder.Photon(e)
                }, t.Control.Geocoder
            })
        }, {
            leaflet: 27
        }],
        14: [function(t, e, i) {
            ! function() {
                "use strict";
                L.Routing = L.Routing || {}, L.Routing.Autocomplete = L.Class.extend({
                    options: {
                        timeout: 500,
                        blurTimeout: 100,
                        noResultsMessage: "No results found."
                    },
                    initialize: function(t, e, i, n) {
                        L.setOptions(this, n), this._elem = t, this._resultFn = n.resultFn ? L.Util.bind(n.resultFn, n.resultContext) : null, this._autocomplete = n.autocompleteFn ? L.Util.bind(n.autocompleteFn, n.autocompleteContext) : null, this._selectFn = L.Util.bind(e, i), this._container = L.DomUtil.create("div", "leaflet-routing-geocoder-result"), this._resultTable = L.DomUtil.create("table", "", this._container), L.DomEvent.addListener(this._elem, "input", this._keyPressed, this), L.DomEvent.addListener(this._elem, "keypress", this._keyPressed, this), L.DomEvent.addListener(this._elem, "keydown", this._keyDown, this), L.DomEvent.addListener(this._elem, "blur", function() {
                            this._isOpen && this.close()
                        }, this)
                    },
                    close: function() {
                        L.DomUtil.removeClass(this._container, "leaflet-routing-geocoder-result-open"), this._isOpen = !1
                    },
                    _open: function() {
                        var t = this._elem.getBoundingClientRect();
                        this._container.parentElement || (this._container.style.left = t.left + window.scrollX + "px", this._container.style.top = t.bottom + window.scrollY + "px", this._container.style.width = t.right - t.left + "px", document.body.appendChild(this._container)), L.DomUtil.addClass(this._container, "leaflet-routing-geocoder-result-open"), this._isOpen = !0
                    },
                    _setResults: function(t) {
                        var e, i, n, o;
                        for (delete this._selection, this._results = t; this._resultTable.firstChild;) this._resultTable.removeChild(this._resultTable.firstChild);
                        for (e = 0; e < t.length; e++) i = L.DomUtil.create("tr", "", this._resultTable), i.setAttribute("data-result-index", e), n = L.DomUtil.create("td", "", i), o = document.createTextNode(t[e].name), n.appendChild(o), L.DomEvent.addListener(n, "mousedown", L.DomEvent.preventDefault), L.DomEvent.addListener(n, "click", this._createClickListener(t[e]));
                        e || (i = L.DomUtil.create("tr", "", this._resultTable), n = L.DomUtil.create("td", "leaflet-routing-geocoder-no-results", i), n.innerHTML = this.options.noResultsMessage), this._open(), t.length > 0 && this._select(1)
                    },
                    _createClickListener: function(t) {
                        var e = this._resultSelected(t);
                        return L.bind(function() {
                            this._elem.blur(), e()
                        }, this)
                    },
                    _resultSelected: function(t) {
                        return L.bind(function() {
                            this.close(), this._elem.value = t.name, this._lastCompletedText = t.name, this._selectFn(t)
                        }, this)
                    },
                    _keyPressed: function(t) {
                        var e;
                        return this._isOpen && 13 === t.keyCode && this._selection ? (e = parseInt(this._selection.getAttribute("data-result-index"), 10), this._resultSelected(this._results[e])(), void L.DomEvent.preventDefault(t)) : 13 === t.keyCode ? void this._complete(this._resultFn, !0) : this._autocomplete && document.activeElement === this._elem ? (this._timer && clearTimeout(this._timer), void(this._timer = setTimeout(L.Util.bind(function() {
                            this._complete(this._autocomplete)
                        }, this), this.options.timeout))) : void this._unselect()
                    },
                    _select: function(t) {
                        var e = this._selection;
                        e && (L.DomUtil.removeClass(e.firstChild, "leaflet-routing-geocoder-selected"), e = e[t > 0 ? "nextSibling" : "previousSibling"]), e || (e = this._resultTable[t > 0 ? "firstChild" : "lastChild"]), e && (L.DomUtil.addClass(e.firstChild, "leaflet-routing-geocoder-selected"), this._selection = e)
                    },
                    _unselect: function() {
                        this._selection && L.DomUtil.removeClass(this._selection.firstChild, "leaflet-routing-geocoder-selected"), delete this._selection
                    },
                    _keyDown: function(t) {
                        if (this._isOpen) switch (t.keyCode) {
                            case 27:
                                return this.close(), void L.DomEvent.preventDefault(t);
                            case 38:
                                return this._select(-1), void L.DomEvent.preventDefault(t);
                            case 40:
                                return this._select(1), void L.DomEvent.preventDefault(t)
                        }
                    },
                    _complete: function(t, e) {
                        function i(t) {
                            this._lastCompletedText = n, e && 1 === t.length ? this._resultSelected(t[0])() : this._setResults(t)
                        }
                        var n = this._elem.value;
                        n && (n !== this._lastCompletedText ? t(n, i, this) : e && i.call(this, this._results))
                    }
                })
            }()
        }, {}],
        15: [function(t, e, i) {
            ! function() {
                "use strict";
                var i = t("leaflet");
                i.Routing = i.Routing || {}, i.extend(i.Routing, t("./L.Routing.Itinerary")), i.extend(i.Routing, t("./L.Routing.Line")), i.extend(i.Routing, t("./L.Routing.Plan")), i.extend(i.Routing, t("./L.Routing.OSRM")), i.Routing.Control = i.Routing.Itinerary.extend({
                    options: {
                        fitSelectedRoutes: "smart",
                        routeLine: function(t, e) {
                            return i.Routing.line(t, e)
                        },
                        autoRoute: !0,
                        routeWhileDragging: !1,
                        routeDragInterval: 500,
                        waypointMode: "connect",
                        useZoomParameter: !1,
                        showAlternatives: !1
                    },
                    initialize: function(t) {
                        i.Util.setOptions(this, t), this._router = this.options.router || new i.Routing.OSRM(t), this._plan = this.options.plan || i.Routing.plan(this.options.waypoints, t), this._requestCount = 0, i.Routing.Itinerary.prototype.initialize.call(this, t), this.on("routeselected", this._routeSelected, this), this._plan.on("waypointschanged", this._onWaypointsChanged, this), t.routeWhileDragging && this._setupRouteDragging(), this.options.autoRoute && this.route()
                    },
                    onAdd: function(t) {
                        var e = i.Routing.Itinerary.prototype.onAdd.call(this, t);
                        return this._map = t, this._map.addLayer(this._plan), this.options.useZoomParameter && this._map.on("zoomend", function() {
                            this.route({
                                callback: i.bind(this._updateLineCallback, this)
                            })
                        }, this), this._plan.options.geocoder && e.insertBefore(this._plan.createGeocoders(), e.firstChild), e
                    },
                    onRemove: function(t) {
                        return this._line && t.removeLayer(this._line), t.removeLayer(this._plan), i.Routing.Itinerary.prototype.onRemove.call(this, t)
                    },
                    getWaypoints: function() {
                        return this._plan.getWaypoints()
                    },
                    setWaypoints: function(t) {
                        return this._plan.setWaypoints(t), this
                    },
                    spliceWaypoints: function() {
                        var t = this._plan.spliceWaypoints.apply(this._plan, arguments);
                        return t
                    },
                    getPlan: function() {
                        return this._plan
                    },
                    getRouter: function() {
                        return this._router
                    },
                    _routeSelected: function(t) {
                        var e = t.route,
                            i = this.options.showAlternatives && t.alternatives,
                            n = this.options.fitSelectedRoutes,
                            o = "smart" === n && !this._waypointsVisible() || "smart" !== n && n;
                        this._updateLines({
                            route: e,
                            alternatives: i
                        }), o && this._map.fitBounds(this._line.getBounds()), "snap" === this.options.waypointMode && (this._plan.off("waypointschanged", this._onWaypointsChanged, this), this.setWaypoints(e.waypoints), this._plan.on("waypointschanged", this._onWaypointsChanged, this))
                    },
                    _waypointsVisible: function() {
                        var t, e, n, o, s, a = this.getWaypoints();
                        try {
                            for (t = this._map.getSize(), o = 0; o < a.length; o++) s = this._map.latLngToLayerPoint(a[o].latLng), e ? e.extend(s) : e = i.bounds([s]);
                            return n = e.getSize(), (n.x > t.x / 5 || n.y > t.y / 5) && this._waypointsInViewport()
                        } catch (r) {
                            return !1
                        }
                    },
                    _waypointsInViewport: function() {
                        var t, e, i = this.getWaypoints();
                        try {
                            t = this._map.getBounds()
                        } catch (n) {
                            return !1
                        }
                        for (e = 0; e < i.length; e++)
                            if (t.contains(i[e].latLng)) return !0;
                        return !1
                    },
                    _updateLines: function(t) {
                        var e = void 0 !== this.options.addWaypoints ? this.options.addWaypoints : !0;
                        this._clearLines(), this._alternatives = [], t.alternatives && t.alternatives.forEach(function(t, e) {
                            this._alternatives[e] = this.options.routeLine(t, i.extend({
                                isAlternative: !0
                            }, this.options.altLineOptions || this.options.lineOptions)), this._alternatives[e].addTo(this._map), this._hookAltEvents(this._alternatives[e])
                        }, this), this._line = this.options.routeLine(t.route, i.extend({
                            addWaypoints: e,
                            extendToWaypoints: "connect" === this.options.waypointMode
                        }, this.options.lineOptions)), this._line.addTo(this._map), this._hookEvents(this._line)
                    },
                    _hookEvents: function(t) {
                        t.on("linetouched", function(t) {
                            this._plan.dragNewWaypoint(t)
                        }, this)
                    },
                    _hookAltEvents: function(t) {
                        t.on("linetouched", function(t) {
                            var e = this._routes.slice(),
                                i = e.splice(t.target._route.routesIndex, 1)[0];
                            this.fire("routeselected", {
                                route: i,
                                alternatives: e
                            })
                        }, this)
                    },
                    _onWaypointsChanged: function(t) {
                        this.options.autoRoute && this.route({}), this._plan.isReady() || (this._clearLines(), this._clearAlts()), this.fire("waypointschanged", {
                            waypoints: t.waypoints
                        })
                    },
                    _setupRouteDragging: function() {
                        var t, e = 0;
                        this._plan.on("waypointdrag", i.bind(function(n) {
                            t = n.waypoints, e || (e = setTimeout(i.bind(function() {
                                this.route({
                                    waypoints: t,
                                    geometryOnly: !0,
                                    callback: i.bind(this._updateLineCallback, this)
                                }), e = void 0
                            }, this), this.options.routeDragInterval))
                        }, this)), this._plan.on("waypointdragend", function() {
                            e && (clearTimeout(e), e = void 0), this.route()
                        }, this)
                    },
                    _updateLineCallback: function(t, e) {
                        t || this._updateLines({
                            route: e[0],
                            alternatives: e.slice(1)
                        })
                    },
                    route: function(t) {
                        var e, i = ++this._requestCount;
                        t = t || {}, this._plan.isReady() && (this.options.useZoomParameter && (t.z = this._map && this._map.getZoom()), e = t && t.waypoints || this._plan.getWaypoints(), this.fire("routingstart", {
                            waypoints: e
                        }), this._router.route(e, t.callback || function(n, o) {
                            if (i === this._requestCount) {
                                if (this._clearLines(), this._clearAlts(), n) return void this.fire("routingerror", {
                                    error: n
                                });
                                if (o.forEach(function(t, e) {
                                        t.routesIndex = e
                                    }), t.geometryOnly) {
                                    var s = o.splice(0, 1)[0];
                                    this._routeSelected({
                                        route: s,
                                        alternatives: o
                                    })
                                } else this.fire("routesfound", {
                                    waypoints: e,
                                    routes: o
                                }), this.setAlternatives(o)
                            }
                        }, this, t))
                    },
                    _clearLines: function() {
                        if (this._line && (this._map.removeLayer(this._line), delete this._line), this._alternatives && this._alternatives.length) {
                            for (var t in this._alternatives) this._map.removeLayer(this._alternatives[t]);
                            this._alternatives = []
                        }
                    }
                }), i.Routing.control = function(t) {
                    return new i.Routing.Control(t)
                }, e.exports = i.Routing
            }()
        }, {
            "./L.Routing.Itinerary": 18,
            "./L.Routing.Line": 20,
            "./L.Routing.OSRM": 22,
            "./L.Routing.Plan": 23,
            leaflet: 27
        }],
        16: [function(t, e, i) {
            ! function() {
                "use strict";
                var i = t("leaflet");
                i.Routing = i.Routing || {}, i.extend(i.Routing, t("./L.Routing.Localization")), i.Routing.Formatter = i.Class.extend({
                    options: {
                        units: "metric",
                        unitNames: {
                            meters: "m",
                            kilometers: "km",
                            yards: "yd",
                            miles: "mi",
                            hours: "h",
                            minutes: "mín",
                            seconds: "s"
                        },
                        language: "en",
                        roundingSensitivity: 1,
                        distanceTemplate: "{value} {unit}"
                    },
                    initialize: function(t) {
                        i.setOptions(this, t)
                    },
                    formatDistance: function(t, e) {
                        var n, o, s, a, r = this.options.unitNames,
                            l = 0 >= e,
                            h = l ? function(t) {
                                return t
                            } : i.bind(this._round, this);
                        return "imperial" === this.options.units ? (o = t / .9144, s = o >= 1e3 ? {
                            value: h(t / 1609.344, e),
                            unit: r.miles
                        } : {
                            value: h(o, e),
                            unit: r.yards
                        }) : (n = h(t, e), s = {
                            value: n >= 1e3 ? n / 1e3 : n,
                            unit: n >= 1e3 ? r.kilometers : r.meters
                        }), l && (a = Math.pow(10, -e), s.value = Math.round(s.value * a) / a), i.Util.template(this.options.distanceTemplate, s)
                    },
                    _round: function(t, e) {
                        var i = e || this.options.roundingSensitivity,
                            n = Math.pow(10, (Math.floor(t / i) + "").length - 1),
                            o = Math.floor(t / n),
                            s = o > 5 ? n : n / 2;
                        return Math.round(t / s) * s
                    },
                    formatTime: function(t) {
                        return t > 86400 ? Math.round(t / 3600) + " h" : t > 3600 ? Math.floor(t / 3600) + " h " + Math.round(t % 3600 / 60) + " min" : t > 300 ? Math.round(t / 60) + " min" : t > 60 ? Math.floor(t / 60) + " min" + (t % 60 !== 0 ? " " + t % 60 + " s" : "") : t + " s"
                    },
                    formatInstruction: function(t, e) {
                        return void 0 === t.text ? i.Util.template(this._getInstructionTemplate(t, e), i.extend({
                            exitStr: t.exit ? i.Routing.Localization[this.options.language].formatOrder(t.exit) : "",
                            dir: i.Routing.Localization[this.options.language].directions[t.direction]
                        }, t)) : t.text
                    },
                    getIconName: function(t, e) {
                        switch (t.type) {
                            case "Straight":
                                return 0 === e ? "depart" : "continue";
                            case "SlightRight":
                                return "bear-right";
                            case "Right":
                                return "turn-right";
                            case "SharpRight":
                                return "sharp-right";
                            case "TurnAround":
                                return "u-turn";
                            case "SharpLeft":
                                return "sharp-left";
                            case "Left":
                                return "turn-left";
                            case "SlightLeft":
                                return "bear-left";
                            case "WaypointReached":
                                return "via";
                            case "Roundabout":
                                return "enter-roundabout";
                            case "DestinationReached":
                                return "arrive"
                        }
                    },
                    _getInstructionTemplate: function(t, e) {
                        var n = "Straight" === t.type ? 0 === e ? "Head" : "Continue" : t.type,
                            o = i.Routing.Localization[this.options.language].instructions[n];
                        return o[0] + (o.length > 1 && t.road ? o[1] : "")
                    }
                }), e.exports = i.Routing
            }()
        }, {
            "./L.Routing.Localization": 21,
            leaflet: 27
        }],
        17: [function(t, e, i) {
            ! function() {
                "use strict";

                function i(t) {
                    t.setSelectionRange ? t.setSelectionRange(0, 9999) : t.select()
                }
                var n = t("leaflet");
                n.Routing = n.Routing || {}, n.extend(n.Routing, t("./L.Routing.Autocomplete")), n.Routing.GeocoderElement = n.Class.extend({
                    includes: n.Mixin.Events,
                    options: {
                        createGeocoder: function(t, e, i) {
                            var o = n.DomUtil.create("div", "leaflet-routing-geocoder"),
                                s = n.DomUtil.create("input", "", o),
                                a = i.addWaypoints ? n.DomUtil.create("span", "leaflet-routing-remove-waypoint", o) : void 0;
                            return s.disabled = !i.addWaypoints, {
                                container: o,
                                input: s,
                                closeButton: a
                            }
                        },
                        geocoderPlaceholder: function(t, e, i) {
                            var o = n.Routing.Localization[i.options.language].ui;
                            return 0 === t ? o.startPlaceholder : e - 1 > t ? n.Util.template(o.viaPlaceholder, {
                                viaNumber: t
                            }) : o.endPlaceholder
                        },
                        geocoderClass: function() {
                            return ""
                        },
                        waypointNameFallback: function(t) {
                            var e = t.lat < 0 ? "S" : "N",
                                i = t.lng < 0 ? "W" : "E",
                                n = (Math.round(1e4 * Math.abs(t.lat)) / 1e4).toString(),
                                o = (Math.round(1e4 * Math.abs(t.lng)) / 1e4).toString();
                            return e + n + ", " + i + o
                        },
                        maxGeocoderTolerance: 200,
                        autocompleteOptions: {},
                        language: "en"
                    },
                    initialize: function(t, e, o, s) {
                        n.setOptions(this, s);
                        var a = this.options.createGeocoder(e, o, this.options),
                            r = a.closeButton,
                            l = a.input;
                        l.setAttribute("placeholder", this.options.geocoderPlaceholder(e, o, this)), l.className = this.options.geocoderClass(e, o), this._element = a, this._waypoint = t, this.update(), l.value = t.name, n.DomEvent.addListener(l, "click", function() {
                            i(this)
                        }, l), r && n.DomEvent.addListener(r, "click", function() {
                            this.fire("delete", {
                                waypoint: this._waypoint
                            })
                        }, this), new n.Routing.Autocomplete(l, function(e) {
                            l.value = e.name, t.name = e.name, t.latLng = e.center, this.fire("geocoded", {
                                waypoint: t,
                                value: e
                            })
                        }, this, n.extend({
                            resultFn: this.options.geocoder.geocode,
                            resultContext: this.options.geocoder,
                            autocompleteFn: this.options.geocoder.suggest,
                            autocompleteContext: this.options.geocoder
                        }, this.options.autocompleteOptions))
                    },
                    getContainer: function() {
                        return this._element.container
                    },
                    setValue: function(t) {
                        this._element.input.value = t
                    },
                    update: function(t) {
                        var e, i = this._waypoint;
                        i.name = i.name || "", !i.latLng || !t && i.name || (e = this.options.waypointNameFallback(i.latLng), this.options.geocoder && this.options.geocoder.reverse ? this.options.geocoder.reverse(i.latLng, 67108864, function(t) {
                            t.length > 0 && t[0].center.distanceTo(i.latLng) < this.options.maxGeocoderTolerance ? i.name = t[0].name : i.name = e, this._update()
                        }, this) : (i.name = e, this._update()))
                    },
                    focus: function() {
                        var t = this._element.input;
                        t.focus(), i(t)
                    },
                    _update: function() {
                        var t = this._waypoint,
                            e = t && t.name ? t.name : "";
                        this.setValue(e), this.fire("reversegeocoded", {
                            waypoint: t,
                            value: e
                        })
                    }
                }), n.Routing.geocoderElement = function(t, e, i, o) {
                    return new n.Routing.GeocoderElement(t, e, i, o)
                }, e.exports = n.Routing
            }()
        }, {
            "./L.Routing.Autocomplete": 14,
            leaflet: 27
        }],
        18: [function(t, e, i) {
            ! function() {
                "use strict";
                var i = t("leaflet");
                i.Routing = i.Routing || {}, i.extend(i.Routing, t("./L.Routing.Formatter")), i.extend(i.Routing, t("./L.Routing.ItineraryBuilder")), i.Routing.Itinerary = i.Control.extend({
                    includes: i.Mixin.Events,
                    options: {
                        pointMarkerStyle: {
                            radius: 5,
                            color: "#03f",
                            fillColor: "white",
                            opacity: 1,
                            fillOpacity: .7
                        },
                        summaryTemplate: "<h2>{name}</h2><h3>{distance}, {time}</h3>",
                        timeTemplate: "{time}",
                        containerClassName: "",
                        alternativeClassName: "",
                        minimizedClassName: "",
                        itineraryClassName: "",
                        totalDistanceRoundingSensitivity: -1,
                        show: !0,
                        collapsible: void 0,
                        collapseBtn: function(t) {
                            var e = i.DomUtil.create("span", t.options.collapseBtnClass);
                            i.DomEvent.on(e, "click", t._toggle, t), t._container.insertBefore(e, t._container.firstChild)
                        },
                        collapseBtnClass: "leaflet-routing-collapse-btn"
                    },
                    initialize: function(t) {
                        i.setOptions(this, t), this._formatter = this.options.formatter || new i.Routing.Formatter(this.options), this._itineraryBuilder = this.options.itineraryBuilder || new i.Routing.ItineraryBuilder({
                            containerClassName: this.options.itineraryClassName
                        })
                    },
                    onAdd: function(t) {
                        var e = this.options.collapsible;
                        return e = e || void 0 === e && t.getSize().x <= 640, this._container = i.DomUtil.create("div", "leaflet-routing-container leaflet-bar " + (this.options.show ? "" : "leaflet-routing-container-hide ") + (e ? "leaflet-routing-collapsible " : "") + this.options.containerClassName), this._altContainer = this.createAlternativesContainer(), this._container.appendChild(this._altContainer), i.DomEvent.disableClickPropagation(this._container), i.DomEvent.addListener(this._container, "mousewheel", function(t) {
                            i.DomEvent.stopPropagation(t)
                        }), e && this.options.collapseBtn(this), this._container
                    },
                    onRemove: function() {},
                    createAlternativesContainer: function() {
                        return i.DomUtil.create("div", "leaflet-routing-alternatives-container")
                    },
                    setAlternatives: function(t) {
                        var e, i, n;
                        for (this._clearAlts(), this._routes = t, e = 0; e < this._routes.length; e++) i = this._routes[e], n = this._createAlternative(i, e), this._altContainer.appendChild(n), this._altElements.push(n);
                        return this._selectRoute({
                            route: this._routes[0],
                            alternatives: this._routes.slice(1)
                        }), this
                    },
                    show: function() {
                        i.DomUtil.removeClass(this._container, "leaflet-routing-container-hide")
                    },
                    hide: function() {
                        i.DomUtil.addClass(this._container, "leaflet-routing-container-hide")
                    },
                    _toggle: function() {
                        var t = i.DomUtil.hasClass(this._container, "leaflet-routing-container-hide");
                        this[t ? "show" : "hide"]()
                    },
                    _createAlternative: function(t, e) {
                        var n = i.DomUtil.create("div", "leaflet-routing-alt " + this.options.alternativeClassName + (e > 0 ? " leaflet-routing-alt-minimized " + this.options.minimizedClassName : "")),
                            o = this.options.summaryTemplate,
                            s = i.extend({
                                name: t.name,
                                distance: this._formatter.formatDistance(t.summary.totalDistance, this.options.totalDistanceRoundingSensitivity),
                                time: this._formatter.formatTime(t.summary.totalTime)
                            }, t);
                        return n.innerHTML = "function" == typeof o ? o(s) : i.Util.template(o, s), i.DomEvent.addListener(n, "click", this._onAltClicked, this), this.on("routeselected", this._selectAlt, this), n.appendChild(this._createItineraryContainer(t)), n
                    },
                    _clearAlts: function() {
                        for (var t = this._altContainer; t && t.firstChild;) t.removeChild(t.firstChild);
                        this._altElements = []
                    },
                    _createItineraryContainer: function(t) {
                        var e, i, n, o, s, a, r = this._itineraryBuilder.createContainer(),
                            l = this._itineraryBuilder.createStepsContainer();
                        for (r.appendChild(l), e = 0; e < t.instructions.length; e++) i = t.instructions[e], s = this._formatter.formatInstruction(i, e), o = this._formatter.formatDistance(i.distance), a = this._formatter.getIconName(i, e), n = this._itineraryBuilder.createStep(s, o, a, l), this._addRowListeners(n, t.coordinates[i.index]);
                        return r
                    },
                    _addRowListeners: function(t, e) {
                        i.DomEvent.addListener(t, "mouseover", function() {
                            this._marker = i.circleMarker(e, this.options.pointMarkerStyle).addTo(this._map)
                        }, this), i.DomEvent.addListener(t, "mouseout", function() {
                            this._marker && (this._map.removeLayer(this._marker), delete this._marker)
                        }, this), i.DomEvent.addListener(t, "click", function(t) {
                            this._map.panTo(e), i.DomEvent.stopPropagation(t)
                        }, this)
                    },
                    _onAltClicked: function(t) {
                        for (var e = t.target || window.event.srcElement; !i.DomUtil.hasClass(e, "leaflet-routing-alt");) e = e.parentElement;
                        var n = this._altElements.indexOf(e),
                            o = this._routes.slice(),
                            s = o.splice(n, 1)[0];
                        this.fire("routeselected", {
                            route: s,
                            alternatives: o
                        })
                    },
                    _selectAlt: function(t) {
                        var e, n, o, s;
                        if (e = this._altElements[t.route.routesIndex], i.DomUtil.hasClass(e, "leaflet-routing-alt-minimized"))
                            for (n = 0; n < this._altElements.length; n++) o = this._altElements[n], s = n === t.route.routesIndex ? "removeClass" : "addClass", i.DomUtil[s](o, "leaflet-routing-alt-minimized"), this.options.minimizedClassName && i.DomUtil[s](o, this.options.minimizedClassName), n !== t.route.routesIndex && (o.scrollTop = 0);
                        i.DomEvent.stop(t)
                    },
                    _selectRoute: function(t) {
                        this._marker && (this._map.removeLayer(this._marker), delete this._marker), this.fire("routeselected", t)
                    }
                }), i.Routing.itinerary = function(t) {
                    return new i.Routing.Itinerary(t)
                }, e.exports = i.Routing
            }()
        }, {
            "./L.Routing.Formatter": 16,
            "./L.Routing.ItineraryBuilder": 19,
            leaflet: 27
        }],
        19: [function(t, e, i) {
            ! function() {
                "use strict";
                var i = t("leaflet");
                i.Routing = i.Routing || {}, i.Routing.ItineraryBuilder = i.Class.extend({
                    options: {
                        containerClassName: ""
                    },
                    initialize: function(t) {
                        i.setOptions(this, t)
                    },
                    createContainer: function(t) {
                        var e = i.DomUtil.create("table", t || ""),
                            n = i.DomUtil.create("colgroup", "", e);
                        return i.DomUtil.create("col", "leaflet-routing-instruction-icon", n), i.DomUtil.create("col", "leaflet-routing-instruction-text", n), i.DomUtil.create("col", "leaflet-routing-instruction-distance", n), e
                    },
                    createStepsContainer: function() {
                        return i.DomUtil.create("tbody", "")
                    },
                    createStep: function(t, e, n, o) {
                        var s, a, r = i.DomUtil.create("tr", "", o);
                        return a = i.DomUtil.create("td", "", r), s = i.DomUtil.create("span", "leaflet-routing-icon leaflet-routing-icon-" + n, a), a.appendChild(s), a = i.DomUtil.create("td", "", r), a.appendChild(document.createTextNode(t)), a = i.DomUtil.create("td", "", r), a.appendChild(document.createTextNode(e)), r
                    }
                }), e.exports = i.Routing
            }()
        }, {
            leaflet: 27
        }],
        20: [function(t, e, i) {
            ! function() {
                "use strict";
                var i = t("leaflet");
                i.Routing = i.Routing || {}, i.Routing.Line = i.LayerGroup.extend({
                    includes: i.Mixin.Events,
                    options: {
                        styles: [{
                            color: "black",
                            opacity: .15,
                            weight: 9
                        }, {
                            color: "white",
                            opacity: .8,
                            weight: 6
                        }, {
                            color: "red",
                            opacity: 1,
                            weight: 2
                        }],
                        missingRouteStyles: [{
                            color: "black",
                            opacity: .15,
                            weight: 7
                        }, {
                            color: "white",
                            opacity: .6,
                            weight: 4
                        }, {
                            color: "gray",
                            opacity: .8,
                            weight: 2,
                            dashArray: "7,12"
                        }],
                        addWaypoints: !0,
                        extendToWaypoints: !0,
                        missingRouteTolerance: 10
                    },
                    initialize: function(t, e) {
                        i.setOptions(this, e), i.LayerGroup.prototype.initialize.call(this, e), this._route = t, this.options.extendToWaypoints && this._extendToWaypoints(), this._addSegment(t.coordinates, this.options.styles, this.options.addWaypoints)
                    },
                    addTo: function(t) {
                        return t.addLayer(this), this
                    },
                    getBounds: function() {
                        return i.latLngBounds(this._route.coordinates)
                    },
                    _findWaypointIndices: function() {
                        var t, e = this._route.inputWaypoints,
                            i = [];
                        for (t = 0; t < e.length; t++) i.push(this._findClosestRoutePoint(e[t].latLng));
                        return i
                    },
                    _findClosestRoutePoint: function(t) {
                        var e, i, n, o = Number.MAX_VALUE;
                        for (i = this._route.coordinates.length - 1; i >= 0; i--) n = t.distanceTo(this._route.coordinates[i]), o > n && (e = i, o = n);
                        return e
                    },
                    _extendToWaypoints: function() {
                        var t, e, n, o = this._route.inputWaypoints,
                            s = this._getWaypointIndices();
                        for (t = 0; t < o.length; t++) e = o[t].latLng, n = i.latLng(this._route.coordinates[s[t]]), e.distanceTo(n) > this.options.missingRouteTolerance && this._addSegment([e, n], this.options.missingRouteStyles)
                    },
                    _addSegment: function(t, e, n) {
                        var o, s;
                        for (o = 0; o < e.length; o++) s = i.polyline(t, e[o]), this.addLayer(s), n && s.on("mousedown", this._onLineTouched, this)
                    },
                    _findNearestWpBefore: function(t) {
                        for (var e = this._getWaypointIndices(), i = e.length - 1; i >= 0 && e[i] > t;) i--;
                        return i
                    },
                    _onLineTouched: function(t) {
                        var e = this._findNearestWpBefore(this._findClosestRoutePoint(t.latlng));
                        this.fire("linetouched", {
                            afterIndex: e,
                            latlng: t.latlng
                        })
                    },
                    _getWaypointIndices: function() {
                        return this._wpIndices || (this._wpIndices = this._route.waypointIndices || this._findWaypointIndices()), this._wpIndices
                    }
                }), i.Routing.line = function(t, e) {
                    return new i.Routing.Line(t, e)
                }, e.exports = i.Routing
            }()
        }, {
            leaflet: 27
        }],
        21: [function(t, e, i) {
            ! function() {
                "use strict";
                L.Routing = L.Routing || {}, L.Routing.Localization = {
                    en: {
                        directions: {
                            N: "north",
                            NE: "northeast",
                            E: "east",
                            SE: "southeast",
                            S: "south",
                            SW: "southwest",
                            W: "west",
                            NW: "northwest"
                        },
                        instructions: {
                            Head: ["Head {dir}", " on {road}"],
                            Continue: ["Continue {dir}", " on {road}"],
                            SlightRight: ["Slight right", " onto {road}"],
                            Right: ["Right", " onto {road}"],
                            SharpRight: ["Sharp right", " onto {road}"],
                            TurnAround: ["Turn around"],
                            SharpLeft: ["Sharp left", " onto {road}"],
                            Left: ["Left", " onto {road}"],
                            SlightLeft: ["Slight left", " onto {road}"],
                            WaypointReached: ["Waypoint reached"],
                            Roundabout: ["Take the {exitStr} exit in the roundabout", " onto {road}"],
                            DestinationReached: ["Destination reached"]
                        },
                        formatOrder: function(t) {
                            var e = t % 10 - 1,
                                i = ["st", "nd", "rd"];
                            return i[e] ? t + i[e] : t + "th"
                        },
                        ui: {
                            startPlaceholder: "Start",
                            viaPlaceholder: "Via {viaNumber}",
                            endPlaceholder: "End"
                        }
                    },
                    de: {
                        directions: {
                            N: "Norden",
                            NE: "Nordosten",
                            E: "Osten",
                            SE: "Südosten",
                            S: "Süden",
                            SW: "Südwesten",
                            W: "Westen",
                            NW: "Nordwesten"
                        },
                        instructions: {
                            Head: ["Richtung {dir}", " auf {road}"],
                            Continue: ["Geradeaus Richtung {dir}", " auf {road}"],
                            SlightRight: ["Leicht rechts abbiegen", " auf {road}"],
                            Right: ["Rechts abbiegen", " auf {road}"],
                            SharpRight: ["Scharf rechts abbiegen", " auf {road}"],
                            TurnAround: ["Wenden"],
                            SharpLeft: ["Scharf links abbiegen", " auf {road}"],
                            Left: ["Links abbiegen", " auf {road}"],
                            SlightLeft: ["Leicht links abbiegen", " auf {road}"],
                            WaypointReached: ["Zwischenhalt erreicht"],
                            Roundabout: ["Nehmen Sie die {exitStr} Ausfahrt im Kreisverkehr", " auf {road}"],
                            DestinationReached: ["Sie haben ihr Ziel erreicht"]
                        },
                        formatOrder: function(t) {
                            return t + "."
                        },
                        ui: {
                            startPlaceholder: "Start",
                            viaPlaceholder: "Via {viaNumber}",
                            endPlaceholder: "Ziel"
                        }
                    },
                    sv: {
                        directions: {
                            N: "norr",
                            NE: "nordost",
                            E: "öst",
                            SE: "sydost",
                            S: "syd",
                            SW: "sydväst",
                            W: "väst",
                            NW: "nordväst"
                        },
                        instructions: {
                            Head: ["Åk åt {dir}", " på {road}"],
                            Continue: ["Fortsätt {dir}", " på {road}"],
                            SlightRight: ["Svagt höger", " på {road}"],
                            Right: ["Sväng höger", " på {road}"],
                            SharpRight: ["Skarpt höger", " på {road}"],
                            TurnAround: ["Vänd"],
                            SharpLeft: ["Skarpt vänster", " på {road}"],
                            Left: ["Sväng vänster", " på {road}"],
                            SlightLeft: ["Svagt vänster", " på {road}"],
                            WaypointReached: ["Viapunkt nådd"],
                            Roundabout: ["Tag {exitStr} avfarten i rondellen", " till {road}"],
                            DestinationReached: ["Framme vid resans mål"]
                        },
                        formatOrder: function(t) {
                            return ["första", "andra", "tredje", "fjärde", "femte", "sjätte", "sjunde", "åttonde", "nionde", "tionde"][t - 1]
                        },
                        ui: {
                            startPlaceholder: "Från",
                            viaPlaceholder: "Via {viaNumber}",
                            endPlaceholder: "Till"
                        }
                    },
                    sp: {
                        directions: {
                            N: "norte",
                            NE: "noreste",
                            E: "este",
                            SE: "sureste",
                            S: "sur",
                            SW: "suroeste",
                            W: "oeste",
                            NW: "noroeste"
                        },
                        instructions: {
                            Head: ["Derecho {dir}", " sobre {road}"],
                            Continue: ["Continuar {dir}", " en {road}"],
                            SlightRight: ["Leve giro a la derecha", " sobre {road}"],
                            Right: ["Derecha", " sobre {road}"],
                            SharpRight: ["Giro pronunciado a la derecha", " sobre {road}"],
                            TurnAround: ["Dar vuelta"],
                            SharpLeft: ["Giro pronunciado a la izquierda", " sobre {road}"],
                            Left: ["Izquierda", " en {road}"],
                            SlightLeft: ["Leve giro a la izquierda", " en {road}"],
                            WaypointReached: ["Llegó a un punto del camino"],
                            Roundabout: ["Tomar {exitStr} salida en la rotonda", " en {road}"],
                            DestinationReached: ["Llegada a destino"]
                        },
                        formatOrder: function(t) {
                            return t + "º"
                        },
                        ui: {
                            startPlaceholder: "Inicio",
                            viaPlaceholder: "Via {viaNumber}",
                            endPlaceholder: "Destino"
                        }
                    },
                    nl: {
                        directions: {
                            N: "noordelijke",
                            NE: "noordoostelijke",
                            E: "oostelijke",
                            SE: "zuidoostelijke",
                            S: "zuidelijke",
                            SW: "zuidewestelijke",
                            W: "westelijke",
                            NW: "noordwestelijke"
                        },
                        instructions: {
                            Head: ["Vertrek in {dir} richting", " de {road} op"],
                            Continue: ["Ga in {dir} richting", " de {road} op"],
                            SlightRight: ["Volg de weg naar rechts", " de {road} op"],
                            Right: ["Ga rechtsaf", " de {road} op"],
                            SharpRight: ["Ga scherpe bocht naar rechts", " de {road} op"],
                            TurnAround: ["Keer om"],
                            SharpLeft: ["Ga scherpe bocht naar links", " de {road} op"],
                            Left: ["Ga linksaf", " de {road} op"],
                            SlightLeft: ["Volg de weg naar links", " de {road} op"],
                            WaypointReached: ["Aangekomen bij tussenpunt"],
                            Roundabout: ["Neem de {exitStr} afslag op de rotonde", " de {road} op"],
                            DestinationReached: ["Aangekomen op eindpunt"]
                        },
                        formatOrder: function(t) {
                            return 1 === t || t >= 20 ? t + "ste" : t + "de"
                        },
                        ui: {
                            startPlaceholder: "Vertrekpunt",
                            viaPlaceholder: "Via {viaNumber}",
                            endPlaceholder: "Bestemming"
                        }
                    },
                    fr: {
                        directions: {
                            N: "nord",
                            NE: "nord-est",
                            E: "est",
                            SE: "sud-est",
                            S: "sud",
                            SW: "sud-ouest",
                            W: "ouest",
                            NW: "nord-ouest"
                        },
                        instructions: {
                            Head: ["Tout droit au {dir}", " sur {road}"],
                            Continue: ["Continuer au {dir}", " sur {road}"],
                            SlightRight: ["Légèrement à droite", " sur {road}"],
                            Right: ["A droite", " sur {road}"],
                            SharpRight: ["Complètement à droite", " sur {road}"],
                            TurnAround: ["Faire demi-tour"],
                            SharpLeft: ["Complètement à gauche", " sur {road}"],
                            Left: ["A gauche", " sur {road}"],
                            SlightLeft: ["Légèrement à gauche", " sur {road}"],
                            WaypointReached: ["Point d'étape atteint"],
                            Roundabout: ["Au rond-point, prenez la {exitStr} sortie", " sur {road}"],
                            DestinationReached: ["Destination atteinte"]
                        },
                        formatOrder: function(t) {
                            return t + "º"
                        },
                        ui: {
                            startPlaceholder: "Départ",
                            viaPlaceholder: "Intermédiaire {viaNumber}",
                            endPlaceholder: "Arrivée"
                        }
                    },
                    it: {
                        directions: {
                            N: "nord",
                            NE: "nord-est",
                            E: "est",
                            SE: "sud-est",
                            S: "sud",
                            SW: "sud-ovest",
                            W: "ovest",
                            NW: "nord-ovest"
                        },
                        instructions: {
                            Head: ["Dritto verso {dir}", " su {road}"],
                            Continue: ["Continuare verso {dir}", " su {road}"],
                            SlightRight: ["Mantenere la destra", " su {road}"],
                            Right: ["A destra", " su {road}"],
                            SharpRight: ["Strettamente a destra", " su {road}"],
                            TurnAround: ["Fare inversione di marcia"],
                            SharpLeft: ["Strettamente a sinistra", " su {road}"],
                            Left: ["A sinistra", " sur {road}"],
                            SlightLeft: ["Mantenere la sinistra", " su {road}"],
                            WaypointReached: ["Punto di passaggio raggiunto"],
                            Roundabout: ["Alla rotonda, prendere la {exitStr} uscita"],
                            DestinationReached: ["Destinazione raggiunta"]
                        },
                        formatOrder: function(t) {
                            return t + "º"
                        },
                        ui: {
                            startPlaceholder: "Partenza",
                            viaPlaceholder: "Intermedia {viaNumber}",
                            endPlaceholder: "Destinazione"
                        }
                    },
                    pt: {
                        directions: {
                            N: "norte",
                            NE: "nordeste",
                            E: "leste",
                            SE: "sudeste",
                            S: "sul",
                            SW: "sudoeste",
                            W: "oeste",
                            NW: "noroeste"
                        },
                        instructions: {
                            Head: ["Siga {dir}", " na {road}"],
                            Continue: ["Continue {dir}", " na {road}"],
                            SlightRight: ["Curva ligeira a direita", " na {road}"],
                            Right: ["Curva a direita", " na {road}"],
                            SharpRight: ["Curva fechada a direita", " na {road}"],
                            TurnAround: ["Retorne"],
                            SharpLeft: ["Curva fechada a esquerda", " na {road}"],
                            Left: ["Curva a esquerda", " na {road}"],
                            SlightLeft: ["Curva ligueira a esquerda", " na {road}"],
                            WaypointReached: ["Ponto de interesse atingido"],
                            Roundabout: ["Pegue a {exitStr} saída na rotatória", " na {road}"],
                            DestinationReached: ["Destino atingido"]
                        },
                        formatOrder: function(t) {
                            return t + "º"
                        },
                        ui: {
                            startPlaceholder: "Origem",
                            viaPlaceholder: "Intermédio {viaNumber}",
                            endPlaceholder: "Destino"
                        }
                    }
                }, e.exports = L.Routing
            }()
        }, {}],
        22: [function(t, e, i) {
            ! function() {
                "use strict";
                var i = t("leaflet"),
                    n = t("corslite"),
                    o = t("polyline");
                i.Routing = i.Routing || {}, i.extend(i.Routing, t("./L.Routing.Waypoint")), i.Routing.OSRM = i.Class.extend({
                    options: {
                        serviceUrl: "//router.project-osrm.org/viaroute",
                        timeout: 3e4,
                        routingOptions: {}
                    },
                    initialize: function(t) {
                        i.Util.setOptions(this, t), this._hints = {
                            locations: {}
                        }
                    },
                    route: function(t, e, o, s) {
                        var a, r, l, h, u = !1,
                            c = [];
                        for (a = this.buildRouteUrl(t, i.extend({}, this.options.routingOptions, s)), r = setTimeout(function() {
                                u = !0, e.call(o || e, {
                                    status: -1,
                                    message: "OSRM request timed out."
                                })
                            }, this.options.timeout), h = 0; h < t.length; h++) l = t[h], c.push(new i.Routing.Waypoint(l.latLng, l.name, l.options));
                        return n(a, i.bind(function(t, i) {
                            var n;
                            clearTimeout(r), u || (t ? e.call(o || e, {
                                status: -1,
                                message: "HTTP request failed: " + t
                            }) : (n = JSON.parse(i.responseText), this._routeDone(n, c, e, o)))
                        }, this)), this
                    },
                    _routeDone: function(t, e, i, n) {
                        var o, s, a, r;
                        if (n = n || i, 0 !== t.status) return void i.call(n, {
                            status: t.status,
                            message: t.status_message
                        });
                        if (o = this._decodePolyline(t.route_geometry), a = this._toWaypoints(e, t.via_points), s = [{
                                name: this._createName(t.route_name),
                                coordinates: o,
                                instructions: t.route_instructions ? this._convertInstructions(t.route_instructions) : [],
                                summary: t.route_summary ? this._convertSummary(t.route_summary) : [],
                                inputWaypoints: e,
                                waypoints: a,
                                waypointIndices: this._clampIndices(t.via_indices, o)
                            }], t.alternative_geometries)
                            for (r = 0; r < t.alternative_geometries.length; r++) o = this._decodePolyline(t.alternative_geometries[r]), s.push({
                                name: this._createName(t.alternative_names[r]),
                                coordinates: o,
                                instructions: t.alternative_instructions[r] ? this._convertInstructions(t.alternative_instructions[r]) : [],
                                summary: t.alternative_summaries[r] ? this._convertSummary(t.alternative_summaries[r]) : [],
                                inputWaypoints: e,
                                waypoints: a,
                                waypointIndices: this._clampIndices(1 === t.alternative_geometries.length ? t.alternative_indices : t.alternative_indices[r], o)
                            });
                        t.hint_data && this._saveHintData(t.hint_data, e), i.call(n, null, s)
                    },
                    _decodePolyline: function(t) {
                        var e, n = o.decode(t, 6),
                            s = new Array(n.length);
                        for (e = n.length - 1; e >= 0; e--) s[e] = i.latLng(n[e]);
                        return s
                    },
                    _toWaypoints: function(t, e) {
                        var n, o = [];
                        for (n = 0; n < e.length; n++) o.push(i.Routing.waypoint(i.latLng(e[n]), t[n].name, t[n].options));
                        return o
                    },
                    _createName: function(t) {
                        var e, i = "";
                        for (e = 0; e < t.length; e++) t[e] && (i && (i += ", "), i += t[e].charAt(0).toUpperCase() + t[e].slice(1));
                        return i
                    },
                    buildRouteUrl: function(t, e) {
                        for (var i, n, o, s, a, r = [], l = 0; l < t.length; l++) i = t[l], s = this._locationKey(i.latLng), r.push("loc=" + s), a = this._hints.locations[s], a && r.push("hint=" + a), i.options && i.options.allowUTurn && r.push("u=true");
                        return o = n = !(e && e.geometryOnly), this.options.serviceUrl + "?instructions=" + n.toString() + "&alt=" + o.toString() + "&" + (e.z ? "z=" + e.z + "&" : "") + r.join("&") + (void 0 !== this._hints.checksum ? "&checksum=" + this._hints.checksum : "") + (e.fileformat ? "&output=" + e.fileformat : "") + (e.allowUTurns ? "&uturns=" + e.allowUTurns : "")
                    },
                    _locationKey: function(t) {
                        return t.lat + "," + t.lng
                    },
                    _saveHintData: function(t, e) {
                        var i;
                        this._hints = {
                            checksum: t.checksum,
                            locations: {}
                        };
                        for (var n = t.locations.length - 1; n >= 0; n--) i = e[n].latLng, this._hints.locations[this._locationKey(i)] = t.locations[n]
                    },
                    _convertSummary: function(t) {
                        return {
                            totalDistance: t.total_distance,
                            totalTime: t.total_time
                        }
                    },
                    _convertInstructions: function(t) {
                        var e, i, n, o, s = [];
                        for (e = 0; e < t.length; e++) i = t[e], n = this._drivingDirectionType(i[0]), o = i[0].split("-"), n && s.push({
                            type: n,
                            distance: i[2],
                            time: i[4],
                            road: i[1],
                            direction: i[6],
                            exit: o.length > 1 ? o[1] : void 0,
                            index: i[3]
                        });
                        return s
                    },
                    _drivingDirectionType: function(t) {
                        switch (parseInt(t, 10)) {
                            case 1:
                                return "Straight";
                            case 2:
                                return "SlightRight";
                            case 3:
                                return "Right";
                            case 4:
                                return "SharpRight";
                            case 5:
                                return "TurnAround";
                            case 6:
                                return "SharpLeft";
                            case 7:
                                return "Left";
                            case 8:
                                return "SlightLeft";
                            case 9:
                                return "WaypointReached";
                            case 10:
                                return "Straight";
                            case 11:
                            case 12:
                                return "Roundabout";
                            case 15:
                                return "DestinationReached";
                            default:
                                return null
                        }
                    },
                    _clampIndices: function(t, e) {
                        var i, n = e.length - 1;
                        for (i = 0; i < t.length; i++) t[i] = Math.min(n, Math.max(t[i], 0));
                        return t
                    }
                }), i.Routing.osrm = function(t) {
                    return new i.Routing.OSRM(t)
                }, e.exports = i.Routing
            }()
        }, {
            "./L.Routing.Waypoint": 24,
            corslite: 8,
            leaflet: 27,
            polyline: 31
        }],
        23: [function(t, e, i) {
            ! function() {
                "use strict";
                var i = t("leaflet");
                i.Routing = i.Routing || {}, i.extend(i.Routing, t("./L.Routing.GeocoderElement")), i.extend(i.Routing, t("./L.Routing.Waypoint")), i.Routing.Plan = i.Class.extend({
                    includes: i.Mixin.Events,
                    options: {
                        dragStyles: [{
                            color: "black",
                            opacity: .15,
                            weight: 9
                        }, {
                            color: "white",
                            opacity: .8,
                            weight: 6
                        }, {
                            color: "red",
                            opacity: 1,
                            weight: 2,
                            dashArray: "7,12"
                        }],
                        draggableWaypoints: !0,
                        routeWhileDragging: !1,
                        addWaypoints: !0,
                        reverseWaypoints: !1,
                        addButtonClassName: "",
                        language: "en",
                        createGeocoderElement: i.Routing.geocoderElement,
                        createMarker: function(t, e) {
                            var n = {
                                    draggable: this.draggableWaypoints
                                },
                                o = i.marker(e.latLng, n);
                            return o
                        },
                        geocodersClassName: ""
                    },
                    initialize: function(t, e) {
                        i.Util.setOptions(this, e), this._waypoints = [], this.setWaypoints(t)
                    },
                    isReady: function() {
                        var t;
                        for (t = 0; t < this._waypoints.length; t++)
                            if (!this._waypoints[t].latLng) return !1;
                        return !0
                    },
                    getWaypoints: function() {
                        var t, e = [];
                        for (t = 0; t < this._waypoints.length; t++) e.push(this._waypoints[t]);
                        return e
                    },
                    setWaypoints: function(t) {
                        var e = [0, this._waypoints.length].concat(t);
                        return this.spliceWaypoints.apply(this, e), this
                    },
                    spliceWaypoints: function() {
                        var t, e = [arguments[0], arguments[1]];
                        for (t = 2; t < arguments.length; t++) e.push(arguments[t] && arguments[t].hasOwnProperty("latLng") ? arguments[t] : i.Routing.waypoint(arguments[t]));
                        for ([].splice.apply(this._waypoints, e); this._waypoints.length < 2;) this.spliceWaypoints(this._waypoints.length, 0, null);
                        this._updateMarkers(), this._fireChanged.apply(this, e)
                    },
                    onAdd: function(t) {
                        this._map = t, this._updateMarkers()
                    },
                    onRemove: function() {
                        var t;
                        if (this._removeMarkers(), this._newWp)
                            for (t = 0; t < this._newWp.lines.length; t++) this._map.removeLayer(this._newWp.lines[t]);
                        delete this._map
                    },
                    createGeocoders: function() {
                        var t, e, n = i.DomUtil.create("div", "leaflet-routing-geocoders " + this.options.geocodersClassName),
                            o = this._waypoints;
                        return this._geocoderContainer = n, this._geocoderElems = [], this.options.addWaypoints && (t = i.DomUtil.create("button", "leaflet-routing-add-waypoint " + this.options.addButtonClassName, n), t.setAttribute("type", "button"), i.DomEvent.addListener(t, "click", function() {
                            this.spliceWaypoints(o.length, 0, null)
                        }, this)), this.options.reverseWaypoints && (e = i.DomUtil.create("button", "leaflet-routing-reverse-waypoints", n), e.setAttribute("type", "button"), i.DomEvent.addListener(e, "click", function() {
                            this._waypoints.reverse(), this.setWaypoints(this._waypoints)
                        }, this)), this._updateGeocoders(), this.on("waypointsspliced", this._updateGeocoders), n
                    },
                    _createGeocoder: function(t) {
                        var e = this.options.createGeocoderElement(this._waypoints[t], t, this._waypoints.length, this.options);
                        return e.on("delete", function() {
                            t > 0 || this._waypoints.length > 2 ? this.spliceWaypoints(t, 1) : this.spliceWaypoints(t, 1, new i.Routing.Waypoint)
                        }, this).on("geocoded", function(e) {
                            this._updateMarkers(), this._fireChanged(), this._focusGeocoder(t + 1), this.fire("waypointgeocoded", {
                                waypointIndex: t,
                                waypoint: e.waypoint
                            })
                        }, this).on("reversegeocoded", function(e) {
                            this.fire("waypointgeocoded", {
                                waypointIndex: t,
                                waypoint: e.waypoint
                            })
                        }, this), e
                    },
                    _updateGeocoders: function() {
                        var t, e, i = [];
                        for (t = 0; t < this._geocoderElems.length; t++) this._geocoderContainer.removeChild(this._geocoderElems[t].getContainer());
                        for (t = this._waypoints.length - 1; t >= 0; t--) e = this._createGeocoder(t), this._geocoderContainer.insertBefore(e.getContainer(), this._geocoderContainer.firstChild), i.push(e);
                        this._geocoderElems = i.reverse()
                    },
                    _removeMarkers: function() {
                        var t;
                        if (this._markers)
                            for (t = 0; t < this._markers.length; t++) this._markers[t] && this._map.removeLayer(this._markers[t]);
                        this._markers = []
                    },
                    _updateMarkers: function() {
                        var t, e;
                        if (this._map)
                            for (this._removeMarkers(), t = 0; t < this._waypoints.length; t++) this._waypoints[t].latLng ? (e = this.options.createMarker(t, this._waypoints[t], this._waypoints.length), e && (e.addTo(this._map), this.options.draggableWaypoints && this._hookWaypointEvents(e, t))) : e = null, this._markers.push(e)
                    },
                    _fireChanged: function() {
                        this.fire("waypointschanged", {
                            waypoints: this.getWaypoints()
                        }), arguments.length >= 2 && this.fire("waypointsspliced", {
                            index: Array.prototype.shift.call(arguments),
                            nRemoved: Array.prototype.shift.call(arguments),
                            added: arguments
                        })
                    },
                    _hookWaypointEvents: function(t, e, n) {
                        var o, s, a = function(t) {
                                return n ? t.latlng : t.target.getLatLng()
                            },
                            r = i.bind(function(t) {
                                this.fire("waypointdragstart", {
                                    index: e,
                                    latlng: a(t)
                                })
                            }, this),
                            l = i.bind(function(t) {
                                this._waypoints[e].latLng = a(t), this.fire("waypointdrag", {
                                    index: e,
                                    latlng: a(t)
                                })
                            }, this),
                            h = i.bind(function(t) {
                                this._waypoints[e].latLng = a(t), this._waypoints[e].name = "", this._geocoderElems && this._geocoderElems[e].update(!0), this.fire("waypointdragend", {
                                    index: e,
                                    latlng: a(t)
                                }), this._fireChanged()
                            }, this);
                        n ? (o = i.bind(function(t) {
                            this._markers[e].setLatLng(t.latlng), l(t)
                        }, this), s = i.bind(function(t) {
                            this._map.dragging.enable(), this._map.off("mouseup", s), this._map.off("mousemove", o), h(t)
                        }, this), this._map.dragging.disable(), this._map.on("mousemove", o), this._map.on("mouseup", s), r({
                            latlng: this._waypoints[e].latLng
                        })) : (t.on("dragstart", r), t.on("drag", l), t.on("dragend", h))
                    },
                    dragNewWaypoint: function(t) {
                        var e = t.afterIndex + 1;
                        this.options.routeWhileDragging ? (this.spliceWaypoints(e, 0, t.latlng), this._hookWaypointEvents(this._markers[e], e, !0)) : this._dragNewWaypoint(e, t.latlng)
                    },
                    _dragNewWaypoint: function(t, e) {
                        var n, o = new i.Routing.Waypoint(e),
                            s = this._waypoints[t - 1],
                            a = this._waypoints[t],
                            r = this.options.createMarker(t, o, this._waypoints.length + 1),
                            l = [],
                            h = i.bind(function(t) {
                                var e;
                                for (r && r.setLatLng(t.latlng), e = 0; e < l.length; e++) l[e].spliceLatLngs(1, 1, t.latlng)
                            }, this),
                            u = i.bind(function(e) {
                                var i;
                                for (r && this._map.removeLayer(r), i = 0; i < l.length; i++) this._map.removeLayer(l[i]);
                                this._map.off("mousemove", h), this._map.off("mouseup", u), this.spliceWaypoints(t, 0, e.latlng)
                            }, this);
                        for (r && r.addTo(this._map), n = 0; n < this.options.dragStyles.length; n++) l.push(i.polyline([s.latLng, e, a.latLng], this.options.dragStyles[n]).addTo(this._map));
                        this._map.on("mousemove", h), this._map.on("mouseup", u)
                    },
                    _focusGeocoder: function(t) {
                        this._geocoderElems[t] ? this._geocoderElems[t].focus() : document.activeElement.blur()
                    }
                }), i.Routing.plan = function(t, e) {
                    return new i.Routing.Plan(t, e)
                }, e.exports = i.Routing
            }()
        }, {
            "./L.Routing.GeocoderElement": 17,
            "./L.Routing.Waypoint": 24,
            leaflet: 27
        }],
        24: [function(t, e, i) {
            ! function() {
                "use strict";
                var i = t("leaflet");
                i.Routing = i.Routing || {}, i.Routing.Waypoint = i.Class.extend({
                    options: {
                        allowUTurn: !1
                    },
                    initialize: function(t, e, n) {
                        i.Util.setOptions(this, n), this.latLng = i.latLng(t), this.name = e
                    }
                }), i.Routing.waypoint = function(t, e, n) {
                    return new i.Routing.Waypoint(t, e, n)
                }, e.exports = i.Routing
            }()
        }, {
            leaflet: 27
        }],
        25: [function(e, i, n) {
            ! function(e, n, o) {
                var s = e.L,
                    a = {};
                a.version = "0.7.5", "object" == typeof i && "object" == typeof i.exports ? i.exports = a : "function" == typeof t && t.amd && t(a), a.noConflict = function() {
                        return e.L = s, this
                    }, e.L = a, a.Util = {
                        extend: function(t) {
                            var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
                            for (i = 0, n = s.length; n > i; i++) {
                                o = s[i] || {};
                                for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
                            }
                            return t
                        },
                        bind: function(t, e) {
                            var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                            return function() {
                                return t.apply(e, i || arguments)
                            }
                        },
                        stamp: function() {
                            var t = 0,
                                e = "_leaflet_id";
                            return function(i) {
                                return i[e] = i[e] || ++t, i[e]
                            }
                        }(),
                        invokeEach: function(t, e, i) {
                            var n, o;
                            if ("object" == typeof t) {
                                o = Array.prototype.slice.call(arguments, 3);
                                for (n in t) e.apply(i, [n, t[n]].concat(o));
                                return !0
                            }
                            return !1
                        },
                        limitExecByInterval: function(t, e, i) {
                            var n, o;
                            return function s() {
                                var a = arguments;
                                return n ? void(o = !0) : (n = !0, setTimeout(function() {
                                    n = !1, o && (s.apply(i, a), o = !1)
                                }, e), void t.apply(i, a))
                            }
                        },
                        falseFn: function() {
                            return !1
                        },
                        formatNum: function(t, e) {
                            var i = Math.pow(10, e || 5);
                            return Math.round(t * i) / i
                        },
                        trim: function(t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        },
                        splitWords: function(t) {
                            return a.Util.trim(t).split(/\s+/)
                        },
                        setOptions: function(t, e) {
                            return t.options = a.extend({}, t.options, e), t.options
                        },
                        getParamString: function(t, e, i) {
                            var n = [];
                            for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                            return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
                        },
                        template: function(t, e) {
                            return t.replace(/\{ *([\w_]+) *\}/g, function(t, i) {
                                var n = e[i];
                                if (n === o) throw new Error("No value provided for variable " + t);
                                return "function" == typeof n && (n = n(e)), n
                            })
                        },
                        isArray: Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    },
                    function() {
                        function t(t) {
                            var i, n, o = ["webkit", "moz", "o", "ms"];
                            for (i = 0; i < o.length && !n; i++) n = e[o[i] + t];
                            return n
                        }

                        function i(t) {
                            var i = +new Date,
                                o = Math.max(0, 16 - (i - n));
                            return n = i + o, e.setTimeout(t, o)
                        }
                        var n = 0,
                            o = e.requestAnimationFrame || t("RequestAnimationFrame") || i,
                            s = e.cancelAnimationFrame || t("CancelAnimationFrame") || t("CancelRequestAnimationFrame") || function(t) {
                                e.clearTimeout(t)
                            };
                        a.Util.requestAnimFrame = function(t, n, s, r) {
                            return t = a.bind(t, n), s && o === i ? void t() : o.call(e, t, r)
                        }, a.Util.cancelAnimFrame = function(t) {
                            t && s.call(e, t)
                        }
                    }(), a.extend = a.Util.extend, a.bind = a.Util.bind, a.stamp = a.Util.stamp, a.setOptions = a.Util.setOptions, a.Class = function() {}, a.Class.extend = function(t) {
                        var e = function() {
                                this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
                            },
                            i = function() {};
                        i.prototype = this.prototype;
                        var n = new i;
                        n.constructor = e, e.prototype = n;
                        for (var o in this) this.hasOwnProperty(o) && "prototype" !== o && (e[o] = this[o]);
                        t.statics && (a.extend(e, t.statics), delete t.statics), t.includes && (a.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = a.extend({}, n.options, t.options)), a.extend(n, t), n._initHooks = [];
                        var s = this;
                        return e.__super__ = s.prototype, n.callInitHooks = function() {
                            if (!this._initHooksCalled) {
                                s.prototype.callInitHooks && s.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                                for (var t = 0, e = n._initHooks.length; e > t; t++) n._initHooks[t].call(this)
                            }
                        }, e
                    }, a.Class.include = function(t) {
                        a.extend(this.prototype, t)
                    }, a.Class.mergeOptions = function(t) {
                        a.extend(this.prototype.options, t)
                    }, a.Class.addInitHook = function(t) {
                        var e = Array.prototype.slice.call(arguments, 1),
                            i = "function" == typeof t ? t : function() {
                                this[t].apply(this, e)
                            };
                        this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
                    };
                var r = "_leaflet_events";
                a.Mixin = {}, a.Mixin.Events = {
                        addEventListener: function(t, e, i) {
                            if (a.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
                            var n, o, s, l, h, u, c, d = this[r] = this[r] || {},
                                p = i && i !== this && a.stamp(i);
                            for (t = a.Util.splitWords(t), n = 0, o = t.length; o > n; n++) s = {
                                action: e,
                                context: i || this
                            }, l = t[n], p ? (h = l + "_idx", u = h + "_len", c = d[h] = d[h] || {}, c[p] || (c[p] = [], d[u] = (d[u] || 0) + 1), c[p].push(s)) : (d[l] = d[l] || [], d[l].push(s));
                            return this
                        },
                        hasEventListeners: function(t) {
                            var e = this[r];
                            return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
                        },
                        removeEventListener: function(t, e, i) {
                            if (!this[r]) return this;
                            if (!t) return this.clearAllEventListeners();
                            if (a.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
                            var n, o, s, l, h, u, c, d, p, m = this[r],
                                _ = i && i !== this && a.stamp(i);
                            for (t = a.Util.splitWords(t), n = 0, o = t.length; o > n; n++)
                                if (s = t[n], u = s + "_idx", c = u + "_len", d = m[u], e) {
                                    if (l = _ && d ? d[_] : m[s]) {
                                        for (h = l.length - 1; h >= 0; h--) l[h].action !== e || i && l[h].context !== i || (p = l.splice(h, 1), p[0].action = a.Util.falseFn);
                                        i && d && 0 === l.length && (delete d[_], m[c]--)
                                    }
                                } else delete m[s], delete m[u], delete m[c];
                            return this
                        },
                        clearAllEventListeners: function() {
                            return delete this[r], this
                        },
                        fireEvent: function(t, e) {
                            if (!this.hasEventListeners(t)) return this;
                            var i, n, o, s, l, h = a.Util.extend({}, e, {
                                    type: t,
                                    target: this
                                }),
                                u = this[r];
                            if (u[t])
                                for (i = u[t].slice(), n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context, h);
                            s = u[t + "_idx"];
                            for (l in s)
                                if (i = s[l].slice())
                                    for (n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context, h);
                            return this
                        },
                        addOneTimeEventListener: function(t, e, i) {
                            if (a.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
                            var n = a.bind(function() {
                                this.removeEventListener(t, e, i).removeEventListener(t, n, i)
                            }, this);
                            return this.addEventListener(t, e, i).addEventListener(t, n, i)
                        }
                    }, a.Mixin.Events.on = a.Mixin.Events.addEventListener, a.Mixin.Events.off = a.Mixin.Events.removeEventListener, a.Mixin.Events.once = a.Mixin.Events.addOneTimeEventListener, a.Mixin.Events.fire = a.Mixin.Events.fireEvent,
                    function() {
                        var t = "ActiveXObject" in e,
                            i = t && !n.addEventListener,
                            s = navigator.userAgent.toLowerCase(),
                            r = -1 !== s.indexOf("webkit"),
                            l = -1 !== s.indexOf("chrome"),
                            h = -1 !== s.indexOf("phantom"),
                            u = -1 !== s.indexOf("android"),
                            c = -1 !== s.search("android [23]"),
                            d = -1 !== s.indexOf("gecko"),
                            p = typeof orientation != o + "",
                            m = !e.PointerEvent && e.MSPointerEvent,
                            _ = e.PointerEvent && e.navigator.pointerEnabled && e.navigator.maxTouchPoints || m,
                            f = "devicePixelRatio" in e && e.devicePixelRatio > 1 || "matchMedia" in e && e.matchMedia("(min-resolution:144dpi)") && e.matchMedia("(min-resolution:144dpi)").matches,
                            g = n.documentElement,
                            v = t && "transition" in g.style,
                            y = "WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix && !c,
                            L = "MozPerspective" in g.style,
                            P = "OTransition" in g.style,
                            w = !e.L_DISABLE_3D && (v || y || L || P) && !h,
                            x = !e.L_NO_TOUCH && !h && (_ || "ontouchstart" in e || e.DocumentTouch && n instanceof e.DocumentTouch);
                        a.Browser = {
                            ie: t,
                            ielt9: i,
                            webkit: r,
                            gecko: d && !r && !e.opera && !t,
                            android: u,
                            android23: c,
                            chrome: l,
                            ie3d: v,
                            webkit3d: y,
                            gecko3d: L,
                            opera3d: P,
                            any3d: w,
                            mobile: p,
                            mobileWebkit: p && r,
                            mobileWebkit3d: p && y,
                            mobileOpera: p && e.opera,
                            touch: x,
                            msPointer: m,
                            pointer: _,
                            retina: f
                        }
                    }(), a.Point = function(t, e, i) {
                        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
                    }, a.Point.prototype = {
                        clone: function() {
                            return new a.Point(this.x, this.y)
                        },
                        add: function(t) {
                            return this.clone()._add(a.point(t))
                        },
                        _add: function(t) {
                            return this.x += t.x, this.y += t.y, this
                        },
                        subtract: function(t) {
                            return this.clone()._subtract(a.point(t))
                        },
                        _subtract: function(t) {
                            return this.x -= t.x, this.y -= t.y, this
                        },
                        divideBy: function(t) {
                            return this.clone()._divideBy(t)
                        },
                        _divideBy: function(t) {
                            return this.x /= t, this.y /= t, this
                        },
                        multiplyBy: function(t) {
                            return this.clone()._multiplyBy(t)
                        },
                        _multiplyBy: function(t) {
                            return this.x *= t, this.y *= t, this
                        },
                        round: function() {
                            return this.clone()._round()
                        },
                        _round: function() {
                            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                        },
                        floor: function() {
                            return this.clone()._floor()
                        },
                        _floor: function() {
                            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                        },
                        distanceTo: function(t) {
                            t = a.point(t);
                            var e = t.x - this.x,
                                i = t.y - this.y;
                            return Math.sqrt(e * e + i * i)
                        },
                        equals: function(t) {
                            return t = a.point(t), t.x === this.x && t.y === this.y
                        },
                        contains: function(t) {
                            return t = a.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                        },
                        toString: function() {
                            return "Point(" + a.Util.formatNum(this.x) + ", " + a.Util.formatNum(this.y) + ")"
                        }
                    }, a.point = function(t, e, i) {
                        return t instanceof a.Point ? t : a.Util.isArray(t) ? new a.Point(t[0], t[1]) : t === o || null === t ? t : new a.Point(t, e, i)
                    }, a.Bounds = function(t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
                    }, a.Bounds.prototype = {
                        extend: function(t) {
                            return t = a.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
                        },
                        getCenter: function(t) {
                            return new a.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                        },
                        getBottomLeft: function() {
                            return new a.Point(this.min.x, this.max.y)
                        },
                        getTopRight: function() {
                            return new a.Point(this.max.x, this.min.y)
                        },
                        getSize: function() {
                            return this.max.subtract(this.min)
                        },
                        contains: function(t) {
                            var e, i;
                            return t = "number" == typeof t[0] || t instanceof a.Point ? a.point(t) : a.bounds(t), t instanceof a.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                        },
                        intersects: function(t) {
                            t = a.bounds(t);
                            var e = this.min,
                                i = this.max,
                                n = t.min,
                                o = t.max,
                                s = o.x >= e.x && n.x <= i.x,
                                r = o.y >= e.y && n.y <= i.y;
                            return s && r
                        },
                        isValid: function() {
                            return !(!this.min || !this.max)
                        }
                    }, a.bounds = function(t, e) {
                        return !t || t instanceof a.Bounds ? t : new a.Bounds(t, e)
                    }, a.Transformation = function(t, e, i, n) {
                        this._a = t, this._b = e, this._c = i, this._d = n
                    }, a.Transformation.prototype = {
                        transform: function(t, e) {
                            return this._transform(t.clone(), e)
                        },
                        _transform: function(t, e) {
                            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
                        },
                        untransform: function(t, e) {
                            return e = e || 1, new a.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
                        }
                    }, a.DomUtil = {
                        get: function(t) {
                            return "string" == typeof t ? n.getElementById(t) : t
                        },
                        getStyle: function(t, e) {
                            var i = t.style[e];
                            if (!i && t.currentStyle && (i = t.currentStyle[e]), (!i || "auto" === i) && n.defaultView) {
                                var o = n.defaultView.getComputedStyle(t, null);
                                i = o ? o[e] : null
                            }
                            return "auto" === i ? null : i
                        },
                        getViewportOffset: function(t) {
                            var e, i = 0,
                                o = 0,
                                s = t,
                                r = n.body,
                                l = n.documentElement;
                            do {
                                if (i += s.offsetTop || 0, o += s.offsetLeft || 0, i += parseInt(a.DomUtil.getStyle(s, "borderTopWidth"), 10) || 0, o += parseInt(a.DomUtil.getStyle(s, "borderLeftWidth"), 10) || 0, e = a.DomUtil.getStyle(s, "position"), s.offsetParent === r && "absolute" === e) break;
                                if ("fixed" === e) {
                                    i += r.scrollTop || l.scrollTop || 0, o += r.scrollLeft || l.scrollLeft || 0;
                                    break
                                }
                                if ("relative" === e && !s.offsetLeft) {
                                    var h = a.DomUtil.getStyle(s, "width"),
                                        u = a.DomUtil.getStyle(s, "max-width"),
                                        c = s.getBoundingClientRect();
                                    ("none" !== h || "none" !== u) && (o += c.left + s.clientLeft), i += c.top + (r.scrollTop || l.scrollTop || 0);
                                    break
                                }
                                s = s.offsetParent
                            } while (s);
                            s = t;
                            do {
                                if (s === r) break;
                                i -= s.scrollTop || 0, o -= s.scrollLeft || 0, s = s.parentNode
                            } while (s);
                            return new a.Point(o, i)
                        },
                        documentIsLtr: function() {
                            return a.DomUtil._docIsLtrCached || (a.DomUtil._docIsLtrCached = !0, a.DomUtil._docIsLtr = "ltr" === a.DomUtil.getStyle(n.body, "direction")), a.DomUtil._docIsLtr
                        },
                        create: function(t, e, i) {
                            var o = n.createElement(t);
                            return o.className = e, i && i.appendChild(o), o
                        },
                        hasClass: function(t, e) {
                            if (t.classList !== o) return t.classList.contains(e);
                            var i = a.DomUtil._getClass(t);
                            return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                        },
                        addClass: function(t, e) {
                            if (t.classList !== o)
                                for (var i = a.Util.splitWords(e), n = 0, s = i.length; s > n; n++) t.classList.add(i[n]);
                            else if (!a.DomUtil.hasClass(t, e)) {
                                var r = a.DomUtil._getClass(t);
                                a.DomUtil._setClass(t, (r ? r + " " : "") + e)
                            }
                        },
                        removeClass: function(t, e) {
                            t.classList !== o ? t.classList.remove(e) : a.DomUtil._setClass(t, a.Util.trim((" " + a.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
                        },
                        _setClass: function(t, e) {
                            t.className.baseVal === o ? t.className = e : t.className.baseVal = e
                        },
                        _getClass: function(t) {
                            return t.className.baseVal === o ? t.className : t.className.baseVal
                        },
                        setOpacity: function(t, e) {
                            if ("opacity" in t.style) t.style.opacity = e;
                            else if ("filter" in t.style) {
                                var i = !1,
                                    n = "DXImageTransform.Microsoft.Alpha";
                                try {
                                    i = t.filters.item(n)
                                } catch (o) {
                                    if (1 === e) return
                                }
                                e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                            }
                        },
                        testProp: function(t) {
                            for (var e = n.documentElement.style, i = 0; i < t.length; i++)
                                if (t[i] in e) return t[i];
                            return !1
                        },
                        getTranslateString: function(t) {
                            var e = a.Browser.webkit3d,
                                i = "translate" + (e ? "3d" : "") + "(",
                                n = (e ? ",0" : "") + ")";
                            return i + t.x + "px," + t.y + "px" + n
                        },
                        getScaleString: function(t, e) {
                            var i = a.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
                                n = " scale(" + t + ") ";
                            return i + n
                        },
                        setPosition: function(t, e, i) {
                            t._leaflet_pos = e, !i && a.Browser.any3d ? t.style[a.DomUtil.TRANSFORM] = a.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
                        },
                        getPosition: function(t) {
                            return t._leaflet_pos
                        }
                    }, a.DomUtil.TRANSFORM = a.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), a.DomUtil.TRANSITION = a.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), a.DomUtil.TRANSITION_END = "webkitTransition" === a.DomUtil.TRANSITION || "OTransition" === a.DomUtil.TRANSITION ? a.DomUtil.TRANSITION + "End" : "transitionend",
                    function() {
                        if ("onselectstart" in n) a.extend(a.DomUtil, {
                            disableTextSelection: function() {
                                a.DomEvent.on(e, "selectstart", a.DomEvent.preventDefault)
                            },
                            enableTextSelection: function() {
                                a.DomEvent.off(e, "selectstart", a.DomEvent.preventDefault)
                            }
                        });
                        else {
                            var t = a.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                            a.extend(a.DomUtil, {
                                disableTextSelection: function() {
                                    if (t) {
                                        var e = n.documentElement.style;
                                        this._userSelect = e[t], e[t] = "none"
                                    }
                                },
                                enableTextSelection: function() {
                                    t && (n.documentElement.style[t] = this._userSelect, delete this._userSelect)
                                }
                            })
                        }
                        a.extend(a.DomUtil, {
                            disableImageDrag: function() {
                                a.DomEvent.on(e, "dragstart", a.DomEvent.preventDefault)
                            },
                            enableImageDrag: function() {
                                a.DomEvent.off(e, "dragstart", a.DomEvent.preventDefault)
                            }
                        })
                    }(), a.LatLng = function(t, e, i) {
                        if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                        this.lat = t, this.lng = e, i !== o && (this.alt = parseFloat(i))
                    }, a.extend(a.LatLng, {
                        DEG_TO_RAD: Math.PI / 180,
                        RAD_TO_DEG: 180 / Math.PI,
                        MAX_MARGIN: 1e-9
                    }), a.LatLng.prototype = {
                        equals: function(t) {
                            if (!t) return !1;
                            t = a.latLng(t);
                            var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                            return e <= a.LatLng.MAX_MARGIN
                        },
                        toString: function(t) {
                            return "LatLng(" + a.Util.formatNum(this.lat, t) + ", " + a.Util.formatNum(this.lng, t) + ")"
                        },
                        distanceTo: function(t) {
                            t = a.latLng(t);
                            var e = 6378137,
                                i = a.LatLng.DEG_TO_RAD,
                                n = (t.lat - this.lat) * i,
                                o = (t.lng - this.lng) * i,
                                s = this.lat * i,
                                r = t.lat * i,
                                l = Math.sin(n / 2),
                                h = Math.sin(o / 2),
                                u = l * l + h * h * Math.cos(s) * Math.cos(r);
                            return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
                        },
                        wrap: function(t, e) {
                            var i = this.lng;
                            return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new a.LatLng(this.lat, i)
                        }
                    }, a.latLng = function(t, e) {
                        return t instanceof a.LatLng ? t : a.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new a.LatLng(t[0], t[1], t[2]) : null : t === o || null === t ? t : "object" == typeof t && "lat" in t ? new a.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === o ? null : new a.LatLng(t, e)
                    }, a.LatLngBounds = function(t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
                    }, a.LatLngBounds.prototype = {
                        extend: function(t) {
                            if (!t) return this;
                            var e = a.latLng(t);
                            return t = null !== e ? e : a.latLngBounds(t), t instanceof a.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new a.LatLng(t.lat, t.lng), this._northEast = new a.LatLng(t.lat, t.lng)) : t instanceof a.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
                        },
                        pad: function(t) {
                            var e = this._southWest,
                                i = this._northEast,
                                n = Math.abs(e.lat - i.lat) * t,
                                o = Math.abs(e.lng - i.lng) * t;
                            return new a.LatLngBounds(new a.LatLng(e.lat - n, e.lng - o), new a.LatLng(i.lat + n, i.lng + o))
                        },
                        getCenter: function() {
                            return new a.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                        },
                        getSouthWest: function() {
                            return this._southWest
                        },
                        getNorthEast: function() {
                            return this._northEast
                        },
                        getNorthWest: function() {
                            return new a.LatLng(this.getNorth(), this.getWest())
                        },
                        getSouthEast: function() {
                            return new a.LatLng(this.getSouth(), this.getEast())
                        },
                        getWest: function() {
                            return this._southWest.lng
                        },
                        getSouth: function() {
                            return this._southWest.lat
                        },
                        getEast: function() {
                            return this._northEast.lng
                        },
                        getNorth: function() {
                            return this._northEast.lat
                        },
                        contains: function(t) {
                            t = "number" == typeof t[0] || t instanceof a.LatLng ? a.latLng(t) : a.latLngBounds(t);
                            var e, i, n = this._southWest,
                                o = this._northEast;
                            return t instanceof a.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                        },
                        intersects: function(t) {
                            t = a.latLngBounds(t);
                            var e = this._southWest,
                                i = this._northEast,
                                n = t.getSouthWest(),
                                o = t.getNorthEast(),
                                s = o.lat >= e.lat && n.lat <= i.lat,
                                r = o.lng >= e.lng && n.lng <= i.lng;
                            return s && r
                        },
                        toBBoxString: function() {
                            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                        },
                        equals: function(t) {
                            return t ? (t = a.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
                        },
                        isValid: function() {
                            return !(!this._southWest || !this._northEast)
                        }
                    }, a.latLngBounds = function(t, e) {
                        return !t || t instanceof a.LatLngBounds ? t : new a.LatLngBounds(t, e)
                    }, a.Projection = {}, a.Projection.SphericalMercator = {
                        MAX_LATITUDE: 85.0511287798,
                        project: function(t) {
                            var e = a.LatLng.DEG_TO_RAD,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = t.lng * e,
                                s = n * e;
                            return s = Math.log(Math.tan(Math.PI / 4 + s / 2)), new a.Point(o, s)
                        },
                        unproject: function(t) {
                            var e = a.LatLng.RAD_TO_DEG,
                                i = t.x * e,
                                n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
                            return new a.LatLng(n, i)
                        }
                    }, a.Projection.LonLat = {
                        project: function(t) {
                            return new a.Point(t.lng, t.lat)
                        },
                        unproject: function(t) {
                            return new a.LatLng(t.y, t.x)
                        }
                    }, a.CRS = {
                        latLngToPoint: function(t, e) {
                            var i = this.projection.project(t),
                                n = this.scale(e);
                            return this.transformation._transform(i, n)
                        },
                        pointToLatLng: function(t, e) {
                            var i = this.scale(e),
                                n = this.transformation.untransform(t, i);
                            return this.projection.unproject(n)
                        },
                        project: function(t) {
                            return this.projection.project(t)
                        },
                        scale: function(t) {
                            return 256 * Math.pow(2, t)
                        },
                        getSize: function(t) {
                            var e = this.scale(t);
                            return a.point(e, e)
                        }
                    }, a.CRS.Simple = a.extend({}, a.CRS, {
                        projection: a.Projection.LonLat,
                        transformation: new a.Transformation(1, 0, -1, 0),
                        scale: function(t) {
                            return Math.pow(2, t)
                        }
                    }), a.CRS.EPSG3857 = a.extend({}, a.CRS, {
                        code: "EPSG:3857",
                        projection: a.Projection.SphericalMercator,
                        transformation: new a.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
                        project: function(t) {
                            var e = this.projection.project(t),
                                i = 6378137;
                            return e.multiplyBy(i)
                        }
                    }), a.CRS.EPSG900913 = a.extend({}, a.CRS.EPSG3857, {
                        code: "EPSG:900913"
                    }), a.CRS.EPSG4326 = a.extend({}, a.CRS, {
                        code: "EPSG:4326",
                        projection: a.Projection.LonLat,
                        transformation: new a.Transformation(1 / 360, .5, -1 / 360, .5)
                    }), a.Map = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            crs: a.CRS.EPSG3857,
                            fadeAnimation: a.DomUtil.TRANSITION && !a.Browser.android23,
                            trackResize: !0,
                            markerZoomAnimation: a.DomUtil.TRANSITION && a.Browser.any3d
                        },
                        initialize: function(t, e) {
                            e = a.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = a.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== o && this.setView(a.latLng(e.center), e.zoom, {
                                reset: !0
                            }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
                        },
                        setView: function(t, e) {
                            return e = e === o ? this.getZoom() : e, this._resetView(a.latLng(t), this._limitZoom(e)), this
                        },
                        setZoom: function(t, e) {
                            return this._loaded ? this.setView(this.getCenter(), t, {
                                zoom: e
                            }) : (this._zoom = this._limitZoom(t), this)
                        },
                        zoomIn: function(t, e) {
                            return this.setZoom(this._zoom + (t || 1), e)
                        },
                        zoomOut: function(t, e) {
                            return this.setZoom(this._zoom - (t || 1), e)
                        },
                        setZoomAround: function(t, e, i) {
                            var n = this.getZoomScale(e),
                                o = this.getSize().divideBy(2),
                                s = t instanceof a.Point ? t : this.latLngToContainerPoint(t),
                                r = s.subtract(o).multiplyBy(1 - 1 / n),
                                l = this.containerPointToLatLng(o.add(r));
                            return this.setView(l, e, {
                                zoom: i
                            })
                        },
                        fitBounds: function(t, e) {
                            e = e || {}, t = t.getBounds ? t.getBounds() : a.latLngBounds(t);
                            var i = a.point(e.paddingTopLeft || e.padding || [0, 0]),
                                n = a.point(e.paddingBottomRight || e.padding || [0, 0]),
                                o = this.getBoundsZoom(t, !1, i.add(n));
                            o = e.maxZoom ? Math.min(e.maxZoom, o) : o;
                            var s = n.subtract(i).divideBy(2),
                                r = this.project(t.getSouthWest(), o),
                                l = this.project(t.getNorthEast(), o),
                                h = this.unproject(r.add(l).divideBy(2).add(s), o);
                            return this.setView(h, o, e)
                        },
                        fitWorld: function(t) {
                            return this.fitBounds([
                                [-90, -180],
                                [90, 180]
                            ], t)
                        },
                        panTo: function(t, e) {
                            return this.setView(t, this._zoom, {
                                pan: e
                            })
                        },
                        panBy: function(t) {
                            return this.fire("movestart"), this._rawPanBy(a.point(t)), this.fire("move"), this.fire("moveend")
                        },
                        setMaxBounds: function(t) {
                            return t = a.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
                        },
                        panInsideBounds: function(t, e) {
                            var i = this.getCenter(),
                                n = this._limitCenter(i, this._zoom, t);
                            return i.equals(n) ? this : this.panTo(n, e)
                        },
                        addLayer: function(t) {
                            var e = a.stamp(t);
                            return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && a.TileLayer && t instanceof a.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
                        },
                        removeLayer: function(t) {
                            var e = a.stamp(t);
                            return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
                                layer: t
                            }), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && a.TileLayer && t instanceof a.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
                        },
                        hasLayer: function(t) {
                            return t ? a.stamp(t) in this._layers : !1
                        },
                        eachLayer: function(t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this
                        },
                        invalidateSize: function(t) {
                            if (!this._loaded) return this;
                            t = a.extend({
                                animate: !1,
                                pan: !0
                            }, t === !0 ? {
                                animate: !0
                            } : t);
                            var e = this.getSize();
                            this._sizeChanged = !0, this._initialCenter = null;
                            var i = this.getSize(),
                                n = e.divideBy(2).round(),
                                o = i.divideBy(2).round(),
                                s = n.subtract(o);
                            return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                                oldSize: e,
                                newSize: i
                            })) : this
                        },
                        addHandler: function(t, e) {
                            if (!e) return this;
                            var i = this[t] = new e(this);
                            return this._handlers.push(i), this.options[t] && i.enable(), this
                        },
                        remove: function() {
                            this._loaded && this.fire("unload"), this._initEvents("off");
                            try {
                                delete this._container._leaflet
                            } catch (t) {
                                this._container._leaflet = o
                            }
                            return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
                        },
                        getCenter: function() {
                            return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                        },
                        getZoom: function() {
                            return this._zoom
                        },
                        getBounds: function() {
                            var t = this.getPixelBounds(),
                                e = this.unproject(t.getBottomLeft()),
                                i = this.unproject(t.getTopRight());
                            return new a.LatLngBounds(e, i)
                        },
                        getMinZoom: function() {
                            return this.options.minZoom === o ? this._layersMinZoom === o ? 0 : this._layersMinZoom : this.options.minZoom
                        },
                        getMaxZoom: function() {
                            return this.options.maxZoom === o ? this._layersMaxZoom === o ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                        },
                        getBoundsZoom: function(t, e, i) {
                            t = a.latLngBounds(t);
                            var n, o = this.getMinZoom() - (e ? 1 : 0),
                                s = this.getMaxZoom(),
                                r = this.getSize(),
                                l = t.getNorthWest(),
                                h = t.getSouthEast(),
                                u = !0;
                            i = a.point(i || [0, 0]);
                            do o++, n = this.project(h, o).subtract(this.project(l, o)).add(i),
                                u = e ? n.x < r.x || n.y < r.y : r.contains(n); while (u && s >= o);
                            return u && e ? null : e ? o : o - 1
                        },
                        getSize: function() {
                            return (!this._size || this._sizeChanged) && (this._size = new a.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
                        },
                        getPixelBounds: function() {
                            var t = this._getTopLeftPoint();
                            return new a.Bounds(t, t.add(this.getSize()))
                        },
                        getPixelOrigin: function() {
                            return this._checkIfLoaded(), this._initialTopLeftPoint
                        },
                        getPanes: function() {
                            return this._panes
                        },
                        getContainer: function() {
                            return this._container
                        },
                        getZoomScale: function(t) {
                            var e = this.options.crs;
                            return e.scale(t) / e.scale(this._zoom)
                        },
                        getScaleZoom: function(t) {
                            return this._zoom + Math.log(t) / Math.LN2
                        },
                        project: function(t, e) {
                            return e = e === o ? this._zoom : e, this.options.crs.latLngToPoint(a.latLng(t), e)
                        },
                        unproject: function(t, e) {
                            return e = e === o ? this._zoom : e, this.options.crs.pointToLatLng(a.point(t), e)
                        },
                        layerPointToLatLng: function(t) {
                            var e = a.point(t).add(this.getPixelOrigin());
                            return this.unproject(e)
                        },
                        latLngToLayerPoint: function(t) {
                            var e = this.project(a.latLng(t))._round();
                            return e._subtract(this.getPixelOrigin())
                        },
                        containerPointToLayerPoint: function(t) {
                            return a.point(t).subtract(this._getMapPanePos())
                        },
                        layerPointToContainerPoint: function(t) {
                            return a.point(t).add(this._getMapPanePos())
                        },
                        containerPointToLatLng: function(t) {
                            var e = this.containerPointToLayerPoint(a.point(t));
                            return this.layerPointToLatLng(e)
                        },
                        latLngToContainerPoint: function(t) {
                            return this.layerPointToContainerPoint(this.latLngToLayerPoint(a.latLng(t)))
                        },
                        mouseEventToContainerPoint: function(t) {
                            return a.DomEvent.getMousePosition(t, this._container)
                        },
                        mouseEventToLayerPoint: function(t) {
                            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                        },
                        mouseEventToLatLng: function(t) {
                            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                        },
                        _initContainer: function(t) {
                            var e = this._container = a.DomUtil.get(t);
                            if (!e) throw new Error("Map container not found.");
                            if (e._leaflet) throw new Error("Map container is already initialized.");
                            e._leaflet = !0
                        },
                        _initLayout: function() {
                            var t = this._container;
                            a.DomUtil.addClass(t, "leaflet-container" + (a.Browser.touch ? " leaflet-touch" : "") + (a.Browser.retina ? " leaflet-retina" : "") + (a.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                            var e = a.DomUtil.getStyle(t, "position");
                            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                        },
                        _initPanes: function() {
                            var t = this._panes = {};
                            this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
                            var e = " leaflet-zoom-hide";
                            this.options.markerZoomAnimation || (a.DomUtil.addClass(t.markerPane, e), a.DomUtil.addClass(t.shadowPane, e), a.DomUtil.addClass(t.popupPane, e))
                        },
                        _createPane: function(t, e) {
                            return a.DomUtil.create("div", t, e || this._panes.objectsPane)
                        },
                        _clearPanes: function() {
                            this._container.removeChild(this._mapPane)
                        },
                        _addLayers: function(t) {
                            t = t ? a.Util.isArray(t) ? t : [t] : [];
                            for (var e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
                        },
                        _resetView: function(t, e, i, n) {
                            var o = this._zoom !== e;
                            n || (this.fire("movestart"), o && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : a.DomUtil.setPosition(this._mapPane, new a.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
                            var s = !this._loaded;
                            this._loaded = !0, this.fire("viewreset", {
                                hard: !i
                            }), s && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (o || n) && this.fire("zoomend"), this.fire("moveend", {
                                hard: !i
                            })
                        },
                        _rawPanBy: function(t) {
                            a.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
                        },
                        _getZoomSpan: function() {
                            return this.getMaxZoom() - this.getMinZoom()
                        },
                        _updateZoomLevels: function() {
                            var t, e = 1 / 0,
                                i = -(1 / 0),
                                n = this._getZoomSpan();
                            for (t in this._zoomBoundLayers) {
                                var s = this._zoomBoundLayers[t];
                                isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (i = Math.max(i, s.options.maxZoom))
                            }
                            t === o ? this._layersMaxZoom = this._layersMinZoom = o : (this._layersMaxZoom = i, this._layersMinZoom = e), n !== this._getZoomSpan() && this.fire("zoomlevelschange")
                        },
                        _panInsideMaxBounds: function() {
                            this.panInsideBounds(this.options.maxBounds)
                        },
                        _checkIfLoaded: function() {
                            if (!this._loaded) throw new Error("Set map center and zoom first.")
                        },
                        _initEvents: function(t) {
                            if (a.DomEvent) {
                                t = t || "on", a.DomEvent[t](this._container, "click", this._onMouseClick, this);
                                var i, n, o = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                                for (i = 0, n = o.length; n > i; i++) a.DomEvent[t](this._container, o[i], this._fireMouseEvent, this);
                                this.options.trackResize && a.DomEvent[t](e, "resize", this._onResize, this)
                            }
                        },
                        _onResize: function() {
                            a.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = a.Util.requestAnimFrame(function() {
                                this.invalidateSize({
                                    debounceMoveend: !0
                                })
                            }, this, !1, this._container)
                        },
                        _onMouseClick: function(t) {
                            !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || a.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
                        },
                        _fireMouseEvent: function(t) {
                            if (this._loaded && !a.DomEvent._skipped(t)) {
                                var e = t.type;
                                if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
                                    "contextmenu" === e && a.DomEvent.preventDefault(t);
                                    var i = this.mouseEventToContainerPoint(t),
                                        n = this.containerPointToLayerPoint(i),
                                        o = this.layerPointToLatLng(n);
                                    this.fire(e, {
                                        latlng: o,
                                        layerPoint: n,
                                        containerPoint: i,
                                        originalEvent: t
                                    })
                                }
                            }
                        },
                        _onTileLayerLoad: function() {
                            this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
                        },
                        _clearHandlers: function() {
                            for (var t = 0, e = this._handlers.length; e > t; t++) this._handlers[t].disable()
                        },
                        whenReady: function(t, e) {
                            return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
                        },
                        _layerAdd: function(t) {
                            t.onAdd(this), this.fire("layeradd", {
                                layer: t
                            })
                        },
                        _getMapPanePos: function() {
                            return a.DomUtil.getPosition(this._mapPane)
                        },
                        _moved: function() {
                            var t = this._getMapPanePos();
                            return t && !t.equals([0, 0])
                        },
                        _getTopLeftPoint: function() {
                            return this.getPixelOrigin().subtract(this._getMapPanePos())
                        },
                        _getNewTopLeftPoint: function(t, e) {
                            var i = this.getSize()._divideBy(2);
                            return this.project(t, e)._subtract(i)._round()
                        },
                        _latLngToNewLayerPoint: function(t, e, i) {
                            var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
                            return this.project(t, e)._subtract(n)
                        },
                        _getCenterLayerPoint: function() {
                            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                        },
                        _getCenterOffset: function(t) {
                            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                        },
                        _limitCenter: function(t, e, i) {
                            if (!i) return t;
                            var n = this.project(t, e),
                                o = this.getSize().divideBy(2),
                                s = new a.Bounds(n.subtract(o), n.add(o)),
                                r = this._getBoundsOffset(s, i, e);
                            return this.unproject(n.add(r), e)
                        },
                        _limitOffset: function(t, e) {
                            if (!e) return t;
                            var i = this.getPixelBounds(),
                                n = new a.Bounds(i.min.add(t), i.max.add(t));
                            return t.add(this._getBoundsOffset(n, e))
                        },
                        _getBoundsOffset: function(t, e, i) {
                            var n = this.project(e.getNorthWest(), i).subtract(t.min),
                                o = this.project(e.getSouthEast(), i).subtract(t.max),
                                s = this._rebound(n.x, -o.x),
                                r = this._rebound(n.y, -o.y);
                            return new a.Point(s, r)
                        },
                        _rebound: function(t, e) {
                            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                        },
                        _limitZoom: function(t) {
                            var e = this.getMinZoom(),
                                i = this.getMaxZoom();
                            return Math.max(e, Math.min(i, t))
                        }
                    }), a.map = function(t, e) {
                        return new a.Map(t, e)
                    }, a.Projection.Mercator = {
                        MAX_LATITUDE: 85.0840591556,
                        R_MINOR: 6356752.314245179,
                        R_MAJOR: 6378137,
                        project: function(t) {
                            var e = a.LatLng.DEG_TO_RAD,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = this.R_MAJOR,
                                s = this.R_MINOR,
                                r = t.lng * e * o,
                                l = n * e,
                                h = s / o,
                                u = Math.sqrt(1 - h * h),
                                c = u * Math.sin(l);
                            c = Math.pow((1 - c) / (1 + c), .5 * u);
                            var d = Math.tan(.5 * (.5 * Math.PI - l)) / c;
                            return l = -o * Math.log(d), new a.Point(r, l)
                        },
                        unproject: function(t) {
                            for (var e, i = a.LatLng.RAD_TO_DEG, n = this.R_MAJOR, o = this.R_MINOR, s = t.x * i / n, r = o / n, l = Math.sqrt(1 - r * r), h = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(h), c = 15, d = 1e-7, p = c, m = .1; Math.abs(m) > d && --p > 0;) e = l * Math.sin(u), m = Math.PI / 2 - 2 * Math.atan(h * Math.pow((1 - e) / (1 + e), .5 * l)) - u, u += m;
                            return new a.LatLng(u * i, s)
                        }
                    }, a.CRS.EPSG3395 = a.extend({}, a.CRS, {
                        code: "EPSG:3395",
                        projection: a.Projection.Mercator,
                        transformation: function() {
                            var t = a.Projection.Mercator,
                                e = t.R_MAJOR,
                                i = .5 / (Math.PI * e);
                            return new a.Transformation(i, .5, -i, .5)
                        }()
                    }), a.TileLayer = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            minZoom: 0,
                            maxZoom: 18,
                            tileSize: 256,
                            subdomains: "abc",
                            errorTileUrl: "",
                            attribution: "",
                            zoomOffset: 0,
                            opacity: 1,
                            unloadInvisibleTiles: a.Browser.mobile,
                            updateWhenIdle: a.Browser.mobile
                        },
                        initialize: function(t, e) {
                            e = a.setOptions(this, e), e.detectRetina && a.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = a.latLngBounds(e.bounds)), this._url = t;
                            var i = this.options.subdomains;
                            "string" == typeof i && (this.options.subdomains = i.split(""))
                        },
                        onAdd: function(t) {
                            this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
                                viewreset: this._reset,
                                moveend: this._update
                            }, this), this._animated && t.on({
                                zoomanim: this._animateZoom,
                                zoomend: this._endZoomAnim
                            }, this), this.options.updateWhenIdle || (this._limitedUpdate = a.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        onRemove: function(t) {
                            this._container.parentNode.removeChild(this._container), t.off({
                                viewreset: this._reset,
                                moveend: this._update
                            }, this), this._animated && t.off({
                                zoomanim: this._animateZoom,
                                zoomend: this._endZoomAnim
                            }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
                        },
                        bringToFront: function() {
                            var t = this._map._panes.tilePane;
                            return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
                        },
                        bringToBack: function() {
                            var t = this._map._panes.tilePane;
                            return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
                        },
                        getAttribution: function() {
                            return this.options.attribution
                        },
                        getContainer: function() {
                            return this._container
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._map && this._updateOpacity(), this
                        },
                        setZIndex: function(t) {
                            return this.options.zIndex = t, this._updateZIndex(), this
                        },
                        setUrl: function(t, e) {
                            return this._url = t, e || this.redraw(), this
                        },
                        redraw: function() {
                            return this._map && (this._reset({
                                hard: !0
                            }), this._update()), this
                        },
                        _updateZIndex: function() {
                            this._container && this.options.zIndex !== o && (this._container.style.zIndex = this.options.zIndex)
                        },
                        _setAutoZIndex: function(t, e) {
                            var i, n, o, s = t.children,
                                a = -e(1 / 0, -(1 / 0));
                            for (n = 0, o = s.length; o > n; n++) s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
                            this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
                        },
                        _updateOpacity: function() {
                            var t, e = this._tiles;
                            if (a.Browser.ielt9)
                                for (t in e) a.DomUtil.setOpacity(e[t], this.options.opacity);
                            else a.DomUtil.setOpacity(this._container, this.options.opacity)
                        },
                        _initContainer: function() {
                            var t = this._map._panes.tilePane;
                            if (!this._container) {
                                if (this._container = a.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                                    var e = "leaflet-tile-container";
                                    this._bgBuffer = a.DomUtil.create("div", e, this._container), this._tileContainer = a.DomUtil.create("div", e, this._container)
                                } else this._tileContainer = this._container;
                                t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
                            }
                        },
                        _reset: function(t) {
                            for (var e in this._tiles) this.fire("tileunload", {
                                tile: this._tiles[e]
                            });
                            this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
                        },
                        _getTileSize: function() {
                            var t = this._map,
                                e = t.getZoom() + this.options.zoomOffset,
                                i = this.options.maxNativeZoom,
                                n = this.options.tileSize;
                            return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
                        },
                        _update: function() {
                            if (this._map) {
                                var t = this._map,
                                    e = t.getPixelBounds(),
                                    i = t.getZoom(),
                                    n = this._getTileSize();
                                if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
                                    var o = a.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
                                    this._addTilesFromCenterOut(o), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(o)
                                }
                            }
                        },
                        _addTilesFromCenterOut: function(t) {
                            var e, i, o, s = [],
                                r = t.getCenter();
                            for (e = t.min.y; e <= t.max.y; e++)
                                for (i = t.min.x; i <= t.max.x; i++) o = new a.Point(i, e), this._tileShouldBeLoaded(o) && s.push(o);
                            var l = s.length;
                            if (0 !== l) {
                                s.sort(function(t, e) {
                                    return t.distanceTo(r) - e.distanceTo(r)
                                });
                                var h = n.createDocumentFragment();
                                for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += l, i = 0; l > i; i++) this._addTile(s[i], h);
                                this._tileContainer.appendChild(h)
                            }
                        },
                        _tileShouldBeLoaded: function(t) {
                            if (t.x + ":" + t.y in this._tiles) return !1;
                            var e = this.options;
                            if (!e.continuousWorld) {
                                var i = this._getWrapTileNum();
                                if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1
                            }
                            if (e.bounds) {
                                var n = this._getTileSize(),
                                    o = t.multiplyBy(n),
                                    s = o.add([n, n]),
                                    a = this._map.unproject(o),
                                    r = this._map.unproject(s);
                                if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r])) return !1
                            }
                            return !0
                        },
                        _removeOtherTiles: function(t) {
                            var e, i, n, o;
                            for (o in this._tiles) e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
                        },
                        _removeTile: function(t) {
                            var e = this._tiles[t];
                            this.fire("tileunload", {
                                tile: e,
                                url: e.src
                            }), this.options.reuseTiles ? (a.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), a.Browser.android || (e.onload = null, e.src = a.Util.emptyImageUrl), delete this._tiles[t]
                        },
                        _addTile: function(t, e) {
                            var i = this._getTilePos(t),
                                n = this._getTile();
                            a.DomUtil.setPosition(n, i, a.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
                        },
                        _getZoomForUrl: function() {
                            var t = this.options,
                                e = this._map.getZoom();
                            return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
                        },
                        _getTilePos: function(t) {
                            var e = this._map.getPixelOrigin(),
                                i = this._getTileSize();
                            return t.multiplyBy(i).subtract(e)
                        },
                        getTileUrl: function(t) {
                            return a.Util.template(this._url, a.extend({
                                s: this._getSubdomain(t),
                                z: t.z,
                                x: t.x,
                                y: t.y
                            }, this.options))
                        },
                        _getWrapTileNum: function() {
                            var t = this._map.options.crs,
                                e = t.getSize(this._map.getZoom());
                            return e.divideBy(this._getTileSize())._floor()
                        },
                        _adjustTilePoint: function(t) {
                            var e = this._getWrapTileNum();
                            this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
                        },
                        _getSubdomain: function(t) {
                            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                            return this.options.subdomains[e]
                        },
                        _getTile: function() {
                            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                                var t = this._unusedTiles.pop();
                                return this._resetTile(t), t
                            }
                            return this._createTile()
                        },
                        _resetTile: function() {},
                        _createTile: function() {
                            var t = a.DomUtil.create("img", "leaflet-tile");
                            return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = a.Util.falseFn, a.Browser.ielt9 && this.options.opacity !== o && a.DomUtil.setOpacity(t, this.options.opacity), a.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
                        },
                        _loadTile: function(t, e) {
                            t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
                                tile: t,
                                url: t.src
                            })
                        },
                        _tileLoaded: function() {
                            this._tilesToLoad--, this._animated && a.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(a.bind(this._clearBgBuffer, this), 500)))
                        },
                        _tileOnLoad: function() {
                            var t = this._layer;
                            this.src !== a.Util.emptyImageUrl && (a.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                                tile: this,
                                url: this.src
                            })), t._tileLoaded()
                        },
                        _tileOnError: function() {
                            var t = this._layer;
                            t.fire("tileerror", {
                                tile: this,
                                url: this.src
                            });
                            var e = t.options.errorTileUrl;
                            e && (this.src = e), t._tileLoaded()
                        }
                    }), a.tileLayer = function(t, e) {
                        return new a.TileLayer(t, e)
                    }, a.TileLayer.WMS = a.TileLayer.extend({
                        defaultWmsParams: {
                            service: "WMS",
                            request: "GetMap",
                            version: "1.1.1",
                            layers: "",
                            styles: "",
                            format: "image/jpeg",
                            transparent: !1
                        },
                        initialize: function(t, e) {
                            this._url = t;
                            var i = a.extend({}, this.defaultWmsParams),
                                n = e.tileSize || this.options.tileSize;
                            e.detectRetina && a.Browser.retina ? i.width = i.height = 2 * n : i.width = i.height = n;
                            for (var o in e) this.options.hasOwnProperty(o) || "crs" === o || (i[o] = e[o]);
                            this.wmsParams = i, a.setOptions(this, e)
                        },
                        onAdd: function(t) {
                            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                            var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                            this.wmsParams[e] = this._crs.code, a.TileLayer.prototype.onAdd.call(this, t)
                        },
                        getTileUrl: function(t) {
                            var e = this._map,
                                i = this.options.tileSize,
                                n = t.multiplyBy(i),
                                o = n.add([i, i]),
                                s = this._crs.project(e.unproject(n, t.z)),
                                r = this._crs.project(e.unproject(o, t.z)),
                                l = this._wmsVersion >= 1.3 && this._crs === a.CRS.EPSG4326 ? [r.y, s.x, s.y, r.x].join(",") : [s.x, r.y, r.x, s.y].join(","),
                                h = a.Util.template(this._url, {
                                    s: this._getSubdomain(t)
                                });
                            return h + a.Util.getParamString(this.wmsParams, h, !0) + "&BBOX=" + l
                        },
                        setParams: function(t, e) {
                            return a.extend(this.wmsParams, t), e || this.redraw(), this
                        }
                    }), a.tileLayer.wms = function(t, e) {
                        return new a.TileLayer.WMS(t, e)
                    }, a.TileLayer.Canvas = a.TileLayer.extend({
                        options: {
                            async: !1
                        },
                        initialize: function(t) {
                            a.setOptions(this, t)
                        },
                        redraw: function() {
                            this._map && (this._reset({
                                hard: !0
                            }), this._update());
                            for (var t in this._tiles) this._redrawTile(this._tiles[t]);
                            return this
                        },
                        _redrawTile: function(t) {
                            this.drawTile(t, t._tilePoint, this._map._zoom)
                        },
                        _createTile: function() {
                            var t = a.DomUtil.create("canvas", "leaflet-tile");
                            return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = a.Util.falseFn, t
                        },
                        _loadTile: function(t, e) {
                            t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
                        },
                        drawTile: function() {},
                        tileDrawn: function(t) {
                            this._tileOnLoad.call(t)
                        }
                    }), a.tileLayer.canvas = function(t) {
                        return new a.TileLayer.Canvas(t)
                    }, a.ImageOverlay = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            opacity: 1
                        },
                        initialize: function(t, e, i) {
                            this._url = t, this._bounds = a.latLngBounds(e), a.setOptions(this, i)
                        },
                        onAdd: function(t) {
                            this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && a.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
                        },
                        onRemove: function(t) {
                            t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._updateOpacity(), this
                        },
                        bringToFront: function() {
                            return this._image && this._map._panes.overlayPane.appendChild(this._image), this
                        },
                        bringToBack: function() {
                            var t = this._map._panes.overlayPane;
                            return this._image && t.insertBefore(this._image, t.firstChild), this
                        },
                        setUrl: function(t) {
                            this._url = t, this._image.src = this._url
                        },
                        getAttribution: function() {
                            return this.options.attribution
                        },
                        _initImage: function() {
                            this._image = a.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && a.Browser.any3d ? a.DomUtil.addClass(this._image, "leaflet-zoom-animated") : a.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), a.extend(this._image, {
                                galleryimg: "no",
                                onselectstart: a.Util.falseFn,
                                onmousemove: a.Util.falseFn,
                                onload: a.bind(this._onImageLoad, this),
                                src: this._url
                            })
                        },
                        _animateZoom: function(t) {
                            var e = this._map,
                                i = this._image,
                                n = e.getZoomScale(t.zoom),
                                o = this._bounds.getNorthWest(),
                                s = this._bounds.getSouthEast(),
                                r = e._latLngToNewLayerPoint(o, t.zoom, t.center),
                                l = e._latLngToNewLayerPoint(s, t.zoom, t.center)._subtract(r),
                                h = r._add(l._multiplyBy(.5 * (1 - 1 / n)));
                            i.style[a.DomUtil.TRANSFORM] = a.DomUtil.getTranslateString(h) + " scale(" + n + ") "
                        },
                        _reset: function() {
                            var t = this._image,
                                e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                                i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
                            a.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
                        },
                        _onImageLoad: function() {
                            this.fire("load")
                        },
                        _updateOpacity: function() {
                            a.DomUtil.setOpacity(this._image, this.options.opacity)
                        }
                    }), a.imageOverlay = function(t, e, i) {
                        return new a.ImageOverlay(t, e, i)
                    }, a.Icon = a.Class.extend({
                        options: {
                            className: ""
                        },
                        initialize: function(t) {
                            a.setOptions(this, t)
                        },
                        createIcon: function(t) {
                            return this._createIcon("icon", t)
                        },
                        createShadow: function(t) {
                            return this._createIcon("shadow", t)
                        },
                        _createIcon: function(t, e) {
                            var i = this._getIconUrl(t);
                            if (!i) {
                                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                                return null
                            }
                            var n;
                            return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n
                        },
                        _setIconStyles: function(t, e) {
                            var i, n = this.options,
                                o = a.point(n[e + "Size"]);
                            i = "shadow" === e ? a.point(n.shadowAnchor || n.iconAnchor) : a.point(n.iconAnchor), !i && o && (i = o.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                        },
                        _createImg: function(t, e) {
                            return e = e || n.createElement("img"), e.src = t, e
                        },
                        _getIconUrl: function(t) {
                            return a.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
                        }
                    }), a.icon = function(t) {
                        return new a.Icon(t)
                    }, a.Icon.Default = a.Icon.extend({
                        options: {
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowSize: [41, 41]
                        },
                        _getIconUrl: function(t) {
                            var e = t + "Url";
                            if (this.options[e]) return this.options[e];
                            a.Browser.retina && "icon" === t && (t += "-2x");
                            var i = a.Icon.Default.imagePath;
                            if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                            return i + "/marker-" + t + ".png"
                        }
                    }), a.Icon.Default.imagePath = function() {
                        var t, e, i, o, s, a = n.getElementsByTagName("script"),
                            r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
                        for (t = 0, e = a.length; e > t; t++)
                            if (i = a[t].src, o = i.match(r)) return s = i.split(r)[0], (s ? s + "/" : "") + "images"
                    }(), a.Marker = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            icon: new a.Icon.Default,
                            title: "",
                            alt: "",
                            clickable: !0,
                            draggable: !1,
                            keyboard: !0,
                            zIndexOffset: 0,
                            opacity: 1,
                            riseOnHover: !1,
                            riseOffset: 250
                        },
                        initialize: function(t, e) {
                            a.setOptions(this, e), this._latlng = a.latLng(t)
                        },
                        onAdd: function(t) {
                            this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        onRemove: function(t) {
                            this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
                                viewreset: this.update,
                                zoomanim: this._animateZoom
                            }, this), this._map = null
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            return this._latlng = a.latLng(t), this.update(), this.fire("move", {
                                latlng: this._latlng
                            })
                        },
                        setZIndexOffset: function(t) {
                            return this.options.zIndexOffset = t, this.update(), this
                        },
                        setIcon: function(t) {
                            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
                        },
                        update: function() {
                            return this._icon && this._setPos(this._map.latLngToLayerPoint(this._latlng).round()), this
                        },
                        _initIcon: function() {
                            var t = this.options,
                                e = this._map,
                                i = e.options.zoomAnimation && e.options.markerZoomAnimation,
                                n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                                o = t.icon.createIcon(this._icon),
                                s = !1;
                            o !== this._icon && (this._icon && this._removeIcon(), s = !0, t.title && (o.title = t.title), t.alt && (o.alt = t.alt)), a.DomUtil.addClass(o, n), t.keyboard && (o.tabIndex = "0"), this._icon = o, this._initInteraction(), t.riseOnHover && a.DomEvent.on(o, "mouseover", this._bringToFront, this).on(o, "mouseout", this._resetZIndex, this);
                            var r = t.icon.createShadow(this._shadow),
                                l = !1;
                            r !== this._shadow && (this._removeShadow(), l = !0), r && a.DomUtil.addClass(r, n), this._shadow = r, t.opacity < 1 && this._updateOpacity();
                            var h = this._map._panes;
                            s && h.markerPane.appendChild(this._icon), r && l && h.shadowPane.appendChild(this._shadow)
                        },
                        _removeIcon: function() {
                            this.options.riseOnHover && a.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
                        },
                        _removeShadow: function() {
                            this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
                        },
                        _setPos: function(t) {
                            a.DomUtil.setPosition(this._icon, t), this._shadow && a.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                        },
                        _updateZIndex: function(t) {
                            this._icon.style.zIndex = this._zIndex + t
                        },
                        _animateZoom: function(t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                            this._setPos(e)
                        },
                        _initInteraction: function() {
                            if (this.options.clickable) {
                                var t = this._icon,
                                    e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                                a.DomUtil.addClass(t, "leaflet-clickable"), a.DomEvent.on(t, "click", this._onMouseClick, this), a.DomEvent.on(t, "keypress", this._onKeyPress, this);
                                for (var i = 0; i < e.length; i++) a.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                                a.Handler.MarkerDrag && (this.dragging = new a.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                            }
                        },
                        _onMouseClick: function(t) {
                            var e = this.dragging && this.dragging.moved();
                            (this.hasEventListeners(t.type) || e) && a.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                                originalEvent: t,
                                latlng: this._latlng
                            })
                        },
                        _onKeyPress: function(t) {
                            13 === t.keyCode && this.fire("click", {
                                originalEvent: t,
                                latlng: this._latlng
                            })
                        },
                        _fireMouseEvent: function(t) {
                            this.fire(t.type, {
                                originalEvent: t,
                                latlng: this._latlng
                            }), "contextmenu" === t.type && this.hasEventListeners(t.type) && a.DomEvent.preventDefault(t), "mousedown" !== t.type ? a.DomEvent.stopPropagation(t) : a.DomEvent.preventDefault(t)
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._map && this._updateOpacity(), this
                        },
                        _updateOpacity: function() {
                            a.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && a.DomUtil.setOpacity(this._shadow, this.options.opacity)
                        },
                        _bringToFront: function() {
                            this._updateZIndex(this.options.riseOffset)
                        },
                        _resetZIndex: function() {
                            this._updateZIndex(0)
                        }
                    }), a.marker = function(t, e) {
                        return new a.Marker(t, e)
                    }, a.DivIcon = a.Icon.extend({
                        options: {
                            iconSize: [12, 12],
                            className: "leaflet-div-icon",
                            html: !1
                        },
                        createIcon: function(t) {
                            var e = t && "DIV" === t.tagName ? t : n.createElement("div"),
                                i = this.options;
                            return i.html !== !1 ? e.innerHTML = i.html : e.innerHTML = "", i.bgPos && (e.style.backgroundPosition = -i.bgPos.x + "px " + -i.bgPos.y + "px"), this._setIconStyles(e, "icon"), e
                        },
                        createShadow: function() {
                            return null
                        }
                    }), a.divIcon = function(t) {
                        return new a.DivIcon(t)
                    }, a.Map.mergeOptions({
                        closePopupOnClick: !0
                    }), a.Popup = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            minWidth: 50,
                            maxWidth: 300,
                            autoPan: !0,
                            closeButton: !0,
                            offset: [0, 7],
                            autoPanPadding: [5, 5],
                            keepInView: !1,
                            className: "",
                            zoomAnimation: !0
                        },
                        initialize: function(t, e) {
                            a.setOptions(this, t), this._source = e, this._animated = a.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
                        },
                        onAdd: function(t) {
                            this._map = t, this._container || this._initLayout();
                            var e = t.options.fadeAnimation;
                            e && a.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && a.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
                                popup: this
                            }), this._source && this._source.fire("popupopen", {
                                popup: this
                            })
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        openOn: function(t) {
                            return t.openPopup(this), this
                        },
                        onRemove: function(t) {
                            t._panes.popupPane.removeChild(this._container), a.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && a.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
                                popup: this
                            }), this._source && this._source.fire("popupclose", {
                                popup: this
                            })
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            return this._latlng = a.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
                        },
                        getContent: function() {
                            return this._content
                        },
                        setContent: function(t) {
                            return this._content = t, this.update(), this
                        },
                        update: function() {
                            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                        },
                        _getEvents: function() {
                            var t = {
                                viewreset: this._updatePosition
                            };
                            return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
                        },
                        _close: function() {
                            this._map && this._map.closePopup(this)
                        },
                        _initLayout: function() {
                            var t, e = "leaflet-popup",
                                i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
                                n = this._container = a.DomUtil.create("div", i);
                            this.options.closeButton && (t = this._closeButton = a.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", a.DomEvent.disableClickPropagation(t), a.DomEvent.on(t, "click", this._onCloseButtonClick, this));
                            var o = this._wrapper = a.DomUtil.create("div", e + "-content-wrapper", n);
                            a.DomEvent.disableClickPropagation(o), this._contentNode = a.DomUtil.create("div", e + "-content", o), a.DomEvent.disableScrollPropagation(this._contentNode), a.DomEvent.on(o, "contextmenu", a.DomEvent.stopPropagation), this._tipContainer = a.DomUtil.create("div", e + "-tip-container", n), this._tip = a.DomUtil.create("div", e + "-tip", this._tipContainer)
                        },
                        _updateContent: function() {
                            if (this._content) {
                                if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
                                else {
                                    for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
                                    this._contentNode.appendChild(this._content)
                                }
                                this.fire("contentupdate")
                            }
                        },
                        _updateLayout: function() {
                            var t = this._contentNode,
                                e = t.style;
                            e.width = "", e.whiteSpace = "nowrap";
                            var i = t.offsetWidth;
                            i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                            var n = t.offsetHeight,
                                o = this.options.maxHeight,
                                s = "leaflet-popup-scrolled";
                            o && n > o ? (e.height = o + "px", a.DomUtil.addClass(t, s)) : a.DomUtil.removeClass(t, s), this._containerWidth = this._container.offsetWidth
                        },
                        _updatePosition: function() {
                            if (this._map) {
                                var t = this._map.latLngToLayerPoint(this._latlng),
                                    e = this._animated,
                                    i = a.point(this.options.offset);
                                e && a.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
                            }
                        },
                        _zoomAnimation: function(t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                            a.DomUtil.setPosition(this._container, e)
                        },
                        _adjustPan: function() {
                            if (this.options.autoPan) {
                                var t = this._map,
                                    e = this._container.offsetHeight,
                                    i = this._containerWidth,
                                    n = new a.Point(this._containerLeft, -e - this._containerBottom);
                                this._animated && n._add(a.DomUtil.getPosition(this._container));
                                var o = t.layerPointToContainerPoint(n),
                                    s = a.point(this.options.autoPanPadding),
                                    r = a.point(this.options.autoPanPaddingTopLeft || s),
                                    l = a.point(this.options.autoPanPaddingBottomRight || s),
                                    h = t.getSize(),
                                    u = 0,
                                    c = 0;
                                o.x + i + l.x > h.x && (u = o.x + i - h.x + l.x), o.x - u - r.x < 0 && (u = o.x - r.x), o.y + e + l.y > h.y && (c = o.y + e - h.y + l.y), o.y - c - r.y < 0 && (c = o.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c])
                            }
                        },
                        _onCloseButtonClick: function(t) {
                            this._close(), a.DomEvent.stop(t)
                        }
                    }), a.popup = function(t, e) {
                        return new a.Popup(t, e)
                    }, a.Map.include({
                        openPopup: function(t, e, i) {
                            if (this.closePopup(), !(t instanceof a.Popup)) {
                                var n = t;
                                t = new a.Popup(i).setLatLng(e).setContent(n)
                            }
                            return t._isOpen = !0, this._popup = t, this.addLayer(t)
                        },
                        closePopup: function(t) {
                            return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
                        }
                    }), a.Marker.include({
                        openPopup: function() {
                            return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
                        },
                        closePopup: function() {
                            return this._popup && this._popup._close(), this
                        },
                        togglePopup: function() {
                            return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
                        },
                        bindPopup: function(t, e) {
                            var i = a.point(this.options.icon.options.popupAnchor || [0, 0]);
                            return i = i.add(a.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = a.extend({
                                offset: i
                            }, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof a.Popup ? (a.setOptions(t, e), this._popup = t, t._source = this) : this._popup = new a.Popup(e, this).setContent(t), this
                        },
                        setPopupContent: function(t) {
                            return this._popup && this._popup.setContent(t), this
                        },
                        unbindPopup: function() {
                            return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
                        },
                        getPopup: function() {
                            return this._popup
                        },
                        _movePopup: function(t) {
                            this._popup.setLatLng(t.latlng)
                        }
                    }), a.LayerGroup = a.Class.extend({
                        initialize: function(t) {
                            this._layers = {};
                            var e, i;
                            if (t)
                                for (e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
                        },
                        addLayer: function(t) {
                            var e = this.getLayerId(t);
                            return this._layers[e] = t, this._map && this._map.addLayer(t), this
                        },
                        removeLayer: function(t) {
                            var e = t in this._layers ? t : this.getLayerId(t);
                            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                        },
                        hasLayer: function(t) {
                            return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
                        },
                        clearLayers: function() {
                            return this.eachLayer(this.removeLayer, this), this
                        },
                        invoke: function(t) {
                            var e, i, n = Array.prototype.slice.call(arguments, 1);
                            for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
                            return this
                        },
                        onAdd: function(t) {
                            this._map = t, this.eachLayer(t.addLayer, t)
                        },
                        onRemove: function(t) {
                            this.eachLayer(t.removeLayer, t), this._map = null
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        eachLayer: function(t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this
                        },
                        getLayer: function(t) {
                            return this._layers[t]
                        },
                        getLayers: function() {
                            var t = [];
                            for (var e in this._layers) t.push(this._layers[e]);
                            return t
                        },
                        setZIndex: function(t) {
                            return this.invoke("setZIndex", t)
                        },
                        getLayerId: function(t) {
                            return a.stamp(t)
                        }
                    }), a.layerGroup = function(t) {
                        return new a.LayerGroup(t)
                    }, a.FeatureGroup = a.LayerGroup.extend({
                        includes: a.Mixin.Events,
                        statics: {
                            EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
                        },
                        addLayer: function(t) {
                            return this.hasLayer(t) ? this : ("on" in t && t.on(a.FeatureGroup.EVENTS, this._propagateEvent, this), a.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
                                layer: t
                            }))
                        },
                        removeLayer: function(t) {
                            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.off(a.FeatureGroup.EVENTS, this._propagateEvent, this), a.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                                layer: t
                            })) : this
                        },
                        bindPopup: function(t, e) {
                            return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
                        },
                        openPopup: function(t) {
                            for (var e in this._layers) {
                                this._layers[e].openPopup(t);
                                break
                            }
                            return this
                        },
                        setStyle: function(t) {
                            return this.invoke("setStyle", t)
                        },
                        bringToFront: function() {
                            return this.invoke("bringToFront")
                        },
                        bringToBack: function() {
                            return this.invoke("bringToBack")
                        },
                        getBounds: function() {
                            var t = new a.LatLngBounds;
                            return this.eachLayer(function(e) {
                                t.extend(e instanceof a.Marker ? e.getLatLng() : e.getBounds())
                            }), t
                        },
                        _propagateEvent: function(t) {
                            t = a.extend({
                                layer: t.target,
                                target: this
                            }, t), this.fire(t.type, t)
                        }
                    }), a.featureGroup = function(t) {
                        return new a.FeatureGroup(t)
                    }, a.Path = a.Class.extend({
                        includes: [a.Mixin.Events],
                        statics: {
                            CLIP_PADDING: function() {
                                var t = a.Browser.mobile ? 1280 : 2e3,
                                    i = (t / Math.max(e.outerWidth, e.outerHeight) - 1) / 2;
                                return Math.max(0, Math.min(.5, i))
                            }()
                        },
                        options: {
                            stroke: !0,
                            color: "#0033ff",
                            dashArray: null,
                            lineCap: null,
                            lineJoin: null,
                            weight: 5,
                            opacity: .5,
                            fill: !1,
                            fillColor: null,
                            fillOpacity: .2,
                            clickable: !0
                        },
                        initialize: function(t) {
                            a.setOptions(this, t)
                        },
                        onAdd: function(t) {
                            this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
                                viewreset: this.projectLatlngs,
                                moveend: this._updatePath
                            }, this)
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        onRemove: function(t) {
                            t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, a.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
                                viewreset: this.projectLatlngs,
                                moveend: this._updatePath
                            }, this)
                        },
                        projectLatlngs: function() {},
                        setStyle: function(t) {
                            return a.setOptions(this, t), this._container && this._updateStyle(), this
                        },
                        redraw: function() {
                            return this._map && (this.projectLatlngs(), this._updatePath()), this
                        }
                    }), a.Map.include({
                        _updatePathViewport: function() {
                            var t = a.Path.CLIP_PADDING,
                                e = this.getSize(),
                                i = a.DomUtil.getPosition(this._mapPane),
                                n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
                                o = n.add(e.multiplyBy(1 + 2 * t)._round());
                            this._pathViewport = new a.Bounds(n, o)
                        }
                    }), a.Path.SVG_NS = "http://www.w3.org/2000/svg", a.Browser.svg = !(!n.createElementNS || !n.createElementNS(a.Path.SVG_NS, "svg").createSVGRect), a.Path = a.Path.extend({
                        statics: {
                            SVG: a.Browser.svg
                        },
                        bringToFront: function() {
                            var t = this._map._pathRoot,
                                e = this._container;
                            return e && t.lastChild !== e && t.appendChild(e), this
                        },
                        bringToBack: function() {
                            var t = this._map._pathRoot,
                                e = this._container,
                                i = t.firstChild;
                            return e && i !== e && t.insertBefore(e, i), this
                        },
                        getPathString: function() {},
                        _createElement: function(t) {
                            return n.createElementNS(a.Path.SVG_NS, t)
                        },
                        _initElements: function() {
                            this._map._initPathRoot(), this._initPath(), this._initStyle()
                        },
                        _initPath: function() {
                            this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && a.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
                        },
                        _initStyle: function() {
                            this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
                        },
                        _updateStyle: function() {
                            this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
                        },
                        _updatePath: function() {
                            var t = this.getPathString();
                            t || (t = "M0 0"), this._path.setAttribute("d", t)
                        },
                        _initEvents: function() {
                            if (this.options.clickable) {
                                (a.Browser.svg || !a.Browser.vml) && a.DomUtil.addClass(this._path, "leaflet-clickable"), a.DomEvent.on(this._container, "click", this._onMouseClick, this);
                                for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) a.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
                            }
                        },
                        _onMouseClick: function(t) {
                            this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
                        },
                        _fireMouseEvent: function(t) {
                            if (this.hasEventListeners(t.type)) {
                                var e = this._map,
                                    i = e.mouseEventToContainerPoint(t),
                                    n = e.containerPointToLayerPoint(i),
                                    o = e.layerPointToLatLng(n);
                                this.fire(t.type, {
                                    latlng: o,
                                    layerPoint: n,
                                    containerPoint: i,
                                    originalEvent: t
                                }), "contextmenu" === t.type && a.DomEvent.preventDefault(t), "mousemove" !== t.type && a.DomEvent.stopPropagation(t)
                            }
                        }
                    }), a.Map.include({
                        _initPathRoot: function() {
                            this._pathRoot || (this._pathRoot = a.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && a.Browser.any3d ? (a.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
                                zoomanim: this._animatePathZoom,
                                zoomend: this._endPathZoom
                            })) : a.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
                        },
                        _animatePathZoom: function(t) {
                            var e = this.getZoomScale(t.zoom),
                                i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
                            this._pathRoot.style[a.DomUtil.TRANSFORM] = a.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
                        },
                        _endPathZoom: function() {
                            this._pathZooming = !1
                        },
                        _updateSvgViewport: function() {
                            if (!this._pathZooming) {
                                this._updatePathViewport();
                                var t = this._pathViewport,
                                    e = t.min,
                                    i = t.max,
                                    n = i.x - e.x,
                                    o = i.y - e.y,
                                    s = this._pathRoot,
                                    r = this._panes.overlayPane;
                                a.Browser.mobileWebkit && r.removeChild(s), a.DomUtil.setPosition(s, e), s.setAttribute("width", n), s.setAttribute("height", o), s.setAttribute("viewBox", [e.x, e.y, n, o].join(" ")), a.Browser.mobileWebkit && r.appendChild(s)
                            }
                        }
                    }), a.Path.include({
                        bindPopup: function(t, e) {
                            return t instanceof a.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new a.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
                        },
                        unbindPopup: function() {
                            return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
                        },
                        openPopup: function(t) {
                            return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                                latlng: t
                            })), this
                        },
                        closePopup: function() {
                            return this._popup && this._popup._close(), this
                        },
                        _openPopup: function(t) {
                            this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
                        }
                    }), a.Browser.vml = !a.Browser.svg && function() {
                        try {
                            var t = n.createElement("div");
                            t.innerHTML = '<v:shape adj="1"/>';
                            var e = t.firstChild;
                            return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
                        } catch (i) {
                            return !1
                        }
                    }(), a.Path = a.Browser.svg || !a.Browser.vml ? a.Path : a.Path.extend({
                        statics: {
                            VML: !0,
                            CLIP_PADDING: .02
                        },
                        _createElement: function() {
                            try {
                                return n.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                                    function(t) {
                                        return n.createElement("<lvml:" + t + ' class="lvml">')
                                    }
                            } catch (t) {
                                return function(t) {
                                    return n.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                                }
                            }
                        }(),
                        _initPath: function() {
                            var t = this._container = this._createElement("shape");
                            a.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && a.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
                        },
                        _initStyle: function() {
                            this._updateStyle()
                        },
                        _updateStyle: function() {
                            var t = this._stroke,
                                e = this._fill,
                                i = this.options,
                                n = this._container;
                            n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, i.dashArray ? t.dashStyle = a.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : t.dashStyle = "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
                        },
                        _updatePath: function() {
                            var t = this._container.style;
                            t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
                        }
                    }), a.Map.include(a.Browser.svg || !a.Browser.vml ? {} : {
                        _initPathRoot: function() {
                            if (!this._pathRoot) {
                                var t = this._pathRoot = n.createElement("div");
                                t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
                            }
                        }
                    }), a.Browser.canvas = function() {
                        return !!n.createElement("canvas").getContext
                    }(), a.Path = a.Path.SVG && !e.L_PREFER_CANVAS || !a.Browser.canvas ? a.Path : a.Path.extend({
                        statics: {
                            CANVAS: !0,
                            SVG: !1
                        },
                        redraw: function() {
                            return this._map && (this.projectLatlngs(), this._requestUpdate()), this
                        },
                        setStyle: function(t) {
                            return a.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
                        },
                        onRemove: function(t) {
                            t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null
                        },
                        _requestUpdate: function() {
                            this._map && !a.Path._updateRequest && (a.Path._updateRequest = a.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
                        },
                        _fireMapMoveEnd: function() {
                            a.Path._updateRequest = null, this.fire("moveend")
                        },
                        _initElements: function() {
                            this._map._initPathRoot(), this._ctx = this._map._canvasCtx
                        },
                        _updateStyle: function() {
                            var t = this.options;
                            t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color), t.lineCap && (this._ctx.lineCap = t.lineCap), t.lineJoin && (this._ctx.lineJoin = t.lineJoin)
                        },
                        _drawPath: function() {
                            var t, e, i, n, o, s;
                            for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
                                for (e = 0, n = this._parts[t].length; n > e; e++) o = this._parts[t][e], s = (0 === e ? "move" : "line") + "To", this._ctx[s](o.x, o.y);
                                this instanceof a.Polygon && this._ctx.closePath()
                            }
                        },
                        _checkIfEmpty: function() {
                            return !this._parts.length
                        },
                        _updatePath: function() {
                            if (!this._checkIfEmpty()) {
                                var t = this._ctx,
                                    e = this.options;
                                this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill(e.fillRule || "evenodd")), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
                            }
                        },
                        _initEvents: function() {
                            this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click dblclick contextmenu", this._fireMouseEvent, this))
                        },
                        _fireMouseEvent: function(t) {
                            this._containsPoint(t.layerPoint) && this.fire(t.type, t)
                        },
                        _onMouseMove: function(t) {
                            this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
                        }
                    }), a.Map.include(a.Path.SVG && !e.L_PREFER_CANVAS || !a.Browser.canvas ? {} : {
                        _initPathRoot: function() {
                            var t, e = this._pathRoot;
                            e || (e = this._pathRoot = n.createElement("canvas"), e.style.position = "absolute", t = this._canvasCtx = e.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(e), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
                        },
                        _updateCanvasViewport: function() {
                            if (!this._pathZooming) {
                                this._updatePathViewport();
                                var t = this._pathViewport,
                                    e = t.min,
                                    i = t.max.subtract(e),
                                    n = this._pathRoot;
                                a.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
                            }
                        }
                    }), a.LineUtil = {
                        simplify: function(t, e) {
                            if (!e || !t.length) return t.slice();
                            var i = e * e;
                            return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
                        },
                        pointToSegmentDistance: function(t, e, i) {
                            return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
                        },
                        closestPointOnSegment: function(t, e, i) {
                            return this._sqClosestPointOnSegment(t, e, i)
                        },
                        _simplifyDP: function(t, e) {
                            var i = t.length,
                                n = typeof Uint8Array != o + "" ? Uint8Array : Array,
                                s = new n(i);
                            s[0] = s[i - 1] = 1, this._simplifyDPStep(t, s, e, 0, i - 1);
                            var a, r = [];
                            for (a = 0; i > a; a++) s[a] && r.push(t[a]);
                            return r
                        },
                        _simplifyDPStep: function(t, e, i, n, o) {
                            var s, a, r, l = 0;
                            for (a = n + 1; o - 1 >= a; a++) r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > l && (s = a, l = r);
                            l > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
                        },
                        _reducePoints: function(t, e) {
                            for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
                            return s - 1 > o && i.push(t[s - 1]), i
                        },
                        clipSegment: function(t, e, i, n) {
                            var o, s, a, r = n ? this._lastCode : this._getBitCode(t, i),
                                l = this._getBitCode(e, i);
                            for (this._lastCode = l;;) {
                                if (!(r | l)) return [t, e];
                                if (r & l) return !1;
                                o = r || l, s = this._getEdgeIntersection(t, e, o, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (e = s, l = a)
                            }
                        },
                        _getEdgeIntersection: function(t, e, i, n) {
                            var o = e.x - t.x,
                                s = e.y - t.y,
                                r = n.min,
                                l = n.max;
                            return 8 & i ? new a.Point(t.x + o * (l.y - t.y) / s, l.y) : 4 & i ? new a.Point(t.x + o * (r.y - t.y) / s, r.y) : 2 & i ? new a.Point(l.x, t.y + s * (l.x - t.x) / o) : 1 & i ? new a.Point(r.x, t.y + s * (r.x - t.x) / o) : void 0
                        },
                        _getBitCode: function(t, e) {
                            var i = 0;
                            return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
                        },
                        _sqDist: function(t, e) {
                            var i = e.x - t.x,
                                n = e.y - t.y;
                            return i * i + n * n
                        },
                        _sqClosestPointOnSegment: function(t, e, i, n) {
                            var o, s = e.x,
                                r = e.y,
                                l = i.x - s,
                                h = i.y - r,
                                u = l * l + h * h;
                            return u > 0 && (o = ((t.x - s) * l + (t.y - r) * h) / u, o > 1 ? (s = i.x, r = i.y) : o > 0 && (s += l * o, r += h * o)), l = t.x - s, h = t.y - r, n ? l * l + h * h : new a.Point(s, r)
                        }
                    }, a.Polyline = a.Path.extend({
                        initialize: function(t, e) {
                            a.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
                        },
                        options: {
                            smoothFactor: 1,
                            noClip: !1
                        },
                        projectLatlngs: function() {
                            this._originalPoints = [];
                            for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
                        },
                        getPathString: function() {
                            for (var t = 0, e = this._parts.length, i = ""; e > t; t++) i += this._getPathPartStr(this._parts[t]);
                            return i
                        },
                        getLatLngs: function() {
                            return this._latlngs
                        },
                        setLatLngs: function(t) {
                            return this._latlngs = this._convertLatLngs(t), this.redraw()
                        },
                        addLatLng: function(t) {
                            return this._latlngs.push(a.latLng(t)), this.redraw()
                        },
                        spliceLatLngs: function() {
                            var t = [].splice.apply(this._latlngs, arguments);
                            return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
                        },
                        closestLayerPoint: function(t) {
                            for (var e, i, n = 1 / 0, o = this._parts, s = null, r = 0, l = o.length; l > r; r++)
                                for (var h = o[r], u = 1, c = h.length; c > u; u++) {
                                    e = h[u - 1], i = h[u];
                                    var d = a.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
                                    n > d && (n = d, s = a.LineUtil._sqClosestPointOnSegment(t, e, i))
                                }
                            return s && (s.distance = Math.sqrt(n)), s
                        },
                        getBounds: function() {
                            return new a.LatLngBounds(this.getLatLngs())
                        },
                        _convertLatLngs: function(t, e) {
                            var i, n, o = e ? t : [];
                            for (i = 0, n = t.length; n > i; i++) {
                                if (a.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
                                o[i] = a.latLng(t[i])
                            }
                            return o
                        },
                        _initEvents: function() {
                            a.Path.prototype._initEvents.call(this)
                        },
                        _getPathPartStr: function(t) {
                            for (var e, i = a.Path.VML, n = 0, o = t.length, s = ""; o > n; n++) e = t[n], i && e._round(), s += (n ? "L" : "M") + e.x + " " + e.y;
                            return s
                        },
                        _clipPoints: function() {
                            var t, e, i, n = this._originalPoints,
                                o = n.length;
                            if (this.options.noClip) return void(this._parts = [n]);
                            this._parts = [];
                            var s = this._parts,
                                r = this._map._pathViewport,
                                l = a.LineUtil;
                            for (t = 0, e = 0; o - 1 > t; t++) i = l.clipSegment(n[t], n[t + 1], r, t), i && (s[e] = s[e] || [], s[e].push(i[0]), (i[1] !== n[t + 1] || t === o - 2) && (s[e].push(i[1]), e++))
                        },
                        _simplifyPoints: function() {
                            for (var t = this._parts, e = a.LineUtil, i = 0, n = t.length; n > i; i++) t[i] = e.simplify(t[i], this.options.smoothFactor)
                        },
                        _updatePath: function() {
                            this._map && (this._clipPoints(), this._simplifyPoints(), a.Path.prototype._updatePath.call(this))
                        }
                    }), a.polyline = function(t, e) {
                        return new a.Polyline(t, e)
                    }, a.PolyUtil = {}, a.PolyUtil.clipPolygon = function(t, e) {
                        var i, n, o, s, r, l, h, u, c, d = [1, 4, 2, 8],
                            p = a.LineUtil;
                        for (n = 0, h = t.length; h > n; n++) t[n]._code = p._getBitCode(t[n], e);
                        for (s = 0; 4 > s; s++) {
                            for (u = d[s], i = [], n = 0, h = t.length, o = h - 1; h > n; o = n++) r = t[n], l = t[o], r._code & u ? l._code & u || (c = p._getEdgeIntersection(l, r, u, e), c._code = p._getBitCode(c, e), i.push(c)) : (l._code & u && (c = p._getEdgeIntersection(l, r, u, e), c._code = p._getBitCode(c, e), i.push(c)), i.push(r));
                            t = i
                        }
                        return t
                    }, a.Polygon = a.Polyline.extend({
                        options: {
                            fill: !0
                        },
                        initialize: function(t, e) {
                            a.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
                        },
                        _initWithHoles: function(t) {
                            var e, i, n;
                            if (t && a.Util.isArray(t[0]) && "number" != typeof t[0][0])
                                for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++) n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
                            t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
                        },
                        projectLatlngs: function() {
                            if (a.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                                var t, e, i, n;
                                for (t = 0, i = this._holes.length; i > t; t++)
                                    for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
                            }
                        },
                        setLatLngs: function(t) {
                            return t && a.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : a.Polyline.prototype.setLatLngs.call(this, t)
                        },
                        _clipPoints: function() {
                            var t = this._originalPoints,
                                e = [];
                            if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
                                for (var i = 0, n = this._parts.length; n > i; i++) {
                                    var o = a.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                                    o.length && e.push(o)
                                }
                                this._parts = e
                            }
                        },
                        _getPathPartStr: function(t) {
                            var e = a.Polyline.prototype._getPathPartStr.call(this, t);
                            return e + (a.Browser.svg ? "z" : "x")
                        }
                    }), a.polygon = function(t, e) {
                        return new a.Polygon(t, e)
                    },
                    function() {
                        function t(t) {
                            return a.FeatureGroup.extend({
                                initialize: function(t, e) {
                                    this._layers = {}, this._options = e, this.setLatLngs(t)
                                },
                                setLatLngs: function(e) {
                                    var i = 0,
                                        n = e.length;
                                    for (this.eachLayer(function(t) {
                                            n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                                        }, this); n > i;) this.addLayer(new t(e[i++], this._options));
                                    return this
                                },
                                getLatLngs: function() {
                                    var t = [];
                                    return this.eachLayer(function(e) {
                                        t.push(e.getLatLngs())
                                    }), t
                                }
                            })
                        }
                        a.MultiPolyline = t(a.Polyline), a.MultiPolygon = t(a.Polygon), a.multiPolyline = function(t, e) {
                            return new a.MultiPolyline(t, e)
                        }, a.multiPolygon = function(t, e) {
                            return new a.MultiPolygon(t, e)
                        }
                    }(), a.Rectangle = a.Polygon.extend({
                        initialize: function(t, e) {
                            a.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                        },
                        setBounds: function(t) {
                            this.setLatLngs(this._boundsToLatLngs(t))
                        },
                        _boundsToLatLngs: function(t) {
                            return t = a.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                        }
                    }), a.rectangle = function(t, e) {
                        return new a.Rectangle(t, e)
                    }, a.Circle = a.Path.extend({
                        initialize: function(t, e, i) {
                            a.Path.prototype.initialize.call(this, i), this._latlng = a.latLng(t), this._mRadius = e
                        },
                        options: {
                            fill: !0
                        },
                        setLatLng: function(t) {
                            return this._latlng = a.latLng(t), this.redraw()
                        },
                        setRadius: function(t) {
                            return this._mRadius = t, this.redraw()
                        },
                        projectLatlngs: function() {
                            var t = this._getLngRadius(),
                                e = this._latlng,
                                i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
                            this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
                        },
                        getBounds: function() {
                            var t = this._getLngRadius(),
                                e = this._mRadius / 40075017 * 360,
                                i = this._latlng;
                            return new a.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        getPathString: function() {
                            var t = this._point,
                                e = this._radius;
                            return this._checkIfEmpty() ? "" : a.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
                        },
                        getRadius: function() {
                            return this._mRadius
                        },
                        _getLatRadius: function() {
                            return this._mRadius / 40075017 * 360
                        },
                        _getLngRadius: function() {
                            return this._getLatRadius() / Math.cos(a.LatLng.DEG_TO_RAD * this._latlng.lat)
                        },
                        _checkIfEmpty: function() {
                            if (!this._map) return !1;
                            var t = this._map._pathViewport,
                                e = this._radius,
                                i = this._point;
                            return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
                        }
                    }), a.circle = function(t, e, i) {
                        return new a.Circle(t, e, i)
                    }, a.CircleMarker = a.Circle.extend({
                        options: {
                            radius: 10,
                            weight: 2
                        },
                        initialize: function(t, e) {
                            a.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
                        },
                        projectLatlngs: function() {
                            this._point = this._map.latLngToLayerPoint(this._latlng)
                        },
                        _updateStyle: function() {
                            a.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
                        },
                        setLatLng: function(t) {
                            return a.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
                        },
                        setRadius: function(t) {
                            return this.options.radius = this._radius = t, this.redraw()
                        },
                        getRadius: function() {
                            return this._radius
                        }
                    }), a.circleMarker = function(t, e) {
                        return new a.CircleMarker(t, e)
                    }, a.Polyline.include(a.Path.CANVAS ? {
                        _containsPoint: function(t, e) {
                            var i, n, o, s, r, l, h, u = this.options.weight / 2;
                            for (a.Browser.touch && (u += 10), i = 0, s = this._parts.length; s > i; i++)
                                for (h = this._parts[i], n = 0, r = h.length, o = r - 1; r > n; o = n++)
                                    if ((e || 0 !== n) && (l = a.LineUtil.pointToSegmentDistance(t, h[o], h[n]), u >= l)) return !0;
                            return !1
                        }
                    } : {}), a.Polygon.include(a.Path.CANVAS ? {
                        _containsPoint: function(t) {
                            var e, i, n, o, s, r, l, h, u = !1;
                            if (a.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
                            for (o = 0, l = this._parts.length; l > o; o++)
                                for (e = this._parts[o], s = 0, h = e.length, r = h - 1; h > s; r = s++) i = e[s], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
                            return u
                        }
                    } : {}), a.Circle.include(a.Path.CANVAS ? {
                        _drawPath: function() {
                            var t = this._point;
                            this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
                        },
                        _containsPoint: function(t) {
                            var e = this._point,
                                i = this.options.stroke ? this.options.weight / 2 : 0;
                            return t.distanceTo(e) <= this._radius + i
                        }
                    } : {}), a.CircleMarker.include(a.Path.CANVAS ? {
                        _updateStyle: function() {
                            a.Path.prototype._updateStyle.call(this)
                        }
                    } : {}), a.GeoJSON = a.FeatureGroup.extend({
                        initialize: function(t, e) {
                            a.setOptions(this, e), this._layers = {}, t && this.addData(t)
                        },
                        addData: function(t) {
                            var e, i, n, o = a.Util.isArray(t) ? t : t.features;
                            if (o) {
                                for (e = 0, i = o.length; i > e; e++) n = o[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(o[e]);
                                return this
                            }
                            var s = this.options;
                            if (!s.filter || s.filter(t)) {
                                var r = a.GeoJSON.geometryToLayer(t, s.pointToLayer, s.coordsToLatLng, s);
                                return r.feature = a.GeoJSON.asFeature(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)
                            }
                        },
                        resetStyle: function(t) {
                            var e = this.options.style;
                            e && (a.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
                        },
                        setStyle: function(t) {
                            this.eachLayer(function(e) {
                                this._setLayerStyle(e, t)
                            }, this)
                        },
                        _setLayerStyle: function(t, e) {
                            "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
                        }
                    }), a.extend(a.GeoJSON, {
                        geometryToLayer: function(t, e, i, n) {
                            var o, s, r, l, h = "Feature" === t.type ? t.geometry : t,
                                u = h.coordinates,
                                c = [];
                            switch (i = i || this.coordsToLatLng, h.type) {
                                case "Point":
                                    return o = i(u), e ? e(t, o) : new a.Marker(o);
                                case "MultiPoint":
                                    for (r = 0, l = u.length; l > r; r++) o = i(u[r]), c.push(e ? e(t, o) : new a.Marker(o));
                                    return new a.FeatureGroup(c);
                                case "LineString":
                                    return s = this.coordsToLatLngs(u, 0, i), new a.Polyline(s, n);
                                case "Polygon":
                                    if (2 === u.length && !u[1].length) throw new Error("Invalid GeoJSON object.");
                                    return s = this.coordsToLatLngs(u, 1, i), new a.Polygon(s, n);
                                case "MultiLineString":
                                    return s = this.coordsToLatLngs(u, 1, i), new a.MultiPolyline(s, n);
                                case "MultiPolygon":
                                    return s = this.coordsToLatLngs(u, 2, i), new a.MultiPolygon(s, n);
                                case "GeometryCollection":
                                    for (r = 0, l = h.geometries.length; l > r; r++) c.push(this.geometryToLayer({
                                        geometry: h.geometries[r],
                                        type: "Feature",
                                        properties: t.properties
                                    }, e, i, n));
                                    return new a.FeatureGroup(c);
                                default:
                                    throw new Error("Invalid GeoJSON object.")
                            }
                        },
                        coordsToLatLng: function(t) {
                            return new a.LatLng(t[1], t[0], t[2])
                        },
                        coordsToLatLngs: function(t, e, i) {
                            var n, o, s, a = [];
                            for (o = 0, s = t.length; s > o; o++) n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), a.push(n);
                            return a
                        },
                        latLngToCoords: function(t) {
                            var e = [t.lng, t.lat];
                            return t.alt !== o && e.push(t.alt), e
                        },
                        latLngsToCoords: function(t) {
                            for (var e = [], i = 0, n = t.length; n > i; i++) e.push(a.GeoJSON.latLngToCoords(t[i]));
                            return e
                        },
                        getFeature: function(t, e) {
                            return t.feature ? a.extend({}, t.feature, {
                                geometry: e
                            }) : a.GeoJSON.asFeature(e)
                        },
                        asFeature: function(t) {
                            return "Feature" === t.type ? t : {
                                type: "Feature",
                                properties: {},
                                geometry: t
                            }
                        }
                    });
                var l = {
                    toGeoJSON: function() {
                        return a.GeoJSON.getFeature(this, {
                            type: "Point",
                            coordinates: a.GeoJSON.latLngToCoords(this.getLatLng())
                        })
                    }
                };
                a.Marker.include(l), a.Circle.include(l), a.CircleMarker.include(l), a.Polyline.include({
                        toGeoJSON: function() {
                            return a.GeoJSON.getFeature(this, {
                                type: "LineString",
                                coordinates: a.GeoJSON.latLngsToCoords(this.getLatLngs())
                            })
                        }
                    }), a.Polygon.include({
                        toGeoJSON: function() {
                            var t, e, i, n = [a.GeoJSON.latLngsToCoords(this.getLatLngs())];
                            if (n[0].push(n[0][0]), this._holes)
                                for (t = 0, e = this._holes.length; e > t; t++) i = a.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
                            return a.GeoJSON.getFeature(this, {
                                type: "Polygon",
                                coordinates: n
                            })
                        }
                    }),
                    function() {
                        function t(t) {
                            return function() {
                                var e = [];
                                return this.eachLayer(function(t) {
                                    e.push(t.toGeoJSON().geometry.coordinates)
                                }), a.GeoJSON.getFeature(this, {
                                    type: t,
                                    coordinates: e
                                })
                            }
                        }
                        a.MultiPolyline.include({
                            toGeoJSON: t("MultiLineString")
                        }), a.MultiPolygon.include({
                            toGeoJSON: t("MultiPolygon")
                        }), a.LayerGroup.include({
                            toGeoJSON: function() {
                                var e, i = this.feature && this.feature.geometry,
                                    n = [];
                                if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);
                                var o = i && "GeometryCollection" === i.type;
                                return this.eachLayer(function(t) {
                                    t.toGeoJSON && (e = t.toGeoJSON(), n.push(o ? e.geometry : a.GeoJSON.asFeature(e)))
                                }), o ? a.GeoJSON.getFeature(this, {
                                    geometries: n,
                                    type: "GeometryCollection"
                                }) : {
                                    type: "FeatureCollection",
                                    features: n
                                }
                            }
                        })
                    }(), a.geoJson = function(t, e) {
                        return new a.GeoJSON(t, e)
                    }, a.DomEvent = {
                        addListener: function(t, e, i, n) {
                            var o, s, r, l = a.stamp(i),
                                h = "_leaflet_" + e + l;
                            return t[h] ? this : (o = function(e) {
                                return i.call(n || t, e || a.DomEvent._getEvent())
                            }, a.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, o, l) : (a.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, o, l), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(e, o, !1)) : "mouseenter" === e || "mouseleave" === e ? (s = o, r = "mouseenter" === e ? "mouseover" : "mouseout", o = function(e) {
                                return a.DomEvent._checkMouse(t, e) ? s(e) : void 0
                            }, t.addEventListener(r, o, !1)) : "click" === e && a.Browser.android ? (s = o, o = function(t) {
                                return a.DomEvent._filterClick(t, s)
                            }, t.addEventListener(e, o, !1)) : t.addEventListener(e, o, !1) : "attachEvent" in t && t.attachEvent("on" + e, o), t[h] = o, this))
                        },
                        removeListener: function(t, e, i) {
                            var n = a.stamp(i),
                                o = "_leaflet_" + e + n,
                                s = t[o];
                            return s ? (a.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : a.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", s, !1), t.removeEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", s, !1) : t.removeEventListener(e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s), t[o] = null, this) : this
                        },
                        stopPropagation: function(t) {
                            return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, a.DomEvent._skipped(t), this
                        },
                        disableScrollPropagation: function(t) {
                            var e = a.DomEvent.stopPropagation;
                            return a.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
                        },
                        disableClickPropagation: function(t) {
                            for (var e = a.DomEvent.stopPropagation, i = a.Draggable.START.length - 1; i >= 0; i--) a.DomEvent.on(t, a.Draggable.START[i], e);
                            return a.DomEvent.on(t, "click", a.DomEvent._fakeStop).on(t, "dblclick", e)
                        },
                        preventDefault: function(t) {
                            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
                        },
                        stop: function(t) {
                            return a.DomEvent.preventDefault(t).stopPropagation(t)
                        },
                        getMousePosition: function(t, e) {
                            if (!e) return new a.Point(t.clientX, t.clientY);
                            var i = e.getBoundingClientRect();
                            return new a.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
                        },
                        getWheelDelta: function(t) {
                            var e = 0;
                            return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
                        },
                        _skipEvents: {},
                        _fakeStop: function(t) {
                            a.DomEvent._skipEvents[t.type] = !0
                        },
                        _skipped: function(t) {
                            var e = this._skipEvents[t.type];
                            return this._skipEvents[t.type] = !1, e
                        },
                        _checkMouse: function(t, e) {
                            var i = e.relatedTarget;
                            if (!i) return !0;
                            try {
                                for (; i && i !== t;) i = i.parentNode
                            } catch (n) {
                                return !1
                            }
                            return i !== t
                        },
                        _getEvent: function() {
                            var t = e.event;
                            if (!t)
                                for (var i = arguments.callee.caller; i && (t = i.arguments[0], !t || e.Event !== t.constructor);) i = i.caller;
                            return t
                        },
                        _filterClick: function(t, e) {
                            var i = t.timeStamp || t.originalEvent.timeStamp,
                                n = a.DomEvent._lastClick && i - a.DomEvent._lastClick;
                            return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void a.DomEvent.stop(t) : (a.DomEvent._lastClick = i,
                                e(t))
                        }
                    }, a.DomEvent.on = a.DomEvent.addListener, a.DomEvent.off = a.DomEvent.removeListener, a.Draggable = a.Class.extend({
                        includes: a.Mixin.Events,
                        statics: {
                            START: a.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                            END: {
                                mousedown: "mouseup",
                                touchstart: "touchend",
                                pointerdown: "touchend",
                                MSPointerDown: "touchend"
                            },
                            MOVE: {
                                mousedown: "mousemove",
                                touchstart: "touchmove",
                                pointerdown: "touchmove",
                                MSPointerDown: "touchmove"
                            }
                        },
                        initialize: function(t, e) {
                            this._element = t, this._dragStartTarget = e || t
                        },
                        enable: function() {
                            if (!this._enabled) {
                                for (var t = a.Draggable.START.length - 1; t >= 0; t--) a.DomEvent.on(this._dragStartTarget, a.Draggable.START[t], this._onDown, this);
                                this._enabled = !0
                            }
                        },
                        disable: function() {
                            if (this._enabled) {
                                for (var t = a.Draggable.START.length - 1; t >= 0; t--) a.DomEvent.off(this._dragStartTarget, a.Draggable.START[t], this._onDown, this);
                                this._enabled = !1, this._moved = !1
                            }
                        },
                        _onDown: function(t) {
                            if (this._moved = !1, !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (a.DomEvent.stopPropagation(t), !a.Draggable._disabled && (a.DomUtil.disableImageDrag(), a.DomUtil.disableTextSelection(), !this._moving))) {
                                var e = t.touches ? t.touches[0] : t;
                                this._startPoint = new a.Point(e.clientX, e.clientY), this._startPos = this._newPos = a.DomUtil.getPosition(this._element), a.DomEvent.on(n, a.Draggable.MOVE[t.type], this._onMove, this).on(n, a.Draggable.END[t.type], this._onUp, this)
                            }
                        },
                        _onMove: function(t) {
                            if (t.touches && t.touches.length > 1) return void(this._moved = !0);
                            var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                i = new a.Point(e.clientX, e.clientY),
                                o = i.subtract(this._startPoint);
                            (o.x || o.y) && (a.Browser.touch && Math.abs(o.x) + Math.abs(o.y) < 3 || (a.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = a.DomUtil.getPosition(this._element).subtract(o), a.DomUtil.addClass(n.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, a.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(o), this._moving = !0, a.Util.cancelAnimFrame(this._animRequest), this._animRequest = a.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
                        },
                        _updatePosition: function() {
                            this.fire("predrag"), a.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
                        },
                        _onUp: function() {
                            a.DomUtil.removeClass(n.body, "leaflet-dragging"), this._lastTarget && (a.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
                            for (var t in a.Draggable.MOVE) a.DomEvent.off(n, a.Draggable.MOVE[t], this._onMove).off(n, a.Draggable.END[t], this._onUp);
                            a.DomUtil.enableImageDrag(), a.DomUtil.enableTextSelection(), this._moved && this._moving && (a.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                                distance: this._newPos.distanceTo(this._startPos)
                            })), this._moving = !1
                        }
                    }), a.Handler = a.Class.extend({
                        initialize: function(t) {
                            this._map = t
                        },
                        enable: function() {
                            this._enabled || (this._enabled = !0, this.addHooks())
                        },
                        disable: function() {
                            this._enabled && (this._enabled = !1, this.removeHooks())
                        },
                        enabled: function() {
                            return !!this._enabled
                        }
                    }), a.Map.mergeOptions({
                        dragging: !0,
                        inertia: !a.Browser.android23,
                        inertiaDeceleration: 3400,
                        inertiaMaxSpeed: 1 / 0,
                        inertiaThreshold: a.Browser.touch ? 32 : 18,
                        easeLinearity: .25,
                        worldCopyJump: !1
                    }), a.Map.Drag = a.Handler.extend({
                        addHooks: function() {
                            if (!this._draggable) {
                                var t = this._map;
                                this._draggable = new a.Draggable(t._mapPane, t._container), this._draggable.on({
                                    dragstart: this._onDragStart,
                                    drag: this._onDrag,
                                    dragend: this._onDragEnd
                                }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
                            }
                            this._draggable.enable()
                        },
                        removeHooks: function() {
                            this._draggable.disable()
                        },
                        moved: function() {
                            return this._draggable && this._draggable._moved
                        },
                        _onDragStart: function() {
                            var t = this._map;
                            t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
                        },
                        _onDrag: function() {
                            if (this._map.options.inertia) {
                                var t = this._lastTime = +new Date,
                                    e = this._lastPos = this._draggable._newPos;
                                this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
                            }
                            this._map.fire("move").fire("drag")
                        },
                        _onViewReset: function() {
                            var t = this._map.getSize()._divideBy(2),
                                e = this._map.latLngToLayerPoint([0, 0]);
                            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
                        },
                        _onPreDrag: function() {
                            var t = this._worldWidth,
                                e = Math.round(t / 2),
                                i = this._initialWorldOffset,
                                n = this._draggable._newPos.x,
                                o = (n - e + i) % t + e - i,
                                s = (n + e + i) % t - e - i,
                                a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                            this._draggable._newPos.x = a
                        },
                        _onDragEnd: function(t) {
                            var e = this._map,
                                i = e.options,
                                n = +new Date - this._lastTime,
                                o = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
                            if (e.fire("dragend", t), o) e.fire("moveend");
                            else {
                                var s = this._lastPos.subtract(this._positions[0]),
                                    r = (this._lastTime + n - this._times[0]) / 1e3,
                                    l = i.easeLinearity,
                                    h = s.multiplyBy(l / r),
                                    u = h.distanceTo([0, 0]),
                                    c = Math.min(i.inertiaMaxSpeed, u),
                                    d = h.multiplyBy(c / u),
                                    p = c / (i.inertiaDeceleration * l),
                                    m = d.multiplyBy(-p / 2).round();
                                m.x && m.y ? (m = e._limitOffset(m, e.options.maxBounds), a.Util.requestAnimFrame(function() {
                                    e.panBy(m, {
                                        duration: p,
                                        easeLinearity: l,
                                        noMoveStart: !0
                                    })
                                })) : e.fire("moveend")
                            }
                        }
                    }), a.Map.addInitHook("addHandler", "dragging", a.Map.Drag), a.Map.mergeOptions({
                        doubleClickZoom: !0
                    }), a.Map.DoubleClickZoom = a.Handler.extend({
                        addHooks: function() {
                            this._map.on("dblclick", this._onDoubleClick, this)
                        },
                        removeHooks: function() {
                            this._map.off("dblclick", this._onDoubleClick, this)
                        },
                        _onDoubleClick: function(t) {
                            var e = this._map,
                                i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
                            "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
                        }
                    }), a.Map.addInitHook("addHandler", "doubleClickZoom", a.Map.DoubleClickZoom), a.Map.mergeOptions({
                        scrollWheelZoom: !0
                    }), a.Map.ScrollWheelZoom = a.Handler.extend({
                        addHooks: function() {
                            a.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), a.DomEvent.on(this._map._container, "MozMousePixelScroll", a.DomEvent.preventDefault), this._delta = 0
                        },
                        removeHooks: function() {
                            a.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), a.DomEvent.off(this._map._container, "MozMousePixelScroll", a.DomEvent.preventDefault)
                        },
                        _onWheelScroll: function(t) {
                            var e = a.DomEvent.getWheelDelta(t);
                            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                            var i = Math.max(40 - (+new Date - this._startTime), 0);
                            clearTimeout(this._timer), this._timer = setTimeout(a.bind(this._performZoom, this), i), a.DomEvent.preventDefault(t), a.DomEvent.stopPropagation(t)
                        },
                        _performZoom: function() {
                            var t = this._map,
                                e = this._delta,
                                i = t.getZoom();
                            e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
                        }
                    }), a.Map.addInitHook("addHandler", "scrollWheelZoom", a.Map.ScrollWheelZoom), a.extend(a.DomEvent, {
                        _touchstart: a.Browser.msPointer ? "MSPointerDown" : a.Browser.pointer ? "pointerdown" : "touchstart",
                        _touchend: a.Browser.msPointer ? "MSPointerUp" : a.Browser.pointer ? "pointerup" : "touchend",
                        addDoubleTapListener: function(t, e, i) {
                            function o(t) {
                                var e;
                                if (a.Browser.pointer ? (m.push(t.pointerId), e = m.length) : e = t.touches.length, !(e > 1)) {
                                    var i = Date.now(),
                                        n = i - (r || i);
                                    l = t.touches ? t.touches[0] : t, h = n > 0 && u >= n, r = i
                                }
                            }

                            function s(t) {
                                if (a.Browser.pointer) {
                                    var i = m.indexOf(t.pointerId);
                                    if (-1 === i) return;
                                    m.splice(i, 1)
                                }
                                if (h) {
                                    if (a.Browser.pointer) {
                                        var n, o = {};
                                        for (var s in l) n = l[s], "function" == typeof n ? o[s] = n.bind(l) : o[s] = n;
                                        l = o
                                    }
                                    l.type = "dblclick", e(l), r = null
                                }
                            }
                            var r, l, h = !1,
                                u = 250,
                                c = "_leaflet_",
                                d = this._touchstart,
                                p = this._touchend,
                                m = [];
                            t[c + d + i] = o, t[c + p + i] = s;
                            var _ = a.Browser.pointer ? n.documentElement : t;
                            return t.addEventListener(d, o, !1), _.addEventListener(p, s, !1), a.Browser.pointer && _.addEventListener(a.DomEvent.POINTER_CANCEL, s, !1), this
                        },
                        removeDoubleTapListener: function(t, e) {
                            var i = "_leaflet_";
                            return t.removeEventListener(this._touchstart, t[i + this._touchstart + e], !1), (a.Browser.pointer ? n.documentElement : t).removeEventListener(this._touchend, t[i + this._touchend + e], !1), a.Browser.pointer && n.documentElement.removeEventListener(a.DomEvent.POINTER_CANCEL, t[i + this._touchend + e], !1), this
                        }
                    }), a.extend(a.DomEvent, {
                        POINTER_DOWN: a.Browser.msPointer ? "MSPointerDown" : "pointerdown",
                        POINTER_MOVE: a.Browser.msPointer ? "MSPointerMove" : "pointermove",
                        POINTER_UP: a.Browser.msPointer ? "MSPointerUp" : "pointerup",
                        POINTER_CANCEL: a.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
                        _pointers: [],
                        _pointerDocumentListener: !1,
                        addPointerListener: function(t, e, i, n) {
                            switch (e) {
                                case "touchstart":
                                    return this.addPointerListenerStart(t, e, i, n);
                                case "touchend":
                                    return this.addPointerListenerEnd(t, e, i, n);
                                case "touchmove":
                                    return this.addPointerListenerMove(t, e, i, n);
                                default:
                                    throw "Unknown touch event type"
                            }
                        },
                        addPointerListenerStart: function(t, e, i, o) {
                            var s = "_leaflet_",
                                r = this._pointers,
                                l = function(t) {
                                    a.DomEvent.preventDefault(t);
                                    for (var e = !1, n = 0; n < r.length; n++)
                                        if (r[n].pointerId === t.pointerId) {
                                            e = !0;
                                            break
                                        }
                                    e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], i(t)
                                };
                            if (t[s + "touchstart" + o] = l, t.addEventListener(this.POINTER_DOWN, l, !1), !this._pointerDocumentListener) {
                                var h = function(t) {
                                    for (var e = 0; e < r.length; e++)
                                        if (r[e].pointerId === t.pointerId) {
                                            r.splice(e, 1);
                                            break
                                        }
                                };
                                n.documentElement.addEventListener(this.POINTER_UP, h, !1), n.documentElement.addEventListener(this.POINTER_CANCEL, h, !1), this._pointerDocumentListener = !0
                            }
                            return this
                        },
                        addPointerListenerMove: function(t, e, i, n) {
                            function o(t) {
                                if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
                                    for (var e = 0; e < a.length; e++)
                                        if (a[e].pointerId === t.pointerId) {
                                            a[e] = t;
                                            break
                                        }
                                    t.touches = a.slice(), t.changedTouches = [t], i(t)
                                }
                            }
                            var s = "_leaflet_",
                                a = this._pointers;
                            return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this
                        },
                        addPointerListenerEnd: function(t, e, i, n) {
                            var o = "_leaflet_",
                                s = this._pointers,
                                a = function(t) {
                                    for (var e = 0; e < s.length; e++)
                                        if (s[e].pointerId === t.pointerId) {
                                            s.splice(e, 1);
                                            break
                                        }
                                    t.touches = s.slice(), t.changedTouches = [t], i(t)
                                };
                            return t[o + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this
                        },
                        removePointerListener: function(t, e, i) {
                            var n = "_leaflet_",
                                o = t[n + e + i];
                            switch (e) {
                                case "touchstart":
                                    t.removeEventListener(this.POINTER_DOWN, o, !1);
                                    break;
                                case "touchmove":
                                    t.removeEventListener(this.POINTER_MOVE, o, !1);
                                    break;
                                case "touchend":
                                    t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)
                            }
                            return this
                        }
                    }), a.Map.mergeOptions({
                        touchZoom: a.Browser.touch && !a.Browser.android23,
                        bounceAtZoomLimits: !0
                    }), a.Map.TouchZoom = a.Handler.extend({
                        addHooks: function() {
                            a.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
                        },
                        removeHooks: function() {
                            a.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
                        },
                        _onTouchStart: function(t) {
                            var e = this._map;
                            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                                var i = e.mouseEventToLayerPoint(t.touches[0]),
                                    o = e.mouseEventToLayerPoint(t.touches[1]),
                                    s = e._getCenterLayerPoint();
                                this._startCenter = i.add(o)._divideBy(2), this._startDist = i.distanceTo(o), this._moved = !1, this._zooming = !0, this._centerOffset = s.subtract(this._startCenter), e._panAnim && e._panAnim.stop(), a.DomEvent.on(n, "touchmove", this._onTouchMove, this).on(n, "touchend", this._onTouchEnd, this), a.DomEvent.preventDefault(t)
                            }
                        },
                        _onTouchMove: function(t) {
                            var e = this._map;
                            if (t.touches && 2 === t.touches.length && this._zooming) {
                                var i = e.mouseEventToLayerPoint(t.touches[0]),
                                    n = e.mouseEventToLayerPoint(t.touches[1]);
                                this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (a.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), a.Util.cancelAnimFrame(this._animRequest), this._animRequest = a.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), a.DomEvent.preventDefault(t))
                            }
                        },
                        _updateOnMove: function() {
                            var t = this._map,
                                e = this._getScaleOrigin(),
                                i = t.layerPointToLatLng(e),
                                n = t.getScaleZoom(this._scale);
                            t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
                        },
                        _onTouchEnd: function() {
                            if (!this._moved || !this._zooming) return void(this._zooming = !1);
                            var t = this._map;
                            this._zooming = !1, a.DomUtil.removeClass(t._mapPane, "leaflet-touching"), a.Util.cancelAnimFrame(this._animRequest), a.DomEvent.off(n, "touchmove", this._onTouchMove).off(n, "touchend", this._onTouchEnd);
                            var e = this._getScaleOrigin(),
                                i = t.layerPointToLatLng(e),
                                o = t.getZoom(),
                                s = t.getScaleZoom(this._scale) - o,
                                r = s > 0 ? Math.ceil(s) : Math.floor(s),
                                l = t._limitZoom(o + r),
                                h = t.getZoomScale(l) / this._scale;
                            t._animateZoom(i, l, e, h)
                        },
                        _getScaleOrigin: function() {
                            var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                            return this._startCenter.add(t)
                        }
                    }), a.Map.addInitHook("addHandler", "touchZoom", a.Map.TouchZoom), a.Map.mergeOptions({
                        tap: !0,
                        tapTolerance: 15
                    }), a.Map.Tap = a.Handler.extend({
                        addHooks: function() {
                            a.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
                        },
                        removeHooks: function() {
                            a.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
                        },
                        _onDown: function(t) {
                            if (t.touches) {
                                if (a.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                                var e = t.touches[0],
                                    i = e.target;
                                this._startPos = this._newPos = new a.Point(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && a.DomUtil.addClass(i, "leaflet-active"), this._holdTimeout = setTimeout(a.bind(function() {
                                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                                }, this), 1e3), a.DomEvent.on(n, "touchmove", this._onMove, this).on(n, "touchend", this._onUp, this)
                            }
                        },
                        _onUp: function(t) {
                            if (clearTimeout(this._holdTimeout), a.DomEvent.off(n, "touchmove", this._onMove, this).off(n, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
                                var e = t.changedTouches[0],
                                    i = e.target;
                                i && i.tagName && "a" === i.tagName.toLowerCase() && a.DomUtil.removeClass(i, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", e)
                            }
                        },
                        _isTapValid: function() {
                            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                        },
                        _onMove: function(t) {
                            var e = t.touches[0];
                            this._newPos = new a.Point(e.clientX, e.clientY)
                        },
                        _simulateEvent: function(t, i) {
                            var o = n.createEvent("MouseEvents");
                            o._simulated = !0, i.target._simulatedClick = !0, o.initMouseEvent(t, !0, !0, e, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(o)
                        }
                    }), a.Browser.touch && !a.Browser.pointer && a.Map.addInitHook("addHandler", "tap", a.Map.Tap), a.Map.mergeOptions({
                        boxZoom: !0
                    }), a.Map.BoxZoom = a.Handler.extend({
                        initialize: function(t) {
                            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
                        },
                        addHooks: function() {
                            a.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
                        },
                        removeHooks: function() {
                            a.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
                        },
                        moved: function() {
                            return this._moved
                        },
                        _onMouseDown: function(t) {
                            return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (a.DomUtil.disableTextSelection(), a.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void a.DomEvent.on(n, "mousemove", this._onMouseMove, this).on(n, "mouseup", this._onMouseUp, this).on(n, "keydown", this._onKeyDown, this))
                        },
                        _onMouseMove: function(t) {
                            this._moved || (this._box = a.DomUtil.create("div", "leaflet-zoom-box", this._pane), a.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
                            var e = this._startLayerPoint,
                                i = this._box,
                                n = this._map.mouseEventToLayerPoint(t),
                                o = n.subtract(e),
                                s = new a.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
                            a.DomUtil.setPosition(i, s), this._moved = !0, i.style.width = Math.max(0, Math.abs(o.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(o.y) - 4) + "px"
                        },
                        _finish: function() {
                            this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), a.DomUtil.enableTextSelection(), a.DomUtil.enableImageDrag(), a.DomEvent.off(n, "mousemove", this._onMouseMove).off(n, "mouseup", this._onMouseUp).off(n, "keydown", this._onKeyDown)
                        },
                        _onMouseUp: function(t) {
                            this._finish();
                            var e = this._map,
                                i = e.mouseEventToLayerPoint(t);
                            if (!this._startLayerPoint.equals(i)) {
                                var n = new a.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
                                e.fitBounds(n), e.fire("boxzoomend", {
                                    boxZoomBounds: n
                                })
                            }
                        },
                        _onKeyDown: function(t) {
                            27 === t.keyCode && this._finish()
                        }
                    }), a.Map.addInitHook("addHandler", "boxZoom", a.Map.BoxZoom), a.Map.mergeOptions({
                        keyboard: !0,
                        keyboardPanOffset: 80,
                        keyboardZoomOffset: 1
                    }), a.Map.Keyboard = a.Handler.extend({
                        keyCodes: {
                            left: [37],
                            right: [39],
                            down: [40],
                            up: [38],
                            zoomIn: [187, 107, 61, 171],
                            zoomOut: [189, 109, 173]
                        },
                        initialize: function(t) {
                            this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
                        },
                        addHooks: function() {
                            var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), a.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
                        },
                        removeHooks: function() {
                            this._removeHooks();
                            var t = this._map._container;
                            a.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
                        },
                        _onMouseDown: function() {
                            if (!this._focused) {
                                var t = n.body,
                                    i = n.documentElement,
                                    o = t.scrollTop || i.scrollTop,
                                    s = t.scrollLeft || i.scrollLeft;
                                this._map._container.focus(), e.scrollTo(s, o)
                            }
                        },
                        _onFocus: function() {
                            this._focused = !0, this._map.fire("focus")
                        },
                        _onBlur: function() {
                            this._focused = !1, this._map.fire("blur")
                        },
                        _setPanOffset: function(t) {
                            var e, i, n = this._panKeys = {},
                                o = this.keyCodes;
                            for (e = 0, i = o.left.length; i > e; e++) n[o.left[e]] = [-1 * t, 0];
                            for (e = 0, i = o.right.length; i > e; e++) n[o.right[e]] = [t, 0];
                            for (e = 0, i = o.down.length; i > e; e++) n[o.down[e]] = [0, t];
                            for (e = 0, i = o.up.length; i > e; e++) n[o.up[e]] = [0, -1 * t]
                        },
                        _setZoomOffset: function(t) {
                            var e, i, n = this._zoomKeys = {},
                                o = this.keyCodes;
                            for (e = 0, i = o.zoomIn.length; i > e; e++) n[o.zoomIn[e]] = t;
                            for (e = 0, i = o.zoomOut.length; i > e; e++) n[o.zoomOut[e]] = -t
                        },
                        _addHooks: function() {
                            a.DomEvent.on(n, "keydown", this._onKeyDown, this)
                        },
                        _removeHooks: function() {
                            a.DomEvent.off(n, "keydown", this._onKeyDown, this)
                        },
                        _onKeyDown: function(t) {
                            var e = t.keyCode,
                                i = this._map;
                            if (e in this._panKeys) {
                                if (i._panAnim && i._panAnim._inProgress) return;
                                i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
                            } else {
                                if (!(e in this._zoomKeys)) return;
                                i.setZoom(i.getZoom() + this._zoomKeys[e])
                            }
                            a.DomEvent.stop(t)
                        }
                    }), a.Map.addInitHook("addHandler", "keyboard", a.Map.Keyboard), a.Handler.MarkerDrag = a.Handler.extend({
                        initialize: function(t) {
                            this._marker = t
                        },
                        addHooks: function() {
                            var t = this._marker._icon;
                            this._draggable || (this._draggable = new a.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), a.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
                        },
                        removeHooks: function() {
                            this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), a.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
                        },
                        moved: function() {
                            return this._draggable && this._draggable._moved
                        },
                        _onDragStart: function() {
                            this._marker.closePopup().fire("movestart").fire("dragstart")
                        },
                        _onDrag: function() {
                            var t = this._marker,
                                e = t._shadow,
                                i = a.DomUtil.getPosition(t._icon),
                                n = t._map.layerPointToLatLng(i);
                            e && a.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
                                latlng: n
                            }).fire("drag")
                        },
                        _onDragEnd: function(t) {
                            this._marker.fire("moveend").fire("dragend", t)
                        }
                    }), a.Control = a.Class.extend({
                        options: {
                            position: "topright"
                        },
                        initialize: function(t) {
                            a.setOptions(this, t)
                        },
                        getPosition: function() {
                            return this.options.position
                        },
                        setPosition: function(t) {
                            var e = this._map;
                            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                        },
                        getContainer: function() {
                            return this._container
                        },
                        addTo: function(t) {
                            this._map = t;
                            var e = this._container = this.onAdd(t),
                                i = this.getPosition(),
                                n = t._controlCorners[i];
                            return a.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
                        },
                        removeFrom: function(t) {
                            var e = this.getPosition(),
                                i = t._controlCorners[e];
                            return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
                        },
                        _refocusOnMap: function() {
                            this._map && this._map.getContainer().focus()
                        }
                    }), a.control = function(t) {
                        return new a.Control(t)
                    }, a.Map.include({
                        addControl: function(t) {
                            return t.addTo(this), this
                        },
                        removeControl: function(t) {
                            return t.removeFrom(this), this
                        },
                        _initControlPos: function() {
                            function t(t, o) {
                                var s = i + t + " " + i + o;
                                e[t + o] = a.DomUtil.create("div", s, n)
                            }
                            var e = this._controlCorners = {},
                                i = "leaflet-",
                                n = this._controlContainer = a.DomUtil.create("div", i + "control-container", this._container);
                            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
                        },
                        _clearControlPos: function() {
                            this._container.removeChild(this._controlContainer)
                        }
                    }), a.Control.Zoom = a.Control.extend({
                        options: {
                            position: "topleft",
                            zoomInText: "+",
                            zoomInTitle: "Zoom in",
                            zoomOutText: "-",
                            zoomOutTitle: "Zoom out"
                        },
                        onAdd: function(t) {
                            var e = "leaflet-control-zoom",
                                i = a.DomUtil.create("div", e + " leaflet-bar");
                            return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
                        },
                        onRemove: function(t) {
                            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                        },
                        _zoomIn: function(t) {
                            this._map.zoomIn(t.shiftKey ? 3 : 1)
                        },
                        _zoomOut: function(t) {
                            this._map.zoomOut(t.shiftKey ? 3 : 1)
                        },
                        _createButton: function(t, e, i, n, o, s) {
                            var r = a.DomUtil.create("a", i, n);
                            r.innerHTML = t, r.href = "#", r.title = e;
                            var l = a.DomEvent.stopPropagation;
                            return a.DomEvent.on(r, "click", l).on(r, "mousedown", l).on(r, "dblclick", l).on(r, "click", a.DomEvent.preventDefault).on(r, "click", o, s).on(r, "click", this._refocusOnMap, s), r
                        },
                        _updateDisabled: function() {
                            var t = this._map,
                                e = "leaflet-disabled";
                            a.DomUtil.removeClass(this._zoomInButton, e), a.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && a.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && a.DomUtil.addClass(this._zoomInButton, e)
                        }
                    }), a.Map.mergeOptions({
                        zoomControl: !0
                    }), a.Map.addInitHook(function() {
                        this.options.zoomControl && (this.zoomControl = new a.Control.Zoom, this.addControl(this.zoomControl))
                    }), a.control.zoom = function(t) {
                        return new a.Control.Zoom(t)
                    }, a.Control.Attribution = a.Control.extend({
                        options: {
                            position: "bottomright",
                            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                        },
                        initialize: function(t) {
                            a.setOptions(this, t), this._attributions = {}
                        },
                        onAdd: function(t) {
                            this._container = a.DomUtil.create("div", "leaflet-control-attribution"), a.DomEvent.disableClickPropagation(this._container);
                            for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                            return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
                        },
                        onRemove: function(t) {
                            t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
                        },
                        setPrefix: function(t) {
                            return this.options.prefix = t, this._update(), this
                        },
                        addAttribution: function(t) {
                            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0
                        },
                        removeAttribution: function(t) {
                            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0
                        },
                        _update: function() {
                            if (this._map) {
                                var t = [];
                                for (var e in this._attributions) this._attributions[e] && t.push(e);
                                var i = [];
                                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                            }
                        },
                        _onLayerAdd: function(t) {
                            t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
                        },
                        _onLayerRemove: function(t) {
                            t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
                        }
                    }), a.Map.mergeOptions({
                        attributionControl: !0
                    }), a.Map.addInitHook(function() {
                        this.options.attributionControl && (this.attributionControl = (new a.Control.Attribution).addTo(this))
                    }), a.control.attribution = function(t) {
                        return new a.Control.Attribution(t)
                    }, a.Control.Scale = a.Control.extend({
                        options: {
                            position: "bottomleft",
                            maxWidth: 100,
                            metric: !0,
                            imperial: !0,
                            updateWhenIdle: !1
                        },
                        onAdd: function(t) {
                            this._map = t;
                            var e = "leaflet-control-scale",
                                i = a.DomUtil.create("div", e),
                                n = this.options;
                            return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
                        },
                        onRemove: function(t) {
                            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                        },
                        _addScales: function(t, e, i) {
                            t.metric && (this._mScale = a.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = a.DomUtil.create("div", e + "-line", i))
                        },
                        _update: function() {
                            var t = this._map.getBounds(),
                                e = t.getCenter().lat,
                                i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
                                n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
                                o = this._map.getSize(),
                                s = this.options,
                                a = 0;
                            o.x > 0 && (a = n * (s.maxWidth / o.x)), this._updateScales(s, a)
                        },
                        _updateScales: function(t, e) {
                            t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
                        },
                        _updateMetric: function(t) {
                            var e = this._getRoundNum(t);
                            this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
                        },
                        _updateImperial: function(t) {
                            var e, i, n, o = 3.2808399 * t,
                                s = this._iScale;
                            o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft")
                        },
                        _getScaleWidth: function(t) {
                            return Math.round(this.options.maxWidth * t) - 10
                        },
                        _getRoundNum: function(t) {
                            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                                i = t / e;
                            return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
                        }
                    }), a.control.scale = function(t) {
                        return new a.Control.Scale(t)
                    }, a.Control.Layers = a.Control.extend({
                        options: {
                            collapsed: !0,
                            position: "topright",
                            autoZIndex: !0
                        },
                        initialize: function(t, e, i) {
                            a.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
                            for (var n in t) this._addLayer(t[n], n);
                            for (n in e) this._addLayer(e[n], n, !0)
                        },
                        onAdd: function(t) {
                            return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
                        },
                        onRemove: function(t) {
                            t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
                        },
                        addBaseLayer: function(t, e) {
                            return this._addLayer(t, e), this._update(), this
                        },
                        addOverlay: function(t, e) {
                            return this._addLayer(t, e, !0), this._update(), this
                        },
                        removeLayer: function(t) {
                            var e = a.stamp(t);
                            return delete this._layers[e], this._update(), this
                        },
                        _initLayout: function() {
                            var t = "leaflet-control-layers",
                                e = this._container = a.DomUtil.create("div", t);
                            e.setAttribute("aria-haspopup", !0), a.Browser.touch ? a.DomEvent.on(e, "click", a.DomEvent.stopPropagation) : a.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
                            var i = this._form = a.DomUtil.create("form", t + "-list");
                            if (this.options.collapsed) {
                                a.Browser.android || a.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                                var n = this._layersLink = a.DomUtil.create("a", t + "-toggle", e);
                                n.href = "#", n.title = "Layers", a.Browser.touch ? a.DomEvent.on(n, "click", a.DomEvent.stop).on(n, "click", this._expand, this) : a.DomEvent.on(n, "focus", this._expand, this), a.DomEvent.on(i, "click", function() {
                                    setTimeout(a.bind(this._onInputClick, this), 0)
                                }, this), this._map.on("click", this._collapse, this)
                            } else this._expand();
                            this._baseLayersList = a.DomUtil.create("div", t + "-base", i), this._separator = a.DomUtil.create("div", t + "-separator", i), this._overlaysList = a.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
                        },
                        _addLayer: function(t, e, i) {
                            var n = a.stamp(t);
                            this._layers[n] = {
                                layer: t,
                                name: e,
                                overlay: i
                            }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
                        },
                        _update: function() {
                            if (this._container) {
                                this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                                var t, e, i = !1,
                                    n = !1;
                                for (t in this._layers) e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
                                this._separator.style.display = n && i ? "" : "none"
                            }
                        },
                        _onLayerChange: function(t) {
                            var e = this._layers[a.stamp(t.layer)];
                            if (e) {
                                this._handlingClick || this._update();
                                var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
                                i && this._map.fire(i, e)
                            }
                        },
                        _createRadioElement: function(t, e) {
                            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
                            e && (i += ' checked="checked"'), i += "/>";
                            var o = n.createElement("div");
                            return o.innerHTML = i, o.firstChild
                        },
                        _addItem: function(t) {
                            var e, i = n.createElement("label"),
                                o = this._map.hasLayer(t.layer);
                            t.overlay ? (e = n.createElement("input"), e.type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = o) : e = this._createRadioElement("leaflet-base-layers", o), e.layerId = a.stamp(t.layer), a.DomEvent.on(e, "click", this._onInputClick, this);
                            var s = n.createElement("span");
                            s.innerHTML = " " + t.name, i.appendChild(e), i.appendChild(s);
                            var r = t.overlay ? this._overlaysList : this._baseLayersList;
                            return r.appendChild(i), i
                        },
                        _onInputClick: function() {
                            var t, e, i, n = this._form.getElementsByTagName("input"),
                                o = n.length;
                            for (this._handlingClick = !0, t = 0; o > t; t++) e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
                            this._handlingClick = !1, this._refocusOnMap()
                        },
                        _expand: function() {
                            a.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
                        },
                        _collapse: function() {
                            this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
                        }
                    }), a.control.layers = function(t, e, i) {
                        return new a.Control.Layers(t, e, i)
                    }, a.PosAnimation = a.Class.extend({
                        includes: a.Mixin.Events,
                        run: function(t, e, i, n) {
                            this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[a.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", a.DomEvent.on(t, a.DomUtil.TRANSITION_END, this._onTransitionEnd, this), a.DomUtil.setPosition(t, e), a.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(a.bind(this._onStep, this), 50)
                        },
                        stop: function() {
                            this._inProgress && (a.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), a.Util.falseFn(this._el.offsetWidth))
                        },
                        _onStep: function() {
                            var t = this._getPos();
                            return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd()
                        },
                        _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
                        _getPos: function() {
                            var t, i, n, o = this._el,
                                s = e.getComputedStyle(o);
                            if (a.Browser.any3d) {
                                if (n = s[a.DomUtil.TRANSFORM].match(this._transformRe), !n) return;
                                t = parseFloat(n[1]), i = parseFloat(n[2])
                            } else t = parseFloat(s.left), i = parseFloat(s.top);
                            return new a.Point(t, i, !0)
                        },
                        _onTransitionEnd: function() {
                            a.DomEvent.off(this._el, a.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[a.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
                        }
                    }), a.Map.include({
                        setView: function(t, e, i) {
                            if (e = e === o ? this._zoom : this._limitZoom(e), t = this._limitCenter(a.latLng(t), e, this.options.maxBounds), i = i || {}, this._panAnim && this._panAnim.stop(), this._loaded && !i.reset && i !== !0) {
                                i.animate !== o && (i.zoom = a.extend({
                                    animate: i.animate
                                }, i.zoom), i.pan = a.extend({
                                    animate: i.animate
                                }, i.pan));
                                var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
                                if (n) return clearTimeout(this._sizeTimer), this
                            }
                            return this._resetView(t, e), this
                        },
                        panBy: function(t, e) {
                            if (t = a.point(t).round(), e = e || {}, !t.x && !t.y) return this;
                            if (this._panAnim || (this._panAnim = new a.PosAnimation, this._panAnim.on({
                                    step: this._onPanTransitionStep,
                                    end: this._onPanTransitionEnd
                                }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
                                a.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                                var i = this._getMapPanePos().subtract(t);
                                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                            } else this._rawPanBy(t), this.fire("move").fire("moveend");
                            return this
                        },
                        _onPanTransitionStep: function() {
                            this.fire("move");
                        },
                        _onPanTransitionEnd: function() {
                            a.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                        },
                        _tryAnimatedPan: function(t, e) {
                            var i = this._getCenterOffset(t)._floor();
                            return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1
                        }
                    }), a.PosAnimation = a.DomUtil.TRANSITION ? a.PosAnimation : a.PosAnimation.extend({
                        run: function(t, e, i, n) {
                            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = a.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                        },
                        stop: function() {
                            this._inProgress && (this._step(), this._complete())
                        },
                        _animate: function() {
                            this._animId = a.Util.requestAnimFrame(this._animate, this), this._step()
                        },
                        _step: function() {
                            var t = +new Date - this._startTime,
                                e = 1e3 * this._duration;
                            e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
                        },
                        _runFrame: function(t) {
                            var e = this._startPos.add(this._offset.multiplyBy(t));
                            a.DomUtil.setPosition(this._el, e), this.fire("step")
                        },
                        _complete: function() {
                            a.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
                        },
                        _easeOut: function(t) {
                            return 1 - Math.pow(1 - t, this._easeOutPower)
                        }
                    }), a.Map.mergeOptions({
                        zoomAnimation: !0,
                        zoomAnimationThreshold: 4
                    }), a.DomUtil.TRANSITION && a.Map.addInitHook(function() {
                        this._zoomAnimated = this.options.zoomAnimation && a.DomUtil.TRANSITION && a.Browser.any3d && !a.Browser.android23 && !a.Browser.mobileOpera, this._zoomAnimated && a.DomEvent.on(this._mapPane, a.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
                    }), a.Map.include(a.DomUtil.TRANSITION ? {
                        _catchTransitionEnd: function(t) {
                            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                        },
                        _nothingToAnimate: function() {
                            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                        },
                        _tryAnimatedZoom: function(t, e, i) {
                            if (this._animatingZoom) return !0;
                            if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                            var n = this.getZoomScale(e),
                                o = this._getCenterOffset(t)._divideBy(1 - 1 / n),
                                s = this._getCenterLayerPoint()._add(o);
                            return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), !0) : !1
                        },
                        _animateZoom: function(t, e, i, n, o, s, r) {
                            r || (this._animatingZoom = !0), a.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, a.Draggable && (a.Draggable._disabled = !0), a.Util.requestAnimFrame(function() {
                                this.fire("zoomanim", {
                                    center: t,
                                    zoom: e,
                                    origin: i,
                                    scale: n,
                                    delta: o,
                                    backwards: s
                                }), setTimeout(a.bind(this._onZoomTransitionEnd, this), 250)
                            }, this)
                        },
                        _onZoomTransitionEnd: function() {
                            this._animatingZoom && (this._animatingZoom = !1, a.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), a.Draggable && (a.Draggable._disabled = !1))
                        }
                    } : {}), a.TileLayer.include({
                        _animateZoom: function(t) {
                            this._animating || (this._animating = !0, this._prepareBgBuffer());
                            var e = this._bgBuffer,
                                i = a.DomUtil.TRANSFORM,
                                n = t.delta ? a.DomUtil.getTranslateString(t.delta) : e.style[i],
                                o = a.DomUtil.getScaleString(t.scale, t.origin);
                            e.style[i] = t.backwards ? o + " " + n : n + " " + o
                        },
                        _endZoomAnim: function() {
                            var t = this._tileContainer,
                                e = this._bgBuffer;
                            t.style.visibility = "", t.parentNode.appendChild(t), a.Util.falseFn(e.offsetWidth);
                            var i = this._map.getZoom();
                            (i > this.options.maxZoom || i < this.options.minZoom) && this._clearBgBuffer(), this._animating = !1
                        },
                        _clearBgBuffer: function() {
                            var t = this._map;
                            !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[a.DomUtil.TRANSFORM] = "")
                        },
                        _prepareBgBuffer: function() {
                            var t = this._tileContainer,
                                e = this._bgBuffer,
                                i = this._getLoadedTilesPercentage(e),
                                n = this._getLoadedTilesPercentage(t);
                            return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[a.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer))
                        },
                        _getLoadedTilesPercentage: function(t) {
                            var e, i, n = t.getElementsByTagName("img"),
                                o = 0;
                            for (e = 0, i = n.length; i > e; e++) n[e].complete && o++;
                            return o / i
                        },
                        _stopLoadingImages: function(t) {
                            var e, i, n, o = Array.prototype.slice.call(t.getElementsByTagName("img"));
                            for (e = 0, i = o.length; i > e; e++) n = o[e], n.complete || (n.onload = a.Util.falseFn, n.onerror = a.Util.falseFn, n.src = a.Util.emptyImageUrl, n.parentNode.removeChild(n))
                        }
                    }), a.Map.include({
                        _defaultLocateOptions: {
                            watch: !1,
                            setView: !1,
                            maxZoom: 1 / 0,
                            timeout: 1e4,
                            maximumAge: 0,
                            enableHighAccuracy: !1
                        },
                        locate: function(t) {
                            if (t = this._locateOptions = a.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
                                code: 0,
                                message: "Geolocation not supported."
                            }), this;
                            var e = a.bind(this._handleGeolocationResponse, this),
                                i = a.bind(this._handleGeolocationError, this);
                            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
                        },
                        stopLocate: function() {
                            return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                        },
                        _handleGeolocationError: function(t) {
                            var e = t.code,
                                i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                                code: e,
                                message: "Geolocation error: " + i + "."
                            })
                        },
                        _handleGeolocationResponse: function(t) {
                            var e = t.coords.latitude,
                                i = t.coords.longitude,
                                n = new a.LatLng(e, i),
                                o = 180 * t.coords.accuracy / 40075017,
                                s = o / Math.cos(a.LatLng.DEG_TO_RAD * e),
                                r = a.latLngBounds([e - o, i - s], [e + o, i + s]),
                                l = this._locateOptions;
                            if (l.setView) {
                                var h = Math.min(this.getBoundsZoom(r), l.maxZoom);
                                this.setView(n, h)
                            }
                            var u = {
                                latlng: n,
                                bounds: r,
                                timestamp: t.timestamp
                            };
                            for (var c in t.coords) "number" == typeof t.coords[c] && (u[c] = t.coords[c]);
                            this.fire("locationfound", u)
                        }
                    })
            }(window, document)
        }, {}],
        26: [function(e, i, n) {
            ! function(o, s) {
                "function" == typeof t && t.amd ? t(["leaflet"], o) : "object" == typeof n && ("undefined" != typeof s && s.L ? i.exports = o(L) : i.exports = o(e("leaflet"))), "undefined" != typeof s && s.L && (s.L.Locate = o(L))
            }(function(t) {
                return t.Control.Locate = t.Control.extend({
                        options: {
                            position: "topleft",
                            drawCircle: !0,
                            follow: !1,
                            stopFollowingOnDrag: !1,
                            remainActive: !1,
                            markerClass: t.circleMarker,
                            circleStyle: {
                                color: "#136AEC",
                                fillColor: "#136AEC",
                                fillOpacity: .15,
                                weight: 2,
                                opacity: .5
                            },
                            markerStyle: {
                                color: "#136AEC",
                                fillColor: "#2A93EE",
                                fillOpacity: .7,
                                weight: 2,
                                opacity: .9,
                                radius: 5
                            },
                            followCircleStyle: {},
                            followMarkerStyle: {},
                            icon: "fa fa-map-marker",
                            iconLoading: "fa fa-spinner fa-spin",
                            circlePadding: [0, 0],
                            metric: !0,
                            onLocationError: function(t) {
                                alert(t.message)
                            },
                            onLocationOutsideMapBounds: function(t) {
                                t.stop(), alert(t.options.strings.outsideMapBoundsMsg)
                            },
                            setView: !0,
                            keepCurrentZoomLevel: !1,
                            showPopup: !0,
                            strings: {
                                title: "Show me where I am",
                                metersUnit: "meters",
                                feetUnit: "feet",
                                popup: "You are within {distance} {unit} from this point",
                                outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
                            },
                            locateOptions: {
                                maxZoom: 1 / 0,
                                watch: !0
                            }
                        },
                        initialize: function(e) {
                            t.Map.addInitHook(function() {
                                this.options.locateControl && this.addControl(this)
                            });
                            for (var i in e) "object" == typeof this.options[i] ? t.extend(this.options[i], e[i]) : this.options[i] = e[i];
                            t.extend(this.options.locateOptions, {
                                setView: !1
                            })
                        },
                        _activate: function() {
                            this.options.setView && (this._locateOnNextLocationFound = !0), this._active || this._map.locate(this.options.locateOptions), this._active = !0, this.options.follow && this._startFollowing(this._map)
                        },
                        _deactivate: function() {
                            this._map.stopLocate(), this._map.off("dragstart", this._stopFollowing, this), this.options.follow && this._following && this._stopFollowing(this._map)
                        },
                        drawMarker: function(e) {
                            void 0 === this._event.accuracy && (this._event.accuracy = 0);
                            var i = this._event.accuracy;
                            this._locateOnNextLocationFound && (this._isOutsideMapBounds() ? this.options.onLocationOutsideMapBounds(this) : this.options.keepCurrentZoomLevel || !this.options.drawCircle ? e.panTo([this._event.latitude, this._event.longitude]) : e.fitBounds(this._event.bounds, {
                                padding: this.options.circlePadding,
                                maxZoom: this.options.keepCurrentZoomLevel ? e.getZoom() : this.options.locateOptions.maxZoom
                            }), this._locateOnNextLocationFound = !1);
                            var n, o;
                            if (this.options.drawCircle)
                                if (n = this._following ? this.options.followCircleStyle : this.options.circleStyle, this._circle) {
                                    this._circle.setLatLng(this._event.latlng).setRadius(i);
                                    for (o in n) this._circle.options[o] = n[o]
                                } else this._circle = t.circle(this._event.latlng, i, n).addTo(this._layer);
                            var s, a;
                            this.options.metric ? (s = i.toFixed(0), a = this.options.strings.metersUnit) : (s = (3.2808399 * i).toFixed(0), a = this.options.strings.feetUnit);
                            var r;
                            r = this._following ? this.options.followMarkerStyle : this.options.markerStyle, this._marker ? this.updateMarker(this._event.latlng, r) : this._marker = this.createMarker(this._event.latlng, r).addTo(this._layer);
                            var l = this.options.strings.popup;
                            this.options.showPopup && l && this._marker.bindPopup(t.Util.template(l, {
                                distance: s,
                                unit: a
                            }))._popup.setLatLng(this._event.latlng), this._toggleContainerStyle()
                        },
                        createMarker: function(t, e) {
                            return this.options.markerClass(t, e)
                        },
                        updateMarker: function(t, e) {
                            this._marker.setLatLng(t);
                            for (var i in e) this._marker.options[i] = e[i]
                        },
                        removeMarker: function() {
                            this._layer.clearLayers(), this._marker = void 0, this._circle = void 0
                        },
                        onAdd: function(e) {
                            var i = t.DomUtil.create("div", "leaflet-control-locate leaflet-bar leaflet-control");
                            this._layer = new t.LayerGroup, this._layer.addTo(e), this._event = void 0;
                            var n = {};
                            return t.extend(n, this.options.markerStyle, this.options.followMarkerStyle), this.options.followMarkerStyle = n, n = {}, t.extend(n, this.options.circleStyle, this.options.followCircleStyle), this.options.followCircleStyle = n, this._link = t.DomUtil.create("a", "leaflet-bar-part leaflet-bar-part-single", i), this._link.href = "#", this._link.title = this.options.strings.title, this._icon = t.DomUtil.create("span", this.options.icon, this._link), t.DomEvent.on(this._link, "click", t.DomEvent.stopPropagation).on(this._link, "click", t.DomEvent.preventDefault).on(this._link, "click", function() {
                                var t = void 0 === this._event || this._map.getBounds().contains(this._event.latlng) || !this.options.setView || this._isOutsideMapBounds();
                                !this.options.remainActive && this._active && t ? this.stop() : this.start()
                            }, this).on(this._link, "dblclick", t.DomEvent.stopPropagation), this._resetVariables(), this.bindEvents(e), i
                        },
                        bindEvents: function(t) {
                            t.on("locationfound", this._onLocationFound, this), t.on("locationerror", this._onLocationError, this), t.on("unload", this.stop, this)
                        },
                        start: function() {
                            this._activate(), this._event ? this.drawMarker(this._map) : this._setClasses("requesting")
                        },
                        stop: function() {
                            this._deactivate(), this._cleanClasses(), this._resetVariables(), this.removeMarker()
                        },
                        _onLocationError: function(t) {
                            3 == t.code && this.options.locateOptions.watch || (this.stop(), this.options.onLocationError(t))
                        },
                        _onLocationFound: function(t) {
                            this._event && this._event.latlng.lat === t.latlng.lat && this._event.latlng.lng === t.latlng.lng && this._event.accuracy === t.accuracy || this._active && (this._event = t, this.options.follow && this._following && (this._locateOnNextLocationFound = !0), this.drawMarker(this._map))
                        },
                        _startFollowing: function() {
                            this._map.fire("startfollowing", this), this._following = !0, this.options.stopFollowingOnDrag && this._map.on("dragstart", this._stopFollowing, this)
                        },
                        _stopFollowing: function() {
                            this._map.fire("stopfollowing", this), this._following = !1, this.options.stopFollowingOnDrag && this._map.off("dragstart", this._stopFollowing, this), this._toggleContainerStyle()
                        },
                        _isOutsideMapBounds: function() {
                            return void 0 === this._event ? !1 : this._map.options.maxBounds && !this._map.options.maxBounds.contains(this._event.latlng)
                        },
                        _toggleContainerStyle: function() {
                            this._container && (this._following ? this._setClasses("following") : this._setClasses("active"))
                        },
                        _setClasses: function(e) {
                            "requesting" == e ? (t.DomUtil.removeClasses(this._container, "active following"), t.DomUtil.addClasses(this._container, "requesting"), t.DomUtil.removeClasses(this._icon, this.options.icon), t.DomUtil.addClasses(this._icon, this.options.iconLoading)) : "active" == e ? (t.DomUtil.removeClasses(this._container, "requesting following"), t.DomUtil.addClasses(this._container, "active"), t.DomUtil.removeClasses(this._icon, this.options.iconLoading), t.DomUtil.addClasses(this._icon, this.options.icon)) : "following" == e && (t.DomUtil.removeClasses(this._container, "requesting"), t.DomUtil.addClasses(this._container, "active following"), t.DomUtil.removeClasses(this._icon, this.options.iconLoading), t.DomUtil.addClasses(this._icon, this.options.icon))
                        },
                        _cleanClasses: function() {
                            t.DomUtil.removeClass(this._container, "requesting"), t.DomUtil.removeClass(this._container, "active"), t.DomUtil.removeClass(this._container, "following"), t.DomUtil.removeClasses(this._icon, this.options.iconLoading), t.DomUtil.addClasses(this._icon, this.options.icon)
                        },
                        _resetVariables: function() {
                            this._active = !1, this._locateOnNextLocationFound = this.options.setView, this._following = !1
                        }
                    }), t.control.locate = function(e) {
                        return new t.Control.Locate(e)
                    },
                    function() {
                        var e = function(e, i, n) {
                            n = n.split(" "), n.forEach(function(n) {
                                t.DomUtil[e].call(this, i, n)
                            })
                        };
                        t.DomUtil.addClasses = function(t, i) {
                            e("addClass", t, i)
                        }, t.DomUtil.removeClasses = function(t, i) {
                            e("removeClass", t, i)
                        }
                    }(), t.Control.Locate
            }, window)
        }, {
            leaflet: 25
        }],
        27: [function(e, i, n) {
            ! function(e, n, o) {
                var s = e.L,
                    a = {};
                a.version = "0.7.2", "object" == typeof i && "object" == typeof i.exports ? i.exports = a : "function" == typeof t && t.amd && t(a), a.noConflict = function() {
                        return e.L = s, this
                    }, e.L = a, a.Util = {
                        extend: function(t) {
                            var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
                            for (i = 0, n = s.length; n > i; i++) {
                                o = s[i] || {};
                                for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
                            }
                            return t
                        },
                        bind: function(t, e) {
                            var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                            return function() {
                                return t.apply(e, i || arguments)
                            }
                        },
                        stamp: function() {
                            var t = 0,
                                e = "_leaflet_id";
                            return function(i) {
                                return i[e] = i[e] || ++t, i[e]
                            }
                        }(),
                        invokeEach: function(t, e, i) {
                            var n, o;
                            if ("object" == typeof t) {
                                o = Array.prototype.slice.call(arguments, 3);
                                for (n in t) e.apply(i, [n, t[n]].concat(o));
                                return !0
                            }
                            return !1
                        },
                        limitExecByInterval: function(t, e, i) {
                            var n, o;
                            return function s() {
                                var a = arguments;
                                return n ? void(o = !0) : (n = !0, setTimeout(function() {
                                    n = !1, o && (s.apply(i, a), o = !1)
                                }, e), void t.apply(i, a))
                            }
                        },
                        falseFn: function() {
                            return !1
                        },
                        formatNum: function(t, e) {
                            var i = Math.pow(10, e || 5);
                            return Math.round(t * i) / i
                        },
                        trim: function(t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        },
                        splitWords: function(t) {
                            return a.Util.trim(t).split(/\s+/)
                        },
                        setOptions: function(t, e) {
                            return t.options = a.extend({}, t.options, e), t.options
                        },
                        getParamString: function(t, e, i) {
                            var n = [];
                            for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                            return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
                        },
                        template: function(t, e) {
                            return t.replace(/\{ *([\w_]+) *\}/g, function(t, i) {
                                var n = e[i];
                                if (n === o) throw new Error("No value provided for variable " + t);
                                return "function" == typeof n && (n = n(e)), n
                            })
                        },
                        isArray: Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    },
                    function() {
                        function t(t) {
                            var i, n, o = ["webkit", "moz", "o", "ms"];
                            for (i = 0; i < o.length && !n; i++) n = e[o[i] + t];
                            return n
                        }

                        function i(t) {
                            var i = +new Date,
                                o = Math.max(0, 16 - (i - n));
                            return n = i + o, e.setTimeout(t, o)
                        }
                        var n = 0,
                            o = e.requestAnimationFrame || t("RequestAnimationFrame") || i,
                            s = e.cancelAnimationFrame || t("CancelAnimationFrame") || t("CancelRequestAnimationFrame") || function(t) {
                                e.clearTimeout(t)
                            };
                        a.Util.requestAnimFrame = function(t, n, s, r) {
                            return t = a.bind(t, n), s && o === i ? void t() : o.call(e, t, r)
                        }, a.Util.cancelAnimFrame = function(t) {
                            t && s.call(e, t)
                        }
                    }(), a.extend = a.Util.extend, a.bind = a.Util.bind, a.stamp = a.Util.stamp, a.setOptions = a.Util.setOptions, a.Class = function() {}, a.Class.extend = function(t) {
                        var e = function() {
                                this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
                            },
                            i = function() {};
                        i.prototype = this.prototype;
                        var n = new i;
                        n.constructor = e, e.prototype = n;
                        for (var o in this) this.hasOwnProperty(o) && "prototype" !== o && (e[o] = this[o]);
                        t.statics && (a.extend(e, t.statics), delete t.statics), t.includes && (a.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = a.extend({}, n.options, t.options)), a.extend(n, t), n._initHooks = [];
                        var s = this;
                        return e.__super__ = s.prototype, n.callInitHooks = function() {
                            if (!this._initHooksCalled) {
                                s.prototype.callInitHooks && s.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                                for (var t = 0, e = n._initHooks.length; e > t; t++) n._initHooks[t].call(this)
                            }
                        }, e
                    }, a.Class.include = function(t) {
                        a.extend(this.prototype, t)
                    }, a.Class.mergeOptions = function(t) {
                        a.extend(this.prototype.options, t)
                    }, a.Class.addInitHook = function(t) {
                        var e = Array.prototype.slice.call(arguments, 1),
                            i = "function" == typeof t ? t : function() {
                                this[t].apply(this, e)
                            };
                        this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
                    };
                var r = "_leaflet_events";
                a.Mixin = {}, a.Mixin.Events = {
                        addEventListener: function(t, e, i) {
                            if (a.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
                            var n, o, s, l, h, u, c, d = this[r] = this[r] || {},
                                p = i && i !== this && a.stamp(i);
                            for (t = a.Util.splitWords(t), n = 0, o = t.length; o > n; n++) s = {
                                action: e,
                                context: i || this
                            }, l = t[n], p ? (h = l + "_idx", u = h + "_len", c = d[h] = d[h] || {}, c[p] || (c[p] = [], d[u] = (d[u] || 0) + 1), c[p].push(s)) : (d[l] = d[l] || [], d[l].push(s));
                            return this
                        },
                        hasEventListeners: function(t) {
                            var e = this[r];
                            return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
                        },
                        removeEventListener: function(t, e, i) {
                            if (!this[r]) return this;
                            if (!t) return this.clearAllEventListeners();
                            if (a.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
                            var n, o, s, l, h, u, c, d, p, m = this[r],
                                _ = i && i !== this && a.stamp(i);
                            for (t = a.Util.splitWords(t), n = 0, o = t.length; o > n; n++)
                                if (s = t[n], u = s + "_idx", c = u + "_len", d = m[u], e) {
                                    if (l = _ && d ? d[_] : m[s]) {
                                        for (h = l.length - 1; h >= 0; h--) l[h].action !== e || i && l[h].context !== i || (p = l.splice(h, 1), p[0].action = a.Util.falseFn);
                                        i && d && 0 === l.length && (delete d[_], m[c]--)
                                    }
                                } else delete m[s], delete m[u], delete m[c];
                            return this
                        },
                        clearAllEventListeners: function() {
                            return delete this[r], this
                        },
                        fireEvent: function(t, e) {
                            if (!this.hasEventListeners(t)) return this;
                            var i, n, o, s, l, h = a.Util.extend({}, e, {
                                    type: t,
                                    target: this
                                }),
                                u = this[r];
                            if (u[t])
                                for (i = u[t].slice(), n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context, h);
                            s = u[t + "_idx"];
                            for (l in s)
                                if (i = s[l].slice())
                                    for (n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context, h);
                            return this
                        },
                        addOneTimeEventListener: function(t, e, i) {
                            if (a.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
                            var n = a.bind(function() {
                                this.removeEventListener(t, e, i).removeEventListener(t, n, i)
                            }, this);
                            return this.addEventListener(t, e, i).addEventListener(t, n, i)
                        }
                    }, a.Mixin.Events.on = a.Mixin.Events.addEventListener, a.Mixin.Events.off = a.Mixin.Events.removeEventListener, a.Mixin.Events.once = a.Mixin.Events.addOneTimeEventListener, a.Mixin.Events.fire = a.Mixin.Events.fireEvent,
                    function() {
                        var t = "ActiveXObject" in e,
                            i = t && !n.addEventListener,
                            s = navigator.userAgent.toLowerCase(),
                            r = -1 !== s.indexOf("webkit"),
                            l = -1 !== s.indexOf("chrome"),
                            h = -1 !== s.indexOf("phantom"),
                            u = -1 !== s.indexOf("android"),
                            c = -1 !== s.search("android [23]"),
                            d = -1 !== s.indexOf("gecko"),
                            p = typeof orientation != o + "",
                            m = e.navigator && e.navigator.msPointerEnabled && e.navigator.msMaxTouchPoints && !e.PointerEvent,
                            _ = e.PointerEvent && e.navigator.pointerEnabled && e.navigator.maxTouchPoints || m,
                            f = "devicePixelRatio" in e && e.devicePixelRatio > 1 || "matchMedia" in e && e.matchMedia("(min-resolution:144dpi)") && e.matchMedia("(min-resolution:144dpi)").matches,
                            g = n.documentElement,
                            v = t && "transition" in g.style,
                            y = "WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix && !c,
                            L = "MozPerspective" in g.style,
                            P = "OTransition" in g.style,
                            w = !e.L_DISABLE_3D && (v || y || L || P) && !h,
                            x = !e.L_NO_TOUCH && !h && function() {
                                var t = "ontouchstart";
                                if (_ || t in g) return !0;
                                var e = n.createElement("div"),
                                    i = !1;
                                return e.setAttribute ? (e.setAttribute(t, "return;"), "function" == typeof e[t] && (i = !0), e.removeAttribute(t), e = null, i) : !1
                            }();
                        a.Browser = {
                            ie: t,
                            ielt9: i,
                            webkit: r,
                            gecko: d && !r && !e.opera && !t,
                            android: u,
                            android23: c,
                            chrome: l,
                            ie3d: v,
                            webkit3d: y,
                            gecko3d: L,
                            opera3d: P,
                            any3d: w,
                            mobile: p,
                            mobileWebkit: p && r,
                            mobileWebkit3d: p && y,
                            mobileOpera: p && e.opera,
                            touch: x,
                            msPointer: m,
                            pointer: _,
                            retina: f
                        }
                    }(), a.Point = function(t, e, i) {
                        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
                    }, a.Point.prototype = {
                        clone: function() {
                            return new a.Point(this.x, this.y)
                        },
                        add: function(t) {
                            return this.clone()._add(a.point(t))
                        },
                        _add: function(t) {
                            return this.x += t.x, this.y += t.y, this
                        },
                        subtract: function(t) {
                            return this.clone()._subtract(a.point(t))
                        },
                        _subtract: function(t) {
                            return this.x -= t.x, this.y -= t.y, this
                        },
                        divideBy: function(t) {
                            return this.clone()._divideBy(t)
                        },
                        _divideBy: function(t) {
                            return this.x /= t, this.y /= t, this
                        },
                        multiplyBy: function(t) {
                            return this.clone()._multiplyBy(t)
                        },
                        _multiplyBy: function(t) {
                            return this.x *= t, this.y *= t, this
                        },
                        round: function() {
                            return this.clone()._round()
                        },
                        _round: function() {
                            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                        },
                        floor: function() {
                            return this.clone()._floor()
                        },
                        _floor: function() {
                            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                        },
                        distanceTo: function(t) {
                            t = a.point(t);
                            var e = t.x - this.x,
                                i = t.y - this.y;
                            return Math.sqrt(e * e + i * i)
                        },
                        equals: function(t) {
                            return t = a.point(t), t.x === this.x && t.y === this.y
                        },
                        contains: function(t) {
                            return t = a.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                        },
                        toString: function() {
                            return "Point(" + a.Util.formatNum(this.x) + ", " + a.Util.formatNum(this.y) + ")"
                        }
                    }, a.point = function(t, e, i) {
                        return t instanceof a.Point ? t : a.Util.isArray(t) ? new a.Point(t[0], t[1]) : t === o || null === t ? t : new a.Point(t, e, i)
                    }, a.Bounds = function(t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
                    }, a.Bounds.prototype = {
                        extend: function(t) {
                            return t = a.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
                        },
                        getCenter: function(t) {
                            return new a.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                        },
                        getBottomLeft: function() {
                            return new a.Point(this.min.x, this.max.y)
                        },
                        getTopRight: function() {
                            return new a.Point(this.max.x, this.min.y)
                        },
                        getSize: function() {
                            return this.max.subtract(this.min)
                        },
                        contains: function(t) {
                            var e, i;
                            return t = "number" == typeof t[0] || t instanceof a.Point ? a.point(t) : a.bounds(t), t instanceof a.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                        },
                        intersects: function(t) {
                            t = a.bounds(t);
                            var e = this.min,
                                i = this.max,
                                n = t.min,
                                o = t.max,
                                s = o.x >= e.x && n.x <= i.x,
                                r = o.y >= e.y && n.y <= i.y;
                            return s && r
                        },
                        isValid: function() {
                            return !(!this.min || !this.max)
                        }
                    }, a.bounds = function(t, e) {
                        return !t || t instanceof a.Bounds ? t : new a.Bounds(t, e)
                    }, a.Transformation = function(t, e, i, n) {
                        this._a = t, this._b = e, this._c = i, this._d = n
                    }, a.Transformation.prototype = {
                        transform: function(t, e) {
                            return this._transform(t.clone(), e)
                        },
                        _transform: function(t, e) {
                            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
                        },
                        untransform: function(t, e) {
                            return e = e || 1, new a.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
                        }
                    }, a.DomUtil = {
                        get: function(t) {
                            return "string" == typeof t ? n.getElementById(t) : t
                        },
                        getStyle: function(t, e) {
                            var i = t.style[e];
                            if (!i && t.currentStyle && (i = t.currentStyle[e]), (!i || "auto" === i) && n.defaultView) {
                                var o = n.defaultView.getComputedStyle(t, null);
                                i = o ? o[e] : null
                            }
                            return "auto" === i ? null : i
                        },
                        getViewportOffset: function(t) {
                            var e, i = 0,
                                o = 0,
                                s = t,
                                r = n.body,
                                l = n.documentElement;
                            do {
                                if (i += s.offsetTop || 0, o += s.offsetLeft || 0, i += parseInt(a.DomUtil.getStyle(s, "borderTopWidth"), 10) || 0, o += parseInt(a.DomUtil.getStyle(s, "borderLeftWidth"), 10) || 0, e = a.DomUtil.getStyle(s, "position"), s.offsetParent === r && "absolute" === e) break;
                                if ("fixed" === e) {
                                    i += r.scrollTop || l.scrollTop || 0, o += r.scrollLeft || l.scrollLeft || 0;
                                    break
                                }
                                if ("relative" === e && !s.offsetLeft) {
                                    var h = a.DomUtil.getStyle(s, "width"),
                                        u = a.DomUtil.getStyle(s, "max-width"),
                                        c = s.getBoundingClientRect();
                                    ("none" !== h || "none" !== u) && (o += c.left + s.clientLeft), i += c.top + (r.scrollTop || l.scrollTop || 0);
                                    break
                                }
                                s = s.offsetParent
                            } while (s);
                            s = t;
                            do {
                                if (s === r) break;
                                i -= s.scrollTop || 0, o -= s.scrollLeft || 0, s = s.parentNode
                            } while (s);
                            return new a.Point(o, i)
                        },
                        documentIsLtr: function() {
                            return a.DomUtil._docIsLtrCached || (a.DomUtil._docIsLtrCached = !0, a.DomUtil._docIsLtr = "ltr" === a.DomUtil.getStyle(n.body, "direction")), a.DomUtil._docIsLtr
                        },
                        create: function(t, e, i) {
                            var o = n.createElement(t);
                            return o.className = e, i && i.appendChild(o), o
                        },
                        hasClass: function(t, e) {
                            if (t.classList !== o) return t.classList.contains(e);
                            var i = a.DomUtil._getClass(t);
                            return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                        },
                        addClass: function(t, e) {
                            if (t.classList !== o)
                                for (var i = a.Util.splitWords(e), n = 0, s = i.length; s > n; n++) t.classList.add(i[n]);
                            else if (!a.DomUtil.hasClass(t, e)) {
                                var r = a.DomUtil._getClass(t);
                                a.DomUtil._setClass(t, (r ? r + " " : "") + e)
                            }
                        },
                        removeClass: function(t, e) {
                            t.classList !== o ? t.classList.remove(e) : a.DomUtil._setClass(t, a.Util.trim((" " + a.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
                        },
                        _setClass: function(t, e) {
                            t.className.baseVal === o ? t.className = e : t.className.baseVal = e
                        },
                        _getClass: function(t) {
                            return t.className.baseVal === o ? t.className : t.className.baseVal
                        },
                        setOpacity: function(t, e) {
                            if ("opacity" in t.style) t.style.opacity = e;
                            else if ("filter" in t.style) {
                                var i = !1,
                                    n = "DXImageTransform.Microsoft.Alpha";
                                try {
                                    i = t.filters.item(n)
                                } catch (o) {
                                    if (1 === e) return
                                }
                                e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                            }
                        },
                        testProp: function(t) {
                            for (var e = n.documentElement.style, i = 0; i < t.length; i++)
                                if (t[i] in e) return t[i];
                            return !1
                        },
                        getTranslateString: function(t) {
                            var e = a.Browser.webkit3d,
                                i = "translate" + (e ? "3d" : "") + "(",
                                n = (e ? ",0" : "") + ")";
                            return i + t.x + "px," + t.y + "px" + n
                        },
                        getScaleString: function(t, e) {
                            var i = a.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
                                n = " scale(" + t + ") ";
                            return i + n
                        },
                        setPosition: function(t, e, i) {
                            t._leaflet_pos = e, !i && a.Browser.any3d ? t.style[a.DomUtil.TRANSFORM] = a.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
                        },
                        getPosition: function(t) {
                            return t._leaflet_pos
                        }
                    }, a.DomUtil.TRANSFORM = a.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), a.DomUtil.TRANSITION = a.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), a.DomUtil.TRANSITION_END = "webkitTransition" === a.DomUtil.TRANSITION || "OTransition" === a.DomUtil.TRANSITION ? a.DomUtil.TRANSITION + "End" : "transitionend",
                    function() {
                        if ("onselectstart" in n) a.extend(a.DomUtil, {
                            disableTextSelection: function() {
                                a.DomEvent.on(e, "selectstart", a.DomEvent.preventDefault)
                            },
                            enableTextSelection: function() {
                                a.DomEvent.off(e, "selectstart", a.DomEvent.preventDefault)
                            }
                        });
                        else {
                            var t = a.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                            a.extend(a.DomUtil, {
                                disableTextSelection: function() {
                                    if (t) {
                                        var e = n.documentElement.style;
                                        this._userSelect = e[t], e[t] = "none"
                                    }
                                },
                                enableTextSelection: function() {
                                    t && (n.documentElement.style[t] = this._userSelect, delete this._userSelect)
                                }
                            })
                        }
                        a.extend(a.DomUtil, {
                            disableImageDrag: function() {
                                a.DomEvent.on(e, "dragstart", a.DomEvent.preventDefault)
                            },
                            enableImageDrag: function() {
                                a.DomEvent.off(e, "dragstart", a.DomEvent.preventDefault)
                            }
                        })
                    }(), a.LatLng = function(t, e, i) {
                        if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                        this.lat = t, this.lng = e, i !== o && (this.alt = parseFloat(i))
                    }, a.extend(a.LatLng, {
                        DEG_TO_RAD: Math.PI / 180,
                        RAD_TO_DEG: 180 / Math.PI,
                        MAX_MARGIN: 1e-9
                    }), a.LatLng.prototype = {
                        equals: function(t) {
                            if (!t) return !1;
                            t = a.latLng(t);
                            var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                            return e <= a.LatLng.MAX_MARGIN
                        },
                        toString: function(t) {
                            return "LatLng(" + a.Util.formatNum(this.lat, t) + ", " + a.Util.formatNum(this.lng, t) + ")"
                        },
                        distanceTo: function(t) {
                            t = a.latLng(t);
                            var e = 6378137,
                                i = a.LatLng.DEG_TO_RAD,
                                n = (t.lat - this.lat) * i,
                                o = (t.lng - this.lng) * i,
                                s = this.lat * i,
                                r = t.lat * i,
                                l = Math.sin(n / 2),
                                h = Math.sin(o / 2),
                                u = l * l + h * h * Math.cos(s) * Math.cos(r);
                            return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
                        },
                        wrap: function(t, e) {
                            var i = this.lng;
                            return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new a.LatLng(this.lat, i)
                        }
                    }, a.latLng = function(t, e) {
                        return t instanceof a.LatLng ? t : a.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new a.LatLng(t[0], t[1], t[2]) : null : t === o || null === t ? t : "object" == typeof t && "lat" in t ? new a.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === o ? null : new a.LatLng(t, e)
                    }, a.LatLngBounds = function(t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
                    }, a.LatLngBounds.prototype = {
                        extend: function(t) {
                            if (!t) return this;
                            var e = a.latLng(t);
                            return t = null !== e ? e : a.latLngBounds(t), t instanceof a.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new a.LatLng(t.lat, t.lng), this._northEast = new a.LatLng(t.lat, t.lng)) : t instanceof a.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
                        },
                        pad: function(t) {
                            var e = this._southWest,
                                i = this._northEast,
                                n = Math.abs(e.lat - i.lat) * t,
                                o = Math.abs(e.lng - i.lng) * t;
                            return new a.LatLngBounds(new a.LatLng(e.lat - n, e.lng - o), new a.LatLng(i.lat + n, i.lng + o))
                        },
                        getCenter: function() {
                            return new a.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                        },
                        getSouthWest: function() {
                            return this._southWest
                        },
                        getNorthEast: function() {
                            return this._northEast
                        },
                        getNorthWest: function() {
                            return new a.LatLng(this.getNorth(), this.getWest())
                        },
                        getSouthEast: function() {
                            return new a.LatLng(this.getSouth(), this.getEast())
                        },
                        getWest: function() {
                            return this._southWest.lng
                        },
                        getSouth: function() {
                            return this._southWest.lat
                        },
                        getEast: function() {
                            return this._northEast.lng
                        },
                        getNorth: function() {
                            return this._northEast.lat
                        },
                        contains: function(t) {
                            t = "number" == typeof t[0] || t instanceof a.LatLng ? a.latLng(t) : a.latLngBounds(t);
                            var e, i, n = this._southWest,
                                o = this._northEast;
                            return t instanceof a.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                        },
                        intersects: function(t) {
                            t = a.latLngBounds(t);
                            var e = this._southWest,
                                i = this._northEast,
                                n = t.getSouthWest(),
                                o = t.getNorthEast(),
                                s = o.lat >= e.lat && n.lat <= i.lat,
                                r = o.lng >= e.lng && n.lng <= i.lng;
                            return s && r
                        },
                        toBBoxString: function() {
                            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                        },
                        equals: function(t) {
                            return t ? (t = a.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
                        },
                        isValid: function() {
                            return !(!this._southWest || !this._northEast)
                        }
                    }, a.latLngBounds = function(t, e) {
                        return !t || t instanceof a.LatLngBounds ? t : new a.LatLngBounds(t, e)
                    }, a.Projection = {}, a.Projection.SphericalMercator = {
                        MAX_LATITUDE: 85.0511287798,
                        project: function(t) {
                            var e = a.LatLng.DEG_TO_RAD,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = t.lng * e,
                                s = n * e;
                            return s = Math.log(Math.tan(Math.PI / 4 + s / 2)), new a.Point(o, s)
                        },
                        unproject: function(t) {
                            var e = a.LatLng.RAD_TO_DEG,
                                i = t.x * e,
                                n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
                            return new a.LatLng(n, i)
                        }
                    }, a.Projection.LonLat = {
                        project: function(t) {
                            return new a.Point(t.lng, t.lat)
                        },
                        unproject: function(t) {
                            return new a.LatLng(t.y, t.x)
                        }
                    }, a.CRS = {
                        latLngToPoint: function(t, e) {
                            var i = this.projection.project(t),
                                n = this.scale(e);
                            return this.transformation._transform(i, n)
                        },
                        pointToLatLng: function(t, e) {
                            var i = this.scale(e),
                                n = this.transformation.untransform(t, i);
                            return this.projection.unproject(n)
                        },
                        project: function(t) {
                            return this.projection.project(t)
                        },
                        scale: function(t) {
                            return 256 * Math.pow(2, t)
                        },
                        getSize: function(t) {
                            var e = this.scale(t);
                            return a.point(e, e)
                        }
                    }, a.CRS.Simple = a.extend({}, a.CRS, {
                        projection: a.Projection.LonLat,
                        transformation: new a.Transformation(1, 0, -1, 0),
                        scale: function(t) {
                            return Math.pow(2, t)
                        }
                    }), a.CRS.EPSG3857 = a.extend({}, a.CRS, {
                        code: "EPSG:3857",
                        projection: a.Projection.SphericalMercator,
                        transformation: new a.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
                        project: function(t) {
                            var e = this.projection.project(t),
                                i = 6378137;
                            return e.multiplyBy(i)
                        }
                    }), a.CRS.EPSG900913 = a.extend({}, a.CRS.EPSG3857, {
                        code: "EPSG:900913"
                    }), a.CRS.EPSG4326 = a.extend({}, a.CRS, {
                        code: "EPSG:4326",
                        projection: a.Projection.LonLat,
                        transformation: new a.Transformation(1 / 360, .5, -1 / 360, .5)
                    }), a.Map = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            crs: a.CRS.EPSG3857,
                            fadeAnimation: a.DomUtil.TRANSITION && !a.Browser.android23,
                            trackResize: !0,
                            markerZoomAnimation: a.DomUtil.TRANSITION && a.Browser.any3d
                        },
                        initialize: function(t, e) {
                            e = a.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = a.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== o && this.setView(a.latLng(e.center), e.zoom, {
                                reset: !0
                            }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
                        },
                        setView: function(t, e) {
                            return e = e === o ? this.getZoom() : e, this._resetView(a.latLng(t), this._limitZoom(e)), this
                        },
                        setZoom: function(t, e) {
                            return this._loaded ? this.setView(this.getCenter(), t, {
                                zoom: e
                            }) : (this._zoom = this._limitZoom(t), this)
                        },
                        zoomIn: function(t, e) {
                            return this.setZoom(this._zoom + (t || 1), e)
                        },
                        zoomOut: function(t, e) {
                            return this.setZoom(this._zoom - (t || 1), e)
                        },
                        setZoomAround: function(t, e, i) {
                            var n = this.getZoomScale(e),
                                o = this.getSize().divideBy(2),
                                s = t instanceof a.Point ? t : this.latLngToContainerPoint(t),
                                r = s.subtract(o).multiplyBy(1 - 1 / n),
                                l = this.containerPointToLatLng(o.add(r));
                            return this.setView(l, e, {
                                zoom: i
                            })
                        },
                        fitBounds: function(t, e) {
                            e = e || {}, t = t.getBounds ? t.getBounds() : a.latLngBounds(t);
                            var i = a.point(e.paddingTopLeft || e.padding || [0, 0]),
                                n = a.point(e.paddingBottomRight || e.padding || [0, 0]),
                                o = this.getBoundsZoom(t, !1, i.add(n)),
                                s = n.subtract(i).divideBy(2),
                                r = this.project(t.getSouthWest(), o),
                                l = this.project(t.getNorthEast(), o),
                                h = this.unproject(r.add(l).divideBy(2).add(s), o);
                            return o = e && e.maxZoom ? Math.min(e.maxZoom, o) : o, this.setView(h, o, e)
                        },
                        fitWorld: function(t) {
                            return this.fitBounds([
                                [-90, -180],
                                [90, 180]
                            ], t)
                        },
                        panTo: function(t, e) {
                            return this.setView(t, this._zoom, {
                                pan: e
                            })
                        },
                        panBy: function(t) {
                            return this.fire("movestart"), this._rawPanBy(a.point(t)), this.fire("move"), this.fire("moveend")
                        },
                        setMaxBounds: function(t) {
                            return t = a.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
                        },
                        panInsideBounds: function(t, e) {
                            var i = this.getCenter(),
                                n = this._limitCenter(i, this._zoom, t);
                            return i.equals(n) ? this : this.panTo(n, e)
                        },
                        addLayer: function(t) {
                            var e = a.stamp(t);
                            return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && a.TileLayer && t instanceof a.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
                        },
                        removeLayer: function(t) {
                            var e = a.stamp(t);
                            return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
                                layer: t
                            }), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && a.TileLayer && t instanceof a.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
                        },
                        hasLayer: function(t) {
                            return t ? a.stamp(t) in this._layers : !1
                        },
                        eachLayer: function(t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this
                        },
                        invalidateSize: function(t) {
                            if (!this._loaded) return this;
                            t = a.extend({
                                animate: !1,
                                pan: !0
                            }, t === !0 ? {
                                animate: !0
                            } : t);
                            var e = this.getSize();
                            this._sizeChanged = !0, this._initialCenter = null;
                            var i = this.getSize(),
                                n = e.divideBy(2).round(),
                                o = i.divideBy(2).round(),
                                s = n.subtract(o);
                            return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                                oldSize: e,
                                newSize: i
                            })) : this
                        },
                        addHandler: function(t, e) {
                            if (!e) return this;
                            var i = this[t] = new e(this);
                            return this._handlers.push(i), this.options[t] && i.enable(), this
                        },
                        remove: function() {
                            this._loaded && this.fire("unload"), this._initEvents("off");
                            try {
                                delete this._container._leaflet
                            } catch (t) {
                                this._container._leaflet = o
                            }
                            return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
                        },
                        getCenter: function() {
                            return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                        },
                        getZoom: function() {
                            return this._zoom
                        },
                        getBounds: function() {
                            var t = this.getPixelBounds(),
                                e = this.unproject(t.getBottomLeft()),
                                i = this.unproject(t.getTopRight());
                            return new a.LatLngBounds(e, i)
                        },
                        getMinZoom: function() {
                            return this.options.minZoom === o ? this._layersMinZoom === o ? 0 : this._layersMinZoom : this.options.minZoom
                        },
                        getMaxZoom: function() {
                            return this.options.maxZoom === o ? this._layersMaxZoom === o ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                        },
                        getBoundsZoom: function(t, e, i) {
                            t = a.latLngBounds(t);
                            var n, o = this.getMinZoom() - (e ? 1 : 0),
                                s = this.getMaxZoom(),
                                r = this.getSize(),
                                l = t.getNorthWest(),
                                h = t.getSouthEast(),
                                u = !0;
                            i = a.point(i || [0, 0]);
                            do o++, n = this.project(h, o).subtract(this.project(l, o)).add(i), u = e ? n.x < r.x || n.y < r.y : r.contains(n); while (u && s >= o);
                            return u && e ? null : e ? o : o - 1
                        },
                        getSize: function() {
                            return (!this._size || this._sizeChanged) && (this._size = new a.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
                        },
                        getPixelBounds: function() {
                            var t = this._getTopLeftPoint();
                            return new a.Bounds(t, t.add(this.getSize()))
                        },
                        getPixelOrigin: function() {
                            return this._checkIfLoaded(), this._initialTopLeftPoint
                        },
                        getPanes: function() {
                            return this._panes
                        },
                        getContainer: function() {
                            return this._container
                        },
                        getZoomScale: function(t) {
                            var e = this.options.crs;
                            return e.scale(t) / e.scale(this._zoom)
                        },
                        getScaleZoom: function(t) {
                            return this._zoom + Math.log(t) / Math.LN2
                        },
                        project: function(t, e) {
                            return e = e === o ? this._zoom : e, this.options.crs.latLngToPoint(a.latLng(t), e)
                        },
                        unproject: function(t, e) {
                            return e = e === o ? this._zoom : e, this.options.crs.pointToLatLng(a.point(t), e)
                        },
                        layerPointToLatLng: function(t) {
                            var e = a.point(t).add(this.getPixelOrigin());
                            return this.unproject(e)
                        },
                        latLngToLayerPoint: function(t) {
                            var e = this.project(a.latLng(t))._round();
                            return e._subtract(this.getPixelOrigin())
                        },
                        containerPointToLayerPoint: function(t) {
                            return a.point(t).subtract(this._getMapPanePos())
                        },
                        layerPointToContainerPoint: function(t) {
                            return a.point(t).add(this._getMapPanePos())
                        },
                        containerPointToLatLng: function(t) {
                            var e = this.containerPointToLayerPoint(a.point(t));
                            return this.layerPointToLatLng(e)
                        },
                        latLngToContainerPoint: function(t) {
                            return this.layerPointToContainerPoint(this.latLngToLayerPoint(a.latLng(t)))
                        },
                        mouseEventToContainerPoint: function(t) {
                            return a.DomEvent.getMousePosition(t, this._container)
                        },
                        mouseEventToLayerPoint: function(t) {
                            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                        },
                        mouseEventToLatLng: function(t) {
                            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                        },
                        _initContainer: function(t) {
                            var e = this._container = a.DomUtil.get(t);
                            if (!e) throw new Error("Map container not found.");
                            if (e._leaflet) throw new Error("Map container is already initialized.");
                            e._leaflet = !0
                        },
                        _initLayout: function() {
                            var t = this._container;
                            a.DomUtil.addClass(t, "leaflet-container" + (a.Browser.touch ? " leaflet-touch" : "") + (a.Browser.retina ? " leaflet-retina" : "") + (a.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                            var e = a.DomUtil.getStyle(t, "position");
                            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                        },
                        _initPanes: function() {
                            var t = this._panes = {};
                            this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
                            var e = " leaflet-zoom-hide";
                            this.options.markerZoomAnimation || (a.DomUtil.addClass(t.markerPane, e), a.DomUtil.addClass(t.shadowPane, e), a.DomUtil.addClass(t.popupPane, e))
                        },
                        _createPane: function(t, e) {
                            return a.DomUtil.create("div", t, e || this._panes.objectsPane)
                        },
                        _clearPanes: function() {
                            this._container.removeChild(this._mapPane)
                        },
                        _addLayers: function(t) {
                            t = t ? a.Util.isArray(t) ? t : [t] : [];
                            for (var e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
                        },
                        _resetView: function(t, e, i, n) {
                            var o = this._zoom !== e;
                            n || (this.fire("movestart"), o && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : a.DomUtil.setPosition(this._mapPane, new a.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
                            var s = !this._loaded;
                            this._loaded = !0, s && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("viewreset", {
                                hard: !i
                            }), this.fire("move"), (o || n) && this.fire("zoomend"), this.fire("moveend", {
                                hard: !i
                            })
                        },
                        _rawPanBy: function(t) {
                            a.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
                        },
                        _getZoomSpan: function() {
                            return this.getMaxZoom() - this.getMinZoom()
                        },
                        _updateZoomLevels: function() {
                            var t, e = 1 / 0,
                                i = -(1 / 0),
                                n = this._getZoomSpan();
                            for (t in this._zoomBoundLayers) {
                                var s = this._zoomBoundLayers[t];
                                isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (i = Math.max(i, s.options.maxZoom))
                            }
                            t === o ? this._layersMaxZoom = this._layersMinZoom = o : (this._layersMaxZoom = i, this._layersMinZoom = e), n !== this._getZoomSpan() && this.fire("zoomlevelschange")
                        },
                        _panInsideMaxBounds: function() {
                            this.panInsideBounds(this.options.maxBounds)
                        },
                        _checkIfLoaded: function() {
                            if (!this._loaded) throw new Error("Set map center and zoom first.")
                        },
                        _initEvents: function(t) {
                            if (a.DomEvent) {
                                t = t || "on", a.DomEvent[t](this._container, "click", this._onMouseClick, this);
                                var i, n, o = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                                for (i = 0, n = o.length; n > i; i++) a.DomEvent[t](this._container, o[i], this._fireMouseEvent, this);
                                this.options.trackResize && a.DomEvent[t](e, "resize", this._onResize, this)
                            }
                        },
                        _onResize: function() {
                            a.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = a.Util.requestAnimFrame(function() {
                                this.invalidateSize({
                                    debounceMoveend: !0
                                })
                            }, this, !1, this._container)
                        },
                        _onMouseClick: function(t) {
                            !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || a.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
                        },
                        _fireMouseEvent: function(t) {
                            if (this._loaded && !a.DomEvent._skipped(t)) {
                                var e = t.type;
                                if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
                                    "contextmenu" === e && a.DomEvent.preventDefault(t);
                                    var i = this.mouseEventToContainerPoint(t),
                                        n = this.containerPointToLayerPoint(i),
                                        o = this.layerPointToLatLng(n);
                                    this.fire(e, {
                                        latlng: o,
                                        layerPoint: n,
                                        containerPoint: i,
                                        originalEvent: t
                                    })
                                }
                            }
                        },
                        _onTileLayerLoad: function() {
                            this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
                        },
                        _clearHandlers: function() {
                            for (var t = 0, e = this._handlers.length; e > t; t++) this._handlers[t].disable()
                        },
                        whenReady: function(t, e) {
                            return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
                        },
                        _layerAdd: function(t) {
                            t.onAdd(this), this.fire("layeradd", {
                                layer: t
                            })
                        },
                        _getMapPanePos: function() {
                            return a.DomUtil.getPosition(this._mapPane)
                        },
                        _moved: function() {
                            var t = this._getMapPanePos();
                            return t && !t.equals([0, 0])
                        },
                        _getTopLeftPoint: function() {
                            return this.getPixelOrigin().subtract(this._getMapPanePos())
                        },
                        _getNewTopLeftPoint: function(t, e) {
                            var i = this.getSize()._divideBy(2);
                            return this.project(t, e)._subtract(i)._round()
                        },
                        _latLngToNewLayerPoint: function(t, e, i) {
                            var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
                            return this.project(t, e)._subtract(n)
                        },
                        _getCenterLayerPoint: function() {
                            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                        },
                        _getCenterOffset: function(t) {
                            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                        },
                        _limitCenter: function(t, e, i) {
                            if (!i) return t;
                            var n = this.project(t, e),
                                o = this.getSize().divideBy(2),
                                s = new a.Bounds(n.subtract(o), n.add(o)),
                                r = this._getBoundsOffset(s, i, e);
                            return this.unproject(n.add(r), e)
                        },
                        _limitOffset: function(t, e) {
                            if (!e) return t;
                            var i = this.getPixelBounds(),
                                n = new a.Bounds(i.min.add(t), i.max.add(t));
                            return t.add(this._getBoundsOffset(n, e))
                        },
                        _getBoundsOffset: function(t, e, i) {
                            var n = this.project(e.getNorthWest(), i).subtract(t.min),
                                o = this.project(e.getSouthEast(), i).subtract(t.max),
                                s = this._rebound(n.x, -o.x),
                                r = this._rebound(n.y, -o.y);
                            return new a.Point(s, r)
                        },
                        _rebound: function(t, e) {
                            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                        },
                        _limitZoom: function(t) {
                            var e = this.getMinZoom(),
                                i = this.getMaxZoom();
                            return Math.max(e, Math.min(i, t))
                        }
                    }), a.map = function(t, e) {
                        return new a.Map(t, e)
                    }, a.Projection.Mercator = {
                        MAX_LATITUDE: 85.0840591556,
                        R_MINOR: 6356752.314245179,
                        R_MAJOR: 6378137,
                        project: function(t) {
                            var e = a.LatLng.DEG_TO_RAD,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = this.R_MAJOR,
                                s = this.R_MINOR,
                                r = t.lng * e * o,
                                l = n * e,
                                h = s / o,
                                u = Math.sqrt(1 - h * h),
                                c = u * Math.sin(l);
                            c = Math.pow((1 - c) / (1 + c), .5 * u);
                            var d = Math.tan(.5 * (.5 * Math.PI - l)) / c;
                            return l = -o * Math.log(d), new a.Point(r, l)
                        },
                        unproject: function(t) {
                            for (var e, i = a.LatLng.RAD_TO_DEG, n = this.R_MAJOR, o = this.R_MINOR, s = t.x * i / n, r = o / n, l = Math.sqrt(1 - r * r), h = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(h), c = 15, d = 1e-7, p = c, m = .1; Math.abs(m) > d && --p > 0;) e = l * Math.sin(u), m = Math.PI / 2 - 2 * Math.atan(h * Math.pow((1 - e) / (1 + e), .5 * l)) - u, u += m;
                            return new a.LatLng(u * i, s)
                        }
                    }, a.CRS.EPSG3395 = a.extend({}, a.CRS, {
                        code: "EPSG:3395",
                        projection: a.Projection.Mercator,
                        transformation: function() {
                            var t = a.Projection.Mercator,
                                e = t.R_MAJOR,
                                i = .5 / (Math.PI * e);
                            return new a.Transformation(i, .5, -i, .5)
                        }()
                    }), a.TileLayer = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            minZoom: 0,
                            maxZoom: 18,
                            tileSize: 256,
                            subdomains: "abc",
                            errorTileUrl: "",
                            attribution: "",
                            zoomOffset: 0,
                            opacity: 1,
                            unloadInvisibleTiles: a.Browser.mobile,
                            updateWhenIdle: a.Browser.mobile
                        },
                        initialize: function(t, e) {
                            e = a.setOptions(this, e), e.detectRetina && a.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = a.latLngBounds(e.bounds)), this._url = t;
                            var i = this.options.subdomains;
                            "string" == typeof i && (this.options.subdomains = i.split(""))
                        },
                        onAdd: function(t) {
                            this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
                                viewreset: this._reset,
                                moveend: this._update
                            }, this), this._animated && t.on({
                                zoomanim: this._animateZoom,
                                zoomend: this._endZoomAnim
                            }, this), this.options.updateWhenIdle || (this._limitedUpdate = a.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        onRemove: function(t) {
                            this._container.parentNode.removeChild(this._container), t.off({
                                viewreset: this._reset,
                                moveend: this._update
                            }, this), this._animated && t.off({
                                zoomanim: this._animateZoom,
                                zoomend: this._endZoomAnim
                            }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
                        },
                        bringToFront: function() {
                            var t = this._map._panes.tilePane;
                            return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
                        },
                        bringToBack: function() {
                            var t = this._map._panes.tilePane;
                            return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
                        },
                        getAttribution: function() {
                            return this.options.attribution
                        },
                        getContainer: function() {
                            return this._container
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._map && this._updateOpacity(), this
                        },
                        setZIndex: function(t) {
                            return this.options.zIndex = t, this._updateZIndex(), this
                        },
                        setUrl: function(t, e) {
                            return this._url = t, e || this.redraw(), this
                        },
                        redraw: function() {
                            return this._map && (this._reset({
                                hard: !0
                            }), this._update()), this
                        },
                        _updateZIndex: function() {
                            this._container && this.options.zIndex !== o && (this._container.style.zIndex = this.options.zIndex)
                        },
                        _setAutoZIndex: function(t, e) {
                            var i, n, o, s = t.children,
                                a = -e(1 / 0, -(1 / 0));
                            for (n = 0, o = s.length; o > n; n++) s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
                            this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
                        },
                        _updateOpacity: function() {
                            var t, e = this._tiles;
                            if (a.Browser.ielt9)
                                for (t in e) a.DomUtil.setOpacity(e[t], this.options.opacity);
                            else a.DomUtil.setOpacity(this._container, this.options.opacity)
                        },
                        _initContainer: function() {
                            var t = this._map._panes.tilePane;
                            if (!this._container) {
                                if (this._container = a.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                                    var e = "leaflet-tile-container";
                                    this._bgBuffer = a.DomUtil.create("div", e, this._container), this._tileContainer = a.DomUtil.create("div", e, this._container)
                                } else this._tileContainer = this._container;
                                t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
                            }
                        },
                        _reset: function(t) {
                            for (var e in this._tiles) this.fire("tileunload", {
                                tile: this._tiles[e]
                            });
                            this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
                        },
                        _getTileSize: function() {
                            var t = this._map,
                                e = t.getZoom() + this.options.zoomOffset,
                                i = this.options.maxNativeZoom,
                                n = this.options.tileSize;
                            return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
                        },
                        _update: function() {
                            if (this._map) {
                                var t = this._map,
                                    e = t.getPixelBounds(),
                                    i = t.getZoom(),
                                    n = this._getTileSize();
                                if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
                                    var o = a.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
                                    this._addTilesFromCenterOut(o), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(o)
                                }
                            }
                        },
                        _addTilesFromCenterOut: function(t) {
                            var e, i, o, s = [],
                                r = t.getCenter();
                            for (e = t.min.y; e <= t.max.y; e++)
                                for (i = t.min.x; i <= t.max.x; i++) o = new a.Point(i, e), this._tileShouldBeLoaded(o) && s.push(o);
                            var l = s.length;
                            if (0 !== l) {
                                s.sort(function(t, e) {
                                    return t.distanceTo(r) - e.distanceTo(r)
                                });
                                var h = n.createDocumentFragment();
                                for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += l, i = 0; l > i; i++) this._addTile(s[i], h);
                                this._tileContainer.appendChild(h)
                            }
                        },
                        _tileShouldBeLoaded: function(t) {
                            if (t.x + ":" + t.y in this._tiles) return !1;
                            var e = this.options;
                            if (!e.continuousWorld) {
                                var i = this._getWrapTileNum();
                                if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1
                            }
                            if (e.bounds) {
                                var n = e.tileSize,
                                    o = t.multiplyBy(n),
                                    s = o.add([n, n]),
                                    a = this._map.unproject(o),
                                    r = this._map.unproject(s);
                                if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r])) return !1
                            }
                            return !0
                        },
                        _removeOtherTiles: function(t) {
                            var e, i, n, o;
                            for (o in this._tiles) e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
                        },
                        _removeTile: function(t) {
                            var e = this._tiles[t];
                            this.fire("tileunload", {
                                tile: e,
                                url: e.src
                            }), this.options.reuseTiles ? (a.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), a.Browser.android || (e.onload = null, e.src = a.Util.emptyImageUrl), delete this._tiles[t]
                        },
                        _addTile: function(t, e) {
                            var i = this._getTilePos(t),
                                n = this._getTile();
                            a.DomUtil.setPosition(n, i, a.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
                        },
                        _getZoomForUrl: function() {
                            var t = this.options,
                                e = this._map.getZoom();
                            return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
                        },
                        _getTilePos: function(t) {
                            var e = this._map.getPixelOrigin(),
                                i = this._getTileSize();
                            return t.multiplyBy(i).subtract(e)
                        },
                        getTileUrl: function(t) {
                            return a.Util.template(this._url, a.extend({
                                s: this._getSubdomain(t),
                                z: t.z,
                                x: t.x,
                                y: t.y
                            }, this.options))
                        },
                        _getWrapTileNum: function() {
                            var t = this._map.options.crs,
                                e = t.getSize(this._map.getZoom());
                            return e.divideBy(this._getTileSize())._floor()
                        },
                        _adjustTilePoint: function(t) {
                            var e = this._getWrapTileNum();
                            this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
                        },
                        _getSubdomain: function(t) {
                            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                            return this.options.subdomains[e]
                        },
                        _getTile: function() {
                            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                                var t = this._unusedTiles.pop();
                                return this._resetTile(t), t
                            }
                            return this._createTile()
                        },
                        _resetTile: function() {},
                        _createTile: function() {
                            var t = a.DomUtil.create("img", "leaflet-tile");
                            return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = a.Util.falseFn, a.Browser.ielt9 && this.options.opacity !== o && a.DomUtil.setOpacity(t, this.options.opacity), a.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
                        },
                        _loadTile: function(t, e) {
                            t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
                                tile: t,
                                url: t.src
                            })
                        },
                        _tileLoaded: function() {
                            this._tilesToLoad--, this._animated && a.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(a.bind(this._clearBgBuffer, this), 500)))
                        },
                        _tileOnLoad: function() {
                            var t = this._layer;
                            this.src !== a.Util.emptyImageUrl && (a.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                                tile: this,
                                url: this.src
                            })), t._tileLoaded()
                        },
                        _tileOnError: function() {
                            var t = this._layer;
                            t.fire("tileerror", {
                                tile: this,
                                url: this.src
                            });
                            var e = t.options.errorTileUrl;
                            e && (this.src = e), t._tileLoaded()
                        }
                    }), a.tileLayer = function(t, e) {
                        return new a.TileLayer(t, e)
                    }, a.TileLayer.WMS = a.TileLayer.extend({
                        defaultWmsParams: {
                            service: "WMS",
                            request: "GetMap",
                            version: "1.1.1",
                            layers: "",
                            styles: "",
                            format: "image/jpeg",
                            transparent: !1
                        },
                        initialize: function(t, e) {
                            this._url = t;
                            var i = a.extend({}, this.defaultWmsParams),
                                n = e.tileSize || this.options.tileSize;
                            e.detectRetina && a.Browser.retina ? i.width = i.height = 2 * n : i.width = i.height = n;
                            for (var o in e) this.options.hasOwnProperty(o) || "crs" === o || (i[o] = e[o]);
                            this.wmsParams = i, a.setOptions(this, e)
                        },
                        onAdd: function(t) {
                            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                            var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                            this.wmsParams[e] = this._crs.code, a.TileLayer.prototype.onAdd.call(this, t)
                        },
                        getTileUrl: function(t) {
                            var e = this._map,
                                i = this.options.tileSize,
                                n = t.multiplyBy(i),
                                o = n.add([i, i]),
                                s = this._crs.project(e.unproject(n, t.z)),
                                r = this._crs.project(e.unproject(o, t.z)),
                                l = this._wmsVersion >= 1.3 && this._crs === a.CRS.EPSG4326 ? [r.y, s.x, s.y, r.x].join(",") : [s.x, r.y, r.x, s.y].join(","),
                                h = a.Util.template(this._url, {
                                    s: this._getSubdomain(t)
                                });
                            return h + a.Util.getParamString(this.wmsParams, h, !0) + "&BBOX=" + l
                        },
                        setParams: function(t, e) {
                            return a.extend(this.wmsParams, t), e || this.redraw(), this
                        }
                    }), a.tileLayer.wms = function(t, e) {
                        return new a.TileLayer.WMS(t, e)
                    }, a.TileLayer.Canvas = a.TileLayer.extend({
                        options: {
                            async: !1
                        },
                        initialize: function(t) {
                            a.setOptions(this, t)
                        },
                        redraw: function() {
                            this._map && (this._reset({
                                hard: !0
                            }), this._update());
                            for (var t in this._tiles) this._redrawTile(this._tiles[t]);
                            return this
                        },
                        _redrawTile: function(t) {
                            this.drawTile(t, t._tilePoint, this._map._zoom)
                        },
                        _createTile: function() {
                            var t = a.DomUtil.create("canvas", "leaflet-tile");
                            return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = a.Util.falseFn, t
                        },
                        _loadTile: function(t, e) {
                            t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
                        },
                        drawTile: function() {},
                        tileDrawn: function(t) {
                            this._tileOnLoad.call(t)
                        }
                    }), a.tileLayer.canvas = function(t) {
                        return new a.TileLayer.Canvas(t)
                    }, a.ImageOverlay = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            opacity: 1
                        },
                        initialize: function(t, e, i) {
                            this._url = t, this._bounds = a.latLngBounds(e), a.setOptions(this, i)
                        },
                        onAdd: function(t) {
                            this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && a.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
                        },
                        onRemove: function(t) {
                            t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._updateOpacity(), this
                        },
                        bringToFront: function() {
                            return this._image && this._map._panes.overlayPane.appendChild(this._image), this
                        },
                        bringToBack: function() {
                            var t = this._map._panes.overlayPane;
                            return this._image && t.insertBefore(this._image, t.firstChild), this
                        },
                        setUrl: function(t) {
                            this._url = t, this._image.src = this._url
                        },
                        getAttribution: function() {
                            return this.options.attribution
                        },
                        _initImage: function() {
                            this._image = a.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && a.Browser.any3d ? a.DomUtil.addClass(this._image, "leaflet-zoom-animated") : a.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), a.extend(this._image, {
                                galleryimg: "no",
                                onselectstart: a.Util.falseFn,
                                onmousemove: a.Util.falseFn,
                                onload: a.bind(this._onImageLoad, this),
                                src: this._url
                            })
                        },
                        _animateZoom: function(t) {
                            var e = this._map,
                                i = this._image,
                                n = e.getZoomScale(t.zoom),
                                o = this._bounds.getNorthWest(),
                                s = this._bounds.getSouthEast(),
                                r = e._latLngToNewLayerPoint(o, t.zoom, t.center),
                                l = e._latLngToNewLayerPoint(s, t.zoom, t.center)._subtract(r),
                                h = r._add(l._multiplyBy(.5 * (1 - 1 / n)));
                            i.style[a.DomUtil.TRANSFORM] = a.DomUtil.getTranslateString(h) + " scale(" + n + ") "
                        },
                        _reset: function() {
                            var t = this._image,
                                e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                                i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
                            a.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
                        },
                        _onImageLoad: function() {
                            this.fire("load")
                        },
                        _updateOpacity: function() {
                            a.DomUtil.setOpacity(this._image, this.options.opacity)
                        }
                    }), a.imageOverlay = function(t, e, i) {
                        return new a.ImageOverlay(t, e, i)
                    }, a.Icon = a.Class.extend({
                        options: {
                            className: ""
                        },
                        initialize: function(t) {
                            a.setOptions(this, t)
                        },
                        createIcon: function(t) {
                            return this._createIcon("icon", t)
                        },
                        createShadow: function(t) {
                            return this._createIcon("shadow", t)
                        },
                        _createIcon: function(t, e) {
                            var i = this._getIconUrl(t);
                            if (!i) {
                                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                                return null
                            }
                            var n;
                            return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n
                        },
                        _setIconStyles: function(t, e) {
                            var i, n = this.options,
                                o = a.point(n[e + "Size"]);
                            i = "shadow" === e ? a.point(n.shadowAnchor || n.iconAnchor) : a.point(n.iconAnchor), !i && o && (i = o.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                        },
                        _createImg: function(t, e) {
                            return e = e || n.createElement("img"), e.src = t, e
                        },
                        _getIconUrl: function(t) {
                            return a.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
                        }
                    }), a.icon = function(t) {
                        return new a.Icon(t)
                    }, a.Icon.Default = a.Icon.extend({
                        options: {
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowSize: [41, 41]
                        },
                        _getIconUrl: function(t) {
                            var e = t + "Url";
                            if (this.options[e]) return this.options[e];
                            a.Browser.retina && "icon" === t && (t += "-2x");
                            var i = a.Icon.Default.imagePath;
                            if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                            return i + "/marker-" + t + ".png"
                        }
                    }), a.Icon.Default.imagePath = function() {
                        var t, e, i, o, s, a = n.getElementsByTagName("script"),
                            r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
                        for (t = 0, e = a.length; e > t; t++)
                            if (i = a[t].src, o = i.match(r)) return s = i.split(r)[0], (s ? s + "/" : "") + "images"
                    }(), a.Marker = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            icon: new a.Icon.Default,
                            title: "",
                            alt: "",
                            clickable: !0,
                            draggable: !1,
                            keyboard: !0,
                            zIndexOffset: 0,
                            opacity: 1,
                            riseOnHover: !1,
                            riseOffset: 250
                        },
                        initialize: function(t, e) {
                            a.setOptions(this, e), this._latlng = a.latLng(t)
                        },
                        onAdd: function(t) {
                            this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        onRemove: function(t) {
                            this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
                                viewreset: this.update,
                                zoomanim: this._animateZoom
                            }, this), this._map = null
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            return this._latlng = a.latLng(t), this.update(), this.fire("move", {
                                latlng: this._latlng
                            })
                        },
                        setZIndexOffset: function(t) {
                            return this.options.zIndexOffset = t, this.update(), this
                        },
                        setIcon: function(t) {
                            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
                        },
                        update: function() {
                            if (this._icon) {
                                var t = this._map.latLngToLayerPoint(this._latlng).round();
                                this._setPos(t)
                            }
                            return this
                        },
                        _initIcon: function() {
                            var t = this.options,
                                e = this._map,
                                i = e.options.zoomAnimation && e.options.markerZoomAnimation,
                                n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                                o = t.icon.createIcon(this._icon),
                                s = !1;
                            o !== this._icon && (this._icon && this._removeIcon(), s = !0, t.title && (o.title = t.title), t.alt && (o.alt = t.alt)), a.DomUtil.addClass(o, n), t.keyboard && (o.tabIndex = "0"), this._icon = o, this._initInteraction(), t.riseOnHover && a.DomEvent.on(o, "mouseover", this._bringToFront, this).on(o, "mouseout", this._resetZIndex, this);
                            var r = t.icon.createShadow(this._shadow),
                                l = !1;
                            r !== this._shadow && (this._removeShadow(), l = !0), r && a.DomUtil.addClass(r, n), this._shadow = r, t.opacity < 1 && this._updateOpacity();
                            var h = this._map._panes;
                            s && h.markerPane.appendChild(this._icon), r && l && h.shadowPane.appendChild(this._shadow)
                        },
                        _removeIcon: function() {
                            this.options.riseOnHover && a.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
                        },
                        _removeShadow: function() {
                            this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
                        },
                        _setPos: function(t) {
                            a.DomUtil.setPosition(this._icon, t), this._shadow && a.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                        },
                        _updateZIndex: function(t) {
                            this._icon.style.zIndex = this._zIndex + t
                        },
                        _animateZoom: function(t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                            this._setPos(e)
                        },
                        _initInteraction: function() {
                            if (this.options.clickable) {
                                var t = this._icon,
                                    e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                                a.DomUtil.addClass(t, "leaflet-clickable"), a.DomEvent.on(t, "click", this._onMouseClick, this), a.DomEvent.on(t, "keypress", this._onKeyPress, this);
                                for (var i = 0; i < e.length; i++) a.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                                a.Handler.MarkerDrag && (this.dragging = new a.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                            }
                        },
                        _onMouseClick: function(t) {
                            var e = this.dragging && this.dragging.moved();
                            (this.hasEventListeners(t.type) || e) && a.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                                originalEvent: t,
                                latlng: this._latlng
                            })
                        },
                        _onKeyPress: function(t) {
                            13 === t.keyCode && this.fire("click", {
                                originalEvent: t,
                                latlng: this._latlng
                            })
                        },
                        _fireMouseEvent: function(t) {
                            this.fire(t.type, {
                                originalEvent: t,
                                latlng: this._latlng
                            }), "contextmenu" === t.type && this.hasEventListeners(t.type) && a.DomEvent.preventDefault(t), "mousedown" !== t.type ? a.DomEvent.stopPropagation(t) : a.DomEvent.preventDefault(t)
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._map && this._updateOpacity(), this
                        },
                        _updateOpacity: function() {
                            a.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && a.DomUtil.setOpacity(this._shadow, this.options.opacity)
                        },
                        _bringToFront: function() {
                            this._updateZIndex(this.options.riseOffset)
                        },
                        _resetZIndex: function() {
                            this._updateZIndex(0)
                        }
                    }), a.marker = function(t, e) {
                        return new a.Marker(t, e)
                    }, a.DivIcon = a.Icon.extend({
                        options: {
                            iconSize: [12, 12],
                            className: "leaflet-div-icon",
                            html: !1
                        },
                        createIcon: function(t) {
                            var e = t && "DIV" === t.tagName ? t : n.createElement("div"),
                                i = this.options;
                            return i.html !== !1 ? e.innerHTML = i.html : e.innerHTML = "", i.bgPos && (e.style.backgroundPosition = -i.bgPos.x + "px " + -i.bgPos.y + "px"), this._setIconStyles(e, "icon"), e
                        },
                        createShadow: function() {
                            return null
                        }
                    }), a.divIcon = function(t) {
                        return new a.DivIcon(t)
                    }, a.Map.mergeOptions({
                        closePopupOnClick: !0
                    }), a.Popup = a.Class.extend({
                        includes: a.Mixin.Events,
                        options: {
                            minWidth: 50,
                            maxWidth: 300,
                            autoPan: !0,
                            closeButton: !0,
                            offset: [0, 7],
                            autoPanPadding: [5, 5],
                            keepInView: !1,
                            className: "",
                            zoomAnimation: !0
                        },
                        initialize: function(t, e) {
                            a.setOptions(this, t), this._source = e, this._animated = a.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
                        },
                        onAdd: function(t) {
                            this._map = t, this._container || this._initLayout();
                            var e = t.options.fadeAnimation;
                            e && a.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && a.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
                                popup: this
                            }), this._source && this._source.fire("popupopen", {
                                popup: this
                            })
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        openOn: function(t) {
                            return t.openPopup(this), this
                        },
                        onRemove: function(t) {
                            t._panes.popupPane.removeChild(this._container), a.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && a.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
                                popup: this
                            }), this._source && this._source.fire("popupclose", {
                                popup: this
                            })
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            return this._latlng = a.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
                        },
                        getContent: function() {
                            return this._content
                        },
                        setContent: function(t) {
                            return this._content = t, this.update(), this
                        },
                        update: function() {
                            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                        },
                        _getEvents: function() {
                            var t = {
                                viewreset: this._updatePosition
                            };
                            return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
                        },
                        _close: function() {
                            this._map && this._map.closePopup(this)
                        },
                        _initLayout: function() {
                            var t, e = "leaflet-popup",
                                i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
                                n = this._container = a.DomUtil.create("div", i);
                            this.options.closeButton && (t = this._closeButton = a.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", a.DomEvent.disableClickPropagation(t), a.DomEvent.on(t, "click", this._onCloseButtonClick, this));
                            var o = this._wrapper = a.DomUtil.create("div", e + "-content-wrapper", n);
                            a.DomEvent.disableClickPropagation(o), this._contentNode = a.DomUtil.create("div", e + "-content", o), a.DomEvent.disableScrollPropagation(this._contentNode), a.DomEvent.on(o, "contextmenu", a.DomEvent.stopPropagation), this._tipContainer = a.DomUtil.create("div", e + "-tip-container", n), this._tip = a.DomUtil.create("div", e + "-tip", this._tipContainer)
                        },
                        _updateContent: function() {
                            if (this._content) {
                                if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
                                else {
                                    for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
                                    this._contentNode.appendChild(this._content)
                                }
                                this.fire("contentupdate")
                            }
                        },
                        _updateLayout: function() {
                            var t = this._contentNode,
                                e = t.style;
                            e.width = "", e.whiteSpace = "nowrap";
                            var i = t.offsetWidth;
                            i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                            var n = t.offsetHeight,
                                o = this.options.maxHeight,
                                s = "leaflet-popup-scrolled";
                            o && n > o ? (e.height = o + "px", a.DomUtil.addClass(t, s)) : a.DomUtil.removeClass(t, s), this._containerWidth = this._container.offsetWidth
                        },
                        _updatePosition: function() {
                            if (this._map) {
                                var t = this._map.latLngToLayerPoint(this._latlng),
                                    e = this._animated,
                                    i = a.point(this.options.offset);
                                e && a.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
                            }
                        },
                        _zoomAnimation: function(t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                            a.DomUtil.setPosition(this._container, e)
                        },
                        _adjustPan: function() {
                            if (this.options.autoPan) {
                                var t = this._map,
                                    e = this._container.offsetHeight,
                                    i = this._containerWidth,
                                    n = new a.Point(this._containerLeft, -e - this._containerBottom);
                                this._animated && n._add(a.DomUtil.getPosition(this._container));
                                var o = t.layerPointToContainerPoint(n),
                                    s = a.point(this.options.autoPanPadding),
                                    r = a.point(this.options.autoPanPaddingTopLeft || s),
                                    l = a.point(this.options.autoPanPaddingBottomRight || s),
                                    h = t.getSize(),
                                    u = 0,
                                    c = 0;
                                o.x + i + l.x > h.x && (u = o.x + i - h.x + l.x), o.x - u - r.x < 0 && (u = o.x - r.x), o.y + e + l.y > h.y && (c = o.y + e - h.y + l.y), o.y - c - r.y < 0 && (c = o.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c])
                            }
                        },
                        _onCloseButtonClick: function(t) {
                            this._close(), a.DomEvent.stop(t)
                        }
                    }), a.popup = function(t, e) {
                        return new a.Popup(t, e)
                    }, a.Map.include({
                        openPopup: function(t, e, i) {
                            if (this.closePopup(), !(t instanceof a.Popup)) {
                                var n = t;
                                t = new a.Popup(i).setLatLng(e).setContent(n)
                            }
                            return t._isOpen = !0, this._popup = t, this.addLayer(t)
                        },
                        closePopup: function(t) {
                            return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
                        }
                    }), a.Marker.include({
                        openPopup: function() {
                            return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
                        },
                        closePopup: function() {
                            return this._popup && this._popup._close(), this
                        },
                        togglePopup: function() {
                            return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
                        },
                        bindPopup: function(t, e) {
                            var i = a.point(this.options.icon.options.popupAnchor || [0, 0]);
                            return i = i.add(a.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = a.extend({
                                offset: i
                            }, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof a.Popup ? (a.setOptions(t, e), this._popup = t) : this._popup = new a.Popup(e, this).setContent(t), this
                        },
                        setPopupContent: function(t) {
                            return this._popup && this._popup.setContent(t), this
                        },
                        unbindPopup: function() {
                            return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
                        },
                        getPopup: function() {
                            return this._popup
                        },
                        _movePopup: function(t) {
                            this._popup.setLatLng(t.latlng)
                        }
                    }), a.LayerGroup = a.Class.extend({
                        initialize: function(t) {
                            this._layers = {};
                            var e, i;
                            if (t)
                                for (e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
                        },
                        addLayer: function(t) {
                            var e = this.getLayerId(t);
                            return this._layers[e] = t, this._map && this._map.addLayer(t), this
                        },
                        removeLayer: function(t) {
                            var e = t in this._layers ? t : this.getLayerId(t);
                            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                        },
                        hasLayer: function(t) {
                            return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
                        },
                        clearLayers: function() {
                            return this.eachLayer(this.removeLayer, this), this
                        },
                        invoke: function(t) {
                            var e, i, n = Array.prototype.slice.call(arguments, 1);
                            for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
                            return this
                        },
                        onAdd: function(t) {
                            this._map = t, this.eachLayer(t.addLayer, t)
                        },
                        onRemove: function(t) {
                            this.eachLayer(t.removeLayer, t), this._map = null
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        eachLayer: function(t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this
                        },
                        getLayer: function(t) {
                            return this._layers[t]
                        },
                        getLayers: function() {
                            var t = [];
                            for (var e in this._layers) t.push(this._layers[e]);
                            return t
                        },
                        setZIndex: function(t) {
                            return this.invoke("setZIndex", t)
                        },
                        getLayerId: function(t) {
                            return a.stamp(t)
                        }
                    }), a.layerGroup = function(t) {
                        return new a.LayerGroup(t)
                    }, a.FeatureGroup = a.LayerGroup.extend({
                        includes: a.Mixin.Events,
                        statics: {
                            EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
                        },
                        addLayer: function(t) {
                            return this.hasLayer(t) ? this : ("on" in t && t.on(a.FeatureGroup.EVENTS, this._propagateEvent, this), a.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
                                layer: t
                            }))
                        },
                        removeLayer: function(t) {
                            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.off(a.FeatureGroup.EVENTS, this._propagateEvent, this), a.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                                layer: t
                            })) : this
                        },
                        bindPopup: function(t, e) {
                            return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
                        },
                        openPopup: function(t) {
                            for (var e in this._layers) {
                                this._layers[e].openPopup(t);
                                break
                            }
                            return this
                        },
                        setStyle: function(t) {
                            return this.invoke("setStyle", t)
                        },
                        bringToFront: function() {
                            return this.invoke("bringToFront")
                        },
                        bringToBack: function() {
                            return this.invoke("bringToBack")
                        },
                        getBounds: function() {
                            var t = new a.LatLngBounds;
                            return this.eachLayer(function(e) {
                                t.extend(e instanceof a.Marker ? e.getLatLng() : e.getBounds())
                            }), t
                        },
                        _propagateEvent: function(t) {
                            t = a.extend({
                                layer: t.target,
                                target: this
                            }, t), this.fire(t.type, t)
                        }
                    }), a.featureGroup = function(t) {
                        return new a.FeatureGroup(t)
                    }, a.Path = a.Class.extend({
                        includes: [a.Mixin.Events],
                        statics: {
                            CLIP_PADDING: function() {
                                var t = a.Browser.mobile ? 1280 : 2e3,
                                    i = (t / Math.max(e.outerWidth, e.outerHeight) - 1) / 2;
                                return Math.max(0, Math.min(.5, i))
                            }()
                        },
                        options: {
                            stroke: !0,
                            color: "#0033ff",
                            dashArray: null,
                            lineCap: null,
                            lineJoin: null,
                            weight: 5,
                            opacity: .5,
                            fill: !1,
                            fillColor: null,
                            fillOpacity: .2,
                            clickable: !0
                        },
                        initialize: function(t) {
                            a.setOptions(this, t)
                        },
                        onAdd: function(t) {
                            this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
                                viewreset: this.projectLatlngs,
                                moveend: this._updatePath
                            }, this)
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        onRemove: function(t) {
                            t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, a.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
                                viewreset: this.projectLatlngs,
                                moveend: this._updatePath
                            }, this)
                        },
                        projectLatlngs: function() {},
                        setStyle: function(t) {
                            return a.setOptions(this, t), this._container && this._updateStyle(), this
                        },
                        redraw: function() {
                            return this._map && (this.projectLatlngs(), this._updatePath()), this
                        }
                    }), a.Map.include({
                        _updatePathViewport: function() {
                            var t = a.Path.CLIP_PADDING,
                                e = this.getSize(),
                                i = a.DomUtil.getPosition(this._mapPane),
                                n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
                                o = n.add(e.multiplyBy(1 + 2 * t)._round());
                            this._pathViewport = new a.Bounds(n, o)
                        }
                    }), a.Path.SVG_NS = "http://www.w3.org/2000/svg", a.Browser.svg = !(!n.createElementNS || !n.createElementNS(a.Path.SVG_NS, "svg").createSVGRect), a.Path = a.Path.extend({
                        statics: {
                            SVG: a.Browser.svg
                        },
                        bringToFront: function() {
                            var t = this._map._pathRoot,
                                e = this._container;
                            return e && t.lastChild !== e && t.appendChild(e), this
                        },
                        bringToBack: function() {
                            var t = this._map._pathRoot,
                                e = this._container,
                                i = t.firstChild;
                            return e && i !== e && t.insertBefore(e, i), this
                        },
                        getPathString: function() {},
                        _createElement: function(t) {
                            return n.createElementNS(a.Path.SVG_NS, t)
                        },
                        _initElements: function() {
                            this._map._initPathRoot(), this._initPath(), this._initStyle()
                        },
                        _initPath: function() {
                            this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && a.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
                        },
                        _initStyle: function() {
                            this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
                        },
                        _updateStyle: function() {
                            this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
                        },
                        _updatePath: function() {
                            var t = this.getPathString();
                            t || (t = "M0 0"), this._path.setAttribute("d", t)
                        },
                        _initEvents: function() {
                            if (this.options.clickable) {
                                (a.Browser.svg || !a.Browser.vml) && a.DomUtil.addClass(this._path, "leaflet-clickable"), a.DomEvent.on(this._container, "click", this._onMouseClick, this);
                                for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) a.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
                            }
                        },
                        _onMouseClick: function(t) {
                            this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
                        },
                        _fireMouseEvent: function(t) {
                            if (this.hasEventListeners(t.type)) {
                                var e = this._map,
                                    i = e.mouseEventToContainerPoint(t),
                                    n = e.containerPointToLayerPoint(i),
                                    o = e.layerPointToLatLng(n);
                                this.fire(t.type, {
                                    latlng: o,
                                    layerPoint: n,
                                    containerPoint: i,
                                    originalEvent: t
                                }), "contextmenu" === t.type && a.DomEvent.preventDefault(t), "mousemove" !== t.type && a.DomEvent.stopPropagation(t)
                            }
                        }
                    }), a.Map.include({
                        _initPathRoot: function() {
                            this._pathRoot || (this._pathRoot = a.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && a.Browser.any3d ? (a.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
                                zoomanim: this._animatePathZoom,
                                zoomend: this._endPathZoom
                            })) : a.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
                        },
                        _animatePathZoom: function(t) {
                            var e = this.getZoomScale(t.zoom),
                                i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
                            this._pathRoot.style[a.DomUtil.TRANSFORM] = a.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
                        },
                        _endPathZoom: function() {
                            this._pathZooming = !1
                        },
                        _updateSvgViewport: function() {
                            if (!this._pathZooming) {
                                this._updatePathViewport();
                                var t = this._pathViewport,
                                    e = t.min,
                                    i = t.max,
                                    n = i.x - e.x,
                                    o = i.y - e.y,
                                    s = this._pathRoot,
                                    r = this._panes.overlayPane;
                                a.Browser.mobileWebkit && r.removeChild(s), a.DomUtil.setPosition(s, e), s.setAttribute("width", n), s.setAttribute("height", o), s.setAttribute("viewBox", [e.x, e.y, n, o].join(" ")), a.Browser.mobileWebkit && r.appendChild(s)
                            }
                        }
                    }), a.Path.include({
                        bindPopup: function(t, e) {
                            return t instanceof a.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new a.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
                        },
                        unbindPopup: function() {
                            return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
                        },
                        openPopup: function(t) {
                            return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                                latlng: t
                            })), this
                        },
                        closePopup: function() {
                            return this._popup && this._popup._close(), this
                        },
                        _openPopup: function(t) {
                            this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
                        }
                    }), a.Browser.vml = !a.Browser.svg && function() {
                        try {
                            var t = n.createElement("div");
                            t.innerHTML = '<v:shape adj="1"/>';
                            var e = t.firstChild;
                            return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
                        } catch (i) {
                            return !1
                        }
                    }(), a.Path = a.Browser.svg || !a.Browser.vml ? a.Path : a.Path.extend({
                        statics: {
                            VML: !0,
                            CLIP_PADDING: .02
                        },
                        _createElement: function() {
                            try {
                                return n.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                                    function(t) {
                                        return n.createElement("<lvml:" + t + ' class="lvml">')
                                    }
                            } catch (t) {
                                return function(t) {
                                    return n.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                                }
                            }
                        }(),
                        _initPath: function() {
                            var t = this._container = this._createElement("shape");
                            a.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && a.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
                        },
                        _initStyle: function() {
                            this._updateStyle()
                        },
                        _updateStyle: function() {
                            var t = this._stroke,
                                e = this._fill,
                                i = this.options,
                                n = this._container;
                            n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, i.dashArray ? t.dashStyle = a.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : t.dashStyle = "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
                        },
                        _updatePath: function() {
                            var t = this._container.style;
                            t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
                        }
                    }), a.Map.include(a.Browser.svg || !a.Browser.vml ? {} : {
                        _initPathRoot: function() {
                            if (!this._pathRoot) {
                                var t = this._pathRoot = n.createElement("div");
                                t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
                            }
                        }
                    }), a.Browser.canvas = function() {
                        return !!n.createElement("canvas").getContext
                    }(), a.Path = a.Path.SVG && !e.L_PREFER_CANVAS || !a.Browser.canvas ? a.Path : a.Path.extend({
                        statics: {
                            CANVAS: !0,
                            SVG: !1
                        },
                        redraw: function() {
                            return this._map && (this.projectLatlngs(), this._requestUpdate()), this
                        },
                        setStyle: function(t) {
                            return a.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
                        },
                        onRemove: function(t) {
                            t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this._map = null
                        },
                        _requestUpdate: function() {
                            this._map && !a.Path._updateRequest && (a.Path._updateRequest = a.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
                        },
                        _fireMapMoveEnd: function() {
                            a.Path._updateRequest = null, this.fire("moveend")
                        },
                        _initElements: function() {
                            this._map._initPathRoot(), this._ctx = this._map._canvasCtx
                        },
                        _updateStyle: function() {
                            var t = this.options;
                            t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
                        },
                        _drawPath: function() {
                            var t, e, i, n, o, s;
                            for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
                                for (e = 0, n = this._parts[t].length; n > e; e++) o = this._parts[t][e], s = (0 === e ? "move" : "line") + "To", this._ctx[s](o.x, o.y);
                                this instanceof a.Polygon && this._ctx.closePath()
                            }
                        },
                        _checkIfEmpty: function() {
                            return !this._parts.length
                        },
                        _updatePath: function() {
                            if (!this._checkIfEmpty()) {
                                var t = this._ctx,
                                    e = this.options;
                                this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill()), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
                            }
                        },
                        _initEvents: function() {
                            this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
                        },
                        _onClick: function(t) {
                            this._containsPoint(t.layerPoint) && this.fire("click", t)
                        },
                        _onMouseMove: function(t) {
                            this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
                        }
                    }), a.Map.include(a.Path.SVG && !e.L_PREFER_CANVAS || !a.Browser.canvas ? {} : {
                        _initPathRoot: function() {
                            var t, e = this._pathRoot;
                            e || (e = this._pathRoot = n.createElement("canvas"), e.style.position = "absolute", t = this._canvasCtx = e.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(e), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
                        },
                        _updateCanvasViewport: function() {
                            if (!this._pathZooming) {
                                this._updatePathViewport();
                                var t = this._pathViewport,
                                    e = t.min,
                                    i = t.max.subtract(e),
                                    n = this._pathRoot;
                                a.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
                            }
                        }
                    }), a.LineUtil = {
                        simplify: function(t, e) {
                            if (!e || !t.length) return t.slice();
                            var i = e * e;
                            return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
                        },
                        pointToSegmentDistance: function(t, e, i) {
                            return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
                        },
                        closestPointOnSegment: function(t, e, i) {
                            return this._sqClosestPointOnSegment(t, e, i)
                        },
                        _simplifyDP: function(t, e) {
                            var i = t.length,
                                n = typeof Uint8Array != o + "" ? Uint8Array : Array,
                                s = new n(i);
                            s[0] = s[i - 1] = 1, this._simplifyDPStep(t, s, e, 0, i - 1);
                            var a, r = [];
                            for (a = 0; i > a; a++) s[a] && r.push(t[a]);
                            return r
                        },
                        _simplifyDPStep: function(t, e, i, n, o) {
                            var s, a, r, l = 0;
                            for (a = n + 1; o - 1 >= a; a++) r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > l && (s = a, l = r);
                            l > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
                        },
                        _reducePoints: function(t, e) {
                            for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
                            return s - 1 > o && i.push(t[s - 1]), i
                        },
                        clipSegment: function(t, e, i, n) {
                            var o, s, a, r = n ? this._lastCode : this._getBitCode(t, i),
                                l = this._getBitCode(e, i);
                            for (this._lastCode = l;;) {
                                if (!(r | l)) return [t, e];
                                if (r & l) return !1;
                                o = r || l, s = this._getEdgeIntersection(t, e, o, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (e = s, l = a)
                            }
                        },
                        _getEdgeIntersection: function(t, e, i, n) {
                            var o = e.x - t.x,
                                s = e.y - t.y,
                                r = n.min,
                                l = n.max;
                            return 8 & i ? new a.Point(t.x + o * (l.y - t.y) / s, l.y) : 4 & i ? new a.Point(t.x + o * (r.y - t.y) / s, r.y) : 2 & i ? new a.Point(l.x, t.y + s * (l.x - t.x) / o) : 1 & i ? new a.Point(r.x, t.y + s * (r.x - t.x) / o) : void 0
                        },
                        _getBitCode: function(t, e) {
                            var i = 0;
                            return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
                        },
                        _sqDist: function(t, e) {
                            var i = e.x - t.x,
                                n = e.y - t.y;
                            return i * i + n * n
                        },
                        _sqClosestPointOnSegment: function(t, e, i, n) {
                            var o, s = e.x,
                                r = e.y,
                                l = i.x - s,
                                h = i.y - r,
                                u = l * l + h * h;
                            return u > 0 && (o = ((t.x - s) * l + (t.y - r) * h) / u, o > 1 ? (s = i.x, r = i.y) : o > 0 && (s += l * o, r += h * o)), l = t.x - s, h = t.y - r, n ? l * l + h * h : new a.Point(s, r)
                        }
                    }, a.Polyline = a.Path.extend({
                        initialize: function(t, e) {
                            a.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
                        },
                        options: {
                            smoothFactor: 1,
                            noClip: !1
                        },
                        projectLatlngs: function() {
                            this._originalPoints = [];
                            for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
                        },
                        getPathString: function() {
                            for (var t = 0, e = this._parts.length, i = ""; e > t; t++) i += this._getPathPartStr(this._parts[t]);
                            return i
                        },
                        getLatLngs: function() {
                            return this._latlngs
                        },
                        setLatLngs: function(t) {
                            return this._latlngs = this._convertLatLngs(t), this.redraw()
                        },
                        addLatLng: function(t) {
                            return this._latlngs.push(a.latLng(t)), this.redraw()
                        },
                        spliceLatLngs: function() {
                            var t = [].splice.apply(this._latlngs, arguments);
                            return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
                        },
                        closestLayerPoint: function(t) {
                            for (var e, i, n = 1 / 0, o = this._parts, s = null, r = 0, l = o.length; l > r; r++)
                                for (var h = o[r], u = 1, c = h.length; c > u; u++) {
                                    e = h[u - 1], i = h[u];
                                    var d = a.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
                                    n > d && (n = d, s = a.LineUtil._sqClosestPointOnSegment(t, e, i))
                                }
                            return s && (s.distance = Math.sqrt(n)), s
                        },
                        getBounds: function() {
                            return new a.LatLngBounds(this.getLatLngs())
                        },
                        _convertLatLngs: function(t, e) {
                            var i, n, o = e ? t : [];
                            for (i = 0, n = t.length; n > i; i++) {
                                if (a.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
                                o[i] = a.latLng(t[i])
                            }
                            return o
                        },
                        _initEvents: function() {
                            a.Path.prototype._initEvents.call(this)
                        },
                        _getPathPartStr: function(t) {
                            for (var e, i = a.Path.VML, n = 0, o = t.length, s = ""; o > n; n++) e = t[n], i && e._round(), s += (n ? "L" : "M") + e.x + " " + e.y;
                            return s
                        },
                        _clipPoints: function() {
                            var t, e, i, n = this._originalPoints,
                                o = n.length;
                            if (this.options.noClip) return void(this._parts = [n]);
                            this._parts = [];
                            var s = this._parts,
                                r = this._map._pathViewport,
                                l = a.LineUtil;
                            for (t = 0, e = 0; o - 1 > t; t++) i = l.clipSegment(n[t], n[t + 1], r, t), i && (s[e] = s[e] || [], s[e].push(i[0]), (i[1] !== n[t + 1] || t === o - 2) && (s[e].push(i[1]), e++))
                        },
                        _simplifyPoints: function() {
                            for (var t = this._parts, e = a.LineUtil, i = 0, n = t.length; n > i; i++) t[i] = e.simplify(t[i], this.options.smoothFactor)
                        },
                        _updatePath: function() {
                            this._map && (this._clipPoints(), this._simplifyPoints(), a.Path.prototype._updatePath.call(this))
                        }
                    }), a.polyline = function(t, e) {
                        return new a.Polyline(t, e)
                    }, a.PolyUtil = {}, a.PolyUtil.clipPolygon = function(t, e) {
                        var i, n, o, s, r, l, h, u, c, d = [1, 4, 2, 8],
                            p = a.LineUtil;
                        for (n = 0, h = t.length; h > n; n++) t[n]._code = p._getBitCode(t[n], e);
                        for (s = 0; 4 > s; s++) {
                            for (u = d[s], i = [], n = 0, h = t.length, o = h - 1; h > n; o = n++) r = t[n], l = t[o], r._code & u ? l._code & u || (c = p._getEdgeIntersection(l, r, u, e), c._code = p._getBitCode(c, e), i.push(c)) : (l._code & u && (c = p._getEdgeIntersection(l, r, u, e), c._code = p._getBitCode(c, e), i.push(c)), i.push(r));
                            t = i
                        }
                        return t
                    }, a.Polygon = a.Polyline.extend({
                        options: {
                            fill: !0
                        },
                        initialize: function(t, e) {
                            a.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
                        },
                        _initWithHoles: function(t) {
                            var e, i, n;
                            if (t && a.Util.isArray(t[0]) && "number" != typeof t[0][0])
                                for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++) n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
                            t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
                        },
                        projectLatlngs: function() {
                            if (a.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                                var t, e, i, n;
                                for (t = 0, i = this._holes.length; i > t; t++)
                                    for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
                            }
                        },
                        setLatLngs: function(t) {
                            return t && a.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : a.Polyline.prototype.setLatLngs.call(this, t)
                        },
                        _clipPoints: function() {
                            var t = this._originalPoints,
                                e = [];
                            if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
                                for (var i = 0, n = this._parts.length; n > i; i++) {
                                    var o = a.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                                    o.length && e.push(o)
                                }
                                this._parts = e
                            }
                        },
                        _getPathPartStr: function(t) {
                            var e = a.Polyline.prototype._getPathPartStr.call(this, t);
                            return e + (a.Browser.svg ? "z" : "x")
                        }
                    }), a.polygon = function(t, e) {
                        return new a.Polygon(t, e)
                    },
                    function() {
                        function t(t) {
                            return a.FeatureGroup.extend({
                                initialize: function(t, e) {
                                    this._layers = {}, this._options = e, this.setLatLngs(t)
                                },
                                setLatLngs: function(e) {
                                    var i = 0,
                                        n = e.length;
                                    for (this.eachLayer(function(t) {
                                            n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                                        }, this); n > i;) this.addLayer(new t(e[i++], this._options));
                                    return this
                                },
                                getLatLngs: function() {
                                    var t = [];
                                    return this.eachLayer(function(e) {
                                        t.push(e.getLatLngs())
                                    }), t
                                }
                            })
                        }
                        a.MultiPolyline = t(a.Polyline), a.MultiPolygon = t(a.Polygon), a.multiPolyline = function(t, e) {
                            return new a.MultiPolyline(t, e)
                        }, a.multiPolygon = function(t, e) {
                            return new a.MultiPolygon(t, e)
                        }
                    }(), a.Rectangle = a.Polygon.extend({
                        initialize: function(t, e) {
                            a.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                        },
                        setBounds: function(t) {
                            this.setLatLngs(this._boundsToLatLngs(t))
                        },
                        _boundsToLatLngs: function(t) {
                            return t = a.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                        }
                    }), a.rectangle = function(t, e) {
                        return new a.Rectangle(t, e)
                    }, a.Circle = a.Path.extend({
                        initialize: function(t, e, i) {
                            a.Path.prototype.initialize.call(this, i), this._latlng = a.latLng(t), this._mRadius = e
                        },
                        options: {
                            fill: !0
                        },
                        setLatLng: function(t) {
                            return this._latlng = a.latLng(t), this.redraw()
                        },
                        setRadius: function(t) {
                            return this._mRadius = t, this.redraw()
                        },
                        projectLatlngs: function() {
                            var t = this._getLngRadius(),
                                e = this._latlng,
                                i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
                            this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
                        },
                        getBounds: function() {
                            var t = this._getLngRadius(),
                                e = this._mRadius / 40075017 * 360,
                                i = this._latlng;
                            return new a.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        getPathString: function() {
                            var t = this._point,
                                e = this._radius;
                            return this._checkIfEmpty() ? "" : a.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
                        },
                        getRadius: function() {
                            return this._mRadius
                        },
                        _getLatRadius: function() {
                            return this._mRadius / 40075017 * 360
                        },
                        _getLngRadius: function() {
                            return this._getLatRadius() / Math.cos(a.LatLng.DEG_TO_RAD * this._latlng.lat)
                        },
                        _checkIfEmpty: function() {
                            if (!this._map) return !1;
                            var t = this._map._pathViewport,
                                e = this._radius,
                                i = this._point;
                            return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
                        }
                    }), a.circle = function(t, e, i) {
                        return new a.Circle(t, e, i)
                    }, a.CircleMarker = a.Circle.extend({
                        options: {
                            radius: 10,
                            weight: 2
                        },
                        initialize: function(t, e) {
                            a.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
                        },
                        projectLatlngs: function() {
                            this._point = this._map.latLngToLayerPoint(this._latlng)
                        },
                        _updateStyle: function() {
                            a.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
                        },
                        setLatLng: function(t) {
                            return a.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
                        },
                        setRadius: function(t) {
                            return this.options.radius = this._radius = t, this.redraw()
                        },
                        getRadius: function() {
                            return this._radius
                        }
                    }), a.circleMarker = function(t, e) {
                        return new a.CircleMarker(t, e)
                    }, a.Polyline.include(a.Path.CANVAS ? {
                        _containsPoint: function(t, e) {
                            var i, n, o, s, r, l, h, u = this.options.weight / 2;
                            for (a.Browser.touch && (u += 10), i = 0, s = this._parts.length; s > i; i++)
                                for (h = this._parts[i], n = 0, r = h.length, o = r - 1; r > n; o = n++)
                                    if ((e || 0 !== n) && (l = a.LineUtil.pointToSegmentDistance(t, h[o], h[n]), u >= l)) return !0;
                            return !1
                        }
                    } : {}), a.Polygon.include(a.Path.CANVAS ? {
                        _containsPoint: function(t) {
                            var e, i, n, o, s, r, l, h, u = !1;
                            if (a.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
                            for (o = 0, l = this._parts.length; l > o; o++)
                                for (e = this._parts[o], s = 0, h = e.length, r = h - 1; h > s; r = s++) i = e[s], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
                            return u
                        }
                    } : {}), a.Circle.include(a.Path.CANVAS ? {
                        _drawPath: function() {
                            var t = this._point;
                            this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
                        },
                        _containsPoint: function(t) {
                            var e = this._point,
                                i = this.options.stroke ? this.options.weight / 2 : 0;
                            return t.distanceTo(e) <= this._radius + i
                        }
                    } : {}), a.CircleMarker.include(a.Path.CANVAS ? {
                        _updateStyle: function() {
                            a.Path.prototype._updateStyle.call(this)
                        }
                    } : {}), a.GeoJSON = a.FeatureGroup.extend({
                        initialize: function(t, e) {
                            a.setOptions(this, e), this._layers = {}, t && this.addData(t)
                        },
                        addData: function(t) {
                            var e, i, n, o = a.Util.isArray(t) ? t : t.features;
                            if (o) {
                                for (e = 0, i = o.length; i > e; e++) n = o[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(o[e]);
                                return this
                            }
                            var s = this.options;
                            if (!s.filter || s.filter(t)) {
                                var r = a.GeoJSON.geometryToLayer(t, s.pointToLayer, s.coordsToLatLng, s);
                                return r.feature = a.GeoJSON.asFeature(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)
                            }
                        },
                        resetStyle: function(t) {
                            var e = this.options.style;
                            e && (a.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
                        },
                        setStyle: function(t) {
                            this.eachLayer(function(e) {
                                this._setLayerStyle(e, t)
                            }, this)
                        },
                        _setLayerStyle: function(t, e) {
                            "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
                        }
                    }), a.extend(a.GeoJSON, {
                        geometryToLayer: function(t, e, i, n) {
                            var o, s, r, l, h = "Feature" === t.type ? t.geometry : t,
                                u = h.coordinates,
                                c = [];
                            switch (i = i || this.coordsToLatLng, h.type) {
                                case "Point":
                                    return o = i(u), e ? e(t, o) : new a.Marker(o);
                                case "MultiPoint":
                                    for (r = 0, l = u.length; l > r; r++) o = i(u[r]), c.push(e ? e(t, o) : new a.Marker(o));
                                    return new a.FeatureGroup(c);
                                case "LineString":
                                    return s = this.coordsToLatLngs(u, 0, i), new a.Polyline(s, n);
                                case "Polygon":
                                    if (2 === u.length && !u[1].length) throw new Error("Invalid GeoJSON object.");
                                    return s = this.coordsToLatLngs(u, 1, i), new a.Polygon(s, n);
                                case "MultiLineString":
                                    return s = this.coordsToLatLngs(u, 1, i), new a.MultiPolyline(s, n);
                                case "MultiPolygon":
                                    return s = this.coordsToLatLngs(u, 2, i), new a.MultiPolygon(s, n);
                                case "GeometryCollection":
                                    for (r = 0, l = h.geometries.length; l > r; r++) c.push(this.geometryToLayer({
                                        geometry: h.geometries[r],
                                        type: "Feature",
                                        properties: t.properties
                                    }, e, i, n));
                                    return new a.FeatureGroup(c);
                                default:
                                    throw new Error("Invalid GeoJSON object.")
                            }
                        },
                        coordsToLatLng: function(t) {
                            return new a.LatLng(t[1], t[0], t[2])
                        },
                        coordsToLatLngs: function(t, e, i) {
                            var n, o, s, a = [];
                            for (o = 0, s = t.length; s > o; o++) n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), a.push(n);
                            return a
                        },
                        latLngToCoords: function(t) {
                            var e = [t.lng, t.lat];
                            return t.alt !== o && e.push(t.alt), e
                        },
                        latLngsToCoords: function(t) {
                            for (var e = [], i = 0, n = t.length; n > i; i++) e.push(a.GeoJSON.latLngToCoords(t[i]));
                            return e
                        },
                        getFeature: function(t, e) {
                            return t.feature ? a.extend({}, t.feature, {
                                geometry: e
                            }) : a.GeoJSON.asFeature(e)
                        },
                        asFeature: function(t) {
                            return "Feature" === t.type ? t : {
                                type: "Feature",
                                properties: {},
                                geometry: t
                            }
                        }
                    });
                var l = {
                    toGeoJSON: function() {
                        return a.GeoJSON.getFeature(this, {
                            type: "Point",
                            coordinates: a.GeoJSON.latLngToCoords(this.getLatLng())
                        })
                    }
                };
                a.Marker.include(l), a.Circle.include(l), a.CircleMarker.include(l), a.Polyline.include({
                        toGeoJSON: function() {
                            return a.GeoJSON.getFeature(this, {
                                type: "LineString",
                                coordinates: a.GeoJSON.latLngsToCoords(this.getLatLngs())
                            })
                        }
                    }), a.Polygon.include({
                        toGeoJSON: function() {
                            var t, e, i, n = [a.GeoJSON.latLngsToCoords(this.getLatLngs())];
                            if (n[0].push(n[0][0]), this._holes)
                                for (t = 0, e = this._holes.length; e > t; t++) i = a.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
                            return a.GeoJSON.getFeature(this, {
                                type: "Polygon",
                                coordinates: n
                            })
                        }
                    }),
                    function() {
                        function t(t) {
                            return function() {
                                var e = [];
                                return this.eachLayer(function(t) {
                                    e.push(t.toGeoJSON().geometry.coordinates)
                                }), a.GeoJSON.getFeature(this, {
                                    type: t,
                                    coordinates: e
                                })
                            }
                        }
                        a.MultiPolyline.include({
                            toGeoJSON: t("MultiLineString")
                        }), a.MultiPolygon.include({
                            toGeoJSON: t("MultiPolygon")
                        }), a.LayerGroup.include({
                            toGeoJSON: function() {
                                var e, i = this.feature && this.feature.geometry,
                                    n = [];
                                if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);
                                var o = i && "GeometryCollection" === i.type;
                                return this.eachLayer(function(t) {
                                    t.toGeoJSON && (e = t.toGeoJSON(), n.push(o ? e.geometry : a.GeoJSON.asFeature(e)))
                                }), o ? a.GeoJSON.getFeature(this, {
                                    geometries: n,
                                    type: "GeometryCollection"
                                }) : {
                                    type: "FeatureCollection",
                                    features: n
                                }
                            }
                        })
                    }(), a.geoJson = function(t, e) {
                        return new a.GeoJSON(t, e)
                    }, a.DomEvent = {
                        addListener: function(t, e, i, n) {
                            var o, s, r, l = a.stamp(i),
                                h = "_leaflet_" + e + l;
                            return t[h] ? this : (o = function(e) {
                                return i.call(n || t, e || a.DomEvent._getEvent())
                            }, a.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, o, l) : (a.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, o, l), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(e, o, !1)) : "mouseenter" === e || "mouseleave" === e ? (s = o, r = "mouseenter" === e ? "mouseover" : "mouseout", o = function(e) {
                                return a.DomEvent._checkMouse(t, e) ? s(e) : void 0
                            }, t.addEventListener(r, o, !1)) : "click" === e && a.Browser.android ? (s = o, o = function(t) {
                                return a.DomEvent._filterClick(t, s)
                            }, t.addEventListener(e, o, !1)) : t.addEventListener(e, o, !1) : "attachEvent" in t && t.attachEvent("on" + e, o), t[h] = o, this))
                        },
                        removeListener: function(t, e, i) {
                            var n = a.stamp(i),
                                o = "_leaflet_" + e + n,
                                s = t[o];
                            return s ? (a.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : a.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", s, !1), t.removeEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", s, !1) : t.removeEventListener(e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s), t[o] = null, this) : this
                        },
                        stopPropagation: function(t) {
                            return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, a.DomEvent._skipped(t), this
                        },
                        disableScrollPropagation: function(t) {
                            var e = a.DomEvent.stopPropagation;
                            return a.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
                        },
                        disableClickPropagation: function(t) {
                            for (var e = a.DomEvent.stopPropagation, i = a.Draggable.START.length - 1; i >= 0; i--) a.DomEvent.on(t, a.Draggable.START[i], e);
                            return a.DomEvent.on(t, "click", a.DomEvent._fakeStop).on(t, "dblclick", e)
                        },
                        preventDefault: function(t) {
                            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
                        },
                        stop: function(t) {
                            return a.DomEvent.preventDefault(t).stopPropagation(t)
                        },
                        getMousePosition: function(t, e) {
                            if (!e) return new a.Point(t.clientX, t.clientY);
                            var i = e.getBoundingClientRect();
                            return new a.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
                        },
                        getWheelDelta: function(t) {
                            var e = 0;
                            return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
                        },
                        _skipEvents: {},
                        _fakeStop: function(t) {
                            a.DomEvent._skipEvents[t.type] = !0
                        },
                        _skipped: function(t) {
                            var e = this._skipEvents[t.type];
                            return this._skipEvents[t.type] = !1, e
                        },
                        _checkMouse: function(t, e) {
                            var i = e.relatedTarget;
                            if (!i) return !0;
                            try {
                                for (; i && i !== t;) i = i.parentNode
                            } catch (n) {
                                return !1
                            }
                            return i !== t
                        },
                        _getEvent: function() {
                            var t = e.event;
                            if (!t)
                                for (var i = arguments.callee.caller; i && (t = i.arguments[0], !t || e.Event !== t.constructor);) i = i.caller;
                            return t
                        },
                        _filterClick: function(t, e) {
                            var i = t.timeStamp || t.originalEvent.timeStamp,
                                n = a.DomEvent._lastClick && i - a.DomEvent._lastClick;
                            return n && n > 100 && 1e3 > n || t.target._simulatedClick && !t._simulated ? void a.DomEvent.stop(t) : (a.DomEvent._lastClick = i, e(t))
                        }
                    }, a.DomEvent.on = a.DomEvent.addListener, a.DomEvent.off = a.DomEvent.removeListener, a.Draggable = a.Class.extend({
                        includes: a.Mixin.Events,
                        statics: {
                            START: a.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                            END: {
                                mousedown: "mouseup",
                                touchstart: "touchend",
                                pointerdown: "touchend",
                                MSPointerDown: "touchend"
                            },
                            MOVE: {
                                mousedown: "mousemove",
                                touchstart: "touchmove",
                                pointerdown: "touchmove",
                                MSPointerDown: "touchmove"
                            }
                        },
                        initialize: function(t, e) {
                            this._element = t, this._dragStartTarget = e || t
                        },
                        enable: function() {
                            if (!this._enabled) {
                                for (var t = a.Draggable.START.length - 1; t >= 0; t--) a.DomEvent.on(this._dragStartTarget, a.Draggable.START[t], this._onDown, this);
                                this._enabled = !0
                            }
                        },
                        disable: function() {
                            if (this._enabled) {
                                for (var t = a.Draggable.START.length - 1; t >= 0; t--) a.DomEvent.off(this._dragStartTarget, a.Draggable.START[t], this._onDown, this);
                                this._enabled = !1, this._moved = !1
                            }
                        },
                        _onDown: function(t) {
                            if (this._moved = !1, !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (a.DomEvent.stopPropagation(t), !a.Draggable._disabled && (a.DomUtil.disableImageDrag(), a.DomUtil.disableTextSelection(), !this._moving))) {
                                var e = t.touches ? t.touches[0] : t;
                                this._startPoint = new a.Point(e.clientX, e.clientY), this._startPos = this._newPos = a.DomUtil.getPosition(this._element), a.DomEvent.on(n, a.Draggable.MOVE[t.type], this._onMove, this).on(n, a.Draggable.END[t.type], this._onUp, this)
                            }
                        },
                        _onMove: function(t) {
                            if (t.touches && t.touches.length > 1) return void(this._moved = !0);
                            var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                i = new a.Point(e.clientX, e.clientY),
                                o = i.subtract(this._startPoint);
                            (o.x || o.y) && (a.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = a.DomUtil.getPosition(this._element).subtract(o), a.DomUtil.addClass(n.body, "leaflet-dragging"), a.DomUtil.addClass(t.target || t.srcElement, "leaflet-drag-target")), this._newPos = this._startPos.add(o), this._moving = !0, a.Util.cancelAnimFrame(this._animRequest), this._animRequest = a.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget))
                        },
                        _updatePosition: function() {
                            this.fire("predrag"), a.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
                        },
                        _onUp: function(t) {
                            a.DomUtil.removeClass(n.body, "leaflet-dragging"), a.DomUtil.removeClass(t.target || t.srcElement, "leaflet-drag-target");
                            for (var e in a.Draggable.MOVE) a.DomEvent.off(n, a.Draggable.MOVE[e], this._onMove).off(n, a.Draggable.END[e], this._onUp);
                            a.DomUtil.enableImageDrag(), a.DomUtil.enableTextSelection(), this._moved && this._moving && (a.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                                distance: this._newPos.distanceTo(this._startPos)
                            })), this._moving = !1
                        }
                    }), a.Handler = a.Class.extend({
                        initialize: function(t) {
                            this._map = t
                        },
                        enable: function() {
                            this._enabled || (this._enabled = !0, this.addHooks())
                        },
                        disable: function() {
                            this._enabled && (this._enabled = !1, this.removeHooks())
                        },
                        enabled: function() {
                            return !!this._enabled
                        }
                    }), a.Map.mergeOptions({
                        dragging: !0,
                        inertia: !a.Browser.android23,
                        inertiaDeceleration: 3400,
                        inertiaMaxSpeed: 1 / 0,
                        inertiaThreshold: a.Browser.touch ? 32 : 18,
                        easeLinearity: .25,
                        worldCopyJump: !1
                    }), a.Map.Drag = a.Handler.extend({
                        addHooks: function() {
                            if (!this._draggable) {
                                var t = this._map;
                                this._draggable = new a.Draggable(t._mapPane, t._container), this._draggable.on({
                                    dragstart: this._onDragStart,
                                    drag: this._onDrag,
                                    dragend: this._onDragEnd
                                }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
                            }
                            this._draggable.enable()
                        },
                        removeHooks: function() {
                            this._draggable.disable()
                        },
                        moved: function() {
                            return this._draggable && this._draggable._moved
                        },
                        _onDragStart: function() {
                            var t = this._map;
                            t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
                        },
                        _onDrag: function() {
                            if (this._map.options.inertia) {
                                var t = this._lastTime = +new Date,
                                    e = this._lastPos = this._draggable._newPos;
                                this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
                            }
                            this._map.fire("move").fire("drag")
                        },
                        _onViewReset: function() {
                            var t = this._map.getSize()._divideBy(2),
                                e = this._map.latLngToLayerPoint([0, 0]);
                            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
                        },
                        _onPreDrag: function() {
                            var t = this._worldWidth,
                                e = Math.round(t / 2),
                                i = this._initialWorldOffset,
                                n = this._draggable._newPos.x,
                                o = (n - e + i) % t + e - i,
                                s = (n + e + i) % t - e - i,
                                a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                            this._draggable._newPos.x = a
                        },
                        _onDragEnd: function(t) {
                            var e = this._map,
                                i = e.options,
                                n = +new Date - this._lastTime,
                                o = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
                            if (e.fire("dragend", t), o) e.fire("moveend");
                            else {
                                var s = this._lastPos.subtract(this._positions[0]),
                                    r = (this._lastTime + n - this._times[0]) / 1e3,
                                    l = i.easeLinearity,
                                    h = s.multiplyBy(l / r),
                                    u = h.distanceTo([0, 0]),
                                    c = Math.min(i.inertiaMaxSpeed, u),
                                    d = h.multiplyBy(c / u),
                                    p = c / (i.inertiaDeceleration * l),
                                    m = d.multiplyBy(-p / 2).round();
                                m.x && m.y ? (m = e._limitOffset(m, e.options.maxBounds), a.Util.requestAnimFrame(function() {
                                    e.panBy(m, {
                                        duration: p,
                                        easeLinearity: l,
                                        noMoveStart: !0
                                    })
                                })) : e.fire("moveend")
                            }
                        }
                    }), a.Map.addInitHook("addHandler", "dragging", a.Map.Drag), a.Map.mergeOptions({
                        doubleClickZoom: !0
                    }), a.Map.DoubleClickZoom = a.Handler.extend({
                        addHooks: function() {
                            this._map.on("dblclick", this._onDoubleClick, this)
                        },
                        removeHooks: function() {
                            this._map.off("dblclick", this._onDoubleClick, this)
                        },
                        _onDoubleClick: function(t) {
                            var e = this._map,
                                i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
                            "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
                        }
                    }), a.Map.addInitHook("addHandler", "doubleClickZoom", a.Map.DoubleClickZoom), a.Map.mergeOptions({
                        scrollWheelZoom: !0
                    }), a.Map.ScrollWheelZoom = a.Handler.extend({
                        addHooks: function() {
                            a.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), a.DomEvent.on(this._map._container, "MozMousePixelScroll", a.DomEvent.preventDefault), this._delta = 0
                        },
                        removeHooks: function() {
                            a.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), a.DomEvent.off(this._map._container, "MozMousePixelScroll", a.DomEvent.preventDefault)
                        },
                        _onWheelScroll: function(t) {
                            var e = a.DomEvent.getWheelDelta(t);
                            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                            var i = Math.max(40 - (+new Date - this._startTime), 0);
                            clearTimeout(this._timer), this._timer = setTimeout(a.bind(this._performZoom, this), i), a.DomEvent.preventDefault(t), a.DomEvent.stopPropagation(t)
                        },
                        _performZoom: function() {
                            var t = this._map,
                                e = this._delta,
                                i = t.getZoom();
                            e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
                        }
                    }), a.Map.addInitHook("addHandler", "scrollWheelZoom", a.Map.ScrollWheelZoom), a.extend(a.DomEvent, {
                        _touchstart: a.Browser.msPointer ? "MSPointerDown" : a.Browser.pointer ? "pointerdown" : "touchstart",
                        _touchend: a.Browser.msPointer ? "MSPointerUp" : a.Browser.pointer ? "pointerup" : "touchend",
                        addDoubleTapListener: function(t, e, i) {
                            function o(t) {
                                var e;
                                if (a.Browser.pointer ? (m.push(t.pointerId), e = m.length) : e = t.touches.length, !(e > 1)) {
                                    var i = Date.now(),
                                        n = i - (r || i);
                                    l = t.touches ? t.touches[0] : t, h = n > 0 && u >= n, r = i
                                }
                            }

                            function s(t) {
                                if (a.Browser.pointer) {
                                    var i = m.indexOf(t.pointerId);
                                    if (-1 === i) return;
                                    m.splice(i, 1)
                                }
                                if (h) {
                                    if (a.Browser.pointer) {
                                        var n, o = {};
                                        for (var s in l) n = l[s], "function" == typeof n ? o[s] = n.bind(l) : o[s] = n;
                                        l = o
                                    }
                                    l.type = "dblclick", e(l), r = null
                                }
                            }
                            var r, l, h = !1,
                                u = 250,
                                c = "_leaflet_",
                                d = this._touchstart,
                                p = this._touchend,
                                m = [];
                            t[c + d + i] = o, t[c + p + i] = s;
                            var _ = a.Browser.pointer ? n.documentElement : t;
                            return t.addEventListener(d, o, !1), _.addEventListener(p, s, !1), a.Browser.pointer && _.addEventListener(a.DomEvent.POINTER_CANCEL, s, !1), this
                        },
                        removeDoubleTapListener: function(t, e) {
                            var i = "_leaflet_";
                            return t.removeEventListener(this._touchstart, t[i + this._touchstart + e], !1), (a.Browser.pointer ? n.documentElement : t).removeEventListener(this._touchend, t[i + this._touchend + e], !1), a.Browser.pointer && n.documentElement.removeEventListener(a.DomEvent.POINTER_CANCEL, t[i + this._touchend + e], !1), this
                        }
                    }), a.extend(a.DomEvent, {
                        POINTER_DOWN: a.Browser.msPointer ? "MSPointerDown" : "pointerdown",
                        POINTER_MOVE: a.Browser.msPointer ? "MSPointerMove" : "pointermove",
                        POINTER_UP: a.Browser.msPointer ? "MSPointerUp" : "pointerup",
                        POINTER_CANCEL: a.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
                        _pointers: [],
                        _pointerDocumentListener: !1,
                        addPointerListener: function(t, e, i, n) {
                            switch (e) {
                                case "touchstart":
                                    return this.addPointerListenerStart(t, e, i, n);
                                case "touchend":
                                    return this.addPointerListenerEnd(t, e, i, n);
                                case "touchmove":
                                    return this.addPointerListenerMove(t, e, i, n);
                                default:
                                    throw "Unknown touch event type"
                            }
                        },
                        addPointerListenerStart: function(t, e, i, o) {
                            var s = "_leaflet_",
                                r = this._pointers,
                                l = function(t) {
                                    a.DomEvent.preventDefault(t);
                                    for (var e = !1, n = 0; n < r.length; n++)
                                        if (r[n].pointerId === t.pointerId) {
                                            e = !0;
                                            break
                                        }
                                    e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], i(t)
                                };
                            if (t[s + "touchstart" + o] = l, t.addEventListener(this.POINTER_DOWN, l, !1), !this._pointerDocumentListener) {
                                var h = function(t) {
                                    for (var e = 0; e < r.length; e++)
                                        if (r[e].pointerId === t.pointerId) {
                                            r.splice(e, 1);
                                            break
                                        }
                                };
                                n.documentElement.addEventListener(this.POINTER_UP, h, !1), n.documentElement.addEventListener(this.POINTER_CANCEL, h, !1), this._pointerDocumentListener = !0
                            }
                            return this
                        },
                        addPointerListenerMove: function(t, e, i, n) {
                            function o(t) {
                                if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
                                    for (var e = 0; e < a.length; e++)
                                        if (a[e].pointerId === t.pointerId) {
                                            a[e] = t;
                                            break
                                        }
                                    t.touches = a.slice(), t.changedTouches = [t], i(t)
                                }
                            }
                            var s = "_leaflet_",
                                a = this._pointers;
                            return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this
                        },
                        addPointerListenerEnd: function(t, e, i, n) {
                            var o = "_leaflet_",
                                s = this._pointers,
                                a = function(t) {
                                    for (var e = 0; e < s.length; e++)
                                        if (s[e].pointerId === t.pointerId) {
                                            s.splice(e, 1);
                                            break
                                        }
                                    t.touches = s.slice(), t.changedTouches = [t], i(t)
                                };
                            return t[o + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this
                        },
                        removePointerListener: function(t, e, i) {
                            var n = "_leaflet_",
                                o = t[n + e + i];
                            switch (e) {
                                case "touchstart":
                                    t.removeEventListener(this.POINTER_DOWN, o, !1);
                                    break;
                                case "touchmove":
                                    t.removeEventListener(this.POINTER_MOVE, o, !1);
                                    break;
                                case "touchend":
                                    t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)
                            }
                            return this
                        }
                    }), a.Map.mergeOptions({
                        touchZoom: a.Browser.touch && !a.Browser.android23,
                        bounceAtZoomLimits: !0
                    }), a.Map.TouchZoom = a.Handler.extend({
                        addHooks: function() {
                            a.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
                        },
                        removeHooks: function() {
                            a.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
                        },
                        _onTouchStart: function(t) {
                            var e = this._map;
                            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                                var i = e.mouseEventToLayerPoint(t.touches[0]),
                                    o = e.mouseEventToLayerPoint(t.touches[1]),
                                    s = e._getCenterLayerPoint();
                                this._startCenter = i.add(o)._divideBy(2), this._startDist = i.distanceTo(o), this._moved = !1, this._zooming = !0, this._centerOffset = s.subtract(this._startCenter), e._panAnim && e._panAnim.stop(), a.DomEvent.on(n, "touchmove", this._onTouchMove, this).on(n, "touchend", this._onTouchEnd, this), a.DomEvent.preventDefault(t)
                            }
                        },
                        _onTouchMove: function(t) {
                            var e = this._map;
                            if (t.touches && 2 === t.touches.length && this._zooming) {
                                var i = e.mouseEventToLayerPoint(t.touches[0]),
                                    n = e.mouseEventToLayerPoint(t.touches[1]);
                                this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (a.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), a.Util.cancelAnimFrame(this._animRequest), this._animRequest = a.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), a.DomEvent.preventDefault(t))
                            }
                        },
                        _updateOnMove: function() {
                            var t = this._map,
                                e = this._getScaleOrigin(),
                                i = t.layerPointToLatLng(e),
                                n = t.getScaleZoom(this._scale);
                            t._animateZoom(i, n, this._startCenter, this._scale, this._delta)
                        },
                        _onTouchEnd: function() {
                            if (!this._moved || !this._zooming) return void(this._zooming = !1);
                            var t = this._map;
                            this._zooming = !1, a.DomUtil.removeClass(t._mapPane, "leaflet-touching"), a.Util.cancelAnimFrame(this._animRequest), a.DomEvent.off(n, "touchmove", this._onTouchMove).off(n, "touchend", this._onTouchEnd);
                            var e = this._getScaleOrigin(),
                                i = t.layerPointToLatLng(e),
                                o = t.getZoom(),
                                s = t.getScaleZoom(this._scale) - o,
                                r = s > 0 ? Math.ceil(s) : Math.floor(s),
                                l = t._limitZoom(o + r),
                                h = t.getZoomScale(l) / this._scale;
                            t._animateZoom(i, l, e, h)
                        },
                        _getScaleOrigin: function() {
                            var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                            return this._startCenter.add(t)
                        }
                    }), a.Map.addInitHook("addHandler", "touchZoom", a.Map.TouchZoom), a.Map.mergeOptions({
                        tap: !0,
                        tapTolerance: 15
                    }), a.Map.Tap = a.Handler.extend({
                        addHooks: function() {
                            a.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
                        },
                        removeHooks: function() {
                            a.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
                        },
                        _onDown: function(t) {
                            if (t.touches) {
                                if (a.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                                var e = t.touches[0],
                                    i = e.target;
                                this._startPos = this._newPos = new a.Point(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && a.DomUtil.addClass(i, "leaflet-active"), this._holdTimeout = setTimeout(a.bind(function() {
                                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                                }, this), 1e3), a.DomEvent.on(n, "touchmove", this._onMove, this).on(n, "touchend", this._onUp, this)
                            }
                        },
                        _onUp: function(t) {
                            if (clearTimeout(this._holdTimeout), a.DomEvent.off(n, "touchmove", this._onMove, this).off(n, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
                                var e = t.changedTouches[0],
                                    i = e.target;
                                i && i.tagName && "a" === i.tagName.toLowerCase() && a.DomUtil.removeClass(i, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", e)
                            }
                        },
                        _isTapValid: function() {
                            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                        },
                        _onMove: function(t) {
                            var e = t.touches[0];
                            this._newPos = new a.Point(e.clientX, e.clientY)
                        },
                        _simulateEvent: function(t, i) {
                            var o = n.createEvent("MouseEvents");
                            o._simulated = !0, i.target._simulatedClick = !0, o.initMouseEvent(t, !0, !0, e, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(o)
                        }
                    }), a.Browser.touch && !a.Browser.pointer && a.Map.addInitHook("addHandler", "tap", a.Map.Tap), a.Map.mergeOptions({
                        boxZoom: !0
                    }), a.Map.BoxZoom = a.Handler.extend({
                        initialize: function(t) {
                            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
                        },
                        addHooks: function() {
                            a.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
                        },
                        removeHooks: function() {
                            a.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
                        },
                        moved: function() {
                            return this._moved
                        },
                        _onMouseDown: function(t) {
                            return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (a.DomUtil.disableTextSelection(), a.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void a.DomEvent.on(n, "mousemove", this._onMouseMove, this).on(n, "mouseup", this._onMouseUp, this).on(n, "keydown", this._onKeyDown, this))
                        },
                        _onMouseMove: function(t) {
                            this._moved || (this._box = a.DomUtil.create("div", "leaflet-zoom-box", this._pane), a.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
                            var e = this._startLayerPoint,
                                i = this._box,
                                n = this._map.mouseEventToLayerPoint(t),
                                o = n.subtract(e),
                                s = new a.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
                            a.DomUtil.setPosition(i, s), this._moved = !0, i.style.width = Math.max(0, Math.abs(o.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(o.y) - 4) + "px"
                        },
                        _finish: function() {
                            this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), a.DomUtil.enableTextSelection(), a.DomUtil.enableImageDrag(), a.DomEvent.off(n, "mousemove", this._onMouseMove).off(n, "mouseup", this._onMouseUp).off(n, "keydown", this._onKeyDown)
                        },
                        _onMouseUp: function(t) {
                            this._finish();
                            var e = this._map,
                                i = e.mouseEventToLayerPoint(t);
                            if (!this._startLayerPoint.equals(i)) {
                                var n = new a.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
                                e.fitBounds(n), e.fire("boxzoomend", {
                                    boxZoomBounds: n
                                })
                            }
                        },
                        _onKeyDown: function(t) {
                            27 === t.keyCode && this._finish()
                        }
                    }), a.Map.addInitHook("addHandler", "boxZoom", a.Map.BoxZoom), a.Map.mergeOptions({
                        keyboard: !0,
                        keyboardPanOffset: 80,
                        keyboardZoomOffset: 1
                    }), a.Map.Keyboard = a.Handler.extend({
                        keyCodes: {
                            left: [37],
                            right: [39],
                            down: [40],
                            up: [38],
                            zoomIn: [187, 107, 61, 171],
                            zoomOut: [189, 109, 173]
                        },
                        initialize: function(t) {
                            this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
                        },
                        addHooks: function() {
                            var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), a.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
                        },
                        removeHooks: function() {
                            this._removeHooks();
                            var t = this._map._container;
                            a.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
                        },
                        _onMouseDown: function() {
                            if (!this._focused) {
                                var t = n.body,
                                    i = n.documentElement,
                                    o = t.scrollTop || i.scrollTop,
                                    s = t.scrollLeft || i.scrollLeft;
                                this._map._container.focus(), e.scrollTo(s, o)
                            }
                        },
                        _onFocus: function() {
                            this._focused = !0, this._map.fire("focus")
                        },
                        _onBlur: function() {
                            this._focused = !1, this._map.fire("blur")
                        },
                        _setPanOffset: function(t) {
                            var e, i, n = this._panKeys = {},
                                o = this.keyCodes;
                            for (e = 0, i = o.left.length; i > e; e++) n[o.left[e]] = [-1 * t, 0];
                            for (e = 0, i = o.right.length; i > e; e++) n[o.right[e]] = [t, 0];
                            for (e = 0, i = o.down.length; i > e; e++) n[o.down[e]] = [0, t];
                            for (e = 0, i = o.up.length; i > e; e++) n[o.up[e]] = [0, -1 * t]
                        },
                        _setZoomOffset: function(t) {
                            var e, i, n = this._zoomKeys = {},
                                o = this.keyCodes;
                            for (e = 0, i = o.zoomIn.length; i > e; e++) n[o.zoomIn[e]] = t;
                            for (e = 0, i = o.zoomOut.length; i > e; e++) n[o.zoomOut[e]] = -t
                        },
                        _addHooks: function() {
                            a.DomEvent.on(n, "keydown", this._onKeyDown, this)
                        },
                        _removeHooks: function() {
                            a.DomEvent.off(n, "keydown", this._onKeyDown, this)
                        },
                        _onKeyDown: function(t) {
                            var e = t.keyCode,
                                i = this._map;
                            if (e in this._panKeys) {
                                if (i._panAnim && i._panAnim._inProgress) return;
                                i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
                            } else {
                                if (!(e in this._zoomKeys)) return;
                                i.setZoom(i.getZoom() + this._zoomKeys[e])
                            }
                            a.DomEvent.stop(t)
                        }
                    }), a.Map.addInitHook("addHandler", "keyboard", a.Map.Keyboard), a.Handler.MarkerDrag = a.Handler.extend({
                        initialize: function(t) {
                            this._marker = t
                        },
                        addHooks: function() {
                            var t = this._marker._icon;
                            this._draggable || (this._draggable = new a.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), a.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
                        },
                        removeHooks: function() {
                            this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), a.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
                        },
                        moved: function() {
                            return this._draggable && this._draggable._moved
                        },
                        _onDragStart: function() {
                            this._marker.closePopup().fire("movestart").fire("dragstart")
                        },
                        _onDrag: function() {
                            var t = this._marker,
                                e = t._shadow,
                                i = a.DomUtil.getPosition(t._icon),
                                n = t._map.layerPointToLatLng(i);
                            e && a.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
                                latlng: n
                            }).fire("drag")
                        },
                        _onDragEnd: function(t) {
                            this._marker.fire("moveend").fire("dragend", t)
                        }
                    }), a.Control = a.Class.extend({
                        options: {
                            position: "topright"
                        },
                        initialize: function(t) {
                            a.setOptions(this, t)
                        },
                        getPosition: function() {
                            return this.options.position
                        },
                        setPosition: function(t) {
                            var e = this._map;
                            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                        },
                        getContainer: function() {
                            return this._container
                        },
                        addTo: function(t) {
                            this._map = t;
                            var e = this._container = this.onAdd(t),
                                i = this.getPosition(),
                                n = t._controlCorners[i];
                            return a.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
                        },
                        removeFrom: function(t) {
                            var e = this.getPosition(),
                                i = t._controlCorners[e];
                            return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
                        },
                        _refocusOnMap: function() {
                            this._map && this._map.getContainer().focus()
                        }
                    }), a.control = function(t) {
                        return new a.Control(t)
                    }, a.Map.include({
                        addControl: function(t) {
                            return t.addTo(this), this
                        },
                        removeControl: function(t) {
                            return t.removeFrom(this), this
                        },
                        _initControlPos: function() {
                            function t(t, o) {
                                var s = i + t + " " + i + o;
                                e[t + o] = a.DomUtil.create("div", s, n)
                            }
                            var e = this._controlCorners = {},
                                i = "leaflet-",
                                n = this._controlContainer = a.DomUtil.create("div", i + "control-container", this._container);
                            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
                        },
                        _clearControlPos: function() {
                            this._container.removeChild(this._controlContainer)
                        }
                    }), a.Control.Zoom = a.Control.extend({
                        options: {
                            position: "topleft",
                            zoomInText: "+",
                            zoomInTitle: "Zoom in",
                            zoomOutText: "-",
                            zoomOutTitle: "Zoom out"
                        },
                        onAdd: function(t) {
                            var e = "leaflet-control-zoom",
                                i = a.DomUtil.create("div", e + " leaflet-bar");
                            return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
                        },
                        onRemove: function(t) {
                            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                        },
                        _zoomIn: function(t) {
                            this._map.zoomIn(t.shiftKey ? 3 : 1)
                        },
                        _zoomOut: function(t) {
                            this._map.zoomOut(t.shiftKey ? 3 : 1)
                        },
                        _createButton: function(t, e, i, n, o, s) {
                            var r = a.DomUtil.create("a", i, n);
                            r.innerHTML = t, r.href = "#", r.title = e;
                            var l = a.DomEvent.stopPropagation;
                            return a.DomEvent.on(r, "click", l).on(r, "mousedown", l).on(r, "dblclick", l).on(r, "click", a.DomEvent.preventDefault).on(r, "click", o, s).on(r, "click", this._refocusOnMap, s), r
                        },
                        _updateDisabled: function() {
                            var t = this._map,
                                e = "leaflet-disabled";
                            a.DomUtil.removeClass(this._zoomInButton, e), a.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && a.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && a.DomUtil.addClass(this._zoomInButton, e)
                        }
                    }), a.Map.mergeOptions({
                        zoomControl: !0
                    }), a.Map.addInitHook(function() {
                        this.options.zoomControl && (this.zoomControl = new a.Control.Zoom, this.addControl(this.zoomControl))
                    }), a.control.zoom = function(t) {
                        return new a.Control.Zoom(t)
                    }, a.Control.Attribution = a.Control.extend({
                        options: {
                            position: "bottomright",
                            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                        },
                        initialize: function(t) {
                            a.setOptions(this, t), this._attributions = {}
                        },
                        onAdd: function(t) {
                            this._container = a.DomUtil.create("div", "leaflet-control-attribution"), a.DomEvent.disableClickPropagation(this._container);
                            for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                            return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
                        },
                        onRemove: function(t) {
                            t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
                        },
                        setPrefix: function(t) {
                            return this.options.prefix = t, this._update(), this
                        },
                        addAttribution: function(t) {
                            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0
                        },
                        removeAttribution: function(t) {
                            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0
                        },
                        _update: function() {
                            if (this._map) {
                                var t = [];
                                for (var e in this._attributions) this._attributions[e] && t.push(e);
                                var i = [];
                                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                            }
                        },
                        _onLayerAdd: function(t) {
                            t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
                        },
                        _onLayerRemove: function(t) {
                            t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
                        }
                    }), a.Map.mergeOptions({
                        attributionControl: !0
                    }), a.Map.addInitHook(function() {
                        this.options.attributionControl && (this.attributionControl = (new a.Control.Attribution).addTo(this))
                    }), a.control.attribution = function(t) {
                        return new a.Control.Attribution(t)
                    }, a.Control.Scale = a.Control.extend({
                        options: {
                            position: "bottomleft",
                            maxWidth: 100,
                            metric: !0,
                            imperial: !0,
                            updateWhenIdle: !1
                        },
                        onAdd: function(t) {
                            this._map = t;
                            var e = "leaflet-control-scale",
                                i = a.DomUtil.create("div", e),
                                n = this.options;
                            return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
                        },
                        onRemove: function(t) {
                            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                        },
                        _addScales: function(t, e, i) {
                            t.metric && (this._mScale = a.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = a.DomUtil.create("div", e + "-line", i))
                        },
                        _update: function() {
                            var t = this._map.getBounds(),
                                e = t.getCenter().lat,
                                i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
                                n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
                                o = this._map.getSize(),
                                s = this.options,
                                a = 0;
                            o.x > 0 && (a = n * (s.maxWidth / o.x)), this._updateScales(s, a)
                        },
                        _updateScales: function(t, e) {
                            t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
                        },
                        _updateMetric: function(t) {
                            var e = this._getRoundNum(t);
                            this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
                        },
                        _updateImperial: function(t) {
                            var e, i, n, o = 3.2808399 * t,
                                s = this._iScale;
                            o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft")
                        },
                        _getScaleWidth: function(t) {
                            return Math.round(this.options.maxWidth * t) - 10
                        },
                        _getRoundNum: function(t) {
                            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                                i = t / e;
                            return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
                        }
                    }), a.control.scale = function(t) {
                        return new a.Control.Scale(t)
                    }, a.Control.Layers = a.Control.extend({
                        options: {
                            collapsed: !0,
                            position: "topright",
                            autoZIndex: !0
                        },
                        initialize: function(t, e, i) {
                            a.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
                            for (var n in t) this._addLayer(t[n], n);
                            for (n in e) this._addLayer(e[n], n, !0)
                        },
                        onAdd: function(t) {
                            return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
                        },
                        onRemove: function(t) {
                            t.off("layeradd", this._onLayerChange).off("layerremove", this._onLayerChange)
                        },
                        addBaseLayer: function(t, e) {
                            return this._addLayer(t, e), this._update(), this
                        },
                        addOverlay: function(t, e) {
                            return this._addLayer(t, e, !0), this._update(), this
                        },
                        removeLayer: function(t) {
                            var e = a.stamp(t);
                            return delete this._layers[e], this._update(), this
                        },
                        _initLayout: function() {
                            var t = "leaflet-control-layers",
                                e = this._container = a.DomUtil.create("div", t);
                            e.setAttribute("aria-haspopup", !0), a.Browser.touch ? a.DomEvent.on(e, "click", a.DomEvent.stopPropagation) : a.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
                            var i = this._form = a.DomUtil.create("form", t + "-list");
                            if (this.options.collapsed) {
                                a.Browser.android || a.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                                var n = this._layersLink = a.DomUtil.create("a", t + "-toggle", e);
                                n.href = "#", n.title = "Layers", a.Browser.touch ? a.DomEvent.on(n, "click", a.DomEvent.stop).on(n, "click", this._expand, this) : a.DomEvent.on(n, "focus", this._expand, this), a.DomEvent.on(i, "click", function() {
                                    setTimeout(a.bind(this._onInputClick, this), 0)
                                }, this), this._map.on("click", this._collapse, this)
                            } else this._expand();
                            this._baseLayersList = a.DomUtil.create("div", t + "-base", i), this._separator = a.DomUtil.create("div", t + "-separator", i), this._overlaysList = a.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
                        },
                        _addLayer: function(t, e, i) {
                            var n = a.stamp(t);
                            this._layers[n] = {
                                layer: t,
                                name: e,
                                overlay: i
                            }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
                        },
                        _update: function() {
                            if (this._container) {
                                this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                                var t, e, i = !1,
                                    n = !1;
                                for (t in this._layers) e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
                                this._separator.style.display = n && i ? "" : "none"
                            }
                        },
                        _onLayerChange: function(t) {
                            var e = this._layers[a.stamp(t.layer)];
                            if (e) {
                                this._handlingClick || this._update();
                                var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
                                i && this._map.fire(i, e)
                            }
                        },
                        _createRadioElement: function(t, e) {
                            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
                            e && (i += ' checked="checked"'), i += "/>";
                            var o = n.createElement("div");
                            return o.innerHTML = i, o.firstChild
                        },
                        _addItem: function(t) {
                            var e, i = n.createElement("label"),
                                o = this._map.hasLayer(t.layer);
                            t.overlay ? (e = n.createElement("input"), e.type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = o) : e = this._createRadioElement("leaflet-base-layers", o), e.layerId = a.stamp(t.layer), a.DomEvent.on(e, "click", this._onInputClick, this);
                            var s = n.createElement("span");
                            s.innerHTML = " " + t.name, i.appendChild(e), i.appendChild(s);
                            var r = t.overlay ? this._overlaysList : this._baseLayersList;
                            return r.appendChild(i), i
                        },
                        _onInputClick: function() {
                            var t, e, i, n = this._form.getElementsByTagName("input"),
                                o = n.length;
                            for (this._handlingClick = !0, t = 0; o > t; t++) e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
                            this._handlingClick = !1, this._refocusOnMap()
                        },
                        _expand: function() {
                            a.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
                        },
                        _collapse: function() {
                            this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
                        }
                    }), a.control.layers = function(t, e, i) {
                        return new a.Control.Layers(t, e, i)
                    }, a.PosAnimation = a.Class.extend({
                        includes: a.Mixin.Events,
                        run: function(t, e, i, n) {
                            this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[a.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", a.DomEvent.on(t, a.DomUtil.TRANSITION_END, this._onTransitionEnd, this), a.DomUtil.setPosition(t, e), a.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(a.bind(this._onStep, this), 50)
                        },
                        stop: function() {
                            this._inProgress && (a.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), a.Util.falseFn(this._el.offsetWidth))
                        },
                        _onStep: function() {
                            var t = this._getPos();
                            return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd()
                        },
                        _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
                        _getPos: function() {
                            var t, i, n, o = this._el,
                                s = e.getComputedStyle(o);
                            if (a.Browser.any3d) {
                                if (n = s[a.DomUtil.TRANSFORM].match(this._transformRe), !n) return;
                                t = parseFloat(n[1]), i = parseFloat(n[2])
                            } else t = parseFloat(s.left), i = parseFloat(s.top);
                            return new a.Point(t, i, !0)
                        },
                        _onTransitionEnd: function() {
                            a.DomEvent.off(this._el, a.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[a.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
                        }
                    }), a.Map.include({
                        setView: function(t, e, i) {
                            if (e = e === o ? this._zoom : this._limitZoom(e), t = this._limitCenter(a.latLng(t), e, this.options.maxBounds), i = i || {}, this._panAnim && this._panAnim.stop(), this._loaded && !i.reset && i !== !0) {
                                i.animate !== o && (i.zoom = a.extend({
                                    animate: i.animate
                                }, i.zoom), i.pan = a.extend({
                                    animate: i.animate
                                }, i.pan));
                                var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
                                if (n) return clearTimeout(this._sizeTimer), this
                            }
                            return this._resetView(t, e), this
                        },
                        panBy: function(t, e) {
                            if (t = a.point(t).round(), e = e || {}, !t.x && !t.y) return this;
                            if (this._panAnim || (this._panAnim = new a.PosAnimation, this._panAnim.on({
                                    step: this._onPanTransitionStep,
                                    end: this._onPanTransitionEnd
                                }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
                                a.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                                var i = this._getMapPanePos().subtract(t);
                                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                            } else this._rawPanBy(t), this.fire("move").fire("moveend");
                            return this
                        },
                        _onPanTransitionStep: function() {
                            this.fire("move")
                        },
                        _onPanTransitionEnd: function() {
                            a.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                        },
                        _tryAnimatedPan: function(t, e) {
                            var i = this._getCenterOffset(t)._floor();
                            return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1
                        }
                    }), a.PosAnimation = a.DomUtil.TRANSITION ? a.PosAnimation : a.PosAnimation.extend({
                        run: function(t, e, i, n) {
                            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = a.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                        },
                        stop: function() {
                            this._inProgress && (this._step(), this._complete())
                        },
                        _animate: function() {
                            this._animId = a.Util.requestAnimFrame(this._animate, this), this._step()
                        },
                        _step: function() {
                            var t = +new Date - this._startTime,
                                e = 1e3 * this._duration;
                            e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
                        },
                        _runFrame: function(t) {
                            var e = this._startPos.add(this._offset.multiplyBy(t));
                            a.DomUtil.setPosition(this._el, e), this.fire("step")
                        },
                        _complete: function() {
                            a.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
                        },
                        _easeOut: function(t) {
                            return 1 - Math.pow(1 - t, this._easeOutPower)
                        }
                    }), a.Map.mergeOptions({
                        zoomAnimation: !0,
                        zoomAnimationThreshold: 4
                    }), a.DomUtil.TRANSITION && a.Map.addInitHook(function() {
                        this._zoomAnimated = this.options.zoomAnimation && a.DomUtil.TRANSITION && a.Browser.any3d && !a.Browser.android23 && !a.Browser.mobileOpera, this._zoomAnimated && a.DomEvent.on(this._mapPane, a.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
                    }), a.Map.include(a.DomUtil.TRANSITION ? {
                        _catchTransitionEnd: function(t) {
                            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                        },
                        _nothingToAnimate: function() {
                            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                        },
                        _tryAnimatedZoom: function(t, e, i) {
                            if (this._animatingZoom) return !0;
                            if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                            var n = this.getZoomScale(e),
                                o = this._getCenterOffset(t)._divideBy(1 - 1 / n),
                                s = this._getCenterLayerPoint()._add(o);
                            return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), !0) : !1
                        },
                        _animateZoom: function(t, e, i, n, o, s) {
                            this._animatingZoom = !0, a.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, a.Draggable && (a.Draggable._disabled = !0), this.fire("zoomanim", {
                                center: t,
                                zoom: e,
                                origin: i,
                                scale: n,
                                delta: o,
                                backwards: s
                            })
                        },
                        _onZoomTransitionEnd: function() {
                            this._animatingZoom = !1, a.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), a.Draggable && (a.Draggable._disabled = !1)
                        }
                    } : {}), a.TileLayer.include({
                        _animateZoom: function(t) {
                            this._animating || (this._animating = !0, this._prepareBgBuffer());
                            var e = this._bgBuffer,
                                i = a.DomUtil.TRANSFORM,
                                n = t.delta ? a.DomUtil.getTranslateString(t.delta) : e.style[i],
                                o = a.DomUtil.getScaleString(t.scale, t.origin);
                            e.style[i] = t.backwards ? o + " " + n : n + " " + o
                        },
                        _endZoomAnim: function() {
                            var t = this._tileContainer,
                                e = this._bgBuffer;
                            t.style.visibility = "", t.parentNode.appendChild(t), a.Util.falseFn(e.offsetWidth), this._animating = !1
                        },
                        _clearBgBuffer: function() {
                            var t = this._map;
                            !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[a.DomUtil.TRANSFORM] = "")
                        },
                        _prepareBgBuffer: function() {
                            var t = this._tileContainer,
                                e = this._bgBuffer,
                                i = this._getLoadedTilesPercentage(e),
                                n = this._getLoadedTilesPercentage(t);
                            return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[a.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer))
                        },
                        _getLoadedTilesPercentage: function(t) {
                            var e, i, n = t.getElementsByTagName("img"),
                                o = 0;
                            for (e = 0, i = n.length; i > e; e++) n[e].complete && o++;
                            return o / i
                        },
                        _stopLoadingImages: function(t) {
                            var e, i, n, o = Array.prototype.slice.call(t.getElementsByTagName("img"));
                            for (e = 0, i = o.length; i > e; e++) n = o[e], n.complete || (n.onload = a.Util.falseFn, n.onerror = a.Util.falseFn, n.src = a.Util.emptyImageUrl, n.parentNode.removeChild(n))
                        }
                    }), a.Map.include({
                        _defaultLocateOptions: {
                            watch: !1,
                            setView: !1,
                            maxZoom: 1 / 0,
                            timeout: 1e4,
                            maximumAge: 0,
                            enableHighAccuracy: !1
                        },
                        locate: function(t) {
                            if (t = this._locateOptions = a.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
                                code: 0,
                                message: "Geolocation not supported."
                            }), this;
                            var e = a.bind(this._handleGeolocationResponse, this),
                                i = a.bind(this._handleGeolocationError, this);
                            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
                        },
                        stopLocate: function() {
                            return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                        },
                        _handleGeolocationError: function(t) {
                            var e = t.code,
                                i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                                code: e,
                                message: "Geolocation error: " + i + "."
                            })
                        },
                        _handleGeolocationResponse: function(t) {
                            var e = t.coords.latitude,
                                i = t.coords.longitude,
                                n = new a.LatLng(e, i),
                                o = 180 * t.coords.accuracy / 40075017,
                                s = o / Math.cos(a.LatLng.DEG_TO_RAD * e),
                                r = a.latLngBounds([e - o, i - s], [e + o, i + s]),
                                l = this._locateOptions;
                            if (l.setView) {
                                var h = Math.min(this.getBoundsZoom(r), l.maxZoom);
                                this.setView(n, h)
                            }
                            var u = {
                                latlng: n,
                                bounds: r,
                                timestamp: t.timestamp
                            };
                            for (var c in t.coords) "number" == typeof t.coords[c] && (u[c] = t.coords[c]);
                            this.fire("locationfound", u)
                        }
                    })
            }(window, document)
        }, {}],
        28: [function(t, e, i) {
            (function(i) {
                "use strict";

                function n(t, e) {
                    return 1 === arguments.length ? o(t) : s(t, e)
                }

                function o(t) {
                    return JSON.parse(u.getItem(t))
                }

                function s(t, e) {
                    try {
                        return u.setItem(t, JSON.stringify(e)), !0
                    } catch (i) {
                        return !1
                    }
                }

                function a(t) {
                    return u.removeItem(t)
                }

                function r() {
                    return u.clear()
                }
                var l = t("./stub"),
                    h = t("./tracking"),
                    u = "localStorage" in i && i.localStorage ? i.localStorage : l;
                n.set = s, n.get = o, n.remove = a, n.clear = r, n.on = h.on, n.off = h.off, e.exports = n
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./stub": 29,
            "./tracking": 30
        }],
        29: [function(t, e, i) {
            "use strict";

            function n(t) {
                return t in r ? r[t] : null
            }

            function o(t, e) {
                return r[t] = e, !0
            }

            function s(t) {
                var e = t in r;
                return e ? delete r[t] : !1
            }

            function a() {
                return r = {}, !0
            }
            var r = {};
            e.exports = {
                getItem: n,
                setItem: o,
                removeItem: s,
                clear: a
            }
        }, {}],
        30: [function(t, e, i) {
            (function(t) {
                "use strict";

                function i() {
                    t.addEventListener ? t.addEventListener("storage", n, !1) : t.attachEvent ? t.attachEvent("onstorage", n) : t.onstorage = n
                }

                function n(e) {
                    function i(t) {
                        t(JSON.parse(e.newValue), JSON.parse(e.oldValue), e.url || e.uri)
                    }
                    e || (e = t.event);
                    var n = a[e.key];
                    n && n.forEach(i)
                }

                function o(t, e) {
                    a[t] ? a[t].push(e) : a[t] = [e], r === !1 && i()
                }

                function s(t, e) {
                    var i = a[t];
                    i.length > 1 ? i.splice(i.indexOf(e), 1) : a[t] = []
                }
                var a = {},
                    r = !1;
                e.exports = {
                    on: o,
                    off: s
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        31: [function(t, e, i) {
            function n(t, e) {
                t = Math.round(t * e), t <<= 1, 0 > t && (t = ~t);
                for (var i = ""; t >= 32;) i += String.fromCharCode((32 | 31 & t) + 63), t >>= 5;
                return i += String.fromCharCode(t + 63)
            }
            var o = {};
            o.decode = function(t, e) {
                for (var i, n, o = 0, s = 0, a = 0, r = [], l = 0, h = 0, u = null, c = Math.pow(10, e || 5); o < t.length;) {
                    u = null, l = 0, h = 0;
                    do u = t.charCodeAt(o++) - 63, h |= (31 & u) << l, l += 5; while (u >= 32);
                    i = 1 & h ? ~(h >> 1) : h >> 1, l = h = 0;
                    do u = t.charCodeAt(o++) - 63, h |= (31 & u) << l, l += 5; while (u >= 32);
                    n = 1 & h ? ~(h >> 1) : h >> 1, s += i, a += n, r.push([s / c, a / c])
                }
                return r
            }, o.encode = function(t, e) {
                if (!t.length) return "";
                for (var i = Math.pow(10, e || 5), o = n(t[0][0], i) + n(t[0][1], i), s = 1; s < t.length; s++) {
                    var a = t[s],
                        r = t[s - 1];
                    o += n(a[0] - r[0], i), o += n(a[1] - r[1], i)
                }
                return o
            }, void 0 !== typeof e && (e.exports = o)
        }, {}],
        32: [function(t, e, i) {
            "use strict";
            var n = function(t, e) {
                var i = L.DomUtil.create("div", function() {
                        return 0 === t ? "osrm-directions-origin" : t === e - 1 ? "osrm-directions-destination" : "osrm-directions-via"
                    }()),
                    n = L.DomUtil.create("label", "osrm-form-label", i),
                    o = L.DomUtil.create("input", "", i),
                    s = L.DomUtil.create("span", "osrm-directions-icon osrm-close-icon", i),
                    a = String.fromCharCode(65 + t),
                    r = L.DomUtil.create("div", "leaflet-osrm-geocoder-label", n);
                return r.innerHTML = a, {
                    container: i,
                    input: o,
                    closeButton: s
                }
            };
            e.exports = n
        }, {}],
        33: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                var i = "images/marker-via-icon-2x.png";
                    
                return 0 === t ? L.icon({
                    iconUrl: n[0],
                    iconSize: [20, 56],
                    iconAnchor: [10, 28]
                }) : t === e - 1 ? L.icon({
                    iconUrl: n[1],
                    iconSize: [20, 56],
                    iconAnchor: [10, 28]
                }) : L.icon({
                    iconUrl: i,
                    iconSize: [20, 56],
                    iconAnchor: [10, 28]
                })
            }

            function o(t) {
                var e = b.getWaypoints().filter(function(t) {
                    return t.latLng
                });
                e = e.length, e ? (1 === e && (e += 1), b.spliceWaypoints(e - 1, 1, t.latlng)) : b.spliceWaypoints(0, 1, t.latlng)
            }

            function s(t) {
                var e = C._getLinkOptions(),
                    i = u.format(window.location.href, e);
                history.replaceState({}, "Project OSRM Demo", i)
            }

            function a(t) {
                var e = C._getLinkOptions(),
                    i = u.format(window.location.href, e);
                history.replaceState({}, "Project OSRM Demo", i)
            }

            function r(t) {
                var e = (b.getWaypoints().filter(function(t) {
                    return t.latLng
                }).length, C._getLinkOptions());
                e.waypoints = x._waypoints;
                var i = u.format(window.location.href, e).split("?"),
                    n = window.location.hash = i[0],
                    o = n.concat("?"),
                    s = window.location.hash = i[1],
                    a = (window.location, o.concat(s));
                history.replaceState({}, "Directions", a)
            }
            var l = t("leaflet-control-geocoder"),
                h = (t("leaflet-routing-machine"), t("leaflet.locatecontrol"), t("./lrm_options")),
                u = t("./links"),
                c = t("./leaflet_options"),
                d = t("./tools"),
                p = c.layer,
                m = c.overlay,
                _ = t("./marker"),
                f = u.parse(window.location.href),
                g = L.extend(c.defaultView, f),
                v = t("local-storage"),
                y = v.get("layer") ? c.layer[0][v.get("layer")] : c.layer[0]["Mapbox Streets"];
            if (1 == v.get("getOverlay")) var P = L.map("map", {
                zoomControl: !0,
                dragging: !0,
                layers: [y, m["Small Components"]],
                maxZoom: 18
            }).setView(g.center, g.zoom);
            else var P = L.map("map", {
                zoomControl: !0,
                dragging: !0,
                layers: y,
                maxZoom: 18
            }).setView(g.center, g.zoom);
            p = p.reduce(function(t, e) {
                return t[e.label] = L.tileLayer(e.tileLayer, {
                    id: e.label
                }), t
            }), L.control.layers(p, m, {
                position: "bottomleft"
            }).addTo(P), L.control.scale().addTo(P), P.on("baselayerchange", function(t) {
                v.set("layer", t.name)
            }), P.on("overlayadd", function(t) {
                v.set("getOverlay", !0)
            }), P.on("overlayremove", function(t) {
                v.set("getOverlay", !1)
            });
            var w = L.Routing.Plan.extend({
                    createGeocoders: function() {
                        var t = L.Routing.Plan.prototype.createGeocoders.call(this);
                        return t
                    }
                }),
                x = new w([], {
                    geocoder: l.nominatim(),
                    routeWhileDragging: !0,
                    createMarker: function(t, e, i) {
                        var o = {
                                draggable: this.draggableWaypoints,
                                icon: n(t, i)
                            },
                            s = L.marker(e.latLng, o);
                        return s.on("click", function() {
                            x.spliceWaypoints(t, 1)
                        }), s
                    },
                    routeDragInterval: h.lrm.routeDragInterval,
                    addWaypoints: !0,
                    waypointMode: "snap",
                    position: "topright",
                    useZoomParameter: h.lrm.useZoomParameter,
                    reverseWaypoints: !0,
                    dragStyles: h.lrm.dragStyles,
                    geocodersClassName: h.lrm.geocodersClassName,
                    geocoderPlaceholder: function(t, e) {
                        var i = ["Start - press enter to drop marker", "End - press enter to drop marker"],
                            n = ["Via point - press enter to drop marker"];
                        return 0 === t ? i[0] : t === e - 1 ? i[1] : n
                    }
                });
            x.on("waypointgeocoded", function(t) {
                x._waypoints.filter(function(t) {
                    return !!t.latLng
                }).length < 2 && P.panTo(t.waypoint.latLng)
            }), x.createMarker = _(x, h.popup);
            var b = L.Routing.control({
                    plan: x,
                    routeWhileDragging: h.lrm.routeWhileDragging,
                    lineOptions: h.lrm.lineOptions,
                    altLineOptions: h.lrm.altLineOptions,
                    summaryTemplate: h.lrm.summaryTemplate,
                    containerClassName: h.lrm.containerClassName,
                    alternativeClassName: h.lrm.alternativeClassName,
                    stepClassName: h.lrm.stepClassName,
                    language: g.language,
                    showAlternatives: h.lrm.showAlternatives,
                    units: g.units,
                    serviceUrl: c.services[0].path,
                    useZoomParameter: h.lrm.useZoomParameter,
                    routeDragInterval: h.lrm.routeDragInterval
                }).addTo(P),
                C = d.control(b, L.extend({
                    position: "bottomleft",
                    language: c.language
                }, h.tools)).addTo(P);
            g.waypoints.length < 1, g.waypoints.length > 1 && b.setWaypoints(g.waypoints);
            P.on("click", o);
            x.on("waypointschanged", r), P.on("zoomend", s), P.on("moveend", a), b.on("alternateChosen", function(t) {
                var e = document.querySelectorAll(".leaflet-routing-alt");
                "none" != e[0].style.display ? (e[0].style.display = "none", e[1].style.display = "block") : (e[0].style.display = "block", e[1].style.display = "none")
            }), L.control.locate({
                follow: !1,
                setView: !0,
                remainActive: !1,
                keepCurrentZoomLevel: !0,
                stopFollowingOnDrag: !1,
                onLocationError: function(t) {
                    alert(t.message)
                },
                onLocationOutsideMapBounds: function(t) {
                    alert(t.options.strings.outsideMapBoundsMsg)
                },
                showPopup: !1,
                locateOptions: {}
            }).addTo(P)
        }, {
            "./leaflet_options": 34,
            "./links": 35,
            "./lrm_options": 37,
            "./marker": 38,
            "./tools": 39,
            "leaflet-control-geocoder": 13,
            "leaflet-routing-machine": 15,
            "leaflet.locatecontrol": 26,
            "local-storage": 28
        }],
        34: [function(t, e, i) {
            "use strict";
            var n = L.tileLayer("https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg", {
                    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/">Improve this map</a>'
                }),
                o = L.tileLayer("https://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg", {
                    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/">Improve this map</a>'
                }),
                s = L.tileLayer("https://api.tiles.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg", {
                    attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="http://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/">Improve this map</a>'
                }),
                a = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: '© <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
                }),
                r = L.tileLayer("http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png", {
                    attribution: '© <a href="http://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
                }),
                l = L.tileLayer("http://tools.geofabrik.de/osmi/tiles/routing_i/{z}/{x}/{y}.png", {});
            e.exports = {
                defaultView: {
                    centerLat: 38.8995,
                    centerLng: -77.0269,
                    center: L.latLng(38.8995, -77.0269),
                    zoom: 13,
                    waypoints: [],
                    language: "en",
                    alternative: !0,
                    layer: n
                },
                services: [{
                    label: "Car (fastest)",
                    path: "https://api-osrm-routed-production.tilestream.net/viaroute"
                }],
                layer: [{
                    "Mapbox Streets": n,
                    "Mapbox Outdoors": o,
                    "Mapbox Streets Satellite": s,
                    "openstreetmap.org": a,
                    "openstreetmap.de.org": r
                }],
                overlay: {
                    "Small Components": l
                },
                baselayer: {
                    one: n,
                    two: o,
                    three: s,
                    four: a,
                    five: r
                }
            }
        }, {}],
        35: [function(t, e, i) {
            "use strict";

            function n(t) {
                var e = 6;
                if (t) return t.lat.toFixed(e) + "," + t.lng.toFixed(e)
            }

            function o(t) {
                var e = t.split(","),
                    i = parseFloat(e[0]),
                    n = parseFloat(e[1]);
                if (isNaN(i) || isNaN(n)) throw {
                    name: "InvalidCoords",
                    message: '"' + t + '" is not a valid coordinate.'
                };
                return L.latLng(i, n)
            }

            function s(t) {
                var e = parseInt(t);
                if (isNaN(e)) throw {
                    name: "InvalidInt",
                    message: '"' + t + '" is not a valid integer.'
                };
                return e
            }

            function a(t, e) {
                var i = l.parse(t),
                    o = l.format({
                        protocol: i.protocol,
                        host: i.host,
                        pathname: i.pathname,
                        query: {
                            z: e.zoom,
                            center: e.center ? n(e.center) : void 0,
                            loc: e.waypoints ? e.waypoints.filter(function(t) {
                                return void 0 !== t.latLng
                            }).map(function(t) {
                                return t.latLng
                            }).map(n) : void 0,
                            hl: e.language,
                            ly: e.layer,
                            alt: e.alternative,
                            df: e.units,
                            srv: e.service
                        }
                    });
                return o
            }

            function r(t) {
                t = "?" + t.slice(1);
                var e, i = l.parse(t, !0),
                    n = i.query,
                    a = {},
                    r = {};
                try {
                    a.zoom = n.zoom && s(n.zoom), a.center = n.center && o(n.center), a.waypoints = n.loc && n.loc.map(o).map(function(t) {
                        return L.Routing.waypoint(t)
                    }), a.language = n.hl, a.alternative = n.alt, a.units = n.df, a.layer = n.ly, a.service = n.srv
                } catch (h) {
                    console.log("Exception " + h.name + ": " + h.message)
                }
                for (e in a) void 0 !== a[e] && "" !== a[e] && (r[e] = a[e]);
                return r
            }
            var l = t("url"),
                h = t("jsonp"),
                u = L.Class.extend({
                    options: {
                        baseURL: "http://short.project-osrm.org/"
                    },
                    initialize: function(t) {
                        L.Util.setOptions(this, t)
                    },
                    shorten: function(t, e, i) {
                        var n = this.options.baseURL + t;
                        h(n, {
                            param: "jsonp"
                        }, function(t, n) {
                            return t ? (console.log("Error: " + t), void e.call(i, "")) : void 0 === n.ShortURL ? (console.log("Error: " + n.Error), void e.call(i, "")) : void e.call(i, n.ShortURL)
                        })
                    }
                });
            e.exports = {
                parse: r,
                format: a,
                shortener: function(t) {
                    return new u(t || {})
                }
            }
        }, {
            jsonp: 9,
            url: 7
        }],
        36: [function(t, e, i) {
            "use strict";
            e.exports = {
                en: t("../i18n/en"),
                de: t("../i18n/de")
            }
        }, {
            "../i18n/de": 1,
            "../i18n/en": 2
        }],
        37: [function(t, e, i) {
            "use strict";
            var n = t("./leaflet_options"),
                o = t("./geocoder");
            e.exports = {
                lrm: {
                    lineOptions: {
                        styles: [{
                            color: "#022bb1",
                            opacity: .8,
                            weight: 8
                        }, {
                            color: "white",
                            opacity: .3,
                            weight: 6
                        }]
                    },
                    altLineOptions: {
                        styles: [{
                            color: "#40007d",
                            opacity: .4,
                            weight: 8
                        }, {
                            color: "black",
                            opacity: .5,
                            weight: 2,
                            dashArray: "2,4"
                        }, {
                            color: "white",
                            opacity: .3,
                            weight: 6
                        }]
                    },
                    dragStyles: [{
                        color: "black",
                        opacity: .35,
                        weight: 9
                    }, {
                        color: "white",
                        opacity: .8,
                        weight: 7
                    }],
                    routeWhileDragging: !0,
                    summaryTemplate: '<div class="osrm-directions-summary"><h2>{name}</h2><h3>{distance}, {time}</h3></div>',
                    containerClassName: "dark pad2",
                    alternativeClassName: "osrm-directions-instructions",
                    stepClassName: "osrm-directions-step",
                    geocodersClassName: "osrm-directions-inputs",
                    createGeocoder: o,
                    itineraryBuilder: "osrm-directions-steps",
                    showAlternatives: !0,
                    useZoomParameter: !0,
                    routeDragInterval: 100
                },
                popup: {
                    removeButtonClass: "osrm-directions-icon osrm-close-light-icon",
                    uturnButtonClass: "osrm-directions-icon osrm-u-turn-icon",
                    markerOptions: {}
                },
                tools: {
                    popupWindowClass: "fill-osrm dark",
                    popupCloseButtonClass: "osrm-directions-icon osrm-close-icon",
                    editorButtonClass: "osrm-directions-icon osrm-editor-icon",
                    josmButtonClass: "osrm-directions-icon osrm-josm-icon",
                    localizationButtonClass: "osrm-directions-icon osrm-flag-icon",
                    printButtonClass: "osrm-directions-icon osrm-printer-icon",
                    toolsContainerClass: "fill-osrm dark",
                    language: n.defaultView.language
                }
            }
        }, {
            "./geocoder": 32,
            "./leaflet_options": 34
        }],
        38: [function(t, e, i) {
            "use strict";
            var n = L.Class.extend({
                include: L.Mixin.Events,
                options: {
                    removeButtonClass: "",
                    uturnButtonClass: "",
                    markerOptions: {}
                },
                initialize: function(t, e) {
                    L.setOptions(this, e), this._lrm = t
                },
                _updateUTurnIcon: function(t, e) {
                    e.options.allowUTurn ? L.DomUtil.removeClass(t, "leaflet-osrm-popup-inactive") : L.DomUtil.addClass(t, "leaflet-osrm-popup-inactive")
                },
                _createPopup: function(t) {
                    var e, i = L.DomUtil.create("div", "leaflet-osrm-popup-container"),
                        n = L.DomUtil.create("span", this.options.removeButtonClass, i),
                        o = L.DomUtil.create("span", this.options.uturnButtonClass, i);
                    return L.DomEvent.addListener(n, "click", function() {
                        this._lrm.spliceWaypoints(t, 1)
                    }, this), L.DomEvent.addListener(o, "click", function() {
                        var e = this._lrm.getPlan().getWaypoints()[t];
                        e.options.allowUTurn = e.options.allowUTurn ? !1 : !0, this._updateUTurnIcon(o, e)
                    }, this), this._updateUTurnIcon(o, this._lrm.getPlan().getWaypoints()[t]), e = L.popup({
                        className: "leaflet-osrm-waypoint-popup",
                        closeButton: !1
                    }), e.setContent(i), e
                },
                createMarker: function(t, e, i) {
                    var n = String.fromCharCode(65 + t),
                        o = L.extend({
                            draggable: !0
                        }, this.options.markerOptions),
                        s = L.marker(e.latLng, o);
                    return s.bindLabel(n, {
                        direction: "auto",
                        noHide: !0,
                        className: "leaflet-osrm-waypoint-label"
                    }), s.bindPopup(this._createPopup(t)), s
                }
            });
            e.exports = function(t, e) {
                var i = new n(t, e);
                return function(t, e, n) {
                    return i.createMarker(t, e, n)
                }
            }
        }, {}],
        39: [function(t, e, i) {
            "use strict";
            var n = t("./links"),
                o = t("./localization"),
                s = L.Control.extend({
                    include: L.Mixin.Events,
                    options: {
                        popupWindowClass: "",
                        popupCloseButtonClass: "",
                        toolContainerClass: "",
                        editorButtonClass: "",
                        josmButtonClass: "",
                        localizationButtonClass: "",
                        printButtonClass: "",
                        gpxLinkClass: ""
                    },
                    initialize: function(t, e) {
                        L.setOptions(this, e), this._lrm = t, t.on("routesfound", this._updateDownloadLink, this), t.on("routeselected", function(t) {
                            this._selectedAlternative = t.route
                        }, this)
                    },
                    onAdd: function(t) {
                        var e, i, n, s, a, r, l, h;
                        return this._container = L.DomUtil.create("div", "leaflet-osrm-tools-container leaflet-bar " + this.options.toolsContainerClass), L.DomEvent.disableClickPropagation(this._container), e = L.DomUtil.create("div", "leaflet-osrm-tools-editor", this._container), i = L.DomUtil.create("span", this.options.editorButtonClass, e), i.title = o[this.options.language]["Open in editor"], L.DomEvent.on(i, "click", this._openEditor, this), n = L.DomUtil.create("div", "leaflet-osrm-tools-josm", this._container), s = L.DomUtil.create("span", this.options.josmButtonClass, n), s.title = o[this.options.language]["Open in JOSM"], L.DomEvent.on(s, "click", this._openJOSM, this), r = L.DomUtil.create("div", "leaflet-osrm-tools-print", this._container), l = L.DomUtil.create("span", this.options.printButtonClass, r), l.title = o[this.options.language].Print, L.DomEvent.on(l, "click", this._printPage, this), h = L.DomUtil.create("div", "leaflet-osrm-tools-gpx", this._container), this._gpxLink = L.DomUtil.create("a", this.options.gpxLinkClass, h), this._gpxLink.innerHTML = "GPX", this._gpxLink.alt = o[this.options.language]["Download as GPX"], this._popupWindow = L.DomUtil.create("div", "leaflet-osrm-tools-popup leaflet-osrm-tools-popup-hide " + this.options.popupWindowClass, this._container), this._popupContainer = L.DomUtil.create("div", "", this._popupWindow), a = L.DomUtil.create("span", "leaflet-osrm-tools-popup-close " + this.options.popupCloseButtonClass, this._popupWindow), L.DomEvent.on(a, "click", this._closePopup, this), this._container
                    },
                    onRemove: function() {},
                    _openEditor: function() {
                        var t = this._map.getCenter(),
                            e = this._map.getZoom(),
                            i = 6;
                        window.open("http://www.openstreetmap.org/edit?lat=" + t.lat.toFixed(i) + "&lon=" + t.lng.toFixed(i) + "&zoom=" + e)
                    },
                    _openJOSM: function() {
                        var t = this._map.getBounds(),
                            e = "http://127.0.0.1:8111/load_and_zoom?left=" + t.getWest() + "&right=" + t.getEast() + "&bottom=" + t.getSouth() + "&top=" + t.getNorth();
                        window.open(e)
                    },
                    _getLinkOptions: function() {
                        return {
                            zoom: this._map.getZoom(),
                            center: this._map.getCenter(),
                            waypoints: this._lrm.getWaypoints(),
                            language: this.options.language,
                            units: this.options.units,
                            alternative: this._selectedAlternative
                        }
                    },
                    _printPage: function() {
                        var t = this._getLinkOptions(),
                            e = t.waypoints.filter(function(t) {
                                return void 0 !== t.latLng
                            }),
                            i = window.location.href.replace("/index.html?", "/printing.html?").replace("/?", "/printing.html?");
                        "/" === i.slice(-1) && (i += "printing.html"), e.length < 2 || (window.location.href = n.format(i, t))
                    },
                    _updateDownloadLink: function() {
                        var t, e = this._lrm.getPlan(),
                            i = this._lrm.getRouter();
                        e.isReady() && (t = i.buildRouteUrl(e.getWaypoints(), {
                            fileformat: "gpx"
                        }), this._gpxLink.href = t)
                    },
                    _updatePopupPosition: function() {
                        var t = this._container.getBoundingClientRect();
                        this._popupWindow.style.position = "absolute", this._popupWindow.style.left = "0px", this._popupWindow.style.bottom = t.height + "px"
                    },
                    _openPopup: function(t) {
                        var e, i = this._popupContainer.children;
                        for (this._updatePopupPosition(), e = 0; e < i.length; e++) this._popupContainer.removeChild(i[e]);
                        this._popupContainer.appendChild(t), L.DomUtil.removeClass(this._popupWindow, "leaflet-osrm-tools-popup-hide")
                    },
                    _closePopup: function() {
                        L.DomUtil.addClass(this._popupWindow, "leaflet-osrm-tools-popup-hide")
                    }
                });
            e.exports = {
                control: function(t, e) {
                    return new s(t, e)
                }
            }
        }, {
            "./links": 35,
            "./localization": 36
        }]
    }, {}, [33])(33)
});