(self["webpackChunkobs_swap"] = self["webpackChunkobs_swap"] || []).push([
    [313], {
        31736: function(t, e, n) {
            "use strict";
            n.d(e, {
                x: function() {
                    return a
                }
            });
            var i = n(34492),
                r = n(87275);
            const a = {
                name: "INI",
                symbol: "INI",
                address: (0, i.FI)(),
                chainId: (0, r.F2)(),
                decimals: 18,
                logoURI: (0, r.MY)() + (0, i.FI)() + ".png"
            };
            (0, i.FI)(), (0, r.F2)(), (0, r.MY)(), (0, i.FI)()
        },
        56088: function(t, e, n) {
            "use strict";
            n.d(e, {
                gf: function() {
                    return u
                },
                i1: function() {
                    return o
                },
                lI: function() {
                    return l
                },
                sx: function() {
                    return h
                },
                u4: function() {
                    return c
                }
            });
            n(30381), n(75231), n(3869);
            var i = n(34492),
                r = n(87275);
            const a = n(93853),
                s = n(43919);

            function o(t, e) {
                const n = [{
                    name: "Tether USD",
                    symbol: "USDT",
                    address: (0, i.TV)(),
                    chainId: (0, r.F2)(),
                    decimals: 18,
                    logoURI: `${(0,r.MY)()}${(0,i.TV)()}.png`
                }];
                let a = [];
                for (let i = 0; i < n.length; i++) n[i].address != t.address && a.push({
                    toCur: n[i],
                    fromCur: t
                }), n[i].address != e.address && a.push({
                    toCur: e,
                    fromCur: n[i]
                }), n[i].address != t.address && n[i].address != e.address && a.push({
                    toCur: e,
                    fromCur: t
                });
                return a
            }

            function u(t) {
                if (t) return new a.Token(t.chainId, t.address, t.decimals, t.symbol, t.name)
            }

            function l(t, e) {
                if (t && e) try {
                    const n = s.parseUnits(t, e.decimals).toString();
                    if ("0" !== n) return e instanceof a.Token ? new a.TokenAmount(e, a.JSBI.BigInt(n)) : a.CurrencyAmount.ether(a.JSBI.BigInt(n))
                } catch (n) {
                    console.debug(`Failed to parse input amount: "${t}"`, n)
                }
            }
            const c = new a.Percent(a.JSBI.BigInt(1), a.JSBI.BigInt(1e4));
            const d = new a.Percent(a.JSBI.BigInt(30), a.JSBI.BigInt(1e4)),
                p = new a.Percent(a.JSBI.BigInt(1e4), a.JSBI.BigInt(1e4)),
                f = p.subtract(d);

            function h(t) {
                const e = t ? p.subtract(t.route.pairs.reduce((t => t.multiply(f)), p)) : void 0,
                    n = t && e ? t.priceImpact.subtract(e) : void 0,
                    i = n ? new a.Percent(n.numerator, n.denominator) : void 0,
                    r = e && t && (t.inputAmount instanceof a.TokenAmount ? new a.TokenAmount(t.inputAmount.token, e.multiply(t.inputAmount.raw).quotient) : a.CurrencyAmount.ether(e.multiply(t.inputAmount.raw).quotient));
                return {
                    priceImpactWithoutFee: i,
                    realizedLPFee: r
                }
            }
        },
        22853: function(t, e, n) {
            "use strict";

            function i(t) {
                return "undefined" == typeof t || null == t || "" == t
            }
            n.d(e, {
                ZS: function() {
                    return i
                }
            })
        },
        93570: function(t, e, n) {
            "use strict";
            n.d(e, {
                J: function() {
                    return r
                }
            });
            var i = n(31736);
            const r = t => t.address.toLowerCase() === i.x.address.toLowerCase() && "ini" === t.symbol.toLowerCase()
        },
        44904: function(t, e, n) {
            var i;
            (function(r) {
                "use strict";
                var a, s = 20,
                    o = 1,
                    u = 1e6,
                    l = 1e6,
                    c = -7,
                    d = 21,
                    p = "[big.js] ",
                    f = p + "Invalid ",
                    h = f + "decimal places",
                    m = f + "rounding mode",
                    y = p + "Division by zero",
                    _ = {},
                    g = void 0,
                    v = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

                function b() {
                    function t(e) {
                        var n = this;
                        if (!(n instanceof t)) return e === g ? b() : new t(e);
                        e instanceof t ? (n.s = e.s, n.e = e.e, n.c = e.c.slice()) : w(n, e), n.constructor = t
                    }
                    return t.prototype = _, t.DP = s, t.RM = o, t.NE = c, t.PE = d, t.version = "5.2.2", t
                }

                function w(t, e) {
                    var n, i, r;
                    if (0 === e && 1 / e < 0) e = "-0";
                    else if (!v.test(e += "")) throw Error(f + "number");
                    for (t.s = "-" == e.charAt(0) ? (e = e.slice(1), -1) : 1, (n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (i = e.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +e.slice(i + 1), e = e.substring(0, i)) : n < 0 && (n = e.length), r = e.length, i = 0; i < r && "0" == e.charAt(i);) ++i;
                    if (i == r) t.c = [t.e = 0];
                    else {
                        for (; r > 0 && "0" == e.charAt(--r););
                        for (t.e = n - i - 1, t.c = [], n = 0; i <= r;) t.c[n++] = +e.charAt(i++)
                    }
                    return t
                }

                function T(t, e, n, i) {
                    var r = t.c,
                        a = t.e + e + 1;
                    if (a < r.length) {
                        if (1 === n) i = r[a] >= 5;
                        else if (2 === n) i = r[a] > 5 || 5 == r[a] && (i || a < 0 || r[a + 1] !== g || 1 & r[a - 1]);
                        else if (3 === n) i = i || !!r[0];
                        else if (i = !1, 0 !== n) throw Error(m);
                        if (a < 1) r.length = 1, i ? (t.e = -e, r[0] = 1) : r[0] = t.e = 0;
                        else {
                            if (r.length = a--, i)
                                for (; ++r[a] > 9;) r[a] = 0, a-- || (++t.e, r.unshift(1));
                            for (a = r.length; !r[--a];) r.pop()
                        }
                    } else if (n < 0 || n > 3 || n !== ~~n) throw Error(m);
                    return t
                }

                function A(t, e, n, i) {
                    var r, a, s = t.constructor,
                        o = !t.c[0];
                    if (n !== g) {
                        if (n !== ~~n || n < (3 == e) || n > u) throw Error(3 == e ? f + "precision" : h);
                        for (t = new s(t), n = i - t.e, t.c.length > ++i && T(t, n, s.RM), 2 == e && (i = t.e + n + 1); t.c.length < i;) t.c.push(0)
                    }
                    if (r = t.e, a = t.c.join(""), n = a.length, 2 != e && (1 == e || 3 == e && i <= r || r <= s.NE || r >= s.PE)) a = a.charAt(0) + (n > 1 ? "." + a.slice(1) : "") + (r < 0 ? "e" : "e+") + r;
                    else if (r < 0) {
                        for (; ++r;) a = "0" + a;
                        a = "0." + a
                    } else if (r > 0)
                        if (++r > n)
                            for (r -= n; r--;) a += "0";
                        else r < n && (a = a.slice(0, r) + "." + a.slice(r));
                    else n > 1 && (a = a.charAt(0) + "." + a.slice(1));
                    return t.s < 0 && (!o || 4 == e) ? "-" + a : a
                }
                _.abs = function() {
                    var t = new this.constructor(this);
                    return t.s = 1, t
                }, _.cmp = function(t) {
                    var e, n = this,
                        i = n.c,
                        r = (t = new n.constructor(t)).c,
                        a = n.s,
                        s = t.s,
                        o = n.e,
                        u = t.e;
                    if (!i[0] || !r[0]) return i[0] ? a : r[0] ? -s : 0;
                    if (a != s) return a;
                    if (e = a < 0, o != u) return o > u ^ e ? 1 : -1;
                    for (s = (o = i.length) < (u = r.length) ? o : u, a = -1; ++a < s;)
                        if (i[a] != r[a]) return i[a] > r[a] ^ e ? 1 : -1;
                    return o == u ? 0 : o > u ^ e ? 1 : -1
                }, _.div = function(t) {
                    var e = this,
                        n = e.constructor,
                        i = e.c,
                        r = (t = new n(t)).c,
                        a = e.s == t.s ? 1 : -1,
                        s = n.DP;
                    if (s !== ~~s || s < 0 || s > u) throw Error(h);
                    if (!r[0]) throw Error(y);
                    if (!i[0]) return new n(0 * a);
                    var o, l, c, d, p, f = r.slice(),
                        m = o = r.length,
                        _ = i.length,
                        v = i.slice(0, o),
                        b = v.length,
                        w = t,
                        A = w.c = [],
                        k = 0,
                        x = s + (w.e = e.e - t.e) + 1;
                    for (w.s = a, a = x < 0 ? 0 : x, f.unshift(0); b++ < o;) v.push(0);
                    do {
                        for (c = 0; c < 10; c++) {
                            if (o != (b = v.length)) d = o > b ? 1 : -1;
                            else
                                for (p = -1, d = 0; ++p < o;)
                                    if (r[p] != v[p]) {
                                        d = r[p] > v[p] ? 1 : -1;
                                        break
                                    } if (!(d < 0)) break;
                            for (l = b == o ? r : f; b;) {
                                if (v[--b] < l[b]) {
                                    for (p = b; p && !v[--p];) v[p] = 9;
                                    --v[p], v[b] += 10
                                }
                                v[b] -= l[b]
                            }
                            for (; !v[0];) v.shift()
                        }
                        A[k++] = d ? c : ++c, v[0] && d ? v[b] = i[m] || 0 : v = [i[m]]
                    } while ((m++ < _ || v[0] !== g) && a--);
                    return A[0] || 1 == k || (A.shift(), w.e--), k > x && T(w, s, n.RM, v[0] !== g), w
                }, _.eq = function(t) {
                    return !this.cmp(t)
                }, _.gt = function(t) {
                    return this.cmp(t) > 0
                }, _.gte = function(t) {
                    return this.cmp(t) > -1
                }, _.lt = function(t) {
                    return this.cmp(t) < 0
                }, _.lte = function(t) {
                    return this.cmp(t) < 1
                }, _.minus = _.sub = function(t) {
                    var e, n, i, r, a = this,
                        s = a.constructor,
                        o = a.s,
                        u = (t = new s(t)).s;
                    if (o != u) return t.s = -u, a.plus(t);
                    var l = a.c.slice(),
                        c = a.e,
                        d = t.c,
                        p = t.e;
                    if (!l[0] || !d[0]) return d[0] ? (t.s = -u, t) : new s(l[0] ? a : 0);
                    if (o = c - p) {
                        for ((r = o < 0) ? (o = -o, i = l) : (p = c, i = d), i.reverse(), u = o; u--;) i.push(0);
                        i.reverse()
                    } else
                        for (n = ((r = l.length < d.length) ? l : d).length, o = u = 0; u < n; u++)
                            if (l[u] != d[u]) {
                                r = l[u] < d[u];
                                break
                            } if (r && (i = l, l = d, d = i, t.s = -t.s), (u = (n = d.length) - (e = l.length)) > 0)
                        for (; u--;) l[e++] = 0;
                    for (u = e; n > o;) {
                        if (l[--n] < d[n]) {
                            for (e = n; e && !l[--e];) l[e] = 9;
                            --l[e], l[n] += 10
                        }
                        l[n] -= d[n]
                    }
                    for (; 0 === l[--u];) l.pop();
                    for (; 0 === l[0];) l.shift(), --p;
                    return l[0] || (t.s = 1, l = [p = 0]), t.c = l, t.e = p, t
                }, _.mod = function(t) {
                    var e, n = this,
                        i = n.constructor,
                        r = n.s,
                        a = (t = new i(t)).s;
                    if (!t.c[0]) throw Error(y);
                    return n.s = t.s = 1, e = 1 == t.cmp(n), n.s = r, t.s = a, e ? new i(n) : (r = i.DP, a = i.RM, i.DP = i.RM = 0, n = n.div(t), i.DP = r, i.RM = a, this.minus(n.times(t)))
                }, _.plus = _.add = function(t) {
                    var e, n = this,
                        i = n.constructor,
                        r = n.s,
                        a = (t = new i(t)).s;
                    if (r != a) return t.s = -a, n.minus(t);
                    var s = n.e,
                        o = n.c,
                        u = t.e,
                        l = t.c;
                    if (!o[0] || !l[0]) return l[0] ? t : new i(o[0] ? n : 0 * r);
                    if (o = o.slice(), r = s - u) {
                        for (r > 0 ? (u = s, e = l) : (r = -r, e = o), e.reverse(); r--;) e.push(0);
                        e.reverse()
                    }
                    for (o.length - l.length < 0 && (e = l, l = o, o = e), r = l.length, a = 0; r; o[r] %= 10) a = (o[--r] = o[r] + l[r] + a) / 10 | 0;
                    for (a && (o.unshift(a), ++u), r = o.length; 0 === o[--r];) o.pop();
                    return t.c = o, t.e = u, t
                }, _.pow = function(t) {
                    var e = this,
                        n = new e.constructor(1),
                        i = n,
                        r = t < 0;
                    if (t !== ~~t || t < -l || t > l) throw Error(f + "exponent");
                    for (r && (t = -t);;) {
                        if (1 & t && (i = i.times(e)), t >>= 1, !t) break;
                        e = e.times(e)
                    }
                    return r ? n.div(i) : i
                }, _.round = function(t, e) {
                    var n = this.constructor;
                    if (t === g) t = 0;
                    else if (t !== ~~t || t < -u || t > u) throw Error(h);
                    return T(new n(this), t, e === g ? n.RM : e)
                }, _.sqrt = function() {
                    var t, e, n, i = this,
                        r = i.constructor,
                        a = i.s,
                        s = i.e,
                        o = new r(.5);
                    if (!i.c[0]) return new r(i);
                    if (a < 0) throw Error(p + "No square root");
                    a = Math.sqrt(i + ""), 0 === a || a === 1 / 0 ? (e = i.c.join(""), e.length + s & 1 || (e += "0"), a = Math.sqrt(e), s = ((s + 1) / 2 | 0) - (s < 0 || 1 & s), t = new r((a == 1 / 0 ? "1e" : (a = a.toExponential()).slice(0, a.indexOf("e") + 1)) + s)) : t = new r(a), s = t.e + (r.DP += 4);
                    do {
                        n = t, t = o.times(n.plus(i.div(n)))
                    } while (n.c.slice(0, s).join("") !== t.c.slice(0, s).join(""));
                    return T(t, r.DP -= 4, r.RM)
                }, _.times = _.mul = function(t) {
                    var e, n = this,
                        i = n.constructor,
                        r = n.c,
                        a = (t = new i(t)).c,
                        s = r.length,
                        o = a.length,
                        u = n.e,
                        l = t.e;
                    if (t.s = n.s == t.s ? 1 : -1, !r[0] || !a[0]) return new i(0 * t.s);
                    for (t.e = u + l, s < o && (e = r, r = a, a = e, l = s, s = o, o = l), e = new Array(l = s + o); l--;) e[l] = 0;
                    for (u = o; u--;) {
                        for (o = 0, l = s + u; l > u;) o = e[l] + a[u] * r[l - u - 1] + o, e[l--] = o % 10, o = o / 10 | 0;
                        e[l] = (e[l] + o) % 10
                    }
                    for (o ? ++t.e : e.shift(), u = e.length; !e[--u];) e.pop();
                    return t.c = e, t
                }, _.toExponential = function(t) {
                    return A(this, 1, t, t)
                }, _.toFixed = function(t) {
                    return A(this, 2, t, this.e + t)
                }, _.toPrecision = function(t) {
                    return A(this, 3, t, t - 1)
                }, _.toString = function() {
                    return A(this)
                }, _.valueOf = _.toJSON = function() {
                    return A(this, 4)
                }, a = b(), a["default"] = a.Big = a, i = function() {
                    return a
                }.call(e, n, e, t), void 0 === i || (t.exports = i)
            })()
        },
        91556: function(t, e, n) {
            var i; /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
            (function(r) {
                "use strict";
                var a, s = 1e9,
                    o = {
                        precision: 20,
                        rounding: 4,
                        toExpNeg: -7,
                        toExpPos: 21,
                        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
                    },
                    u = !0,
                    l = "[DecimalError] ",
                    c = l + "Invalid argument: ",
                    d = l + "Exponent out of range: ",
                    p = Math.floor,
                    f = Math.pow,
                    h = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                    m = 1e7,
                    y = 7,
                    _ = 9007199254740991,
                    g = p(_ / y),
                    v = {};

                function b(t, e) {
                    var n, i, r, a, s, o, l, c, d = t.constructor,
                        p = d.precision;
                    if (!t.s || !e.s) return e.s || (e = new d(t)), u ? D(e, p) : e;
                    if (l = t.d, c = e.d, s = t.e, r = e.e, l = l.slice(), a = s - r, a) {
                        for (a < 0 ? (i = l, a = -a, o = c.length) : (i = c, r = s, o = l.length), s = Math.ceil(p / y), o = s > o ? s + 1 : o + 1, a > o && (a = o, i.length = 1), i.reverse(); a--;) i.push(0);
                        i.reverse()
                    }
                    for (o = l.length, a = c.length, o - a < 0 && (a = o, i = c, c = l, l = i), n = 0; a;) n = (l[--a] = l[a] + c[a] + n) / m | 0, l[a] %= m;
                    for (n && (l.unshift(n), ++r), o = l.length; 0 == l[--o];) l.pop();
                    return e.d = l, e.e = r, u ? D(e, p) : e
                }

                function w(t, e, n) {
                    if (t !== ~~t || t < e || t > n) throw Error(c + t)
                }

                function T(t) {
                    var e, n, i, r = t.length - 1,
                        a = "",
                        s = t[0];
                    if (r > 0) {
                        for (a += s, e = 1; e < r; e++) i = t[e] + "", n = y - i.length, n && (a += C(n)), a += i;
                        s = t[e], i = s + "", n = y - i.length, n && (a += C(n))
                    } else if (0 === s) return "0";
                    for (; s % 10 === 0;) s /= 10;
                    return a + s
                }
                v.absoluteValue = v.abs = function() {
                    var t = new this.constructor(this);
                    return t.s && (t.s = 1), t
                }, v.comparedTo = v.cmp = function(t) {
                    var e, n, i, r, a = this;
                    if (t = new a.constructor(t), a.s !== t.s) return a.s || -t.s;
                    if (a.e !== t.e) return a.e > t.e ^ a.s < 0 ? 1 : -1;
                    for (i = a.d.length, r = t.d.length, e = 0, n = i < r ? i : r; e < n; ++e)
                        if (a.d[e] !== t.d[e]) return a.d[e] > t.d[e] ^ a.s < 0 ? 1 : -1;
                    return i === r ? 0 : i > r ^ a.s < 0 ? 1 : -1
                }, v.decimalPlaces = v.dp = function() {
                    var t = this,
                        e = t.d.length - 1,
                        n = (e - t.e) * y;
                    if (e = t.d[e], e)
                        for (; e % 10 == 0; e /= 10) n--;
                    return n < 0 ? 0 : n
                }, v.dividedBy = v.div = function(t) {
                    return A(this, new this.constructor(t))
                }, v.dividedToIntegerBy = v.idiv = function(t) {
                    var e = this,
                        n = e.constructor;
                    return D(A(e, new n(t), 0, 1), n.precision)
                }, v.equals = v.eq = function(t) {
                    return !this.cmp(t)
                }, v.exponent = function() {
                    return x(this)
                }, v.greaterThan = v.gt = function(t) {
                    return this.cmp(t) > 0
                }, v.greaterThanOrEqualTo = v.gte = function(t) {
                    return this.cmp(t) >= 0
                }, v.isInteger = v.isint = function() {
                    return this.e > this.d.length - 2
                }, v.isNegative = v.isneg = function() {
                    return this.s < 0
                }, v.isPositive = v.ispos = function() {
                    return this.s > 0
                }, v.isZero = function() {
                    return 0 === this.s
                }, v.lessThan = v.lt = function(t) {
                    return this.cmp(t) < 0
                }, v.lessThanOrEqualTo = v.lte = function(t) {
                    return this.cmp(t) < 1
                }, v.logarithm = v.log = function(t) {
                    var e, n = this,
                        i = n.constructor,
                        r = i.precision,
                        s = r + 5;
                    if (void 0 === t) t = new i(10);
                    else if (t = new i(t), t.s < 1 || t.eq(a)) throw Error(l + "NaN");
                    if (n.s < 1) throw Error(l + (n.s ? "NaN" : "-Infinity"));
                    return n.eq(a) ? new i(0) : (u = !1, e = A(E(n, s), E(t, s), s), u = !0, D(e, r))
                }, v.minus = v.sub = function(t) {
                    var e = this;
                    return t = new e.constructor(t), e.s == t.s ? B(e, t) : b(e, (t.s = -t.s, t))
                }, v.modulo = v.mod = function(t) {
                    var e, n = this,
                        i = n.constructor,
                        r = i.precision;
                    if (t = new i(t), !t.s) throw Error(l + "NaN");
                    return n.s ? (u = !1, e = A(n, t, 0, 1).times(t), u = !0, n.minus(e)) : D(new i(n), r)
                }, v.naturalExponential = v.exp = function() {
                    return k(this)
                }, v.naturalLogarithm = v.ln = function() {
                    return E(this)
                }, v.negated = v.neg = function() {
                    var t = new this.constructor(this);
                    return t.s = -t.s || 0, t
                }, v.plus = v.add = function(t) {
                    var e = this;
                    return t = new e.constructor(t), e.s == t.s ? b(e, t) : B(e, (t.s = -t.s, t))
                }, v.precision = v.sd = function(t) {
                    var e, n, i, r = this;
                    if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t) throw Error(c + t);
                    if (e = x(r) + 1, i = r.d.length - 1, n = i * y + 1, i = r.d[i], i) {
                        for (; i % 10 == 0; i /= 10) n--;
                        for (i = r.d[0]; i >= 10; i /= 10) n++
                    }
                    return t && e > n ? e : n
                }, v.squareRoot = v.sqrt = function() {
                    var t, e, n, i, r, a, s, o = this,
                        c = o.constructor;
                    if (o.s < 1) {
                        if (!o.s) return new c(0);
                        throw Error(l + "NaN")
                    }
                    for (t = x(o), u = !1, r = Math.sqrt(+o), 0 == r || r == 1 / 0 ? (e = T(o.d), (e.length + t) % 2 == 0 && (e += "0"), r = Math.sqrt(e), t = p((t + 1) / 2) - (t < 0 || t % 2), r == 1 / 0 ? e = "5e" + t : (e = r.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + t), i = new c(e)) : i = new c(r.toString()), n = c.precision, r = s = n + 3;;)
                        if (a = i, i = a.plus(A(o, a, s + 2)).times(.5), T(a.d).slice(0, s) === (e = T(i.d)).slice(0, s)) {
                            if (e = e.slice(s - 3, s + 1), r == s && "4999" == e) {
                                if (D(a, n + 1, 0), a.times(a).eq(o)) {
                                    i = a;
                                    break
                                }
                            } else if ("9999" != e) break;
                            s += 4
                        } return u = !0, D(i, n)
                }, v.times = v.mul = function(t) {
                    var e, n, i, r, a, s, o, l, c, d = this,
                        p = d.constructor,
                        f = d.d,
                        h = (t = new p(t)).d;
                    if (!d.s || !t.s) return new p(0);
                    for (t.s *= d.s, n = d.e + t.e, l = f.length, c = h.length, l < c && (a = f, f = h, h = a, s = l, l = c, c = s), a = [], s = l + c, i = s; i--;) a.push(0);
                    for (i = c; --i >= 0;) {
                        for (e = 0, r = l + i; r > i;) o = a[r] + h[i] * f[r - i - 1] + e, a[r--] = o % m | 0, e = o / m | 0;
                        a[r] = (a[r] + e) % m | 0
                    }
                    for (; !a[--s];) a.pop();
                    return e ? ++n : a.shift(), t.d = a, t.e = n, u ? D(t, p.precision) : t
                }, v.toDecimalPlaces = v.todp = function(t, e) {
                    var n = this,
                        i = n.constructor;
                    return n = new i(n), void 0 === t ? n : (w(t, 0, s), void 0 === e ? e = i.rounding : w(e, 0, 8), D(n, t + x(n) + 1, e))
                }, v.toExponential = function(t, e) {
                    var n, i = this,
                        r = i.constructor;
                    return void 0 === t ? n = N(i, !0) : (w(t, 0, s), void 0 === e ? e = r.rounding : w(e, 0, 8), i = D(new r(i), t + 1, e), n = N(i, !0, t + 1)), n
                }, v.toFixed = function(t, e) {
                    var n, i, r = this,
                        a = r.constructor;
                    return void 0 === t ? N(r) : (w(t, 0, s), void 0 === e ? e = a.rounding : w(e, 0, 8), i = D(new a(r), t + x(r) + 1, e), n = N(i.abs(), !1, t + x(i) + 1), r.isneg() && !r.isZero() ? "-" + n : n)
                }, v.toInteger = v.toint = function() {
                    var t = this,
                        e = t.constructor;
                    return D(new e(t), x(t) + 1, e.rounding)
                }, v.toNumber = function() {
                    return +this
                }, v.toPower = v.pow = function(t) {
                    var e, n, i, r, s, o, c = this,
                        d = c.constructor,
                        f = 12,
                        h = +(t = new d(t));
                    if (!t.s) return new d(a);
                    if (c = new d(c), !c.s) {
                        if (t.s < 1) throw Error(l + "Infinity");
                        return c
                    }
                    if (c.eq(a)) return c;
                    if (i = d.precision, t.eq(a)) return D(c, i);
                    if (e = t.e, n = t.d.length - 1, o = e >= n, s = c.s, o) {
                        if ((n = h < 0 ? -h : h) <= _) {
                            for (r = new d(a), e = Math.ceil(i / y + 4), u = !1;;) {
                                if (n % 2 && (r = r.times(c), M(r.d, e)), n = p(n / 2), 0 === n) break;
                                c = c.times(c), M(c.d, e)
                            }
                            return u = !0, t.s < 0 ? new d(a).div(r) : D(r, i)
                        }
                    } else if (s < 0) throw Error(l + "NaN");
                    return s = s < 0 && 1 & t.d[Math.max(e, n)] ? -1 : 1, c.s = 1, u = !1, r = t.times(E(c, i + f)), u = !0, r = k(r), r.s = s, r
                }, v.toPrecision = function(t, e) {
                    var n, i, r = this,
                        a = r.constructor;
                    return void 0 === t ? (n = x(r), i = N(r, n <= a.toExpNeg || n >= a.toExpPos)) : (w(t, 1, s), void 0 === e ? e = a.rounding : w(e, 0, 8), r = D(new a(r), t, e), n = x(r), i = N(r, t <= n || n <= a.toExpNeg, t)), i
                }, v.toSignificantDigits = v.tosd = function(t, e) {
                    var n = this,
                        i = n.constructor;
                    return void 0 === t ? (t = i.precision, e = i.rounding) : (w(t, 1, s), void 0 === e ? e = i.rounding : w(e, 0, 8)), D(new i(n), t, e)
                }, v.toString = v.valueOf = v.val = v.toJSON = function() {
                    var t = this,
                        e = x(t),
                        n = t.constructor;
                    return N(t, e <= n.toExpNeg || e >= n.toExpPos)
                };
                var A = function() {
                    function t(t, e) {
                        var n, i = 0,
                            r = t.length;
                        for (t = t.slice(); r--;) n = t[r] * e + i, t[r] = n % m | 0, i = n / m | 0;
                        return i && t.unshift(i), t
                    }

                    function e(t, e, n, i) {
                        var r, a;
                        if (n != i) a = n > i ? 1 : -1;
                        else
                            for (r = a = 0; r < n; r++)
                                if (t[r] != e[r]) {
                                    a = t[r] > e[r] ? 1 : -1;
                                    break
                                } return a
                    }

                    function n(t, e, n) {
                        for (var i = 0; n--;) t[n] -= i, i = t[n] < e[n] ? 1 : 0, t[n] = i * m + t[n] - e[n];
                        for (; !t[0] && t.length > 1;) t.shift()
                    }
                    return function(i, r, a, s) {
                        var o, u, c, d, p, f, h, _, g, v, b, w, T, A, k, I, C, E, S = i.constructor,
                            B = i.s == r.s ? 1 : -1,
                            N = i.d,
                            M = r.d;
                        if (!i.s) return new S(i);
                        if (!r.s) throw Error(l + "Division by zero");
                        for (u = i.e - r.e, C = M.length, k = N.length, h = new S(B), _ = h.d = [], c = 0; M[c] == (N[c] || 0);) ++c;
                        if (M[c] > (N[c] || 0) && --u, w = null == a ? a = S.precision : s ? a + (x(i) - x(r)) + 1 : a, w < 0) return new S(0);
                        if (w = w / y + 2 | 0, c = 0, 1 == C)
                            for (d = 0, M = M[0], w++;
                                (c < k || d) && w--; c++) T = d * m + (N[c] || 0), _[c] = T / M | 0, d = T % M | 0;
                        else {
                            for (d = m / (M[0] + 1) | 0, d > 1 && (M = t(M, d), N = t(N, d), C = M.length, k = N.length), A = C, g = N.slice(0, C), v = g.length; v < C;) g[v++] = 0;
                            E = M.slice(), E.unshift(0), I = M[0], M[1] >= m / 2 && ++I;
                            do {
                                d = 0, o = e(M, g, C, v), o < 0 ? (b = g[0], C != v && (b = b * m + (g[1] || 0)), d = b / I | 0, d > 1 ? (d >= m && (d = m - 1), p = t(M, d), f = p.length, v = g.length, o = e(p, g, f, v), 1 == o && (d--, n(p, C < f ? E : M, f))) : (0 == d && (o = d = 1), p = M.slice()), f = p.length, f < v && p.unshift(0), n(g, p, v), -1 == o && (v = g.length, o = e(M, g, C, v), o < 1 && (d++, n(g, C < v ? E : M, v))), v = g.length) : 0 === o && (d++, g = [0]), _[c++] = d, o && g[0] ? g[v++] = N[A] || 0 : (g = [N[A]], v = 1)
                            } while ((A++ < k || void 0 !== g[0]) && w--)
                        }
                        return _[0] || _.shift(), h.e = u, D(h, s ? a + x(h) + 1 : a)
                    }
                }();

                function k(t, e) {
                    var n, i, r, s, o, l, c = 0,
                        p = 0,
                        h = t.constructor,
                        m = h.precision;
                    if (x(t) > 16) throw Error(d + x(t));
                    if (!t.s) return new h(a);
                    null == e ? (u = !1, l = m) : l = e, o = new h(.03125);
                    while (t.abs().gte(.1)) t = t.times(o), p += 5;
                    for (i = Math.log(f(2, p)) / Math.LN10 * 2 + 5 | 0, l += i, n = r = s = new h(a), h.precision = l;;) {
                        if (r = D(r.times(t), l), n = n.times(++c), o = s.plus(A(r, n, l)), T(o.d).slice(0, l) === T(s.d).slice(0, l)) {
                            while (p--) s = D(s.times(s), l);
                            return h.precision = m, null == e ? (u = !0, D(s, m)) : s
                        }
                        s = o
                    }
                }

                function x(t) {
                    for (var e = t.e * y, n = t.d[0]; n >= 10; n /= 10) e++;
                    return e
                }

                function I(t, e, n) {
                    if (e > t.LN10.sd()) throw u = !0, n && (t.precision = n), Error(l + "LN10 precision limit exceeded");
                    return D(new t(t.LN10), e)
                }

                function C(t) {
                    for (var e = ""; t--;) e += "0";
                    return e
                }

                function E(t, e) {
                    var n, i, r, s, o, c, d, p, f, h = 1,
                        m = 10,
                        y = t,
                        _ = y.d,
                        g = y.constructor,
                        v = g.precision;
                    if (y.s < 1) throw Error(l + (y.s ? "NaN" : "-Infinity"));
                    if (y.eq(a)) return new g(0);
                    if (null == e ? (u = !1, p = v) : p = e, y.eq(10)) return null == e && (u = !0), I(g, p);
                    if (p += m, g.precision = p, n = T(_), i = n.charAt(0), s = x(y), !(Math.abs(s) < 15e14)) return d = I(g, p + 2, v).times(s + ""), y = E(new g(i + "." + n.slice(1)), p - m).plus(d), g.precision = v, null == e ? (u = !0, D(y, v)) : y;
                    while (i < 7 && 1 != i || 1 == i && n.charAt(1) > 3) y = y.times(t), n = T(y.d), i = n.charAt(0), h++;
                    for (s = x(y), i > 1 ? (y = new g("0." + n), s++) : y = new g(i + "." + n.slice(1)), c = o = y = A(y.minus(a), y.plus(a), p), f = D(y.times(y), p), r = 3;;) {
                        if (o = D(o.times(f), p), d = c.plus(A(o, new g(r), p)), T(d.d).slice(0, p) === T(c.d).slice(0, p)) return c = c.times(2), 0 !== s && (c = c.plus(I(g, p + 2, v).times(s + ""))), c = A(c, new g(h), p), g.precision = v, null == e ? (u = !0, D(c, v)) : c;
                        c = d, r += 2
                    }
                }

                function S(t, e) {
                    var n, i, r;
                    for ((n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (i = e.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +e.slice(i + 1), e = e.substring(0, i)) : n < 0 && (n = e.length), i = 0; 48 === e.charCodeAt(i);) ++i;
                    for (r = e.length; 48 === e.charCodeAt(r - 1);) --r;
                    if (e = e.slice(i, r), e) {
                        if (r -= i, n = n - i - 1, t.e = p(n / y), t.d = [], i = (n + 1) % y, n < 0 && (i += y), i < r) {
                            for (i && t.d.push(+e.slice(0, i)), r -= y; i < r;) t.d.push(+e.slice(i, i += y));
                            e = e.slice(i), i = y - e.length
                        } else i -= r;
                        for (; i--;) e += "0";
                        if (t.d.push(+e), u && (t.e > g || t.e < -g)) throw Error(d + n)
                    } else t.s = 0, t.e = 0, t.d = [0];
                    return t
                }

                function D(t, e, n) {
                    var i, r, a, s, o, l, c, h, _ = t.d;
                    for (s = 1, a = _[0]; a >= 10; a /= 10) s++;
                    if (i = e - s, i < 0) i += y, r = e, c = _[h = 0];
                    else {
                        if (h = Math.ceil((i + 1) / y), a = _.length, h >= a) return t;
                        for (c = a = _[h], s = 1; a >= 10; a /= 10) s++;
                        i %= y, r = i - y + s
                    }
                    if (void 0 !== n && (a = f(10, s - r - 1), o = c / a % 10 | 0, l = e < 0 || void 0 !== _[h + 1] || c % a, l = n < 4 ? (o || l) && (0 == n || n == (t.s < 0 ? 3 : 2)) : o > 5 || 5 == o && (4 == n || l || 6 == n && (i > 0 ? r > 0 ? c / f(10, s - r) : 0 : _[h - 1]) % 10 & 1 || n == (t.s < 0 ? 8 : 7))), e < 1 || !_[0]) return l ? (a = x(t), _.length = 1, e = e - a - 1, _[0] = f(10, (y - e % y) % y), t.e = p(-e / y) || 0) : (_.length = 1, _[0] = t.e = t.s = 0), t;
                    if (0 == i ? (_.length = h, a = 1, h--) : (_.length = h + 1, a = f(10, y - i), _[h] = r > 0 ? (c / f(10, s - r) % f(10, r) | 0) * a : 0), l)
                        for (;;) {
                            if (0 == h) {
                                (_[0] += a) == m && (_[0] = 1, ++t.e);
                                break
                            }
                            if (_[h] += a, _[h] != m) break;
                            _[h--] = 0, a = 1
                        }
                    for (i = _.length; 0 === _[--i];) _.pop();
                    if (u && (t.e > g || t.e < -g)) throw Error(d + x(t));
                    return t
                }

                function B(t, e) {
                    var n, i, r, a, s, o, l, c, d, p, f = t.constructor,
                        h = f.precision;
                    if (!t.s || !e.s) return e.s ? e.s = -e.s : e = new f(t), u ? D(e, h) : e;
                    if (l = t.d, p = e.d, i = e.e, c = t.e, l = l.slice(), s = c - i, s) {
                        for (d = s < 0, d ? (n = l, s = -s, o = p.length) : (n = p, i = c, o = l.length), r = Math.max(Math.ceil(h / y), o) + 2, s > r && (s = r, n.length = 1), n.reverse(), r = s; r--;) n.push(0);
                        n.reverse()
                    } else {
                        for (r = l.length, o = p.length, d = r < o, d && (o = r), r = 0; r < o; r++)
                            if (l[r] != p[r]) {
                                d = l[r] < p[r];
                                break
                            } s = 0
                    }
                    for (d && (n = l, l = p, p = n, e.s = -e.s), o = l.length, r = p.length - o; r > 0; --r) l[o++] = 0;
                    for (r = p.length; r > s;) {
                        if (l[--r] < p[r]) {
                            for (a = r; a && 0 === l[--a];) l[a] = m - 1;
                            --l[a], l[r] += m
                        }
                        l[r] -= p[r]
                    }
                    for (; 0 === l[--o];) l.pop();
                    for (; 0 === l[0]; l.shift()) --i;
                    return l[0] ? (e.d = l, e.e = i, u ? D(e, h) : e) : new f(0)
                }

                function N(t, e, n) {
                    var i, r = x(t),
                        a = T(t.d),
                        s = a.length;
                    return e ? (n && (i = n - s) > 0 ? a = a.charAt(0) + "." + a.slice(1) + C(i) : s > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (r < 0 ? "e" : "e+") + r) : r < 0 ? (a = "0." + C(-r - 1) + a, n && (i = n - s) > 0 && (a += C(i))) : r >= s ? (a += C(r + 1 - s), n && (i = n - r - 1) > 0 && (a = a + "." + C(i))) : ((i = r + 1) < s && (a = a.slice(0, i) + "." + a.slice(i)), n && (i = n - s) > 0 && (r + 1 === s && (a += "."), a += C(i))), t.s < 0 ? "-" + a : a
                }

                function M(t, e) {
                    if (t.length > e) return t.length = e, !0
                }

                function O(t) {
                    var e, n, i;

                    function r(t) {
                        var e = this;
                        if (!(e instanceof r)) return new r(t);
                        if (e.constructor = r, t instanceof r) return e.s = t.s, e.e = t.e, void(e.d = (t = t.d) ? t.slice() : t);
                        if ("number" === typeof t) {
                            if (0 * t !== 0) throw Error(c + t);
                            if (t > 0) e.s = 1;
                            else {
                                if (!(t < 0)) return e.s = 0, e.e = 0, void(e.d = [0]);
                                t = -t, e.s = -1
                            }
                            return t === ~~t && t < 1e7 ? (e.e = 0, void(e.d = [t])) : S(e, t.toString())
                        }
                        if ("string" !== typeof t) throw Error(c + t);
                        if (45 === t.charCodeAt(0) ? (t = t.slice(1), e.s = -1) : e.s = 1, !h.test(t)) throw Error(c + t);
                        S(e, t)
                    }
                    if (r.prototype = v, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.clone = O, r.config = r.set = L, void 0 === t && (t = {}), t)
                        for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], e = 0; e < i.length;) t.hasOwnProperty(n = i[e++]) || (t[n] = this[n]);
                    return r.config(t), r
                }

                function L(t) {
                    if (!t || "object" !== typeof t) throw Error(l + "Object expected");
                    var e, n, i, r = ["precision", 1, s, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
                    for (e = 0; e < r.length; e += 3)
                        if (void 0 !== (i = t[n = r[e]])) {
                            if (!(p(i) === i && i >= r[e + 1] && i <= r[e + 2])) throw Error(c + n + ": " + i);
                            this[n] = i
                        } if (void 0 !== (i = t[n = "LN10"])) {
                        if (i != Math.LN10) throw Error(c + n + ": " + i);
                        this[n] = new this(i)
                    }
                    return this
                }
                o = O(o), o["default"] = o.Decimal = o, a = new o(1), i = function() {
                    return o
                }.call(e, n, e, t), void 0 === i || (t.exports = i)
            })()
        },
        26861: function(t) {
            (function(e, n) {
                t.exports = n()
            })(0, (function() {
                "use strict";
                var t = Math.imul,
                    e = Math.clz32,
                    n = Math.abs,
                    i = Math.max,
                    r = Math.floor;
                class a extends Array {
                    constructor(t, e) {
                        if (super(t), this.sign = e, t > a.__kMaxLength) throw new RangeError("Maximum BigInt size exceeded")
                    }
                    static BigInt(t) {
                        var e = Number.isFinite;
                        if ("number" == typeof t) {
                            if (0 === t) return a.__zero();
                            if (a.__isOneDigitInt(t)) return 0 > t ? a.__oneDigit(-t, !0) : a.__oneDigit(t, !1);
                            if (!e(t) || r(t) !== t) throw new RangeError("The number " + t + " cannot be converted to BigInt because it is not an integer");
                            return a.__fromDouble(t)
                        }
                        if ("string" == typeof t) {
                            const e = a.__fromString(t);
                            if (null === e) throw new SyntaxError("Cannot convert " + t + " to a BigInt");
                            return e
                        }
                        if ("boolean" == typeof t) return !0 === t ? a.__oneDigit(1, !1) : a.__zero();
                        if ("object" == typeof t) {
                            if (t.constructor === a) return t;
                            const e = a.__toPrimitive(t);
                            return a.BigInt(e)
                        }
                        throw new TypeError("Cannot convert " + t + " to a BigInt")
                    }
                    toDebugString() {
                        const t = ["BigInt["];
                        for (const e of this) t.push((e ? (e >>> 0).toString(16) : e) + ", ");
                        return t.push("]"), t.join("")
                    }
                    toString(t = 10) {
                        if (2 > t || 36 < t) throw new RangeError("toString() radix argument must be between 2 and 36");
                        return 0 === this.length ? "0" : 0 == (t & t - 1) ? a.__toStringBasePowerOfTwo(this, t) : a.__toStringGeneric(this, t, !1)
                    }
                    static toNumber(t) {
                        const e = t.length;
                        if (0 === e) return 0;
                        if (1 === e) {
                            const e = t.__unsignedDigit(0);
                            return t.sign ? -e : e
                        }
                        const n = t.__digit(e - 1),
                            i = a.__clz30(n),
                            r = 30 * e - i;
                        if (1024 < r) return t.sign ? -1 / 0 : 1 / 0;
                        let s = r - 1,
                            o = n,
                            u = e - 1;
                        const l = i + 3;
                        let c = 32 === l ? 0 : o << l;
                        c >>>= 12;
                        const d = l - 12;
                        let p = 12 <= l ? 0 : o << 20 + l,
                            f = 20 + l;
                        for (0 < d && 0 < u && (u--, o = t.__digit(u), c |= o >>> 30 - d, p = o << d + 2, f = d + 2); 0 < f && 0 < u;) u--, o = t.__digit(u), p |= 30 <= f ? o << f - 30 : o >>> 30 - f, f -= 30;
                        const h = a.__decideRounding(t, f, u, o);
                        if ((1 === h || 0 === h && 1 == (1 & p)) && (p = p + 1 >>> 0, 0 === p && (c++, 0 != c >>> 20 && (c = 0, s++, 1023 < s)))) return t.sign ? -1 / 0 : 1 / 0;
                        const m = t.sign ? -2147483648 : 0;
                        return s = s + 1023 << 20, a.__kBitConversionInts[1] = m | s | c, a.__kBitConversionInts[0] = p, a.__kBitConversionDouble[0]
                    }
                    static unaryMinus(t) {
                        if (0 === t.length) return t;
                        const e = t.__copy();
                        return e.sign = !t.sign, e
                    }
                    static bitwiseNot(t) {
                        return t.sign ? a.__absoluteSubOne(t).__trim() : a.__absoluteAddOne(t, !0)
                    }
                    static exponentiate(t, e) {
                        if (e.sign) throw new RangeError("Exponent must be positive");
                        if (0 === e.length) return a.__oneDigit(1, !1);
                        if (0 === t.length) return t;
                        if (1 === t.length && 1 === t.__digit(0)) return t.sign && 0 == (1 & e.__digit(0)) ? a.unaryMinus(t) : t;
                        if (1 < e.length) throw new RangeError("BigInt too big");
                        let n = e.__unsignedDigit(0);
                        if (1 === n) return t;
                        if (n >= a.__kMaxLengthBits) throw new RangeError("BigInt too big");
                        if (1 === t.length && 2 === t.__digit(0)) {
                            const e = 1 + (0 | n / 30),
                                i = t.sign && 0 != (1 & n),
                                r = new a(e, i);
                            r.__initializeDigits();
                            const s = 1 << n % 30;
                            return r.__setDigit(e - 1, s), r
                        }
                        let i = null,
                            r = t;
                        for (0 != (1 & n) && (i = t), n >>= 1; 0 !== n; n >>= 1) r = a.multiply(r, r), 0 != (1 & n) && (i = null === i ? r : a.multiply(i, r));
                        return i
                    }
                    static multiply(t, e) {
                        if (0 === t.length) return t;
                        if (0 === e.length) return e;
                        let n = t.length + e.length;
                        30 <= t.__clzmsd() + e.__clzmsd() && n--;
                        const i = new a(n, t.sign !== e.sign);
                        i.__initializeDigits();
                        for (let r = 0; r < t.length; r++) a.__multiplyAccumulate(e, t.__digit(r), i, r);
                        return i.__trim()
                    }
                    static divide(t, e) {
                        if (0 === e.length) throw new RangeError("Division by zero");
                        if (0 > a.__absoluteCompare(t, e)) return a.__zero();
                        const n = t.sign !== e.sign,
                            i = e.__unsignedDigit(0);
                        let r;
                        if (1 === e.length && 32767 >= i) {
                            if (1 === i) return n === t.sign ? t : a.unaryMinus(t);
                            r = a.__absoluteDivSmall(t, i, null)
                        } else r = a.__absoluteDivLarge(t, e, !0, !1);
                        return r.sign = n, r.__trim()
                    }
                    static remainder(t, e) {
                        if (0 === e.length) throw new RangeError("Division by zero");
                        if (0 > a.__absoluteCompare(t, e)) return t;
                        const n = e.__unsignedDigit(0);
                        if (1 === e.length && 32767 >= n) {
                            if (1 === n) return a.__zero();
                            const e = a.__absoluteModSmall(t, n);
                            return 0 === e ? a.__zero() : a.__oneDigit(e, t.sign)
                        }
                        const i = a.__absoluteDivLarge(t, e, !1, !0);
                        return i.sign = t.sign, i.__trim()
                    }
                    static add(t, e) {
                        const n = t.sign;
                        return n === e.sign ? a.__absoluteAdd(t, e, n) : 0 <= a.__absoluteCompare(t, e) ? a.__absoluteSub(t, e, n) : a.__absoluteSub(e, t, !n)
                    }
                    static subtract(t, e) {
                        const n = t.sign;
                        return n === e.sign ? 0 <= a.__absoluteCompare(t, e) ? a.__absoluteSub(t, e, n) : a.__absoluteSub(e, t, !n) : a.__absoluteAdd(t, e, n)
                    }
                    static leftShift(t, e) {
                        return 0 === e.length || 0 === t.length ? t : e.sign ? a.__rightShiftByAbsolute(t, e) : a.__leftShiftByAbsolute(t, e)
                    }
                    static signedRightShift(t, e) {
                        return 0 === e.length || 0 === t.length ? t : e.sign ? a.__leftShiftByAbsolute(t, e) : a.__rightShiftByAbsolute(t, e)
                    }
                    static unsignedRightShift() {
                        throw new TypeError("BigInts have no unsigned right shift; use >> instead")
                    }
                    static lessThan(t, e) {
                        return 0 > a.__compareToBigInt(t, e)
                    }
                    static lessThanOrEqual(t, e) {
                        return 0 >= a.__compareToBigInt(t, e)
                    }
                    static greaterThan(t, e) {
                        return 0 < a.__compareToBigInt(t, e)
                    }
                    static greaterThanOrEqual(t, e) {
                        return 0 <= a.__compareToBigInt(t, e)
                    }
                    static equal(t, e) {
                        if (t.sign !== e.sign) return !1;
                        if (t.length !== e.length) return !1;
                        for (let n = 0; n < t.length; n++)
                            if (t.__digit(n) !== e.__digit(n)) return !1;
                        return !0
                    }
                    static notEqual(t, e) {
                        return !a.equal(t, e)
                    }
                    static bitwiseAnd(t, e) {
                        if (!t.sign && !e.sign) return a.__absoluteAnd(t, e).__trim();
                        if (t.sign && e.sign) {
                            const n = i(t.length, e.length) + 1;
                            let r = a.__absoluteSubOne(t, n);
                            const s = a.__absoluteSubOne(e);
                            return r = a.__absoluteOr(r, s, r), a.__absoluteAddOne(r, !0, r).__trim()
                        }
                        return t.sign && ([t, e] = [e, t]), a.__absoluteAndNot(t, a.__absoluteSubOne(e)).__trim()
                    }
                    static bitwiseXor(t, e) {
                        if (!t.sign && !e.sign) return a.__absoluteXor(t, e).__trim();
                        if (t.sign && e.sign) {
                            const n = i(t.length, e.length),
                                r = a.__absoluteSubOne(t, n),
                                s = a.__absoluteSubOne(e);
                            return a.__absoluteXor(r, s, r).__trim()
                        }
                        const n = i(t.length, e.length) + 1;
                        t.sign && ([t, e] = [e, t]);
                        let r = a.__absoluteSubOne(e, n);
                        return r = a.__absoluteXor(r, t, r), a.__absoluteAddOne(r, !0, r).__trim()
                    }
                    static bitwiseOr(t, e) {
                        const n = i(t.length, e.length);
                        if (!t.sign && !e.sign) return a.__absoluteOr(t, e).__trim();
                        if (t.sign && e.sign) {
                            let i = a.__absoluteSubOne(t, n);
                            const r = a.__absoluteSubOne(e);
                            return i = a.__absoluteAnd(i, r, i), a.__absoluteAddOne(i, !0, i).__trim()
                        }
                        t.sign && ([t, e] = [e, t]);
                        let r = a.__absoluteSubOne(e, n);
                        return r = a.__absoluteAndNot(r, t, r), a.__absoluteAddOne(r, !0, r).__trim()
                    }
                    static asIntN(t, e) {
                        if (0 === e.length) return e;
                        if (t = r(t), 0 > t) throw new RangeError("Invalid value: not (convertible to) a safe integer");
                        if (0 === t) return a.__zero();
                        if (t >= a.__kMaxLengthBits) return e;
                        const n = 0 | (t + 29) / 30;
                        if (e.length < n) return e;
                        const i = e.__unsignedDigit(n - 1),
                            s = 1 << (t - 1) % 30;
                        if (e.length === n && i < s) return e;
                        if ((i & s) !== s) return a.__truncateToNBits(t, e);
                        if (!e.sign) return a.__truncateAndSubFromPowerOfTwo(t, e, !0);
                        if (0 == (i & s - 1)) {
                            for (let i = n - 2; 0 <= i; i--)
                                if (0 !== e.__digit(i)) return a.__truncateAndSubFromPowerOfTwo(t, e, !1);
                            return e.length === n && i === s ? e : a.__truncateToNBits(t, e)
                        }
                        return a.__truncateAndSubFromPowerOfTwo(t, e, !1)
                    }
                    static asUintN(t, e) {
                        if (0 === e.length) return e;
                        if (t = r(t), 0 > t) throw new RangeError("Invalid value: not (convertible to) a safe integer");
                        if (0 === t) return a.__zero();
                        if (e.sign) {
                            if (t > a.__kMaxLengthBits) throw new RangeError("BigInt too big");
                            return a.__truncateAndSubFromPowerOfTwo(t, e, !1)
                        }
                        if (t >= a.__kMaxLengthBits) return e;
                        const n = 0 | (t + 29) / 30;
                        if (e.length < n) return e;
                        const i = t % 30;
                        if (e.length == n) {
                            if (0 === i) return e;
                            const t = e.__digit(n - 1);
                            if (0 == t >>> i) return e
                        }
                        return a.__truncateToNBits(t, e)
                    }
                    static ADD(t, e) {
                        if (t = a.__toPrimitive(t), e = a.__toPrimitive(e), "string" == typeof t) return "string" != typeof e && (e = e.toString()), t + e;
                        if ("string" == typeof e) return t.toString() + e;
                        if (t = a.__toNumeric(t), e = a.__toNumeric(e), a.__isBigInt(t) && a.__isBigInt(e)) return a.add(t, e);
                        if ("number" == typeof t && "number" == typeof e) return t + e;
                        throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")
                    }
                    static LT(t, e) {
                        return a.__compare(t, e, 0)
                    }
                    static LE(t, e) {
                        return a.__compare(t, e, 1)
                    }
                    static GT(t, e) {
                        return a.__compare(t, e, 2)
                    }
                    static GE(t, e) {
                        return a.__compare(t, e, 3)
                    }
                    static EQ(t, e) {
                        for (;;) {
                            if (a.__isBigInt(t)) return a.__isBigInt(e) ? a.equal(t, e) : a.EQ(e, t);
                            if ("number" == typeof t) {
                                if (a.__isBigInt(e)) return a.__equalToNumber(e, t);
                                if ("object" != typeof e) return t == e;
                                e = a.__toPrimitive(e)
                            } else if ("string" == typeof t) {
                                if (a.__isBigInt(e)) return t = a.__fromString(t), null !== t && a.equal(t, e);
                                if ("object" != typeof e) return t == e;
                                e = a.__toPrimitive(e)
                            } else if ("boolean" == typeof t) {
                                if (a.__isBigInt(e)) return a.__equalToNumber(e, +t);
                                if ("object" != typeof e) return t == e;
                                e = a.__toPrimitive(e)
                            } else if ("symbol" == typeof t) {
                                if (a.__isBigInt(e)) return !1;
                                if ("object" != typeof e) return t == e;
                                e = a.__toPrimitive(e)
                            } else {
                                if ("object" != typeof t) return t == e;
                                if ("object" == typeof e && e.constructor !== a) return t == e;
                                t = a.__toPrimitive(t)
                            }
                        }
                    }
                    static NE(t, e) {
                        return !a.EQ(t, e)
                    }
                    static __zero() {
                        return new a(0, !1)
                    }
                    static __oneDigit(t, e) {
                        const n = new a(1, e);
                        return n.__setDigit(0, t), n
                    }
                    __copy() {
                        const t = new a(this.length, this.sign);
                        for (let e = 0; e < this.length; e++) t[e] = this[e];
                        return t
                    }
                    __trim() {
                        let t = this.length,
                            e = this[t - 1];
                        for (; 0 === e;) t--, e = this[t - 1], this.pop();
                        return 0 === t && (this.sign = !1), this
                    }
                    __initializeDigits() {
                        for (let t = 0; t < this.length; t++) this[t] = 0
                    }
                    static __decideRounding(t, e, n, i) {
                        if (0 < e) return -1;
                        let r;
                        if (0 > e) r = -e - 1;
                        else {
                            if (0 === n) return -1;
                            n--, i = t.__digit(n), r = 29
                        }
                        let a = 1 << r;
                        if (0 == (i & a)) return -1;
                        if (a -= 1, 0 != (i & a)) return 1;
                        for (; 0 < n;)
                            if (n--, 0 !== t.__digit(n)) return 1;
                        return 0
                    }
                    static __fromDouble(t) {
                        a.__kBitConversionDouble[0] = t;
                        const e = 2047 & a.__kBitConversionInts[1] >>> 20,
                            n = e - 1023,
                            i = 1 + (0 | n / 30),
                            r = new a(i, 0 > t);
                        let s = 1048575 & a.__kBitConversionInts[1] | 1048576,
                            o = a.__kBitConversionInts[0];
                        const u = 20,
                            l = n % 30;
                        let c, d = 0;
                        if (20 > l) {
                            const t = u - l;
                            d = t + 32, c = s >>> t, s = s << 32 - t | o >>> t, o <<= 32 - t
                        } else if (20 === l) d = 32, c = s, s = o, o = 0;
                        else {
                            const t = l - u;
                            d = 32 - t, c = s << t | o >>> 32 - t, s = o << t, o = 0
                        }
                        r.__setDigit(i - 1, c);
                        for (let a = i - 2; 0 <= a; a--) 0 < d ? (d -= 30, c = s >>> 2, s = s << 30 | o >>> 2, o <<= 30) : c = 0, r.__setDigit(a, c);
                        return r.__trim()
                    }
                    static __isWhitespace(t) {
                        return !!(13 >= t && 9 <= t) || (159 >= t ? 32 == t : 131071 >= t ? 160 == t || 5760 == t : 196607 >= t ? (t &= 131071, 10 >= t || 40 == t || 41 == t || 47 == t || 95 == t || 4096 == t) : 65279 == t)
                    }
                    static __fromString(t, e = 0) {
                        let n = 0;
                        const i = t.length;
                        let r = 0;
                        if (r === i) return a.__zero();
                        let s = t.charCodeAt(r);
                        for (; a.__isWhitespace(s);) {
                            if (++r === i) return a.__zero();
                            s = t.charCodeAt(r)
                        }
                        if (43 === s) {
                            if (++r === i) return null;
                            s = t.charCodeAt(r), n = 1
                        } else if (45 === s) {
                            if (++r === i) return null;
                            s = t.charCodeAt(r), n = -1
                        }
                        if (0 === e) {
                            if (e = 10, 48 === s) {
                                if (++r === i) return a.__zero();
                                if (s = t.charCodeAt(r), 88 === s || 120 === s) {
                                    if (e = 16, ++r === i) return null;
                                    s = t.charCodeAt(r)
                                } else if (79 === s || 111 === s) {
                                    if (e = 8, ++r === i) return null;
                                    s = t.charCodeAt(r)
                                } else if (66 === s || 98 === s) {
                                    if (e = 2, ++r === i) return null;
                                    s = t.charCodeAt(r)
                                }
                            }
                        } else if (16 === e && 48 === s) {
                            if (++r === i) return a.__zero();
                            if (s = t.charCodeAt(r), 88 === s || 120 === s) {
                                if (++r === i) return null;
                                s = t.charCodeAt(r)
                            }
                        }
                        if (0 != n && 10 !== e) return null;
                        for (; 48 === s;) {
                            if (++r === i) return a.__zero();
                            s = t.charCodeAt(r)
                        }
                        const o = i - r;
                        let u = a.__kMaxBitsPerChar[e],
                            l = a.__kBitsPerCharTableMultiplier - 1;
                        if (o > 1073741824 / u) return null;
                        const c = u * o + l >>> a.__kBitsPerCharTableShift,
                            d = new a(0 | (c + 29) / 30, !1),
                            p = 10 > e ? e : 10,
                            f = 10 < e ? e - 10 : 0;
                        if (0 == (e & e - 1)) {
                            u >>= a.__kBitsPerCharTableShift;
                            const e = [],
                                n = [];
                            let o = !1;
                            do {
                                let a = 0,
                                    l = 0;
                                for (;;) {
                                    let e;
                                    if (s - 48 >>> 0 < p) e = s - 48;
                                    else {
                                        if (!((32 | s) - 97 >>> 0 < f)) {
                                            o = !0;
                                            break
                                        }
                                        e = (32 | s) - 87
                                    }
                                    if (l += u, a = a << u | e, ++r === i) {
                                        o = !0;
                                        break
                                    }
                                    if (s = t.charCodeAt(r), 30 < l + u) break
                                }
                                e.push(a), n.push(l)
                            } while (!o);
                            a.__fillFromParts(d, e, n)
                        } else {
                            d.__initializeDigits();
                            let n = !1,
                                o = 0;
                            do {
                                let c = 0,
                                    h = 1;
                                for (;;) {
                                    let a;
                                    if (s - 48 >>> 0 < p) a = s - 48;
                                    else {
                                        if (!((32 | s) - 97 >>> 0 < f)) {
                                            n = !0;
                                            break
                                        }
                                        a = (32 | s) - 87
                                    }
                                    const u = h * e;
                                    if (1073741823 < u) break;
                                    if (h = u, c = c * e + a, o++, ++r === i) {
                                        n = !0;
                                        break
                                    }
                                    s = t.charCodeAt(r)
                                }
                                l = 30 * a.__kBitsPerCharTableMultiplier - 1;
                                const m = 0 | (u * o + l >>> a.__kBitsPerCharTableShift) / 30;
                                d.__inplaceMultiplyAdd(h, c, m)
                            } while (!n)
                        }
                        if (r !== i) {
                            if (!a.__isWhitespace(s)) return null;
                            for (r++; r < i; r++)
                                if (s = t.charCodeAt(r), !a.__isWhitespace(s)) return null
                        }
                        return d.sign = -1 == n, d.__trim()
                    }
                    static __fillFromParts(t, e, n) {
                        let i = 0,
                            r = 0,
                            a = 0;
                        for (let s = e.length - 1; 0 <= s; s--) {
                            const o = e[s],
                                u = n[s];
                            r |= o << a, a += u, 30 === a ? (t.__setDigit(i++, r), a = 0, r = 0) : 30 < a && (t.__setDigit(i++, 1073741823 & r), a -= 30, r = o >>> u - a)
                        }
                        if (0 !== r) {
                            if (i >= t.length) throw new Error("implementation bug");
                            t.__setDigit(i++, r)
                        }
                        for (; i < t.length; i++) t.__setDigit(i, 0)
                    }
                    static __toStringBasePowerOfTwo(t, e) {
                        const n = t.length;
                        let i = e - 1;
                        i = (85 & i >>> 1) + (85 & i), i = (51 & i >>> 2) + (51 & i), i = (15 & i >>> 4) + (15 & i);
                        const r = i,
                            s = e - 1,
                            o = t.__digit(n - 1),
                            u = a.__clz30(o);
                        let l = 0 | (30 * n - u + r - 1) / r;
                        if (t.sign && l++, 268435456 < l) throw new Error("string too long");
                        const c = Array(l);
                        let d = l - 1,
                            p = 0,
                            f = 0;
                        for (let m = 0; m < n - 1; m++) {
                            const e = t.__digit(m),
                                n = (p | e << f) & s;
                            c[d--] = a.__kConversionChars[n];
                            const i = r - f;
                            for (p = e >>> i, f = 30 - i; f >= r;) c[d--] = a.__kConversionChars[p & s], p >>>= r, f -= r
                        }
                        const h = (p | o << f) & s;
                        for (c[d--] = a.__kConversionChars[h], p = o >>> r - f; 0 !== p;) c[d--] = a.__kConversionChars[p & s], p >>>= r;
                        if (t.sign && (c[d--] = "-"), -1 != d) throw new Error("implementation bug");
                        return c.join("")
                    }
                    static __toStringGeneric(t, e, n) {
                        const i = t.length;
                        if (0 === i) return "";
                        if (1 === i) {
                            let i = t.__unsignedDigit(0).toString(e);
                            return !1 === n && t.sign && (i = "-" + i), i
                        }
                        const r = 30 * i - a.__clz30(t.__digit(i - 1)),
                            s = a.__kMaxBitsPerChar[e],
                            o = s - 1;
                        let u = r * a.__kBitsPerCharTableMultiplier;
                        u += o - 1, u = 0 | u / o;
                        const l = u + 1 >> 1,
                            c = a.exponentiate(a.__oneDigit(e, !1), a.__oneDigit(l, !1));
                        let d, p;
                        const f = c.__unsignedDigit(0);
                        if (1 === c.length && 32767 >= f) {
                            d = new a(t.length, !1), d.__initializeDigits();
                            let n = 0;
                            for (let e = 2 * t.length - 1; 0 <= e; e--) {
                                const i = n << 15 | t.__halfDigit(e);
                                d.__setHalfDigit(e, 0 | i / f), n = 0 | i % f
                            }
                            p = n.toString(e)
                        } else {
                            const n = a.__absoluteDivLarge(t, c, !0, !0);
                            d = n.quotient;
                            const i = n.remainder.__trim();
                            p = a.__toStringGeneric(i, e, !0)
                        }
                        d.__trim();
                        let h = a.__toStringGeneric(d, e, !0);
                        for (; p.length < l;) p = "0" + p;
                        return !1 === n && t.sign && (h = "-" + h), h + p
                    }
                    static __unequalSign(t) {
                        return t ? -1 : 1
                    }
                    static __absoluteGreater(t) {
                        return t ? -1 : 1
                    }
                    static __absoluteLess(t) {
                        return t ? 1 : -1
                    }
                    static __compareToBigInt(t, e) {
                        const n = t.sign;
                        if (n !== e.sign) return a.__unequalSign(n);
                        const i = a.__absoluteCompare(t, e);
                        return 0 < i ? a.__absoluteGreater(n) : 0 > i ? a.__absoluteLess(n) : 0
                    }
                    static __compareToNumber(t, e) {
                        if (a.__isOneDigitInt(e)) {
                            const i = t.sign,
                                r = 0 > e;
                            if (i !== r) return a.__unequalSign(i);
                            if (0 === t.length) {
                                if (r) throw new Error("implementation bug");
                                return 0 === e ? 0 : -1
                            }
                            if (1 < t.length) return a.__absoluteGreater(i);
                            const s = n(e),
                                o = t.__unsignedDigit(0);
                            return o > s ? a.__absoluteGreater(i) : o < s ? a.__absoluteLess(i) : 0
                        }
                        return a.__compareToDouble(t, e)
                    }
                    static __compareToDouble(t, e) {
                        if (e !== e) return e;
                        if (e === 1 / 0) return -1;
                        if (e === -1 / 0) return 1;
                        const n = t.sign;
                        if (n !== 0 > e) return a.__unequalSign(n);
                        if (0 === e) throw new Error("implementation bug: should be handled elsewhere");
                        if (0 === t.length) return -1;
                        a.__kBitConversionDouble[0] = e;
                        const i = 2047 & a.__kBitConversionInts[1] >>> 20;
                        if (2047 == i) throw new Error("implementation bug: handled elsewhere");
                        const r = i - 1023;
                        if (0 > r) return a.__absoluteGreater(n);
                        const s = t.length;
                        let o = t.__digit(s - 1);
                        const u = a.__clz30(o),
                            l = 30 * s - u,
                            c = r + 1;
                        if (l < c) return a.__absoluteLess(n);
                        if (l > c) return a.__absoluteGreater(n);
                        let d = 1048576 | 1048575 & a.__kBitConversionInts[1],
                            p = a.__kBitConversionInts[0];
                        const f = 20,
                            h = 29 - u;
                        if (h !== (0 | (l - 1) % 30)) throw new Error("implementation bug");
                        let m, y = 0;
                        if (20 > h) {
                            const t = f - h;
                            y = t + 32, m = d >>> t, d = d << 32 - t | p >>> t, p <<= 32 - t
                        } else if (20 === h) y = 32, m = d, d = p, p = 0;
                        else {
                            const t = h - f;
                            y = 32 - t, m = d << t | p >>> 32 - t, d = p << t, p = 0
                        }
                        if (o >>>= 0, m >>>= 0, o > m) return a.__absoluteGreater(n);
                        if (o < m) return a.__absoluteLess(n);
                        for (let _ = s - 2; 0 <= _; _--) {
                            0 < y ? (y -= 30, m = d >>> 2, d = d << 30 | p >>> 2, p <<= 30) : m = 0;
                            const e = t.__unsignedDigit(_);
                            if (e > m) return a.__absoluteGreater(n);
                            if (e < m) return a.__absoluteLess(n)
                        }
                        if (0 !== d || 0 !== p) {
                            if (0 === y) throw new Error("implementation bug");
                            return a.__absoluteLess(n)
                        }
                        return 0
                    }
                    static __equalToNumber(t, e) {
                        return a.__isOneDigitInt(e) ? 0 === e ? 0 === t.length : 1 === t.length && t.sign === 0 > e && t.__unsignedDigit(0) === n(e) : 0 === a.__compareToDouble(t, e)
                    }
                    static __comparisonResultToBool(t, e) {
                        return 0 === e ? 0 > t : 1 === e ? 0 >= t : 2 === e ? 0 < t : 3 === e ? 0 <= t : void 0
                    }
                    static __compare(t, e, n) {
                        if (t = a.__toPrimitive(t), e = a.__toPrimitive(e), "string" == typeof t && "string" == typeof e) switch (n) {
                            case 0:
                                return t < e;
                            case 1:
                                return t <= e;
                            case 2:
                                return t > e;
                            case 3:
                                return t >= e
                        }
                        if (a.__isBigInt(t) && "string" == typeof e) return e = a.__fromString(e), null !== e && a.__comparisonResultToBool(a.__compareToBigInt(t, e), n);
                        if ("string" == typeof t && a.__isBigInt(e)) return t = a.__fromString(t), null !== t && a.__comparisonResultToBool(a.__compareToBigInt(t, e), n);
                        if (t = a.__toNumeric(t), e = a.__toNumeric(e), a.__isBigInt(t)) {
                            if (a.__isBigInt(e)) return a.__comparisonResultToBool(a.__compareToBigInt(t, e), n);
                            if ("number" != typeof e) throw new Error("implementation bug");
                            return a.__comparisonResultToBool(a.__compareToNumber(t, e), n)
                        }
                        if ("number" != typeof t) throw new Error("implementation bug");
                        if (a.__isBigInt(e)) return a.__comparisonResultToBool(a.__compareToNumber(e, t), 2 ^ n);
                        if ("number" != typeof e) throw new Error("implementation bug");
                        return 0 === n ? t < e : 1 === n ? t <= e : 2 === n ? t > e : 3 === n ? t >= e : void 0
                    }
                    __clzmsd() {
                        return a.__clz30(this.__digit(this.length - 1))
                    }
                    static __absoluteAdd(t, e, n) {
                        if (t.length < e.length) return a.__absoluteAdd(e, t, n);
                        if (0 === t.length) return t;
                        if (0 === e.length) return t.sign === n ? t : a.unaryMinus(t);
                        let i = t.length;
                        (0 === t.__clzmsd() || e.length === t.length && 0 === e.__clzmsd()) && i++;
                        const r = new a(i, n);
                        let s = 0,
                            o = 0;
                        for (; o < e.length; o++) {
                            const n = t.__digit(o) + e.__digit(o) + s;
                            s = n >>> 30, r.__setDigit(o, 1073741823 & n)
                        }
                        for (; o < t.length; o++) {
                            const e = t.__digit(o) + s;
                            s = e >>> 30, r.__setDigit(o, 1073741823 & e)
                        }
                        return o < r.length && r.__setDigit(o, s), r.__trim()
                    }
                    static __absoluteSub(t, e, n) {
                        if (0 === t.length) return t;
                        if (0 === e.length) return t.sign === n ? t : a.unaryMinus(t);
                        const i = new a(t.length, n);
                        let r = 0,
                            s = 0;
                        for (; s < e.length; s++) {
                            const n = t.__digit(s) - e.__digit(s) - r;
                            r = 1 & n >>> 30, i.__setDigit(s, 1073741823 & n)
                        }
                        for (; s < t.length; s++) {
                            const e = t.__digit(s) - r;
                            r = 1 & e >>> 30, i.__setDigit(s, 1073741823 & e)
                        }
                        return i.__trim()
                    }
                    static __absoluteAddOne(t, e, n = null) {
                        const i = t.length;
                        null === n ? n = new a(i, e) : n.sign = e;
                        let r = 1;
                        for (let a = 0; a < i; a++) {
                            const e = t.__digit(a) + r;
                            r = e >>> 30, n.__setDigit(a, 1073741823 & e)
                        }
                        return 0 != r && n.__setDigitGrow(i, 1), n
                    }
                    static __absoluteSubOne(t, e) {
                        const n = t.length;
                        e = e || n;
                        const i = new a(e, !1);
                        let r = 1;
                        for (let a = 0; a < n; a++) {
                            const e = t.__digit(a) - r;
                            r = 1 & e >>> 30, i.__setDigit(a, 1073741823 & e)
                        }
                        if (0 != r) throw new Error("implementation bug");
                        for (let a = n; a < e; a++) i.__setDigit(a, 0);
                        return i
                    }
                    static __absoluteAnd(t, e, n = null) {
                        let i = t.length,
                            r = e.length,
                            s = r;
                        if (i < r) {
                            s = i;
                            const n = t,
                                a = i;
                            t = e, i = r, e = n, r = a
                        }
                        let o = s;
                        null === n ? n = new a(o, !1) : o = n.length;
                        let u = 0;
                        for (; u < s; u++) n.__setDigit(u, t.__digit(u) & e.__digit(u));
                        for (; u < o; u++) n.__setDigit(u, 0);
                        return n
                    }
                    static __absoluteAndNot(t, e, n = null) {
                        const i = t.length,
                            r = e.length;
                        let s = r;
                        i < r && (s = i);
                        let o = i;
                        null === n ? n = new a(o, !1) : o = n.length;
                        let u = 0;
                        for (; u < s; u++) n.__setDigit(u, t.__digit(u) & ~e.__digit(u));
                        for (; u < i; u++) n.__setDigit(u, t.__digit(u));
                        for (; u < o; u++) n.__setDigit(u, 0);
                        return n
                    }
                    static __absoluteOr(t, e, n = null) {
                        let i = t.length,
                            r = e.length,
                            s = r;
                        if (i < r) {
                            s = i;
                            const n = t,
                                a = i;
                            t = e, i = r, e = n, r = a
                        }
                        let o = i;
                        null === n ? n = new a(o, !1) : o = n.length;
                        let u = 0;
                        for (; u < s; u++) n.__setDigit(u, t.__digit(u) | e.__digit(u));
                        for (; u < i; u++) n.__setDigit(u, t.__digit(u));
                        for (; u < o; u++) n.__setDigit(u, 0);
                        return n
                    }
                    static __absoluteXor(t, e, n = null) {
                        let i = t.length,
                            r = e.length,
                            s = r;
                        if (i < r) {
                            s = i;
                            const n = t,
                                a = i;
                            t = e, i = r, e = n, r = a
                        }
                        let o = i;
                        null === n ? n = new a(o, !1) : o = n.length;
                        let u = 0;
                        for (; u < s; u++) n.__setDigit(u, t.__digit(u) ^ e.__digit(u));
                        for (; u < i; u++) n.__setDigit(u, t.__digit(u));
                        for (; u < o; u++) n.__setDigit(u, 0);
                        return n
                    }
                    static __absoluteCompare(t, e) {
                        const n = t.length - e.length;
                        if (0 != n) return n;
                        let i = t.length - 1;
                        for (; 0 <= i && t.__digit(i) === e.__digit(i);) i--;
                        return 0 > i ? 0 : t.__unsignedDigit(i) > e.__unsignedDigit(i) ? 1 : -1
                    }
                    static __multiplyAccumulate(t, e, n, i) {
                        if (0 === e) return;
                        const r = 32767 & e,
                            s = e >>> 15;
                        let o = 0,
                            u = 0;
                        for (let l, c = 0; c < t.length; c++, i++) {
                            l = n.__digit(i);
                            const e = t.__digit(c),
                                d = 32767 & e,
                                p = e >>> 15,
                                f = a.__imul(d, r),
                                h = a.__imul(d, s),
                                m = a.__imul(p, r),
                                y = a.__imul(p, s);
                            l += u + f + o, o = l >>> 30, l &= 1073741823, l += ((32767 & h) << 15) + ((32767 & m) << 15), o += l >>> 30, u = y + (h >>> 15) + (m >>> 15), n.__setDigit(i, 1073741823 & l)
                        }
                        for (; 0 != o || 0 !== u; i++) {
                            let t = n.__digit(i);
                            t += o + u, u = 0, o = t >>> 30, n.__setDigit(i, 1073741823 & t)
                        }
                    }
                    static __internalMultiplyAdd(t, e, n, i, r) {
                        let s = n,
                            o = 0;
                        for (let u = 0; u < i; u++) {
                            const n = t.__digit(u),
                                i = a.__imul(32767 & n, e),
                                l = a.__imul(n >>> 15, e),
                                c = i + ((32767 & l) << 15) + o + s;
                            s = c >>> 30, o = l >>> 15, r.__setDigit(u, 1073741823 & c)
                        }
                        if (r.length > i)
                            for (r.__setDigit(i++, s + o); i < r.length;) r.__setDigit(i++, 0);
                        else if (0 !== s + o) throw new Error("implementation bug")
                    }
                    __inplaceMultiplyAdd(t, e, n) {
                        n > this.length && (n = this.length);
                        const i = 32767 & t,
                            r = t >>> 15;
                        let s = 0,
                            o = e;
                        for (let u = 0; u < n; u++) {
                            const t = this.__digit(u),
                                e = 32767 & t,
                                n = t >>> 15,
                                l = a.__imul(e, i),
                                c = a.__imul(e, r),
                                d = a.__imul(n, i),
                                p = a.__imul(n, r);
                            let f = o + l + s;
                            s = f >>> 30, f &= 1073741823, f += ((32767 & c) << 15) + ((32767 & d) << 15), s += f >>> 30, o = p + (c >>> 15) + (d >>> 15), this.__setDigit(u, 1073741823 & f)
                        }
                        if (0 != s || 0 !== o) throw new Error("implementation bug")
                    }
                    static __absoluteDivSmall(t, e, n = null) {
                        null === n && (n = new a(t.length, !1));
                        let i = 0;
                        for (let r, a = 2 * t.length - 1; 0 <= a; a -= 2) {
                            r = (i << 15 | t.__halfDigit(a)) >>> 0;
                            const s = 0 | r / e;
                            i = 0 | r % e, r = (i << 15 | t.__halfDigit(a - 1)) >>> 0;
                            const o = 0 | r / e;
                            i = 0 | r % e, n.__setDigit(a >>> 1, s << 15 | o)
                        }
                        return n
                    }
                    static __absoluteModSmall(t, e) {
                        let n = 0;
                        for (let i = 2 * t.length - 1; 0 <= i; i--) {
                            const r = (n << 15 | t.__halfDigit(i)) >>> 0;
                            n = 0 | r % e
                        }
                        return n
                    }
                    static __absoluteDivLarge(t, e, n, i) {
                        const r = e.__halfDigitLength(),
                            s = e.length,
                            o = t.__halfDigitLength() - r;
                        let u = null;
                        n && (u = new a(o + 2 >>> 1, !1), u.__initializeDigits());
                        const l = new a(r + 2 >>> 1, !1);
                        l.__initializeDigits();
                        const c = a.__clz15(e.__halfDigit(r - 1));
                        0 < c && (e = a.__specialLeftShift(e, c, 0));
                        const d = a.__specialLeftShift(t, c, 1),
                            p = e.__halfDigit(r - 1);
                        let f = 0;
                        for (let h, m = o; 0 <= m; m--) {
                            h = 32767;
                            const t = d.__halfDigit(m + r);
                            if (t !== p) {
                                const n = (t << 15 | d.__halfDigit(m + r - 1)) >>> 0;
                                h = 0 | n / p;
                                let i = 0 | n % p;
                                const s = e.__halfDigit(r - 2),
                                    o = d.__halfDigit(m + r - 2);
                                for (; a.__imul(h, s) >>> 0 > (i << 16 | o) >>> 0 && (h--, i += p, !(32767 < i)););
                            }
                            a.__internalMultiplyAdd(e, h, 0, s, l);
                            let i = d.__inplaceSub(l, m, r + 1);
                            0 !== i && (i = d.__inplaceAdd(e, m, r), d.__setHalfDigit(m + r, 32767 & d.__halfDigit(m + r) + i), h--), n && (1 & m ? f = h << 15 : u.__setDigit(m >>> 1, f | h))
                        }
                        if (i) return d.__inplaceRightShift(c), n ? {
                            quotient: u,
                            remainder: d
                        } : d;
                        if (n) return u;
                        throw new Error("unreachable")
                    }
                    static __clz15(t) {
                        return a.__clz30(t) - 15
                    }
                    __inplaceAdd(t, e, n) {
                        let i = 0;
                        for (let r = 0; r < n; r++) {
                            const n = this.__halfDigit(e + r) + t.__halfDigit(r) + i;
                            i = n >>> 15, this.__setHalfDigit(e + r, 32767 & n)
                        }
                        return i
                    }
                    __inplaceSub(t, e, n) {
                        let i = 0;
                        if (1 & e) {
                            e >>= 1;
                            let r = this.__digit(e),
                                a = 32767 & r,
                                s = 0;
                            for (; s < n - 1 >>> 1; s++) {
                                const n = t.__digit(s),
                                    o = (r >>> 15) - (32767 & n) - i;
                                i = 1 & o >>> 15, this.__setDigit(e + s, (32767 & o) << 15 | 32767 & a), r = this.__digit(e + s + 1), a = (32767 & r) - (n >>> 15) - i, i = 1 & a >>> 15
                            }
                            const o = t.__digit(s),
                                u = (r >>> 15) - (32767 & o) - i;
                            if (i = 1 & u >>> 15, this.__setDigit(e + s, (32767 & u) << 15 | 32767 & a), e + s + 1 >= this.length) throw new RangeError("out of bounds");
                            0 == (1 & n) && (r = this.__digit(e + s + 1), a = (32767 & r) - (o >>> 15) - i, i = 1 & a >>> 15, this.__setDigit(e + t.length, 1073709056 & r | 32767 & a))
                        } else {
                            e >>= 1;
                            let r = 0;
                            for (; r < t.length - 1; r++) {
                                const n = this.__digit(e + r),
                                    a = t.__digit(r),
                                    s = (32767 & n) - (32767 & a) - i;
                                i = 1 & s >>> 15;
                                const o = (n >>> 15) - (a >>> 15) - i;
                                i = 1 & o >>> 15, this.__setDigit(e + r, (32767 & o) << 15 | 32767 & s)
                            }
                            const a = this.__digit(e + r),
                                s = t.__digit(r),
                                o = (32767 & a) - (32767 & s) - i;
                            i = 1 & o >>> 15;
                            let u = 0;
                            0 == (1 & n) && (u = (a >>> 15) - (s >>> 15) - i, i = 1 & u >>> 15), this.__setDigit(e + r, (32767 & u) << 15 | 32767 & o)
                        }
                        return i
                    }
                    __inplaceRightShift(t) {
                        if (0 === t) return;
                        let e = this.__digit(0) >>> t;
                        const n = this.length - 1;
                        for (let i = 0; i < n; i++) {
                            const n = this.__digit(i + 1);
                            this.__setDigit(i, 1073741823 & n << 30 - t | e), e = n >>> t
                        }
                        this.__setDigit(n, e)
                    }
                    static __specialLeftShift(t, e, n) {
                        const i = t.length,
                            r = new a(i + n, !1);
                        if (0 === e) {
                            for (let e = 0; e < i; e++) r.__setDigit(e, t.__digit(e));
                            return 0 < n && r.__setDigit(i, 0), r
                        }
                        let s = 0;
                        for (let a = 0; a < i; a++) {
                            const n = t.__digit(a);
                            r.__setDigit(a, 1073741823 & n << e | s), s = n >>> 30 - e
                        }
                        return 0 < n && r.__setDigit(i, s), r
                    }
                    static __leftShiftByAbsolute(t, e) {
                        const n = a.__toShiftAmount(e);
                        if (0 > n) throw new RangeError("BigInt too big");
                        const i = 0 | n / 30,
                            r = n % 30,
                            s = t.length,
                            o = 0 !== r && 0 != t.__digit(s - 1) >>> 30 - r,
                            u = s + i + (o ? 1 : 0),
                            l = new a(u, t.sign);
                        if (0 === r) {
                            let e = 0;
                            for (; e < i; e++) l.__setDigit(e, 0);
                            for (; e < u; e++) l.__setDigit(e, t.__digit(e - i))
                        } else {
                            let e = 0;
                            for (let t = 0; t < i; t++) l.__setDigit(t, 0);
                            for (let n = 0; n < s; n++) {
                                const a = t.__digit(n);
                                l.__setDigit(n + i, 1073741823 & a << r | e), e = a >>> 30 - r
                            }
                            if (o) l.__setDigit(s + i, e);
                            else if (0 !== e) throw new Error("implementation bug")
                        }
                        return l.__trim()
                    }
                    static __rightShiftByAbsolute(t, e) {
                        const n = t.length,
                            i = t.sign,
                            r = a.__toShiftAmount(e);
                        if (0 > r) return a.__rightShiftByMaximum(i);
                        const s = 0 | r / 30,
                            o = r % 30;
                        let u = n - s;
                        if (0 >= u) return a.__rightShiftByMaximum(i);
                        let l = !1;
                        if (i)
                            if (0 != (t.__digit(s) & (1 << o) - 1)) l = !0;
                            else
                                for (let a = 0; a < s; a++)
                                    if (0 !== t.__digit(a)) {
                                        l = !0;
                                        break
                                    } if (l && 0 === o) {
                            const e = t.__digit(n - 1);
                            0 == ~e && u++
                        }
                        let c = new a(u, i);
                        if (0 === o) {
                            c.__setDigit(u - 1, 0);
                            for (let e = s; e < n; e++) c.__setDigit(e - s, t.__digit(e))
                        } else {
                            let e = t.__digit(s) >>> o;
                            const i = n - s - 1;
                            for (let n = 0; n < i; n++) {
                                const i = t.__digit(n + s + 1);
                                c.__setDigit(n, 1073741823 & i << 30 - o | e), e = i >>> o
                            }
                            c.__setDigit(i, e)
                        }
                        return l && (c = a.__absoluteAddOne(c, !0, c)), c.__trim()
                    }
                    static __rightShiftByMaximum(t) {
                        return t ? a.__oneDigit(1, !0) : a.__zero()
                    }
                    static __toShiftAmount(t) {
                        if (1 < t.length) return -1;
                        const e = t.__unsignedDigit(0);
                        return e > a.__kMaxLengthBits ? -1 : e
                    }
                    static __toPrimitive(t, e = "default") {
                        if ("object" != typeof t) return t;
                        if (t.constructor === a) return t;
                        if ("undefined" != typeof Symbol && "symbol" == typeof Symbol.toPrimitive) {
                            const n = t[Symbol.toPrimitive];
                            if (n) {
                                const t = n(e);
                                if ("object" != typeof t) return t;
                                throw new TypeError("Cannot convert object to primitive value")
                            }
                        }
                        const n = t.valueOf;
                        if (n) {
                            const e = n.call(t);
                            if ("object" != typeof e) return e
                        }
                        const i = t.toString;
                        if (i) {
                            const e = i.call(t);
                            if ("object" != typeof e) return e
                        }
                        throw new TypeError("Cannot convert object to primitive value")
                    }
                    static __toNumeric(t) {
                        return a.__isBigInt(t) ? t : +t
                    }
                    static __isBigInt(t) {
                        return "object" == typeof t && null !== t && t.constructor === a
                    }
                    static __truncateToNBits(t, e) {
                        const n = 0 | (t + 29) / 30,
                            i = new a(n, e.sign),
                            r = n - 1;
                        for (let a = 0; a < r; a++) i.__setDigit(a, e.__digit(a));
                        let s = e.__digit(r);
                        if (0 != t % 30) {
                            const e = 32 - t % 30;
                            s = s << e >>> e
                        }
                        return i.__setDigit(r, s), i.__trim()
                    }
                    static __truncateAndSubFromPowerOfTwo(t, e, n) {
                        var i = Math.min;
                        const r = 0 | (t + 29) / 30,
                            s = new a(r, n);
                        let o = 0;
                        const u = r - 1;
                        let l = 0;
                        for (const a = i(u, e.length); o < a; o++) {
                            const t = 0 - e.__digit(o) - l;
                            l = 1 & t >>> 30, s.__setDigit(o, 1073741823 & t)
                        }
                        for (; o < u; o++) s.__setDigit(o, 1073741823 & -l);
                        let c = u < e.length ? e.__digit(u) : 0;
                        const d = t % 30;
                        let p;
                        if (0 == d) p = 0 - c - l, p &= 1073741823;
                        else {
                            const t = 32 - d;
                            c = c << t >>> t;
                            const e = 1 << 32 - t;
                            p = e - c - l, p &= e - 1
                        }
                        return s.__setDigit(u, p), s.__trim()
                    }
                    __digit(t) {
                        return this[t]
                    }
                    __unsignedDigit(t) {
                        return this[t] >>> 0
                    }
                    __setDigit(t, e) {
                        this[t] = 0 | e
                    }
                    __setDigitGrow(t, e) {
                        this[t] = 0 | e
                    }
                    __halfDigitLength() {
                        const t = this.length;
                        return 32767 >= this.__unsignedDigit(t - 1) ? 2 * t - 1 : 2 * t
                    }
                    __halfDigit(t) {
                        return 32767 & this[t >>> 1] >>> 15 * (1 & t)
                    }
                    __setHalfDigit(t, e) {
                        const n = t >>> 1,
                            i = this.__digit(n),
                            r = 1 & t ? 32767 & i | e << 15 : 1073709056 & i | 32767 & e;
                        this.__setDigit(n, r)
                    }
                    static __digitPow(t, e) {
                        let n = 1;
                        for (; 0 < e;) 1 & e && (n *= t), e >>>= 1, t *= t;
                        return n
                    }
                    static __isOneDigitInt(t) {
                        return (1073741823 & t) === t
                    }
                }
                return a.__kMaxLength = 33554432, a.__kMaxLengthBits = a.__kMaxLength << 5, a.__kMaxBitsPerChar = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166], a.__kBitsPerCharTableShift = 5, a.__kBitsPerCharTableMultiplier = 1 << a.__kBitsPerCharTableShift, a.__kConversionChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], a.__kBitConversionBuffer = new ArrayBuffer(8), a.__kBitConversionDouble = new Float64Array(a.__kBitConversionBuffer), a.__kBitConversionInts = new Int32Array(a.__kBitConversionBuffer), a.__clz30 = e ? function(t) {
                    return e(t) - 2
                } : function(t) {
                    var e = Math.LN2,
                        n = Math.log;
                    return 0 === t ? 30 : 0 | 29 - (0 | n(t >>> 0) / e)
                }, a.__imul = t || function(t, e) {
                    return 0 | t * e
                }, a
            }))
        },
        93853: function(t, e, n) {
            "use strict";
            t.exports = n(41598)
        },
        41598: function(t, e, n) {
            "use strict";

            function i(t) {
                return t && "object" == typeof t && "default" in t ? t.default : t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, a, s, o, u, l, c = i(n(26861)),
                d = i(n(18868)),
                p = (i(n(91520)), n(69631)),
                f = i(n(44904)),
                h = i(n(11417)),
                m = i(n(91556)),
                y = n(88131),
                _ = n(13703),
                g = n(21544),
                v = n(11546),
                b = i(n(96147));
            (o = e.ChainId || (e.ChainId = {}))[o.MAINNET = 1] = "MAINNET", o[o.ROPSTEN = 3] = "ROPSTEN", o[o.RINKEBY = 4] = "RINKEBY", o[o["GÖRLI"] = 5] = "GÖRLI", o[o.KOVAN = 42] = "KOVAN", o[o.HECOMAIN = 128] = "HECOMAIN", o[o.HECOTEST = 256] = "HECOTEST", o[o.BIANMAIN = 56] = "BIANMAIN", o[o.BIANTEST = 97] = "BIANTEST", o[o.OKTEST = 65] = "OKTEST", o[o.INITEST = 233] = "INITEST", o[o.GENESIS = 7234] = "GENESIS", (u = e.TradeType || (e.TradeType = {}))[u.EXACT_INPUT = 0] = "EXACT_INPUT", u[u.EXACT_OUTPUT = 1] = "EXACT_OUTPUT", (l = e.Rounding || (e.Rounding = {}))[l.ROUND_DOWN = 0] = "ROUND_DOWN", l[l.ROUND_HALF_UP = 1] = "ROUND_HALF_UP", l[l.ROUND_UP = 2] = "ROUND_UP";
            var w, T = ((r = {})[e.ChainId.MAINNET] = "0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0", r[e.ChainId.ROPSTEN] = "0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0", r[e.ChainId.RINKEBY] = "0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0", r[e.ChainId.GÖRLI] = "0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0", r[e.ChainId.KOVAN] = "0xe3a2d8b356e0265479117bb262881a7c7c690a1cf7392d0ab59e30d5134cbe06", r[e.ChainId.HECOMAIN] = "0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0", r[e.ChainId.HECOTEST] = "0x3990fda9ab516b83a46ecb97d0e6916dcfc56eae1ae253e0b7a74b0412065af1", r[e.ChainId.BIANMAIN] = "0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0", r[e.ChainId.BIANTEST] = "0x1ae685a06ad758dcd2c4191b790c1c3283d1d56d917bc1bad7328c2a4f2ab5a0", r[e.ChainId.OKTEST] = "0xa9252a257da1cf1409d57be07f4bffae98731dad512dd65b33f8ef8a999d92c5", r[e.ChainId.INITEST] = "0x3c300168e4de8a73ccc07e1040178e0f26a43961ebca37a7da58d07420494a20", r[e.ChainId.GENESIS] = "0x3c300168e4de8a73ccc07e1040178e0f26a43961ebca37a7da58d07420494a20", r),
                A = ((a = {})[e.ChainId.MAINNET] = "", a[e.ChainId.ROPSTEN] = "", a[e.ChainId.RINKEBY] = "", a[e.ChainId.GÖRLI] = "", a[e.ChainId.KOVAN] = "0x54038C23b72b01eeDBaF4AE4C098D329FB2D32f1", a[e.ChainId.HECOMAIN] = "0x76854443c1FC36Bbad8E9Ae361ED415dD673640f", a[e.ChainId.HECOTEST] = "0xe2c1453d83f11Fa331a3Ece2D6E174F795071639", a[e.ChainId.BIANMAIN] = "0x76854443c1FC36Bbad8E9Ae361ED415dD673640f", a[e.ChainId.BIANTEST] = "0x76854443c1FC36Bbad8E9Ae361ED415dD673640f", a[e.ChainId.OKTEST] = "0xbb362F4213eF1c0114158778c85861c8cdc0a66e", a[e.ChainId.INITEST] = "0x18790F963c221b002A6A8405Ce6e7b86A8ceaF11", a[e.ChainId.GENESIS] = "0x95eB95F6917Cac722d3638aDe3BdAd6B21FeBF45", a),
                k = c.BigInt(1e3),
                x = c.BigInt(0),
                I = c.BigInt(1),
                C = c.BigInt(2),
                E = c.BigInt(3),
                S = c.BigInt(5),
                D = c.BigInt(10),
                B = c.BigInt(100),
                N = c.BigInt(1e3);
            ! function(t) {
                t.uint8 = "uint8", t.uint256 = "uint256"
            }(w || (w = {}));
            var M = ((s = {})[w.uint8] = c.BigInt("0xff"), s[w.uint256] = c.BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), s);

            function O(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function L(t, e, n) {
                return e && O(t.prototype, e), n && O(t, n), t
            }

            function P() {
                return (P = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                }).apply(this, arguments)
            }

            function R(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }

            function q(t) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function F(t, e) {
                return (F = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function U() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (i) {
                    return !1
                }
            }

            function z(t, e, n) {
                return (z = U() ? Reflect.construct : function(t, e, n) {
                    var i = [null];
                    i.push.apply(i, e);
                    var r = new(Function.bind.apply(t, i));
                    return n && F(r, n.prototype), r
                }).apply(null, arguments)
            }

            function H(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return (H = function(t) {
                    if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n)
                    }

                    function n() {
                        return z(t, arguments, q(this).constructor)
                    }
                    return n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), F(n, t)
                })(t)
            }

            function V(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function G(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function j(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return G(t, void 0);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? G(t, void 0) : void 0
                            }
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0;
                        return function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (n = t[Symbol.iterator]()).next.bind(n)
            }
            var W, K = "setPrototypeOf" in Object,
                X = function(t) {
                    function e() {
                        var n;
                        return (n = t.call(this) || this).isInsufficientReservesError = !0, n.name = n.constructor.name, K && Object.setPrototypeOf(V(n), (this instanceof e ? this.constructor : void 0).prototype), n
                    }
                    return R(e, t), e
                }(H(Error)),
                $ = function(t) {
                    function e() {
                        var n;
                        return (n = t.call(this) || this).isInsufficientInputAmountError = !0, n.name = n.constructor.name, K && Object.setPrototypeOf(V(n), (this instanceof e ? this.constructor : void 0).prototype), n
                    }
                    return R(e, t), e
                }(H(Error));

            function Q(t, e) {
                c.greaterThanOrEqual(t, x) || d(!1), c.lessThanOrEqual(t, M[e]) || d(!1)
            }

            function J(t) {
                try {
                    return p.getAddress(t)
                } catch (t) {
                    d(!1)
                }
            }

            function Y(t) {
                return t instanceof c ? t : c.BigInt("bigint" == typeof t ? t.toString() : t)
            }

            function Z(t) {
                Q(t, w.uint256);
                var e, n = x;
                if (c.greaterThan(t, E))
                    for (n = t, e = c.add(c.divide(t, C), I); c.lessThan(e, n);) n = e, e = c.divide(c.add(c.divide(t, e), e), C);
                else c.notEqual(t, x) && (n = I);
                return n
            }

            function tt(t, e, n, i) {
                if (n > 0 || d(!1), t.length <= n || d(!1), 0 === t.length) return t.push(e), null;
                var r = t.length === n;
                if (r && i(t[t.length - 1], e) <= 0) return e;
                for (var a = 0, s = t.length; a < s;) {
                    var o = a + s >>> 1;
                    i(t[o], e) <= 0 ? a = o + 1 : s = o
                }
                return t.splice(a, 0, e), r ? t.pop() : null
            }
            var et = ((W = {})[e.ChainId.MAINNET] = "ETH", W[e.ChainId.ROPSTEN] = "ETH", W[e.ChainId.RINKEBY] = "ETH", W[e.ChainId.GÖRLI] = "ETH", W[e.ChainId.KOVAN] = "ETH", W[e.ChainId.BIANMAIN] = "BNB", W[e.ChainId.BIANTEST] = "BNB", W[e.ChainId.HECOMAIN] = "HT", W[e.ChainId.HECOTEST] = "HT", W[e.ChainId.OKTEST] = "OKT", W[e.ChainId.INITEST] = "INI", W[e.ChainId.GENESIS] = "GENESIS", W),
                nt = function() {
                    function t(t, e, n) {
                        Q(c.BigInt(t), w.uint8), this.decimals = t, this.symbol = e, this.name = n
                    }
                    return t.prototype.toDisplayableSymbol = function(t) {
                        if (this !== rt) throw new Error("Not currency instance");
                        return et[t]
                    }, t
                }();
            nt.ETHER = new nt(18, "(Currency)", "Currency");
            var it, rt = nt.ETHER,
                at = function(t) {
                    function e(e, n, i, r, a) {
                        var s;
                        return (s = t.call(this, i, r, a) || this).chainId = e, s.address = J(n), s
                    }
                    R(e, t);
                    var n = e.prototype;
                    return n.equals = function(t) {
                        return this === t || this.chainId === t.chainId && this.address === t.address
                    }, n.sortsBefore = function(t) {
                        return this.chainId !== t.chainId && d(!1), this.address === t.address && d(!1), this.address.toLowerCase() < t.address.toLowerCase()
                    }, e
                }(nt);

            function st(t, e) {
                return t instanceof at && e instanceof at ? t.equals(e) : !(t instanceof at || e instanceof at || t !== e)
            }
            var ot, ut, lt = ((it = {})[e.ChainId.MAINNET] = new at(e.ChainId.MAINNET, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "WETH", "Wrapped Ether"), it[e.ChainId.ROPSTEN] = new at(e.ChainId.ROPSTEN, "0xc778417E063141139Fce010982780140Aa0cD5Ab", 18, "WETH", "Wrapped Ether"), it[e.ChainId.RINKEBY] = new at(e.ChainId.RINKEBY, "0xc778417E063141139Fce010982780140Aa0cD5Ab", 18, "WETH", "Wrapped Ether"), it[e.ChainId.GÖRLI] = new at(e.ChainId.GÖRLI, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", 18, "WETH", "Wrapped Ether"), it[e.ChainId.KOVAN] = new at(e.ChainId.KOVAN, "0xd0A1E359811322d97991E03f863a0C30C2cF029C", 18, "WETH", "Wrapped Ether"), it[e.ChainId.HECOMAIN] = new at(e.ChainId.HECOMAIN, "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f", 18, "WHT", "Wrapped HT"), it[e.ChainId.HECOTEST] = new at(e.ChainId.HECOTEST, "0x50b29a42c9e4d0f940292c386207f492458ee358", 18, "WHT", "Wrapped HT"), it[e.ChainId.BIANMAIN] = new at(e.ChainId.BIANMAIN, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB"), it[e.ChainId.BIANTEST] = new at(e.ChainId.BIANTEST, "0xae13d989dac2f0debff460ac112a837c89baa7cd", 18, "WBNB", "Wrapped BNB"), it[e.ChainId.OKTEST] = new at(e.ChainId.OKTEST, "0xB13991B6253172118b962045906b27ce73C21ecD", 18, "WOKT", "Wrapped OKT"), it[e.ChainId.INITEST] = new at(e.ChainId.INITEST, "0x9e66cd15226464EFBa8b7B2847A0880AFC236c5C", 18, "WINI", "Wrapped INI"), it[e.ChainId.GENESIS] = new at(e.ChainId.GENESIS, "0xfbECae21C91446f9c7b87E4e5869926998f99ffe", 18, "WINI", "Wrapped INI"), it),
                ct = h(m),
                dt = h(f),
                pt = ((ot = {})[e.Rounding.ROUND_DOWN] = ct.ROUND_DOWN, ot[e.Rounding.ROUND_HALF_UP] = ct.ROUND_HALF_UP, ot[e.Rounding.ROUND_UP] = ct.ROUND_UP, ot),
                ft = ((ut = {})[e.Rounding.ROUND_DOWN] = 0, ut[e.Rounding.ROUND_HALF_UP] = 1, ut[e.Rounding.ROUND_UP] = 3, ut),
                ht = function() {
                    function t(t, e) {
                        void 0 === e && (e = I), this.numerator = Y(t), this.denominator = Y(e)
                    }
                    var n = t.prototype;
                    return n.invert = function() {
                        return new t(this.denominator, this.numerator)
                    }, n.add = function(e) {
                        var n = e instanceof t ? e : new t(Y(e));
                        return c.equal(this.denominator, n.denominator) ? new t(c.add(this.numerator, n.numerator), this.denominator) : new t(c.add(c.multiply(this.numerator, n.denominator), c.multiply(n.numerator, this.denominator)), c.multiply(this.denominator, n.denominator))
                    }, n.subtract = function(e) {
                        var n = e instanceof t ? e : new t(Y(e));
                        return c.equal(this.denominator, n.denominator) ? new t(c.subtract(this.numerator, n.numerator), this.denominator) : new t(c.subtract(c.multiply(this.numerator, n.denominator), c.multiply(n.numerator, this.denominator)), c.multiply(this.denominator, n.denominator))
                    }, n.lessThan = function(e) {
                        var n = e instanceof t ? e : new t(Y(e));
                        return c.lessThan(c.multiply(this.numerator, n.denominator), c.multiply(n.numerator, this.denominator))
                    }, n.equalTo = function(e) {
                        var n = e instanceof t ? e : new t(Y(e));
                        return c.equal(c.multiply(this.numerator, n.denominator), c.multiply(n.numerator, this.denominator))
                    }, n.greaterThan = function(e) {
                        var n = e instanceof t ? e : new t(Y(e));
                        return c.greaterThan(c.multiply(this.numerator, n.denominator), c.multiply(n.numerator, this.denominator))
                    }, n.multiply = function(e) {
                        var n = e instanceof t ? e : new t(Y(e));
                        return new t(c.multiply(this.numerator, n.numerator), c.multiply(this.denominator, n.denominator))
                    }, n.divide = function(e) {
                        var n = e instanceof t ? e : new t(Y(e));
                        return new t(c.multiply(this.numerator, n.denominator), c.multiply(this.denominator, n.numerator))
                    }, n.toSignificant = function(t, n, i) {
                        void 0 === n && (n = {
                            groupSeparator: ""
                        }), void 0 === i && (i = e.Rounding.ROUND_HALF_UP), Number.isInteger(t) || d(!1), t > 0 || d(!1), ct.set({
                            precision: t + 1,
                            rounding: pt[i]
                        });
                        var r = new ct(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(t);
                        return r.toFormat(r.decimalPlaces(), n)
                    }, n.toFixed = function(t, n, i) {
                        return void 0 === n && (n = {
                            groupSeparator: ""
                        }), void 0 === i && (i = e.Rounding.ROUND_HALF_UP), Number.isInteger(t) || d(!1), t >= 0 || d(!1), dt.DP = t, dt.RM = ft[i], new dt(this.numerator.toString()).div(this.denominator.toString()).toFormat(t, n)
                    }, L(t, [{
                        key: "quotient",
                        get: function() {
                            return c.divide(this.numerator, this.denominator)
                        }
                    }, {
                        key: "remainder",
                        get: function() {
                            return new t(c.remainder(this.numerator, this.denominator), this.denominator)
                        }
                    }]), t
                }(),
                mt = h(f),
                yt = function(t) {
                    function n(e, n) {
                        var i, r = Y(n);
                        return Q(r, w.uint256), (i = t.call(this, r, c.exponentiate(D, c.BigInt(e.decimals))) || this).currency = e, i
                    }
                    R(n, t), n.ether = function(t) {
                        return new n(rt, t)
                    };
                    var i = n.prototype;
                    return i.add = function(t) {
                        return st(this.currency, t.currency) || d(!1), new n(this.currency, c.add(this.raw, t.raw))
                    }, i.subtract = function(t) {
                        return st(this.currency, t.currency) || d(!1), new n(this.currency, c.subtract(this.raw, t.raw))
                    }, i.toSignificant = function(n, i, r) {
                        return void 0 === n && (n = 6), void 0 === r && (r = e.Rounding.ROUND_DOWN), t.prototype.toSignificant.call(this, n, i, r)
                    }, i.toFixed = function(n, i, r) {
                        return void 0 === n && (n = this.currency.decimals), void 0 === r && (r = e.Rounding.ROUND_DOWN), n <= this.currency.decimals || d(!1), t.prototype.toFixed.call(this, n, i, r)
                    }, i.toExact = function(t) {
                        return void 0 === t && (t = {
                            groupSeparator: ""
                        }), mt.DP = this.currency.decimals, new mt(this.numerator.toString()).div(this.denominator.toString()).toFormat(t)
                    }, L(n, [{
                        key: "raw",
                        get: function() {
                            return this.numerator
                        }
                    }]), n
                }(ht),
                _t = function(t) {
                    function e(e, n) {
                        var i;
                        return (i = t.call(this, e, n) || this).token = e, i
                    }
                    R(e, t);
                    var n = e.prototype;
                    return n.add = function(t) {
                        return this.token.equals(t.token) || d(!1), new e(this.token, c.add(this.raw, t.raw))
                    }, n.subtract = function(t) {
                        return this.token.equals(t.token) || d(!1), new e(this.token, c.subtract(this.raw, t.raw))
                    }, e
                }(yt),
                gt = function(t) {
                    function e(e, n, i, r) {
                        var a;
                        return (a = t.call(this, r, i) || this).baseCurrency = e, a.quoteCurrency = n, a.scalar = new ht(c.exponentiate(D, c.BigInt(e.decimals)), c.exponentiate(D, c.BigInt(n.decimals))), a
                    }
                    R(e, t), e.fromRoute = function(t) {
                        for (var n, i = [], r = j(t.pairs.entries()); !(n = r()).done;) {
                            var a = n.value,
                                s = a[1];
                            i.push(t.path[a[0]].equals(s.token0) ? new e(s.reserve0.currency, s.reserve1.currency, s.reserve0.raw, s.reserve1.raw) : new e(s.reserve1.currency, s.reserve0.currency, s.reserve1.raw, s.reserve0.raw))
                        }
                        return i.slice(1).reduce((function(t, e) {
                            return t.multiply(e)
                        }), i[0])
                    };
                    var n = e.prototype;
                    return n.invert = function() {
                        return new e(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator)
                    }, n.multiply = function(n) {
                        st(this.quoteCurrency, n.baseCurrency) || d(!1);
                        var i = t.prototype.multiply.call(this, n);
                        return new e(this.baseCurrency, n.quoteCurrency, i.denominator, i.numerator)
                    }, n.quote = function(e) {
                        return st(e.currency, this.baseCurrency) || d(!1), this.quoteCurrency instanceof at ? new _t(this.quoteCurrency, t.prototype.multiply.call(this, e.raw).quotient) : yt.ether(t.prototype.multiply.call(this, e.raw).quotient)
                    }, n.toSignificant = function(t, e, n) {
                        return void 0 === t && (t = 6), this.adjusted.toSignificant(t, e, n)
                    }, n.toFixed = function(t, e, n) {
                        return void 0 === t && (t = 4), this.adjusted.toFixed(t, e, n)
                    }, L(e, [{
                        key: "raw",
                        get: function() {
                            return new ht(this.numerator, this.denominator)
                        }
                    }, {
                        key: "adjusted",
                        get: function() {
                            return t.prototype.multiply.call(this, this.scalar)
                        }
                    }]), e
                }(ht),
                vt = {},
                bt = function() {
                    function t(e, n) {
                        var i = e.token.sortsBefore(n.token) ? [e, n] : [n, e];
                        this.liquidityToken = new at(i[0].token.chainId, t.getAddress(i[0].token, i[1].token), 18, "GLP:" + i[0].token.symbol + "-" + i[1].token.symbol, "GoSwap LP Token"), this.tokenAmounts = i
                    }
                    t.getAddress = function(t, e) {
                        var n, i, r, a, s, o = t.sortsBefore(e) ? [t, e] : [e, t];
                        return void 0 === (null === (n = vt) || void 0 === n || null === (i = n[o[0].address]) || void 0 === i ? void 0 : i[o[1].address]) && (vt = P({}, vt, ((s = {})[o[0].address] = P({}, null === (r = vt) || void 0 === r ? void 0 : r[o[0].address], ((a = {})[o[1].address] = p.getCreate2Address(A[t.chainId], y.keccak256(["bytes"], [y.pack(["address", "address"], [o[0].address, o[1].address])]), T[t.chainId]), a)), s))), vt[o[0].address][o[1].address]
                    };
                    var e = t.prototype;
                    return e.involvesToken = function(t) {
                        return t.equals(this.token0) || t.equals(this.token1)
                    }, e.priceOf = function(t) {
                        return this.involvesToken(t) || d(!1), t.equals(this.token0) ? this.token0Price : this.token1Price
                    }, e.reserveOf = function(t) {
                        return this.involvesToken(t) || d(!1), t.equals(this.token0) ? this.reserve0 : this.reserve1
                    }, e.getOutputAmount = function(e, n) {
                        if (void 0 === n && (n = 997), this.involvesToken(e.token) || d(!1), c.equal(this.reserve0.raw, x) || c.equal(this.reserve1.raw, x)) throw new X;
                        var i = this.reserveOf(e.token),
                            r = this.reserveOf(e.token.equals(this.token0) ? this.token1 : this.token0),
                            a = c.multiply(e.raw, c.BigInt(n)),
                            s = c.multiply(a, r.raw),
                            o = c.add(c.multiply(i.raw, N), a),
                            u = new _t(e.token.equals(this.token0) ? this.token1 : this.token0, c.divide(s, o));
                        if (c.equal(u.raw, x)) throw new $;
                        return [u, new t(i.add(e), r.subtract(u))]
                    }, e.getInputAmount = function(e, n) {
                        if (void 0 === n && (n = 997), this.involvesToken(e.token) || d(!1), c.equal(this.reserve0.raw, x) || c.equal(this.reserve1.raw, x) || c.greaterThanOrEqual(e.raw, this.reserveOf(e.token).raw)) throw new X;
                        var i = this.reserveOf(e.token),
                            r = this.reserveOf(e.token.equals(this.token0) ? this.token1 : this.token0),
                            a = c.multiply(c.multiply(r.raw, e.raw), N),
                            s = c.multiply(c.subtract(i.raw, e.raw), c.BigInt(n)),
                            o = new _t(e.token.equals(this.token0) ? this.token1 : this.token0, c.add(c.divide(a, s), I));
                        return [o, new t(r.add(o), i.subtract(e))]
                    }, e.getLiquidityMinted = function(t, e, n) {
                        t.token.equals(this.liquidityToken) || d(!1);
                        var i, r = e.token.sortsBefore(n.token) ? [e, n] : [n, e];
                        if (r[0].token.equals(this.token0) && r[1].token.equals(this.token1) || d(!1), c.equal(t.raw, x)) i = c.subtract(Z(c.multiply(r[0].raw, r[1].raw)), k);
                        else {
                            var a = c.divide(c.multiply(r[0].raw, t.raw), this.reserve0.raw),
                                s = c.divide(c.multiply(r[1].raw, t.raw), this.reserve1.raw);
                            i = c.lessThanOrEqual(a, s) ? a : s
                        }
                        if (!c.greaterThan(i, x)) throw new $;
                        return new _t(this.liquidityToken, i)
                    }, e.getLiquidityValue = function(t, e, n, i, r) {
                        var a;
                        if (void 0 === i && (i = !1), this.involvesToken(t) || d(!1), e.token.equals(this.liquidityToken) || d(!1), n.token.equals(this.liquidityToken) || d(!1), c.lessThanOrEqual(n.raw, e.raw) || d(!1), i) {
                            r || d(!1);
                            var s = Y(r);
                            if (c.equal(s, x)) a = e;
                            else {
                                var o = Z(c.multiply(this.reserve0.raw, this.reserve1.raw)),
                                    u = Z(s);
                                if (c.greaterThan(o, u)) {
                                    var l = c.multiply(e.raw, c.subtract(o, u)),
                                        p = c.add(c.multiply(o, S), u),
                                        f = c.divide(l, p);
                                    a = e.add(new _t(this.liquidityToken, f))
                                } else a = e
                            }
                        } else a = e;
                        return new _t(t, c.divide(c.multiply(n.raw, this.reserveOf(t).raw), a.raw))
                    }, L(t, [{
                        key: "token0Price",
                        get: function() {
                            return new gt(this.token0, this.token1, this.tokenAmounts[0].raw, this.tokenAmounts[1].raw)
                        }
                    }, {
                        key: "token1Price",
                        get: function() {
                            return new gt(this.token1, this.token0, this.tokenAmounts[1].raw, this.tokenAmounts[0].raw)
                        }
                    }, {
                        key: "chainId",
                        get: function() {
                            return this.token0.chainId
                        }
                    }, {
                        key: "token0",
                        get: function() {
                            return this.tokenAmounts[0].token
                        }
                    }, {
                        key: "token1",
                        get: function() {
                            return this.tokenAmounts[1].token
                        }
                    }, {
                        key: "reserve0",
                        get: function() {
                            return this.tokenAmounts[0]
                        }
                    }, {
                        key: "reserve1",
                        get: function() {
                            return this.tokenAmounts[1]
                        }
                    }]), t
                }(),
                wt = function() {
                    function t(t, e, n) {
                        t.length > 0 || d(!1), t.every((function(e) {
                            return e.chainId === t[0].chainId
                        })) || d(!1), e instanceof at && t[0].involvesToken(e) || e === rt && t[0].involvesToken(lt[t[0].chainId]) || d(!1), void 0 === n || n instanceof at && t[t.length - 1].involvesToken(n) || n === rt && t[t.length - 1].involvesToken(lt[t[0].chainId]) || d(!1);
                        for (var i, r = [e instanceof at ? e : lt[t[0].chainId]], a = j(t.entries()); !(i = a()).done;) {
                            var s = i.value,
                                o = s[1],
                                u = r[s[0]];
                            u.equals(o.token0) || u.equals(o.token1) || d(!1);
                            var l = u.equals(o.token0) ? o.token1 : o.token0;
                            r.push(l)
                        }
                        this.pairs = t, this.path = r, this.midPrice = gt.fromRoute(this), this.input = e, this.output = null != n ? n : r[r.length - 1]
                    }
                    return L(t, [{
                        key: "chainId",
                        get: function() {
                            return this.pairs[0].chainId
                        }
                    }]), t
                }(),
                Tt = new ht(B),
                At = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    R(e, t);
                    var n = e.prototype;
                    return n.toSignificant = function(t, e, n) {
                        return void 0 === t && (t = 5), this.multiply(Tt).toSignificant(t, e, n)
                    }, n.toFixed = function(t, e, n) {
                        return void 0 === t && (t = 2), this.multiply(Tt).toFixed(t, e, n)
                    }, e
                }(ht);

            function kt(t, e) {
                return st(t.inputAmount.currency, e.inputAmount.currency) || d(!1), st(t.outputAmount.currency, e.outputAmount.currency) || d(!1), t.outputAmount.equalTo(e.outputAmount) ? t.inputAmount.equalTo(e.inputAmount) ? 0 : t.inputAmount.lessThan(e.inputAmount) ? -1 : 1 : t.outputAmount.lessThan(e.outputAmount) ? 1 : -1
            }

            function xt(t, e) {
                var n = kt(t, e);
                return 0 !== n ? n : t.priceImpact.lessThan(e.priceImpact) ? -1 : t.priceImpact.greaterThan(e.priceImpact) ? 1 : t.route.path.length - e.route.path.length
            }

            function It(t, e) {
                return t instanceof _t ? t : t.currency === rt ? new _t(lt[e], t.raw) : void d(!1)
            }

            function Ct(t, e) {
                return t instanceof at ? t : t === rt ? lt[e] : void d(!1)
            }
            var Et = function() {
                function t(t, n, i) {
                    var r, a, s, o = new Array(t.path.length),
                        u = new Array(t.pairs.length),
                        l = 997;
                    if (("BUSD" === t.input.symbol && "USDT" === t.output.symbol || "USDT" === t.input.symbol && "BUSD" === t.output.symbol) && (l = 1e3), i === e.TradeType.EXACT_INPUT) {
                        st(n.currency, t.input) || d(!1), o[0] = It(n, t.chainId);
                        for (var c = 0; c < t.path.length - 1; c++) {
                            var p = t.pairs[c].getOutputAmount(o[c], l),
                                f = p[1];
                            o[c + 1] = p[0], u[c] = f
                        }
                    } else {
                        st(n.currency, t.output) || d(!1), o[o.length - 1] = It(n, t.chainId);
                        for (var h = t.path.length - 1; h > 0; h--) {
                            var m = t.pairs[h - 1].getInputAmount(o[h], l),
                                y = m[1];
                            o[h - 1] = m[0], u[h - 1] = y
                        }
                    }
                    this.route = t, this.tradeType = i, this.inputAmount = i === e.TradeType.EXACT_INPUT ? n : t.input === rt ? yt.ether(o[0].raw) : o[0], this.outputAmount = i === e.TradeType.EXACT_OUTPUT ? n : t.output === rt ? yt.ether(o[o.length - 1].raw) : o[o.length - 1], this.executionPrice = new gt(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.raw, this.outputAmount.raw), this.nextMidPrice = gt.fromRoute(new wt(u, t.input)), this.priceImpact = (r = this.outputAmount, s = (a = t.midPrice.raw.multiply(this.inputAmount.raw)).subtract(r.raw).divide(a), new At(s.numerator, s.denominator))
                }
                t.exactIn = function(n, i) {
                    return new t(n, i, e.TradeType.EXACT_INPUT)
                }, t.exactOut = function(n, i) {
                    return new t(n, i, e.TradeType.EXACT_OUTPUT)
                };
                var n = t.prototype;
                return n.minimumAmountOut = function(t) {
                    if (t.lessThan(x) && d(!1), this.tradeType === e.TradeType.EXACT_OUTPUT) return this.outputAmount;
                    var n = new ht(I).add(t).invert().multiply(this.outputAmount.raw).quotient;
                    return this.outputAmount instanceof _t ? new _t(this.outputAmount.token, n) : yt.ether(n)
                }, n.maximumAmountIn = function(t) {
                    if (t.lessThan(x) && d(!1), this.tradeType === e.TradeType.EXACT_INPUT) return this.inputAmount;
                    var n = new ht(I).add(t).multiply(this.inputAmount.raw).quotient;
                    return this.inputAmount instanceof _t ? new _t(this.inputAmount.token, n) : yt.ether(n)
                }, t.bestTradeExactIn = function(n, i, r, a, s, o, u) {
                    var l = void 0 === a ? {} : a,
                        c = l.maxNumResults,
                        p = void 0 === c ? 3 : c,
                        f = l.maxHops,
                        h = void 0 === f ? 3 : f;
                    void 0 === s && (s = []), void 0 === o && (o = i), void 0 === u && (u = []), n.length > 0 || d(!1), h > 0 || d(!1), o === i || s.length > 0 || d(!1);
                    var m = i instanceof _t ? i.token.chainId : r instanceof at ? r.chainId : void 0;
                    void 0 === m && d(!1);
                    for (var y = It(i, m), _ = Ct(r, m), g = 0; g < n.length; g++) {
                        var v = n[g];
                        if ((v.token0.equals(y.token) || v.token1.equals(y.token)) && !v.reserve0.equalTo(x) && !v.reserve1.equalTo(x)) {
                            var b = void 0;
                            try {
                                b = v.getOutputAmount(y)[0]
                            } catch (t) {
                                if (t.isInsufficientInputAmountError) continue;
                                throw t
                            }
                            if (b.token.equals(_)) tt(u, new t(new wt([].concat(s, [v]), o.currency, r), o, e.TradeType.EXACT_INPUT), p, xt);
                            else if (h > 1 && n.length > 1) {
                                var w = n.slice(0, g).concat(n.slice(g + 1, n.length));
                                t.bestTradeExactIn(w, b, r, {
                                    maxNumResults: p,
                                    maxHops: h - 1
                                }, [].concat(s, [v]), o, u)
                            }
                        }
                    }
                    return u
                }, t.bestTradeExactOut = function(n, i, r, a, s, o, u) {
                    var l = void 0 === a ? {} : a,
                        c = l.maxNumResults,
                        p = void 0 === c ? 3 : c,
                        f = l.maxHops,
                        h = void 0 === f ? 3 : f;
                    void 0 === s && (s = []), void 0 === o && (o = r), void 0 === u && (u = []), n.length > 0 || d(!1), h > 0 || d(!1), o === r || s.length > 0 || d(!1);
                    var m = r instanceof _t ? r.token.chainId : i instanceof at ? i.chainId : void 0;
                    void 0 === m && d(!1);
                    for (var y = It(r, m), _ = Ct(i, m), g = 0; g < n.length; g++) {
                        var v = n[g];
                        if ((v.token0.equals(y.token) || v.token1.equals(y.token)) && !v.reserve0.equalTo(x) && !v.reserve1.equalTo(x)) {
                            var b = void 0;
                            try {
                                b = v.getInputAmount(y)[0]
                            } catch (t) {
                                if (t.isInsufficientReservesError) continue;
                                throw t
                            }
                            if (b.token.equals(_)) tt(u, new t(new wt([v].concat(s), i, o.currency), o, e.TradeType.EXACT_OUTPUT), p, xt);
                            else if (h > 1 && n.length > 1) {
                                var w = n.slice(0, g).concat(n.slice(g + 1, n.length));
                                t.bestTradeExactOut(w, i, b, {
                                    maxNumResults: p,
                                    maxHops: h - 1
                                }, [v].concat(s), o, u)
                            }
                        }
                    }
                    return u
                }, t
            }();

            function St(t) {
                return "0x" + t.raw.toString(16)
            }
            var Dt = function() {
                    function t() {}
                    return t.swapCallParameters = function(t, n) {
                        var i = t.inputAmount.currency === rt,
                            r = t.outputAmount.currency === rt;
                        i && r && d(!1), !("ttl" in n) || n.ttl > 0 || d(!1);
                        var a, s, o, u = J(n.recipient),
                            l = St(t.maximumAmountIn(n.allowedSlippage)),
                            c = St(t.minimumAmountOut(n.allowedSlippage)),
                            p = t.route.path.map((function(t) {
                                return t.address
                            })),
                            f = "ttl" in n ? "0x" + (Math.floor((new Date).getTime() / 1e3) + n.ttl).toString(16) : "0x" + n.deadline.toString(16),
                            h = Boolean(n.feeOnTransfer);
                        switch (t.tradeType) {
                            case e.TradeType.EXACT_INPUT:
                                i ? (a = h ? "swapExactHTForTokensSupportingFeeOnTransferTokens" : "swapExactHTForTokens", s = [c, p, u, f], o = l) : r ? (a = h ? "swapExactTokensForHTSupportingFeeOnTransferTokens" : "swapExactTokensForHT", s = [l, c, p, u, f], o = "0x0") : (a = h ? "swapExactTokensForTokensSupportingFeeOnTransferTokens" : "swapExactTokensForTokens", s = [l, c, p, u, f], o = "0x0");
                                break;
                            case e.TradeType.EXACT_OUTPUT:
                                h && d(!1), i ? (a = "swapHTForExactTokens", s = [c, p, u, f], o = l) : r ? (a = "swapTokensForExactHT", s = [c, l, p, u, f], o = "0x0") : (a = "swapTokensForExactTokens", s = [c, l, p, u, f], o = "0x0")
                        }
                        return {
                            methodName: a,
                            args: s,
                            value: o
                        }
                    }, t
                }(),
                Bt = function() {
                    function t() {}
                    return t.fetchPairData = function(t, e, n) {
                        try {
                            return void 0 === n && (n = v.getDefaultProvider(g.getNetwork(t.chainId))), t.chainId !== e.chainId && d(!1), Promise.resolve(bt.getAddress(t, e)).then((function(i) {
                                return Promise.resolve(new _.Contract(i, b.abi, n).getReserves()).then((function(n) {
                                    var i = n[0],
                                        r = n[1],
                                        a = t.sortsBefore(e) ? [i, r] : [r, i];
                                    return new bt(new _t(t, a[0]), new _t(e, a[1]))
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t
                }();
            e.JSBI = c, e.Currency = nt, e.CurrencyAmount = yt, e.ETHER = rt, e.Fetcher = Bt, e.Fraction = ht, e.InsufficientInputAmountError = $, e.InsufficientReservesError = X, e.MINIMUM_LIQUIDITY = k, e.Pair = bt, e.Percent = At, e.Price = gt, e.Route = wt, e.Router = Dt, e.Token = at, e.TokenAmount = _t, e.Trade = Et, e.WETH = lt, e.currencyEquals = st, e.inputOutputComparator = kt, e.tradeComparator = xt
        },
        18868: function(t) {
            "use strict";
            var e = !0,
                n = "Invariant failed";

            function i(t, i) {
                if (!t) {
                    if (e) throw new Error(n);
                    var r = "function" === typeof i ? i() : i,
                        a = r ? "".concat(n, ": ").concat(r) : n;
                    throw new Error(a)
                }
            }
            t.exports = i
        },
        91520: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = !0;

            function r(t, e) {
                if (!i) {
                    if (t) return;
                    var n = "Warning: " + e;
                    "undefined" !== typeof console && console.warn(n);
                    try {
                        throw Error(n)
                    } catch (r) {}
                }
            }
            e["default"] = r
        },
        11417: function(t) {
            function e(t) {
                "use strict";
                return t.prototype.toFormat = function(t, e, n) {
                    if (!this.e && 0 !== this.e) return this.toString();
                    var i, r, a, s, o, u, l, c, d, p, f, h, m, y, _, g = this.format || {},
                        v = this.constructor.format || {};
                    if (t != o ? "object" == typeof t ? (n = t, t = o) : e != o ? "object" == typeof e ? (n = e, e = o) : "object" != typeof n && (n = {}) : n = {} : n = {}, i = this.toFixed(t, e).split("."), c = i[0], d = i[1], l = this.s < 0 ? c.slice(1) : c, u = l.length, p = n.decimalSeparator, p == o && (p = g.decimalSeparator, p == o && (p = v.decimalSeparator, p == o && (p = "."))), f = n.groupSeparator, f == o && (f = g.groupSeparator, f == o && (f = v.groupSeparator)), f && (h = n.groupSize, h == o && (h = g.groupSize, h == o && (h = v.groupSize, h == o && (h = 0))), m = n.secondaryGroupSize, m == o && (m = g.secondaryGroupSize, m == o && (m = v.secondaryGroupSize, m == o && (m = 0))), m ? (r = +m, a = +h, u -= a) : (r = +h, a = +m), r > 0 && u > 0)) {
                        for (s = u % r || r, c = l.substr(0, s); s < u; s += r) c += f + l.substr(s, r);
                        a > 0 && (c += f + l.slice(s)), this.s < 0 && (c = "-" + c)
                    }
                    return d ? (y = n.fractionGroupSeparator, y == o && (y = g.fractionGroupSeparator, y == o && (y = v.fractionGroupSeparator)), y && (_ = n.fractionGroupSize, _ == o && (_ = g.fractionGroupSize, _ == o && (_ = v.fractionGroupSize, _ == o && (_ = 0))), _ = +_, _ && (d = d.replace(new RegExp("\\d{" + _ + "}\\B", "g"), "$&" + y))), c + p + d) : c
                }, t.format = {
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: "",
                    fractionGroupSize: 0
                }, t
            }
            t.exports && (t.exports = e)
        },
        80938: function(t, e, n) {
            "use strict";
            n.d(e, {
                A: function() {
                    return l
                }
            });
            var i = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "import_token"
                    }, [e("div", {
                        staticClass: "dialog_header"
                    }, [e("div", {
                        staticClass: "import_title"
                    }, [t._v(t._s(t.$t("message.trade.importToken")))]), e("img", {
                        staticClass: "import_close",
                        attrs: {
                            alt: "close",
                            src: n(18730)
                        },
                        on: {
                            click: t.handleClose
                        }
                    })]), e("div", {
                        staticClass: "coin_flex"
                    }, [e("van-image", {
                        staticClass: "coin_logo",
                        attrs: {
                            src: t.currency.logoURI,
                            alt: "logo",
                            round: ""
                        }
                    }), e("div", {
                        staticClass: "coin_info"
                    }, [e("span", {
                        staticClass: "coin_name"
                    }, [t._v(t._s(t.currency.symbol) + "｜"), e("span", [t._v(t._s(t.currency.name))])]), e("span", {
                        staticClass: "coin_address"
                    }, [t._v(t._s(t.currency.address))]), e("span", {
                        staticClass: "coin_source"
                    })])], 1), e("img", {
                        staticClass: "img_tips",
                        attrs: {
                            alt: "tips",
                            src: n(20525)
                        }
                    }), e("div", {
                        staticClass: "import_text1"
                    }, [t._v(t._s(t.$t("message.trade.importTokenText1")))]), e("div", {
                        staticClass: "import_text2"
                    }, [t._v(t._s(t.$t("message.trade.importTokenText2")))]), e("van-checkbox", {
                        scopedSlots: t._u([{
                            key: "icon",
                            fn: function(n) {
                                return [e("img", {
                                    staticClass: "img-icon",
                                    attrs: {
                                        src: n.checked ? t.activeIcon : t.inactiveIcon,
                                        width: "20px",
                                        height: "20px",
                                        alt: "check"
                                    }
                                })]
                            }
                        }]),
                        model: {
                            value: t.checked,
                            callback: function(e) {
                                t.checked = e
                            },
                            expression: "checked"
                        }
                    }, [e("span", {
                        staticClass: "check_text"
                    }, [t._v(t._s(t.$t("message.trade.iUnderstand")))])]), t.checked ? e("div", {
                        staticClass: "import",
                        on: {
                            click: t.importToken
                        }
                    }, [e("span", [t._v(t._s(t.$t("message.trade.import")))])]) : e("div", {
                        staticClass: "import_unavailable",
                        attrs: {
                            disabled: "disabled"
                        }
                    }, [e("span", [t._v(t._s(t.$t("message.trade.import")))])])], 1)
                },
                r = [],
                a = {
                    name: "importToken",
                    props: ["currency"],
                    data() {
                        return {
                            checked: !1,
                            activeIcon: n(94074),
                            inactiveIcon: n(13277)
                        }
                    },
                    methods: {
                        handleClose() {
                            this.$emit("listenClose")
                        },
                        importToken() {
                            this.$emit("listenImport", this.currency)
                        }
                    }
                },
                s = a,
                o = n(50876),
                u = (0, o.A)(s, i, r, !1, null, "72ba2afc", null),
                l = u.exports
        },
        68959: function(t, e, n) {
            "use strict";
            n.d(e, {
                A: function() {
                    return h
                }
            });
            var i = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "pendingSwap"
                    }, [e("div", {
                        staticClass: "dialog_header"
                    }, [e("img", {
                        staticClass: "pending_close",
                        attrs: {
                            alt: "close",
                            src: n(18730)
                        },
                        on: {
                            click: t.handleClose
                        }
                    })]), 0 === t.pendingDetail.status ? e("div", {
                        staticClass: "dialog_content"
                    }, [e("div", {
                        ref: "pendingAnimation",
                        staticClass: "pending_img margin12"
                    }), e("div", {
                        staticClass: "pending_title"
                    }, [t._v(t._s(t.$t("message.trade.pendingTransaction")))]), "0" !== t.pendingDetail.type ? e("div", {
                        staticClass: "pending_text"
                    }, [t._v(t._s(t.getTypeName(t.pendingDetail.type)) + " " + t._s(t.toPrecision(t.pendingDetail.fromInput, 2)) + " " + t._s(t.fromCur.symbol) + " " + t._s(t.getTypeUnit(t.pendingDetail.type)) + " " + t._s(t.toPrecision(t.pendingDetail.toInput, 2)) + " " + t._s(t.toCur.symbol))]) : t._e(), e("div", {
                        staticClass: "pending_tips"
                    }, [t._v(t._s(t.$t("message.trade.pendingTransactionText")))])]) : 1 === t.pendingDetail.status ? e("div", {
                        staticClass: "dialog_content"
                    }, [t._m(0), e("div", {
                        staticClass: "pending_title"
                    }, [t._v(t._s(t.$t("message.trade.transactionSubmitted")))]), "2" !== t.pendingDetail.type ? e("div", {
                        staticClass: "pending_text"
                    }, [t._v(" " + t._s(t.getTypeName(t.pendingDetail.type)) + " " + t._s(t.toPrecision(t.pendingDetail.fromInput, 2)) + " " + t._s(t.fromCur.symbol) + " " + t._s(t.getTypeUnit(t.pendingDetail.type)) + " " + t._s(t.toPrecision(t.pendingDetail.toInput, 2)) + " " + t._s(t.toCur.symbol) + " ")]) : t._e(), e("div", {
                        staticClass: "view_hash",
                        on: {
                            click: function(e) {
                                return t.viewHash(t.pendingDetail.hash)
                            }
                        }
                    }, [e("span", [t._v(t._s(t.$t("message.trade.viewOnBscScan")))])])]) : 2 === t.pendingDetail.status ? e("div", {
                        staticClass: "dialog_content"
                    }, [t._m(1), e("div", {
                        staticClass: "pending_text_fail"
                    }, [t._v(t._s(t.$t("message.trade.transactionFailed")))])]) : t._e()])
                },
                r = [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "pending_img"
                    }, [e("img", {
                        attrs: {
                            alt: "submitted",
                            src: n(76766)
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "pending_img margin22"
                    }, [e("img", {
                        attrs: {
                            alt: "rejected",
                            src: n(62663)
                        }
                    })])
                }],
                a = n(40230),
                s = n(62881),
                o = n.n(s),
                u = JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":60,"w":1600,"h":1200,"nm":"loading 5","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Mini 2","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[400,431,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":30,"s":[400,169,0],"to":[0,0,0],"ti":[0,0,0]},{"t":60,"s":[400,431,0]}],"ix":2},"a":{"a":0,"k":[-18,0,0],"ix":1},"s":{"a":0,"k":[25.625,25.625,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":3,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[0,-80],[-80,0],[0,80],[80,0]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[0.439,-97.561],[-74.244,13.171],[0,80],[74.146,13.171]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[0,-80],[-80,0],[0,80],[80,0]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[0.439,-113.171],[-80,0],[0.439,96.585],[80,0]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":27,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[0,-80],[-80,0],[0,80],[80,0]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":33,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[0,-80],[-80,0],[0,80],[80,0]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":37,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[0,-80],[-75.122,0],[0.439,110.244],[75.122,0]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":46,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[0.439,-97.561],[-74.244,13.171],[0,80],[74.146,13.171]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[-2.634,-77.073],[-76.163,8.781],[0.439,104.39],[76.098,8.781]],"c":true}]},{"t":55,"s":[{"i":[[44.183,0],[0,-44.183],[-44.183,0],[0,44.183]],"o":[[-44.183,0],[0,44.183],[44.183,0],[0,-44.183]],"v":[[0,-80],[-80,0],[0,80],[80,0]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.870587995941,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.39],"y":[1]},"o":{"x":[0.61],"y":[0]},"t":0,"s":[1,0.800000071526,0,1]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":30,"s":[0.972549021244,0.266666680574,0.309803932905,1]},{"t":60,"s":[1,0.800000071526,0,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-18,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Boss 2","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,300,0],"ix":2},"a":{"a":0,"k":[-18,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[11.145,0],[9.193,-3.683],[5.186,-3.72],[0,-26.804],[-19.933,-14.55],[-6.568,-2.535],[-10.153,0],[-4.964,2.119],[-5.003,3.714],[0,26.335],[20.275,14.512],[5.365,2.291]],"o":[[-10.509,0],[-6.009,2.408],[-20.235,14.517],[0,26.568],[5.599,4.087],[8.936,3.449],[8.5,0],[5.805,-2.478],[19.636,-14.578],[0,-26.835],[-4.686,-3.354],[-9.64,-4.118]],"v":[[0,-80],[-29.738,-74.29],[-46.582,-65.047],[-80,0],[-47.117,64.66],[-28.799,74.66],[0,80],[31.38,73.611],[47.64,64.275],[80,0],[46.512,-65.097],[31.399,-73.603]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":14,"s":[{"i":[[11.145,0],[9.193,-3.683],[5.186,-3.72],[0,-26.804],[-20.196,-14.521],[-6.924,1.188],[-17,-0.273],[-6.089,-1.191],[-5.01,3.664],[0,26.542],[20.275,14.512],[5.365,2.291]],"o":[[-10.509,0],[-6.009,2.408],[-20.235,14.517],[0,26.774],[5.614,4.036],[9.309,-1.597],[17,0.273],[6.089,1.191],[19.901,-14.553],[0,-26.835],[-4.686,-3.354],[-9.64,-4.118]],"v":[[0,-80],[-29.738,-74.29],[-46.582,-65.047],[-80,0],[-46.652,64.997],[-28.309,67.847],[0,59.977],[28.911,68.309],[47.173,64.618],[80,0],[46.512,-65.097],[31.399,-73.603]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[11.054,0],[8.132,-5.502],[5.21,-3.718],[0,-26.879],[-20.011,-14.542],[-6.515,-2.515],[-10.153,0],[-4.964,2.119],[-4.964,3.668],[0,26.398],[20.37,14.501],[5.089,3.204]],"o":[[-10.416,0],[-5.007,3.388],[-20.331,14.506],[0,26.629],[5.562,4.042],[8.936,3.449],[8.5,0],[5.749,-2.454],[19.717,-14.57],[0,-26.909],[-4.708,-3.352],[-8.801,-5.54]],"v":[[0,-91.75],[-28.743,-77.888],[-46.414,-65.167],[-80,0],[-46.979,64.76],[-28.799,74.66],[0,80],[31.38,73.611],[47.497,64.381],[80,0],[46.344,-65.217],[31.911,-77.204]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[{"i":[[10.948,0],[9.048,-3.55],[5.239,-3.714],[0,-26.965],[-20.011,-14.541],[-6.515,-2.515],[-10.153,0],[-4.964,2.119],[-4.964,3.668],[0,26.398],[20.481,14.488],[5.416,2.269]],"o":[[-10.307,0],[-6.067,2.38],[-20.442,14.493],[0,26.629],[5.562,4.042],[8.936,3.449],[15.5,0],[5.749,-2.454],[19.717,-14.57],[0,-26.996],[-4.734,-3.348],[-9.503,-3.98]],"v":[[0,-80],[-29.206,-74.501],[-46.217,-65.307],[-80,0],[-46.979,64.76],[-28.799,74.66],[0,80],[31.38,73.611],[47.497,64.381],[80,0],[46.147,-65.357],[30.884,-73.821]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":38,"s":[{"i":[[10.948,0],[9.048,-3.55],[5.239,-3.714],[0,-26.965],[-20.011,-14.541],[-6.515,-2.515],[-10.153,0],[-4.964,2.119],[-4.964,3.668],[0,26.398],[20.481,14.488],[5.416,2.269]],"o":[[-10.307,0],[-6.067,2.38],[-20.442,14.493],[0,26.629],[5.562,4.042],[8.936,3.449],[8.5,0],[5.749,-2.454],[19.717,-14.57],[0,-26.996],[-4.734,-3.348],[-9.503,-3.98]],"v":[[0,-80],[-29.206,-74.501],[-46.217,-65.307],[-80,0],[-46.979,64.76],[-28.799,74.66],[0,80],[31.38,73.611],[47.497,64.381],[80,0],[46.147,-65.357],[30.884,-73.821]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":42,"s":[{"i":[[19,1],[10.206,1.001],[5.239,-3.714],[0,-26.965],[-20.011,-14.541],[-6.515,-2.515],[-10.153,0],[-4.964,2.119],[-4.964,3.668],[0,26.398],[20.481,14.488],[5.868,-0.217]],"o":[[-19,-1],[-6.486,-0.636],[-20.442,14.493],[0,26.629],[5.562,4.042],[8.936,3.449],[8.5,0],[5.749,-2.454],[19.717,-14.57],[0,-26.996],[-4.734,-3.348],[-12.072,0.446]],"v":[[0,-63],[-29.206,-69.251],[-46.217,-65.307],[-80,0],[-46.979,64.76],[-28.799,74.66],[0,80],[31.38,73.611],[47.497,64.381],[80,0],[46.147,-65.357],[30.884,-68.571]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":49,"s":[{"i":[[10.948,0],[9.048,-3.55],[5.239,-3.714],[0,-26.965],[-20.011,-14.542],[-5.159,-4.707],[-19,0.5],[-5.33,4.514],[-4.964,3.668],[0,26.398],[20.481,14.488],[5.416,2.269]],"o":[[-10.307,0],[-6.067,2.38],[-20.442,14.493],[0,26.629],[5.562,4.042],[7.224,6.59],[19,-0.5],[4.77,-4.04],[19.717,-14.57],[0,-26.996],[-4.734,-3.348],[-9.503,-3.98]],"v":[[0,-80],[-29.206,-74.501],[-46.217,-65.307],[-80,0],[-46.979,64.76],[-28.849,79.16],[0,95.5],[31.33,78.111],[47.497,64.381],[80,0],[46.147,-65.357],[30.884,-73.821]],"c":true}]},{"t":56,"s":[{"i":[[10.948,0],[9.048,-3.55],[5.239,-3.714],[0,-26.965],[-20.011,-14.541],[-6.515,-2.515],[-10.153,0],[-4.964,2.119],[-4.964,3.668],[0,26.398],[20.481,14.488],[5.416,2.269]],"o":[[-10.307,0],[-6.067,2.38],[-20.442,14.493],[0,26.629],[5.562,4.042],[8.936,3.449],[8.5,0],[5.749,-2.454],[19.717,-14.57],[0,-26.996],[-4.734,-3.348],[-9.503,-3.98]],"v":[[0,-80],[-29.206,-74.501],[-46.217,-65.307],[-80,0],[-46.979,64.76],[-28.799,74.66],[0,80],[31.38,73.611],[47.497,64.381],[80,0],[46.147,-65.357],[30.884,-73.821]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.870587995941,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.39],"y":[1]},"o":{"x":[0.61],"y":[0]},"t":0,"s":[1,0.800000071526,0,1]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":30,"s":[0.972549021244,0.266666680574,0.309803932905,1]},{"t":60,"s":[1,0.800000071526,0,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-18,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Dark Royal Blue Solid 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[800,600,0],"ix":2},"a":{"a":0,"k":[400,300,0],"ix":1},"s":{"a":0,"k":[300,300,100],"ix":6}},"ao":0,"ip":0,"op":60,"st":0,"bm":0}],"markers":[]}'),
                l = n(15260),
                c = {
                    name: "pendingSwap",
                    props: ["pendingDetail", "fromCur", "toCur"],
                    mounted() {
                        this.loadAnimation()
                    },
                    watch: {
                        "pendingDetail.status"(t, e) {
                            t !== e && 1 === t && this.removeAnimation()
                        }
                    },
                    methods: {
                        viewHash: a.sr,
                        addToken: a.nP,
                        toPrecision: l.QX,
                        getTypeName(t) {
                            let e = "";
                            return e = "1" === t ? this.$t("message.trade.swapping") : "2" === t ? this.$t("message.trade.adding") : "3" === t ? this.$t("message.trade.removing") : this.$t("message.trade.swapping"), e
                        },
                        getTypeUnit(t) {
                            let e = "";
                            return e = "1" === t ? this.$t("message.trade.for") : "2" === t || "3" === t ? this.$t("message.trade.and") : this.$t("message.trade.for"), e
                        },
                        handleClose() {
                            this.$emit("listenClose", this.pendingDetail.status)
                        },
                        loadAnimation() {
                            this.animation = o().loadAnimation({
                                container: this.$refs.pendingAnimation,
                                renderer: "svg",
                                loop: !0,
                                autoplay: !0,
                                animationData: u
                            })
                        },
                        removeAnimation() {
                            this.animation && (this.animation.destroy(), this.animation = null)
                        }
                    }
                },
                d = c,
                p = n(50876),
                f = (0, p.A)(d, i, r, !1, null, "7e149add", null),
                h = f.exports
        },
        27555: function(t, e, n) {
            "use strict";
            n.d(e, {
                A: function() {
                    return c
                }
            });
            var i = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "setting"
                    }, [e("div", {
                        staticClass: "dialog_header"
                    }, [e("div", {
                        staticClass: "setting_title"
                    }, [t._v(t._s(t.$t("message.trade.transactionSettings")))]), e("img", {
                        staticClass: "setting_close",
                        attrs: {
                            alt: "close",
                            src: n(18730)
                        },
                        on: {
                            click: t.handleClose
                        }
                    })]), e("div", {
                        staticClass: "setting_tolerance"
                    }, [e("div", {
                        staticClass: "setting_tolerance_title"
                    }, [e("span", [t._v(t._s(t.$t("message.trade.slippageTolerance")))]), e("img", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                placement: (t.screenWidth, "right"),
                                arrow: !0
                            },
                            expression: "{ placement : screenWidth<960?'right':'right',  arrow: true }"
                        }],
                        attrs: {
                            content: t.$t("message.trade.slippageTolerancePrompt"),
                            alt: "prompt",
                            src: n(46867)
                        }
                    })]), e("div", {
                        staticClass: "setting_tolerance_content"
                    }, [e("div", {
                        class: .1 === t.slippage ? "setting_tolerance_item_selected" : "setting_tolerance_item",
                        on: {
                            click: function(e) {
                                return t.handleSlippage(.1)
                            }
                        }
                    }, [t._v("0.1%")]), e("div", {
                        class: .5 === t.slippage ? "setting_tolerance_item_selected" : "setting_tolerance_item",
                        on: {
                            click: function(e) {
                                return t.handleSlippage(.5)
                            }
                        }
                    }, [t._v("0.5%")]), e("div", {
                        class: 1 === t.slippage ? "setting_tolerance_item_selected" : "setting_tolerance_item",
                        on: {
                            click: function(e) {
                                return t.handleSlippage(1)
                            }
                        }
                    }, [t._v("1%")]), e("div", {
                        staticClass: "setting_tolerance_input"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.slippage,
                            expression: "slippage"
                        }],
                        attrs: {
                            placeholder: this.slippageTemp,
                            type: "number"
                        },
                        domProps: {
                            value: t.slippage
                        },
                        on: {
                            blur: t.onBlurDeadlineSlippage,
                            input: [function(e) {
                                e.target.composing || (t.slippage = e.target.value)
                            }, t.onInputDeadlineSlippage]
                        }
                    }), e("span", [t._v("%")])])])]), t.slippage >= 50 ? e("div", {
                        staticClass: "setting_tolerance_tip red"
                    }, [t._v(t._s(t.$t("message.trade.tips1")))]) : 0 == t.slippage ? e("div", {
                        staticClass: "setting_tolerance_tip"
                    }, [t._v(t._s(t.$t("message.trade.tips2")))]) : t.slippage > 5 ? e("div", {
                        staticClass: "setting_tolerance_tip"
                    }, [t._v(t._s(t.$t("message.trade.tips3")))]) : t._e(), e("div", {
                        staticClass: "setting_dealine"
                    }, [e("div", {
                        staticClass: "setting_dealine_title"
                    }, [e("span", [t._v(t._s(t.$t("message.trade.slippageDealine")))]), e("img", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                placement: (t.screenWidth, "right"),
                                arrow: !0
                            },
                            expression: "{ placement : screenWidth<960?'right':'right',  arrow: true }"
                        }],
                        attrs: {
                            content: t.$t("message.trade.slippageDealinePrompt"),
                            alt: "prompt",
                            src: n(46867)
                        }
                    })]), e("div", {
                        staticClass: "setting_dealine_input"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.deadline,
                            expression: "deadline"
                        }],
                        attrs: {
                            placeholder: "",
                            type: "number"
                        },
                        domProps: {
                            value: t.deadline
                        },
                        on: {
                            input: [function(e) {
                                e.target.composing || (t.deadline = e.target.value)
                            }, function(e) {
                                return t.onInputDeadline(t.deadline)
                            }]
                        }
                    }), e("span", [t._v(t._s(t.$t("message.trade.minutes")))])])])])
                },
                r = [],
                a = n(50651),
                s = {
                    name: "swapSetting",
                    data() {
                        return {
                            slippageTemp: "",
                            gasPrice: "",
                            slippage: "",
                            deadline: 20,
                            multipath: !1
                        }
                    },
                    computed: {
                        ...(0, a.L8)(["screenWidth"])
                    },
                    created() {
                        this.gasPrice = this.$store.getters.gasPrice, this.slippage = this.$store.getters.slippage, this.deadline = this.$store.getters.deadline, this.multipath = this.$store.getters.multipath, this.slippageTemp = this.$store.getters.slippage
                    },
                    mounted() {},
                    methods: {
                        handleClose() {
                            this.$emit("listenClose")
                        },
                        handlePrice(t) {
                            this.gasPrice = t, localStorage.setItem("gasPrice", t), this.$store.dispatch("wallet/setGasPrice", t)
                        },
                        handleSlippage(t) {
                            this.slippage = t, this.slippageTemp = t, localStorage.setItem("slippage", t), this.$store.dispatch("wallet/setSlippage", t)
                        },
                        handleMultipath(t) {
                            this.multipath = t, localStorage.setItem("multipath", t), this.$store.dispatch("wallet/setMultipath", t)
                        },
                        onInputDeadline(t) {
                            this.deadLine = t, localStorage.setItem("deadLine", t), this.$store.dispatch("wallet/setDeadline", t)
                        },
                        onBlurDeadlineSlippage() {
                            this.slippage = this.slippageTemp, localStorage.setItem("slippage", this.slippage), this.$store.dispatch("wallet/setSlippage", this.slippage)
                        },
                        onInputDeadlineSlippage(t) {
                            const e = t.target.value;
                            e >= 50 || "" === e ? this.slippage = e : this.slippageTemp = e
                        }
                    }
                },
                o = s,
                u = n(50876),
                l = (0, u.A)(o, i, r, !1, null, "0a7ffd65", null),
                c = l.exports
        },
        86177: function(t, e, n) {
            "use strict";
            n.d(e, {
                A: function() {
                    return $
                }
            });
            var i = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "select_token"
                    }, [e("div", {
                        staticClass: "dialog_header"
                    }, [e("div", {
                        staticClass: "token_title"
                    }, [t._v(t._s(0 === t.status ? t.$t("message.trade.selectToken") : t.$t("message.trade.manage")))]), e("img", {
                        staticClass: "token_close",
                        attrs: {
                            alt: "close",
                            src: n(18730)
                        },
                        on: {
                            click: t.handleClose
                        }
                    }), 1 === t.status ? e("img", {
                        staticClass: "token_back",
                        attrs: {
                            alt: "back",
                            src: n(75051)
                        },
                        on: {
                            click: t.handleBack
                        }
                    }) : t._e()]), 0 === t.status ? e("div", {
                        staticClass: "dialog_content"
                    }, [e("div", {
                        staticClass: "token_search"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.searchValue,
                            expression: "searchValue"
                        }],
                        attrs: {
                            placeholder: t.$t("message.trade.searchPlaceholder"),
                            type: "text"
                        },
                        domProps: {
                            value: t.searchValue
                        },
                        on: {
                            input: [function(e) {
                                e.target.composing || (t.searchValue = e.target.value)
                            }, function(e) {
                                return t.handleSearchValue(t.searchValue)
                            }]
                        }
                    }), e("img", {
                        attrs: {
                            alt: "search",
                            src: n(58294)
                        },
                        on: {
                            click: function(e) {
                                return t.handleSearchValue(t.searchValue)
                            }
                        }
                    })]), e("div", {
                        staticClass: "token_default"
                    }, t._l(t.currencyList, (function(n, i) {
                        return e("div", {
                            key: i,
                            staticClass: "token_default_item",
                            on: {
                                click: function(e) {
                                    return t.handleSelect(n)
                                }
                            }
                        }, [e("van-image", {
                            attrs: {
                                src: n.logoURI,
                                alt: "coin",
                                round: ""
                            }
                        }), e("span", [t._v(t._s(n.symbol))])], 1)
                    })), 0), e("div", {
                        staticClass: "token_line"
                    }), e("div", {
                        staticClass: "token_list"
                    }, [t._l(t.currencyList, (function(n, i) {
                        return e("div", {
                            key: i,
                            staticClass: "token_list_item"
                        }, [e("div", {
                            staticClass: "token_item",
                            on: {
                                click: function(e) {
                                    return t.handleSelect(n)
                                }
                            }
                        }, [e("van-image", {
                            attrs: {
                                src: n.logoURI,
                                alt: "coin",
                                round: ""
                            }
                        }), e("div", [e("span", [t._v(t._s(n.symbol))]), e("span", [t._v(t._s(t.toPrecision(n.balance)) + " " + t._s(n.symbol))])])], 1)])
                    })), t.searchErc20.address ? e("div", {
                        staticClass: "token_item_import"
                    }, [e("div", {
                        staticClass: "token_item_import_left"
                    }, [e("van-image", {
                        attrs: {
                            src: t.searchErc20.logoURI,
                            alt: "coin",
                            round: ""
                        }
                    }), e("div", [e("span", [e("span", [t._v(t._s(t.searchErc20.symbol))])]), e("span", [t._v(t._s(t.searchErc20.name))])])], 1), e("div", {
                        staticClass: "token_import",
                        on: {
                            click: t.importToken
                        }
                    }, [t._v(t._s(t.$t("message.trade.import")))])]) : t._e()], 2), e("div", {
                        staticClass: "token_manager",
                        on: {
                            click: t.handleManageTokens
                        }
                    }, [e("img", {
                        attrs: {
                            alt: "manager",
                            src: n(95363)
                        }
                    }), e("span", [t._v(t._s(t.$t("message.trade.manage")))])])]) : t._e(), 1 === t.status ? e("div", {
                        staticClass: "dialog_content"
                    }, [e("van-tabs", {
                        attrs: {
                            background: "transparent",
                            color: "white",
                            "line-height": "2px",
                            "line-width": "66px",
                            "title-active-color": "white",
                            "title-inactive-color": "#777"
                        },
                        model: {
                            value: t.active,
                            callback: function(e) {
                                t.active = e
                            },
                            expression: "active"
                        }
                    }, [e("van-tab", {
                        attrs: {
                            title: "List"
                        }
                    }, [e("div", {
                        staticClass: "manage_data"
                    }, [e("div", {
                        staticClass: "token_search"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.searchListValue,
                            expression: "searchListValue"
                        }],
                        attrs: {
                            placeholder: "https:// or ipfs:// or ENS name",
                            type: "text"
                        },
                        domProps: {
                            value: t.searchListValue
                        },
                        on: {
                            input: [function(e) {
                                e.target.composing || (t.searchListValue = e.target.value)
                            }, function(e) {
                                return t.handleSearchValue(t.searchListValue)
                            }]
                        }
                    }), e("img", {
                        attrs: {
                            alt: "search",
                            src: n(58294)
                        },
                        on: {
                            click: function(e) {
                                return t.handleSearchValue(t.searchListValue)
                            }
                        }
                    })]), t._e(), e("div", {
                        staticClass: "token_line"
                    }), e("div", {
                        staticClass: "manage_data_list"
                    }, t._l(t.list, (function(i, r) {
                        return e("div", {
                            key: r,
                            staticClass: "manage_data_list_item"
                        }, [e("div", {
                            staticClass: "item_left"
                        }, [e("img", {
                            attrs: {
                                src: n(31260)
                            }
                        }), e("div", {
                            staticClass: "item_left_text"
                        }, [e("span", [t._v(t._s(Object.keys(i)[0]))]), e("span", [t._v(t._s(i[Object.keys(i)[0]].name)), e("img", {
                            attrs: {
                                src: n(77019)
                            }
                        })])])]), e("van-switch", {
                            attrs: {
                                "active-color": "#AB6FED",
                                "inactive-color": "#1c1a21",
                                size: "25px"
                            },
                            on: {
                                change: function(t) {}
                            },
                            model: {
                                value: t.multipath,
                                callback: function(e) {
                                    t.multipath = e
                                },
                                expression: "multipath"
                            }
                        })], 1)
                    })), 0)])]), e("van-tab", {
                        attrs: {
                            title: "Token"
                        }
                    }, [e("div", {
                        staticClass: "manage_token"
                    }, [e("div", {
                        staticClass: "token_search"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.searchTokenValue,
                            expression: "searchTokenValue"
                        }],
                        attrs: {
                            placeholder: "0x0000",
                            type: "text"
                        },
                        domProps: {
                            value: t.searchTokenValue
                        },
                        on: {
                            input: [function(e) {
                                e.target.composing || (t.searchTokenValue = e.target.value)
                            }, function(e) {
                                return t.handleSearchValueStore(t.searchTokenValue)
                            }]
                        }
                    }), e("img", {
                        attrs: {
                            alt: "search",
                            src: n(58294)
                        },
                        on: {
                            click: function(e) {
                                return t.handleSearchValueStore(t.searchTokenValue)
                            }
                        }
                    })]), e("div", {
                        staticClass: "manage_token_list"
                    }, t._l(t.storeCurList, (function(i, r) {
                        return e("div", {
                            key: r,
                            staticClass: "manage_token_list_item"
                        }, [e("div", {
                            staticClass: "item_left"
                        }, [e("van-image", {
                            attrs: {
                                src: i.logoURI,
                                round: ""
                            }
                        }), e("span", [t._v(t._s(i.symbol))])], 1), e("div", {
                            staticClass: "item_right"
                        }, [e("van-image", {
                            attrs: {
                                src: n(74668)
                            },
                            on: {
                                click: function(e) {
                                    return t.handleDeleteCur(i, r)
                                }
                            }
                        }), e("van-image", {
                            attrs: {
                                src: n(57050)
                            },
                            on: {
                                click: function(e) {
                                    return t.viewToken(i.address)
                                }
                            }
                        })], 1)])
                    })), 0), e("div", {
                        staticClass: "manage_token_bottom"
                    }, [e("span", [t._v(t._s(t.storeCurList.length) + " Custom Tokens")]), e("div", {
                        on: {
                            click: t.clearAll
                        }
                    }, [t._v("Clear all")])])])])], 1)], 1) : t._e()])
                },
                r = [],
                a = (n(75231), n(21977), n(76133), n(86205)),
                s = n(31736),
                o = n(87275),
                u = n(15260),
                l = n(72403),
                c = n(72708),
                d = n(50651),
                p = n(40230),
                f = n(77662);
            /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            function h(t) {
                return t instanceof Uint8Array || ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name
            }

            function m(t, e) {
                return !!Array.isArray(e) && (0 === e.length || (t ? e.every((t => "string" === typeof t)) : e.every((t => Number.isSafeInteger(t)))))
            }

            function y(t) {
                if ("function" !== typeof t) throw new Error("function expected");
                return !0
            }

            function _(t, e) {
                if ("string" !== typeof e) throw new Error(`${t}: string expected`);
                return !0
            }

            function g(t) {
                if (!Number.isSafeInteger(t)) throw new Error(`invalid integer: ${t}`)
            }

            function v(t) {
                if (!Array.isArray(t)) throw new Error("array expected")
            }

            function b(t, e) {
                if (!m(!0, e)) throw new Error(`${t}: array of strings expected`)
            }

            function w(t, e) {
                if (!m(!1, e)) throw new Error(`${t}: array of numbers expected`)
            }

            function T(...t) {
                const e = t => t,
                    n = (t, e) => n => t(e(n)),
                    i = t.map((t => t.encode)).reduceRight(n, e),
                    r = t.map((t => t.decode)).reduce(n, e);
                return {
                    encode: i,
                    decode: r
                }
            }

            function A(t) {
                const e = "string" === typeof t ? t.split("") : t,
                    n = e.length;
                b("alphabet", e);
                const i = new Map(e.map(((t, e) => [t, e])));
                return {
                    encode: i => (v(i), i.map((i => {
                        if (!Number.isSafeInteger(i) || i < 0 || i >= n) throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${t}`);
                        return e[i]
                    }))),
                    decode: e => (v(e), e.map((e => {
                        _("alphabet.decode", e);
                        const n = i.get(e);
                        if (void 0 === n) throw new Error(`Unknown letter: "${e}". Allowed: ${t}`);
                        return n
                    })))
                }
            }

            function k(t = "") {
                return _("join", t), {
                    encode: e => (b("join.decode", e), e.join(t)),
                    decode: e => (_("join.decode", e), e.split(t))
                }
            }

            function x(t, e = "=") {
                return g(t), _("padding", e), {
                    encode(n) {
                        b("padding.encode", n);
                        while (n.length * t % 8) n.push(e);
                        return n
                    },
                    decode(n) {
                        b("padding.decode", n);
                        let i = n.length;
                        if (i * t % 8) throw new Error("padding: invalid, string should have whole number of bytes");
                        for (; i > 0 && n[i - 1] === e; i--) {
                            const e = i - 1,
                                n = e * t;
                            if (n % 8 === 0) throw new Error("padding: invalid, string has too much padding")
                        }
                        return n.slice(0, i)
                    }
                }
            }

            function I(t) {
                return y(t), {
                    encode: t => t,
                    decode: e => t(e)
                }
            }

            function C(t, e, n) {
                if (e < 2) throw new Error(`convertRadix: invalid from=${e}, base cannot be less than 2`);
                if (n < 2) throw new Error(`convertRadix: invalid to=${n}, base cannot be less than 2`);
                if (v(t), !t.length) return [];
                let i = 0;
                const r = [],
                    a = Array.from(t, (t => {
                        if (g(t), t < 0 || t >= e) throw new Error(`invalid integer: ${t}`);
                        return t
                    })),
                    s = a.length;
                while (1) {
                    let t = 0,
                        o = !0;
                    for (let r = i; r < s; r++) {
                        const s = a[r],
                            u = e * t,
                            l = u + s;
                        if (!Number.isSafeInteger(l) || u / e !== t || l - s !== u) throw new Error("convertRadix: carry overflow");
                        const c = l / n;
                        t = l % n;
                        const d = Math.floor(c);
                        if (a[r] = d, !Number.isSafeInteger(d) || d * n + t !== l) throw new Error("convertRadix: carry overflow");
                        o && (d ? o = !1 : i = r)
                    }
                    if (r.push(t), o) break
                }
                for (let o = 0; o < t.length - 1 && 0 === t[o]; o++) r.push(0);
                return r.reverse()
            }
            const E = (t, e) => 0 === e ? t : E(e, t % e),
                S = (t, e) => t + (e - E(t, e)),
                D = (() => {
                    let t = [];
                    for (let e = 0; e < 40; e++) t.push(2 ** e);
                    return t
                })();

            function B(t, e, n, i) {
                if (v(t), e <= 0 || e > 32) throw new Error(`convertRadix2: wrong from=${e}`);
                if (n <= 0 || n > 32) throw new Error(`convertRadix2: wrong to=${n}`);
                if (S(e, n) > 32) throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${S(e,n)}`);
                let r = 0,
                    a = 0;
                const s = D[e],
                    o = D[n] - 1,
                    u = [];
                for (const l of t) {
                    if (g(l), l >= s) throw new Error(`convertRadix2: invalid data word=${l} from=${e}`);
                    if (r = r << e | l, a + e > 32) throw new Error(`convertRadix2: carry overflow pos=${a} from=${e}`);
                    for (a += e; a >= n; a -= n) u.push((r >> a - n & o) >>> 0);
                    const t = D[a];
                    if (void 0 === t) throw new Error("invalid carry");
                    r &= t - 1
                }
                if (r = r << n - a & o, !i && a >= e) throw new Error("Excess padding");
                if (!i && r > 0) throw new Error(`Non-zero padding: ${r}`);
                return i && a > 0 && u.push(r >>> 0), u
            }

            function N(t) {
                g(t);
                const e = 256;
                return {
                    encode: n => {
                        if (!h(n)) throw new Error("radix.encode input should be Uint8Array");
                        return C(Array.from(n), e, t)
                    },
                    decode: n => (w("radix.decode", n), Uint8Array.from(C(n, t, e)))
                }
            }

            function M(t, e = !1) {
                if (g(t), t <= 0 || t > 32) throw new Error("radix2: bits should be in (0..32]");
                if (S(8, t) > 32 || S(t, 8) > 32) throw new Error("radix2: carry overflow");
                return {
                    encode: n => {
                        if (!h(n)) throw new Error("radix2.encode input should be Uint8Array");
                        return B(Array.from(n), 8, t, !e)
                    },
                    decode: n => (w("radix2.decode", n), Uint8Array.from(B(n, t, 8, e)))
                }
            }

            function O(t) {
                return y(t),
                    function(...e) {
                        try {
                            return t.apply(null, e)
                        } catch (n) {}
                    }
            }
            T(M(4), A("0123456789ABCDEF"), k("")), T(M(5), A("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), x(5), k("")), T(M(5), A("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), k("")), T(M(5), A("0123456789ABCDEFGHIJKLMNOPQRSTUV"), x(5), k("")), T(M(5), A("0123456789ABCDEFGHIJKLMNOPQRSTUV"), k("")), T(M(5), A("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), k(""), I((t => t.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")))), T(M(6), A("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), x(6), k("")), T(M(6), A("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), k("")), T(M(6), A("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), x(6), k("")), T(M(6), A("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), k(""));
            const L = t => T(N(58), A(t), k("")),
                P = L("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
                R = (L("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"), L("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"), T(A("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), k(""))),
                q = [996825010, 642813549, 513874426, 1027748829, 705979059];

            function F(t) {
                const e = t >> 25;
                let n = (33554431 & t) << 5;
                for (let i = 0; i < q.length; i++) 1 === (e >> i & 1) && (n ^= q[i]);
                return n
            }

            function U(t, e, n = 1) {
                const i = t.length;
                let r = 1;
                for (let a = 0; a < i; a++) {
                    const e = t.charCodeAt(a);
                    if (e < 33 || e > 126) throw new Error(`Invalid prefix (${t})`);
                    r = F(r) ^ e >> 5
                }
                r = F(r);
                for (let a = 0; a < i; a++) r = F(r) ^ 31 & t.charCodeAt(a);
                for (let a of e) r = F(r) ^ a;
                for (let a = 0; a < 6; a++) r = F(r);
                return r ^= n, R.encode(B([r % D[30]], 30, 5, !1))
            }

            function z(t) {
                const e = "bech32" === t ? 1 : 734539939,
                    n = M(5),
                    i = n.decode,
                    r = n.encode,
                    a = O(i);

                function s(t, n, i = 90) {
                    _("bech32.encode prefix", t), h(n) && (n = Array.from(n)), w("bech32.encode", n);
                    const r = t.length;
                    if (0 === r) throw new TypeError(`Invalid prefix length ${r}`);
                    const a = r + 7 + n.length;
                    if (!1 !== i && a > i) throw new TypeError(`Length ${a} exceeds limit ${i}`);
                    const s = t.toLowerCase(),
                        o = U(s, n, e);
                    return `${s}1${R.encode(n)}${o}`
                }

                function o(t, n = 90) {
                    _("bech32.decode input", t);
                    const i = t.length;
                    if (i < 8 || !1 !== n && i > n) throw new TypeError(`invalid string length: ${i} (${t}). Expected (8..${n})`);
                    const r = t.toLowerCase();
                    if (t !== r && t !== t.toUpperCase()) throw new Error("String must be lowercase or uppercase");
                    const a = r.lastIndexOf("1");
                    if (0 === a || -1 === a) throw new Error('Letter "1" must be present between prefix and data only');
                    const s = r.slice(0, a),
                        o = r.slice(a + 1);
                    if (o.length < 6) throw new Error("Data must be at least 6 characters long");
                    const u = R.decode(o).slice(0, -6),
                        l = U(s, u, e);
                    if (!o.endsWith(l)) throw new Error(`Invalid checksum in ${t}: expected "${l}"`);
                    return {
                        prefix: s,
                        words: u
                    }
                }
                const u = O(o);

                function l(t) {
                    const {
                        prefix: e,
                        words: n
                    } = o(t, !1);
                    return {
                        prefix: e,
                        words: n,
                        bytes: i(n)
                    }
                }

                function c(t, e) {
                    return s(t, r(e))
                }
                return {
                    encode: s,
                    decode: o,
                    encodeFromBytes: c,
                    decodeToBytes: l,
                    decodeUnsafe: u,
                    fromWords: i,
                    fromWordsUnsafe: a,
                    toWords: r
                }
            }
            z("bech32"), z("bech32m"), T(M(4), A("0123456789abcdef"), k(""), I((t => {
                if ("string" !== typeof t || t.length % 2 !== 0) throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);
                return t.toLowerCase()
            })));

            function H(t) {
                if (t) {
                    const e = t.substring(2),
                        n = new TextDecoder("utf-8").decode(P.decode(e));
                    return `0x${n}`
                }
                return ""
            }
            const V = /^I4[a-zA-Z0-9]{55}$/;
            var G = n(22853),
                j = {
                    name: "swapTokenList",
                    data() {
                        return {
                            active: 0,
                            tokenList: [],
                            currencyList: [],
                            currencyAllList: [],
                            storeCurList: [],
                            showBnb: !0,
                            searchValue: "",
                            searchListValue: "",
                            searchTokenValue: "",
                            searchErc20: {
                                name: "",
                                symbol: "",
                                address: "",
                                chainId: (0, o.F2)(),
                                decimals: 18,
                                balance: "",
                                logoURI: ""
                            },
                            list: [],
                            status: 0
                        }
                    },
                    computed: {
                        ...(0, d.L8)(["isConnectWallet", "currentNetworkID", "walletAddress", "gasPrice", "slippage", "deadline", "multipath"])
                    },
                    created() {},
                    mounted() {
                        this.getTokenLists()
                    },
                    watch: {
                        walletAddress() {
                            this.getTokenLists()
                        }
                    },
                    methods: {
                        viewToken: p.Vu,
                        async getTokenLists() {
                            const t = {
                                    chainID: (0, o.F2)()
                                },
                                e = await (0, a.i)(t);
                            e && (this.tokenList = e.tokens);
                            try {
                                const t = (0, o.F2)().toString(),
                                    e = f.I.get(t) ?? [];
                                this.storeCurList = e
                            } catch (n) {
                                this.storeCurList = []
                            }
                            this.currencyList = [s.x, ...this.tokenList, ...this.storeCurList], this.currencyAllList = [s.x, ...this.tokenList, ...this.storeCurList], this.handleCurrencyList()
                        },
                        clearAll() {
                            this.storeCurList = [];
                            const t = (0, o.F2)().toString();
                            f.I.set(t, []), this.handleCurrencyList()
                        },
                        handleDeleteCur(t, e) {
                            this.storeCurList.splice(e, 1);
                            const n = (0, o.F2)().toString();
                            f.I.set(n, this.storeCurList), this.currencyList = this.currencyList.filter(((e, n) => e.address.toLowerCase() != t.address.toLowerCase())), this.currencyAllList = this.currencyAllList.filter(((e, n) => e.address.toLowerCase() != t.address.toLowerCase()))
                        },
                        handleManageTokens() {
                            this.status = 1, this.active = 0, this.searchListValue = "", this.searchTokenValue = "", this.handleSearchValueStore(this.searchTokenValue)
                        },
                        handleClose() {
                            const t = {
                                name: "",
                                symbol: "",
                                address: "",
                                chainId: (0, o.F2)(),
                                decimals: "",
                                balance: "",
                                logoURI: ""
                            };
                            this.searchErc20 = t, this.searchValue = "", this.handleBack(), this.$emit("listenClose")
                        },
                        handleBack() {
                            this.status = 0
                        },
                        importToken() {
                            this.$emit("listenImport", this.searchErc20)
                        },
                        handleSelect(t) {
                            this.$emit("listenSelectCurrency", t), this.searchValue = ""
                        },
                        async handleSearchValueStore(t) {
                            const e = t.toLowerCase(),
                                n = (0, o.F2)().toString(),
                                i = f.I.get(n) ?? [];
                            this.storeCurList = this.filterList(i, e)
                        },
                        async handleSearchValue(t) {
                            let e = t;
                            V.test(e) && (e = H(e)), e = e.toLowerCase();
                            const n = this.filterList(this.currencyAllList, e);
                            if (this.currencyList = n, c.Ay$.utils.isAddress(e) && 0 == n.length) await this.getErc20AllInfo(c.Ay$.utils.toChecksumAddress(e));
                            else if ((0, G.ZS)(e)) {
                                const t = {
                                    name: "",
                                    symbol: "",
                                    address: "",
                                    chainId: (0, o.F2)(),
                                    decimals: "",
                                    balance: "",
                                    logoURI: ""
                                };
                                this.searchErc20 = t
                            }
                        },
                        async getErc20AllInfo(t) {
                            try {
                                const e = (0, l.H7)(t),
                                    n = await e.methods.decimals().call(),
                                    i = await e.methods.name().call(),
                                    r = await e.methods.symbol().call();
                                this.searchErc20.address = t, this.searchErc20.decimals = parseFloat(n), this.searchErc20.name = i, this.searchErc20.symbol = r, this.searchErc20.logoURI = (0, o.MY)() + t + ".png"
                            } catch (e) {
                                console.log("search erc20 toekn error =", e)
                            }
                        },
                        async handleCurrencyList() {
                            let t;
                            try {
                                const e = (0, o.F2)().toString();
                                t = f.I.get(e) ?? []
                            } catch (n) {
                                t = []
                            }
                            const e = await this.getTokensBalance([...this.tokenList, ...t]);
                            this.currencyList = await this.getBnbBalance(e), this.currencyAllList = this.currencyList
                        },
                        filterList(t, e) {
                            if (e) {
                                const n = t.filter((t => t.address.toLowerCase().includes(e) || t.name.toLowerCase().includes(e) || t.symbol.toLowerCase().includes(e)));
                                return n
                            }
                            return t
                        },
                        async getBnbBalance(t) {
                            const e = s.x;
                            if (this.showBnb) {
                                if (this.walletAddress) {
                                    const t = await o.Ay.getWeb3ModalProvider(!1).eth.getBalance(this.walletAddress);
                                    e.balance = (0, u.QX)((0, u.ej)(t))
                                }
                                return [e, ...t]
                            }
                            return t
                        },
                        async getTokensBalance(t) {
                            if (this.walletAddress) {
                                const e = t.map((t => {
                                        const e = (0, l.H7)(t.address);
                                        return e.methods.balanceOf(this.walletAddress).call()
                                    })),
                                    n = await Promise.all(e);
                                return t.map(((t, e) => ({
                                    ...t,
                                    balance: (0, u.QX)((0, u.ej)(n[e], t.decimals))
                                })))
                            }
                            return t.map((t => ({
                                ...t,
                                balance: ""
                            })))
                        },
                        toPrecision: u.QX
                    }
                },
                W = j,
                K = n(50876),
                X = (0, K.A)(W, i, r, !1, null, "a80cd8a6", null),
                $ = X.exports
        },
        13277: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_check_wxz.b570ec4c.svg"
        },
        94074: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_check_xz.fff37157.svg"
        },
        12275: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_coin_down.39d40c4f.svg"
        },
        48911: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_coin_switch.50a0e85f.svg"
        },
        62663: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_fail.459cec60.svg"
        },
        20525: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_import_tips.9fcafc69.svg"
        },
        74668: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_manage_del.7b9800eb.svg"
        },
        77019: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_manage_setting.40ff5675.svg"
        },
        57050: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_manage_view.44992cd0.svg"
        },
        76766: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_submitted.3dcfe6f8.svg"
        },
        75051: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_trade_back.230e6cbe.svg"
        },
        95363: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_trade_manager.318c713e.svg"
        },
        58294: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_trade_search.da2ddb5f.svg"
        },
        81978: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_trade_setting.b368b77c.svg"
        },
        46867: function(t, e, n) {
            "use strict";
            t.exports = n.p + "img/icon_white_prompt.12a0361f.svg"
        },
        31260: function(t) {
            "use strict";
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAA+VBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAICAgAAAAAAAAAAAAAAAAAAAAAAAAAAADtGyQAAAD////sGiLrFyLwGCbpGxznHSHzFib98APwGiD89QPsHCjsDyXwEyv29wIdHR338QXuaRf+/PzlEiL95ufzZmz86g3xSVF8fHzLy8tMTEySkpL79/jmVhbgIhj2Ei7zmBT3mJz5u77+8fHmLBvvKjPwPkb4zQ7w8PClpaXAwMC0tLTV1dX2rRX83d743QztgBLjPhb4qq31vhBoaGgzMzPyVFv81Nb1g4jdFhj0exrwSR7h4eHsOB76xMb6zM71XSj7zs/ygUGk7vGtAAAAD3RSTlMA5dfGLfFB/aFWDbQch23b1/BFAAALeUlEQVRo3rRaCVfizBJ1Q0DUaHe6Q8giEAhuhKggzigC4qiAON95///HvOqkk3QgIDhQc45nUMilqm7dql62tla2vexRbndnZzt1cpLa3tnZzR1l97Y2bIfHmZ2TRNvJHB9uCPQgOw80As8erB02m0mfLGGpzP46UfcyqZOlbftoXRnfz52saLl1QGd3px97dnl+9Xjx9Plwevrw+XTxeHV+eTYD/a8R34/zKX15dXGaaBfnl3ES7P6L1weZmKfnAFo+nW8X5zHPj35M8WOBUmevF6dL2O9Xwe/t7M/EQkju2a/Tpe1KcDv3A1HJRu7+eZx5+l2l8vz8/v78XKncTf+t/OtP5PTKJDuKvH2MJfbu66Za0yTPkPdTq1VvvuLwvyKvj38a5nPBlfeX6r2EUIiKghfw87768h59wYfzKNwrcGxvO/jU5WeE+/zRAvekwBgmCr4Fc1xqfTxH734K472zdKL3g/SmI05dv7xJcWOYGE398u3lOmJZmOglSzobVMTZUxjkl3tJmgVGFpr59f1LGPDfQaZTS1HsOAzzQ/CEr3uZipCYSBIlBsbjEqBTKgQcIn7/FXzu8zJ4VnYF3Kswt1WiKKrolUYNpV/q682BO8SKomhTjlfDXIcc+9bn/en03n1ohKgxYESopDtu1+0URgahYNPx1j6upxKd/ibP+zy/6d/8g+/3CMuypmnxUCPNmLSLdsFtylhWSUKq3/kDHvkTUwuR91JTtHrRMHaIrMWc0gxFo0rDLZpmvt3rYyP2tYI3vQStg1Nse0FVHfD6TXPc6yrCGP/XJ4qEYqFWkTGsd03b7LqjsRr/a5RpHu4n7vPufOCgC/I439UMRPRme4wRwcITZcmR9fpg4HaLY91SVQlr8E1kZcplrcZ19HfQJ+cWMH8D51XlHhkIN+r2yEJYipNLlid1RxvZfd1ALCqEAgVn/L6vcOleTLDDVKyOKiDLEpUN1+xQQ44DSxjEw2j0B30dU3BWI7JBnASKVWLc3k6Wbd4YLnmc75k4UaPZNrt1XRZdRrKMqNwwCBlLDSgthWBDhl8m5PmeR5srSWaBcpz5lLiuea5pRt0u5HtWAm1JQ1ItrBIIR38ylFQDJ1Gs5j/u4WyujhykREKXq35MIdKFfL5j0cgdJGmIIJk4KtaoDNkwcN/tW0pzTBO57Uv3Be9UcxnNE/whyyx0LNKFYr470QNCaxLgsW7I9VmWqESag/a4NBgRYPK01wh/xNJ8PEcqeYJvQffBVGLV7WLeLPYs77XXDxAlsR7VaOjDjtm1B5ouIU1CM9C3/jP9/pyalhE+P/uBfm4ZOjND0V2zCALVsXRuCqZELFikSmgyatumXdL9VjkD3PJbxlMiv7LinFP+X68UWNss5ItmN3zdKzWtWMNQSGkAsGax08TCMJRAsFcfYy/BYc7oj3q7AJYvAKhp2nlAzucLnsFXGCoxFZNJs1l3C0UbkIcAmtAwtA+R2ZmEDPuSVWkN+67t4UApAWw+b0M78F53+lBA4kOpZkB3HufdSb039niQwGytIgrY4Yx2nPksgEqySKldLDJM9s8z28wXuyPNCqfa8KlYtiagMZaOpTmGqr42zLgcc/iWfW1Z7w+AVsVCPjDTNNt1w5JmOxGW8aTnGFhF0ly7FUvqYKqGz7xSL9dYuGQNa6Mua7h5hg0EK9ruRPcGy9jzfTapDtQ3WgBcKwsuh7V8kBa049YrTkypoZcGBZOF23O7W3J0haDpgvGzqmqKhBYBc5fP4/Llq3Tap3SNPRnJloOZTnvAzGW7NNSIN2mgmCYjT2p0jSCqLcCV3nxixyvKp9arP8n6EgW9RtGsHpRnvuhjd4hBAHPaLdapEYg20SR5oc9/hS7FJ4JDcex4C3QBy5QMWAEXGb3zZrepE5LgFGJsk2EQUCEe7L8Lie1X1LYYab+WKvzRMuuIY2gQNtAZpklgV12XlMRoEooUlUB/ZD7Di2Rkv5av00J3zAlqeRMIEgzLeq/IAt112wUm2K4jK7ONj3h800slnWhsDKZkXrhvBN30Y+03Yn+noRZyhiI8KALioG71O5Brs93X5YSHsv6p4I5rGCzerFXPqyh/zI4GTl890n5bCh2B4bnZLeRtt2kpBu3ZICXMqdkIGpg6w2a7PXacpkM1WZ5Lr+eI1+mDcO1/GYs0NFaCS6wlkIaiKjqtdwqmayUAIxn91+l0ICCDwX+U4vm4PNZ/wiTvCupRjcrTQJ1ip27BRAfTnAxtozhwjNkcQyk1S4wEdrckYbygkjmvz8Mkp6MUl1vhu4bGGMKsG9SRmB+apfXaJUuZeRylqtLot4umXbc8ZZlfy61yLMmHQorfo9QRUupRrMAcy8YoIBDS6yM6G0jEumK/bdt5NoFIaJHP71GStwNu/YmnGAZ5qTlsQIGCaCswVLP1t6U6s6FWAVfvdUvjQUfDSFqo136Sz3iHOha4JaS4YcCc7EkkqDFmReLAAjzBH/hi1qhuNWhvgqe2Y6YLoBpjV0aQj5rgCSxNmQMwQfvizVqWrIW7HwRkiqoyxmwhocJKVacELW5QvFG88r2JXWEGaElLGagLTPrAt8ZwAmtFb9nOVm5o8ce0VozWO1GHuFsO1xviDaep69jtgZpRTzbRt8CSdBf1iQwHforp1jdmKMTQ+26pWbd7OrgM3wSh7+Icape/Ws5t+ZsA3gbe3yWBQSRxwxoV2l2zZOkNAzv0e9CwJ1/wQk5FwLfSsjlm3KIwTJvtXr0pQSkvB/wVrSh2OPDDKsBMyjUZuTAk2O1OHeQcLfcxb/D65Arijx/+Fs/SHjuS4rCOVXAnjmVZDl3qc/5G0LUvlVyqr1cBVqFurXpnBC2r3jCg+S/ohTGLAQuhXtpjmAVREzrIGBYQ6jJ0FkPti3VKZPXSOZZVaFgGpUPQSiQrCiE/yLFQx3+XJpcDWi4RBWYTymYkbcmP/RVZvRu14/flQ01kNtjK0uK2sEBAdvmM+biKZP7Y7qJJIMe709UqTeKn1hKWjBk+671Ot8VN2Ftsss4mDQKbsQ9h+ZTd2hMWMDcbxUXi6LO3dXASSdf7Zj0Whr0TGG+3o0mgvFF2iePtztSabaNJFgf6TLhKvdx8ksUlDDuH8tl1Ul5l+PmRPUe9yd/r2k5Ypm7AvGVq+bew/ZJJWJhvLNKvwh5b0lbE+o1vK6aFo0a+zRXbfNkUpx+jdXlYUHy7aVPA4nZTJrZZ7a9UN+Uy32BLx49EUlNbihswb+opX4nbXDObqBupJXETNTrq24ttG2/M4WDbWNgpzwnbApsQbJ/S5dmzAb5T7k1e5cq6exRqxY4G9mbPFflhyM1mRIsfhuQSzrvS59G54jqZteD4JzhK/eQHXmsdACrigVdu+nZA/IhvncBf4hFf+nDOoSY/Lf9Y92wZlNLRN8e41+uqKRw/xk06M+cH13+u10qwt/jBdXbBUf1rdFT/7zZ1VJ9beDkhuBSxBmoHlxPOF15OCK9jPAbXQP45znex6xjzbxpl4hd97qprye/3F1C2DnbiV27K/1RVH/xG2cX3V26iS0bB7c/bHye6dbvCJaOEa1WVHya6Vgnuzy11rSoiWMDt0/LND5zWboKLe7+WvEgmXJ0LLmSWKytzrFpZ/epc4mXB25XEJLos+P9ZkLJYECm04UlMUMeJaKvNECszNUlbHom8IFQbsfzViKhU5mYkSP6CUFxLYFUMCdjtZqiCUO1DxhJYXIt+gXY7qeJI46aqTki2CuqQt+gXfZkzCvBHLHOG5h11VcNAVDXW5C5zHsCF3cDgZqLCUnby1u8P0OJ9kKcxtysI0mO7AikbNKyoukED+5YUVy0NbSvkLSkuNNiSAvY1M6mbcDiotf+HxG1HVN3qxck9EButYFvLGAlsLeOlwdYyaJjzcTPi3M9Gq810cJ9TZ/sgALbqX+bTrmuuAAAAAElFTkSuQmCC"
        },
        3869: function(t, e, n) {
            "use strict";
            var i = n(96071),
                r = n(39355),
                a = n(10419),
                s = n(25852),
                o = n(67512),
                u = TypeError;
            i({
                target: "Iterator",
                proto: !0,
                real: !0
            }, {
                reduce: function(t) {
                    s(this), a(t);
                    var e = o(this),
                        n = arguments.length < 2,
                        i = n ? void 0 : arguments[1],
                        l = 0;
                    if (r(e, (function(e) {
                            n ? (n = !1, i = e) : i = t(i, e, l), l++
                        }), {
                            IS_RECORD: !0
                        }), n) throw new u("Reduce of empty iterator with no initial value");
                    return i
                }
            })
        },
        96147: function(t) {
            "use strict";
            t.exports = JSON.parse('{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"reserve0","type":"uint112"},{"internalType":"uint112","name":"reserve1","type":"uint112"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"evm":{"bytecode":{"linkReferences":{},"object":"","opcodes":"","sourceMap":""},"deployedBytecode":{"linkReferences":{},"object":"","opcodes":"","sourceMap":""}},"metadata":"{\\"compiler\\":{\\"version\\":\\"0.5.16+commit.9c3226ce\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"Burn\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Mint\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0In\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1In\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0Out\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1Out\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"Swap\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint112\\",\\"name\\":\\"reserve0\\",\\"type\\":\\"uint112\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint112\\",\\"name\\":\\"reserve1\\",\\"type\\":\\"uint112\\"}],\\"name\\":\\"Sync\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"DOMAIN_SEPARATOR\\",\\"outputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"\\",\\"type\\":\\"bytes32\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"MINIMUM_LIQUIDITY\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"PERMIT_TYPEHASH\\",\\"outputs\\":[{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"\\",\\"type\\":\\"bytes32\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"allowance\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"burn\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"decimals\\",\\"outputs\\":[{\\"internalType\\":\\"uint8\\",\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"factory\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getReserves\\",\\"outputs\\":[{\\"internalType\\":\\"uint112\\",\\"name\\":\\"reserve0\\",\\"type\\":\\"uint112\\"},{\\"internalType\\":\\"uint112\\",\\"name\\":\\"reserve1\\",\\"type\\":\\"uint112\\"},{\\"internalType\\":\\"uint32\\",\\"name\\":\\"blockTimestampLast\\",\\"type\\":\\"uint32\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"initialize\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"kLast\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"mint\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"liquidity\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"nonces\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"deadline\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint8\\",\\"name\\":\\"v\\",\\"type\\":\\"uint8\\"},{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"r\\",\\"type\\":\\"bytes32\\"},{\\"internalType\\":\\"bytes32\\",\\"name\\":\\"s\\",\\"type\\":\\"bytes32\\"}],\\"name\\":\\"permit\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"price0CumulativeLast\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"price1CumulativeLast\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"}],\\"name\\":\\"skim\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount0Out\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount1Out\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bytes\\",\\"name\\":\\"data\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"swap\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"sync\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"token0\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"token1\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"contracts/interfaces/IUniswapV2Pair.sol\\":\\"IUniswapV2Pair\\"},\\"evmVersion\\":\\"istanbul\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":true,\\"runs\\":999999},\\"remappings\\":[]},\\"sources\\":{\\"contracts/interfaces/IUniswapV2Pair.sol\\":{\\"keccak256\\":\\"0x7c9bc70e5996c763e02ff38905282bc24fb242b0ef2519a003b36824fc524a4b\\",\\"urls\\":[\\"bzz-raw://85d5ad2dd23ee127f40907a12865a1e8cb5828814f6f2480285e1827dd72dedf\\",\\"dweb:/ipfs/QmayKQWJgWmr46DqWseADyUanmqxh662hPNdAkdHRjiQQH\\"]}},\\"version\\":1}","interface":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"reserve0","type":"uint112"},{"internalType":"uint112","name":"reserve1","type":"uint112"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":""}')
        }
    }
]);