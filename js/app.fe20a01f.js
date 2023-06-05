(function(t) {
    function e(e) {
        for (var a, i, o = e[0], c = e[1], u = e[2], l = 0, p = []; l < o.length; l++)
            i = o[l],
            Object.prototype.hasOwnProperty.call(s, i) && s[i] && p.push(s[i][0]),
            s[i] = 0;
        for (a in c)
            Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        d && d(e);
        while (p.length)
            p.shift()();
        return r.push.apply(r, u || []),
            n()
    }

    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], a = !0, i = 1; i < n.length; i++) {
                var o = n[i];
                0 !== s[o] && (a = !1)
            }
            a && (r.splice(e--, 1),
                t = c(c.s = n[0]))
        }
        return t
    }
    var a = {},
        i = {
            app: 0
        },
        s = {
            app: 0
        },
        r = [];

    function o(t) {
        return c.p + "js/" + ({
            index: "index"
        }[t] || t) + ".fe20a01f.js"
    }

    function c(e) {
        if (a[e])
            return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, c),
            n.l = !0,
            n.exports
    }
    c.e = function(t) {
            var e = [],
                n = {
                    index: 1
                };
            i[t] ? e.push(i[t]) : 0 !== i[t] && n[t] && e.push(i[t] = new Promise((function(e, n) {
                for (var a = "css/" + ({
                        index: "index"
                    }[t] || t) + ".fe20a01f.css", s = c.p + a, r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                    var u = r[o],
                        l = u.getAttribute("data-href") || u.getAttribute("href");
                    if ("stylesheet" === u.rel && (l === a || l === s))
                        return e()
                }
                var p = document.getElementsByTagName("style");
                for (o = 0; o < p.length; o++) {
                    u = p[o],
                        l = u.getAttribute("data-href");
                    if (l === a || l === s)
                        return e()
                }
                var d = document.createElement("link");
                d.rel = "stylesheet",
                    d.type = "text/css",
                    d.onload = e,
                    d.onerror = function(e) {
                        var a = e && e.target && e.target.src || s,
                            r = new Error("Loading CSS chunk " + t + " failed.\n(" + a + ")");
                        r.code = "CSS_CHUNK_LOAD_FAILED",
                            r.request = a,
                            delete i[t],
                            d.parentNode.removeChild(d),
                            n(r)
                    },
                    d.href = s;
                var y = document.getElementsByTagName("head")[0];
                y.appendChild(d)
            })).then((function() {
                i[t] = 0
            })));
            var a = s[t];
            if (0 !== a)
                if (a)
                    e.push(a[2]);
                else {
                    var r = new Promise((function(e, n) {
                        a = s[t] = [e, n]
                    }));
                    e.push(a[2] = r);
                    var u, l = document.createElement("script");
                    l.charset = "utf-8",
                        l.timeout = 120,
                        c.nc && l.setAttribute("nonce", c.nc),
                        l.src = o(t);
                    var p = new Error;
                    u = function(e) {
                        l.onerror = l.onload = null,
                            clearTimeout(d);
                        var n = s[t];
                        if (0 !== n) {
                            if (n) {
                                var a = e && ("load" === e.type ? "missing" : e.type),
                                    i = e && e.target && e.target.src;
                                p.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")",
                                    p.name = "ChunkLoadError",
                                    p.type = a,
                                    p.request = i,
                                    n[1](p)
                            }
                            s[t] = void 0
                        }
                    };
                    var d = setTimeout((function() {
                        u({
                            type: "timeout",
                            target: l
                        })
                    }), 12e4);
                    l.onerror = l.onload = u,
                        document.head.appendChild(l)
                }
            return Promise.all(e)
        },
        c.m = t,
        c.c = a,
        c.d = function(t, e, n) {
            c.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        },
        c.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        },
        c.t = function(t, e) {
            if (1 & e && (t = c(t)),
                8 & e)
                return t;
            if (4 & e && "object" === typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (c.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var a in t)
                    c.d(n, a, function(e) {
                            return t[e]
                        }
                        .bind(null, a));
            return n
        },
        c.n = function(t) {
            var e = t && t.__esModule ? function() {
                    return t["default"]
                } :
                function() {
                    return t
                };
            return c.d(e, "a", e),
                e
        },
        c.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        c.p = "/",
        c.oe = function(t) {
            throw console.error(t),
                t
        };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = e,
        u = u.slice();
    for (var p = 0; p < u.length; p++)
        e(u[p]);
    var d = l;
    r.push([0, "chunk-vendors"]),
        n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "01a0": function(t, e, n) {
        "use strict";
        n("edc4")
    },
    "0a78": function(t) {
        t.exports = JSON.parse('{"InscriptionFactory":{"address":"0xc7529e298f91537a97061b5d38782970a485b941","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"tick","type":"string"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"cap","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"limitPerMint","type":"uint256"},{"indexed":false,"internalType":"address","name":"inscriptionAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"DeployInscription","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"baseFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"_tick","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"uint256","name":"_limitPerMint","type":"uint256"},{"internalType":"uint256","name":"_maxMintSize","type":"uint256"},{"internalType":"uint256","name":"_freezeTime","type":"uint256"},{"internalType":"address","name":"_onlyContractAddress","type":"address"},{"internalType":"uint256","name":"_onlyMinQuantity","type":"uint256"},{"internalType":"uint256","name":"_crowdFundingRate","type":"uint256"},{"internalType":"address","name":"_crowdFundingAddress","type":"address"}],"name":"deploy","outputs":[{"internalType":"address","name":"_inscriptionAddress","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fundingCommission","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getIncriptionById","outputs":[{"components":[{"internalType":"string","name":"tick","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"cap","type":"uint256"},{"internalType":"uint256","name":"limitPerMint","type":"uint256"},{"internalType":"uint256","name":"maxMintSize","type":"uint256"},{"internalType":"uint256","name":"inscriptionId","type":"uint256"},{"internalType":"uint256","name":"freezeTime","type":"uint256"},{"internalType":"address","name":"onlyContractAddress","type":"address"},{"internalType":"uint256","name":"onlyMinQuantity","type":"uint256"},{"internalType":"uint256","name":"crowdFundingRate","type":"uint256"},{"internalType":"address","name":"crowdfundingAddress","type":"address"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct InscriptionFactory.Token","name":"","type":"tuple"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_tick","type":"string"}],"name":"getIncriptionByTick","outputs":[{"components":[{"internalType":"string","name":"tick","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"cap","type":"uint256"},{"internalType":"uint256","name":"limitPerMint","type":"uint256"},{"internalType":"uint256","name":"maxMintSize","type":"uint256"},{"internalType":"uint256","name":"inscriptionId","type":"uint256"},{"internalType":"uint256","name":"freezeTime","type":"uint256"},{"internalType":"address","name":"onlyContractAddress","type":"address"},{"internalType":"uint256","name":"onlyMinQuantity","type":"uint256"},{"internalType":"uint256","name":"crowdFundingRate","type":"uint256"},{"internalType":"address","name":"crowdfundingAddress","type":"address"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct InscriptionFactory.Token","name":"","type":"tuple"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_tick","type":"string"}],"name":"getIncriptionIdByTick","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pageNo","type":"uint256"},{"internalType":"uint256","name":"_pageSize","type":"uint256"},{"internalType":"uint256","name":"_type","type":"uint256"},{"internalType":"string","name":"_searchBy","type":"string"}],"name":"getIncriptions","outputs":[{"components":[{"internalType":"string","name":"tick","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"cap","type":"uint256"},{"internalType":"uint256","name":"limitPerMint","type":"uint256"},{"internalType":"uint256","name":"maxMintSize","type":"uint256"},{"internalType":"uint256","name":"inscriptionId","type":"uint256"},{"internalType":"uint256","name":"freezeTime","type":"uint256"},{"internalType":"address","name":"onlyContractAddress","type":"address"},{"internalType":"uint256","name":"onlyMinQuantity","type":"uint256"},{"internalType":"uint256","name":"crowdFundingRate","type":"uint256"},{"internalType":"address","name":"crowdfundingAddress","type":"address"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct InscriptionFactory.Token[]","name":"inscriptions_","type":"tuple[]"},{"internalType":"uint256[]","name":"totalSupplies_","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInscriptionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_type","type":"uint256"}],"name":"getInscriptionAmountByType","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inscriptionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFrozenTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNameSize","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTickSize","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"updateBaseFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"updateFundingCommission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_size","type":"uint8"}],"name":"updateTickSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"Inscription":{"address":"","abi":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_tick","type":"string"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"uint256","name":"_limitPerMint","type":"uint256"},{"internalType":"uint256","name":"_inscriptionId","type":"uint256"},{"internalType":"uint256","name":"_maxMintSize","type":"uint256"},{"internalType":"uint256","name":"_freezeTime","type":"uint256"},{"internalType":"address","name":"_onlyContractAddress","type":"address"},{"internalType":"uint256","name":"_onlyMinQuantity","type":"uint256"},{"internalType":"uint256","name":"_baseFee","type":"uint256"},{"internalType":"uint256","name":"_fundingCommission","type":"uint256"},{"internalType":"uint256","name":"_crowdFundingRate","type":"uint256"},{"internalType":"address payable","name":"_crowdFundingAddress","type":"address"},{"internalType":"address payable","name":"_inscriptionFactory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"batchMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"crowdFundingRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"crowdfundingAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freezeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundingCommission","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getMintFee","outputs":[{"internalType":"uint256","name":"mintedTimes","type":"uint256"},{"internalType":"uint256","name":"nextMintFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"inscriptionFactory","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inscriptionId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastMintFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastMintTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitPerMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyMinQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]},"ERC20":{"address":"","abi":[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}}')
    },
    "0b2d": function(t, e, n) {},
    "0b55": function(t, e, n) {},
    1: function(t, e) {},
    10: function(t, e) {},
    11: function(t, e) {},
    12: function(t, e) {},
    13: function(t, e) {},
    14: function(t, e) {},
    2: function(t, e) {},
    "2a2b": function(t, e, n) {},
    "2d88": function(t, e, n) {},
    3: function(t, e) {},
    "35fe": function(t, e, n) {
        "use strict";
        n("d7be")
    },
    "3d39": function(t, e, n) {},
    4: function(t, e) {},
    "40a1": function(t, e, n) {
        "use strict";
        n("5949")
    },
    4360: function(t, e, n) {
        "use strict";
        var a = n("2b0e"),
            i = n("2f62"),
            s = n("3835"),
            r = n("c7eb"),
            o = n("1da1"),
            c = (n("d3b7"),
                n("3ca3"),
                n("ddb0"),
                n("159b"),
                n("b64b"),
                n("d4ec")),
            u = n("bee2"),
            l = n("262e"),
            p = n("2caf"),
            d = (n("b0c0"),
                n("99af"),
                n("c030")),
            y = n("901e"),
            m = n.n(y),
            f = n("2eaf"),
            h = n("c0d8"),
            b = n.n(h),
            v = n("0a78"),
            g = function() {
                function t() {
                    Object(c["a"])(this, t),
                        this.account = "",
                        this.chainId = 1,
                        this.web3 = null
                }
                return Object(u["a"])(t, [{
                        key: "connect",
                        value: function() {
                            var t = Object(o["a"])(Object(r["a"])().mark((function t() {
                                var e, n, a, i, s, o = arguments;
                                return Object(r["a"])().wrap((function(t) {
                                    while (1)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (e = o.length > 0 && void 0 !== o[0] ? o[0] : "metamask",
                                                    n = [],
                                                    "walletconnect" !== e) {
                                                    t.next = 15;
                                                    break
                                                }
                                                return a = new f["a"]({
                                                        rpc: {
                                                            42161: "https://polygon-rpc.com"
                                                        }
                                                    }),
                                                    t.next = 6,
                                                    a.enable();
                                            case 6:
                                                return this.web3 = new b.a(a),
                                                    t.next = 9,
                                                    this.web3.eth.getAccounts();
                                            case 9:
                                                return n = t.sent,
                                                    t.next = 12,
                                                    this.web3.eth.getChainId();
                                            case 12:
                                                this.chainId = t.sent,
                                                    t.next = 27;
                                                break;
                                            case 15:
                                                return i = null,
                                                    window.ethereum && (i = window.ethereum),
                                                    window.okexchain && (i = window.okexchain),
                                                    this.web3 = new b.a(i),
                                                    t.next = 21,
                                                    i.request({
                                                        method: "eth_requestAccounts"
                                                    });
                                            case 21:
                                                return n = t.sent,
                                                    s = n[0],
                                                    this.account = s,
                                                    t.next = 26,
                                                    this.web3.eth.getChainId();
                                            case 26:
                                                this.chainId = t.sent;
                                            case 27:
                                                return n.length > 0 && (this.account = n[0]),
                                                    t.abrupt("return", n[0]);
                                            case 29:
                                            case "end":
                                                return t.stop()
                                        }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "initContractAll",
                        value: function(t) {
                            var e = null;
                            window.ethereum && (e = window.ethereum),
                                window.okexchain && (e = window.okexchain),
                                "undefined" !== typeof e && (this.web3 = new b.a(t),
                                    this.web3.setProvider("https://polygon-rpc.com"),
                                    this.InscriptionFactory = this.initContract(v.InscriptionFactory.abi, v.InscriptionFactory.address),
                                    this.Inscription = this.initContract(v.Inscription.abi, v.Inscription.address),
                                    this.ERC20 = this.initContract(v.ERC20.abi, v.ERC20.address))
                        }
                    }, {
                        key: "initContract",
                        value: function(t, e) {
                            return new this.web3.eth.Contract(t, e)
                        }
                    }]),
                    t
            }(),
            T = function(t) {
                Object(l["a"])(n, t);
                var e = Object(p["a"])(n);

                function n() {
                    return Object(c["a"])(this, n),
                        e.call(this)
                }
                return Object(u["a"])(n, [{
                        key: "queryBdogeToken",
                        value: function(t) {
                            return this.BNBDoge.methods.balanceOf(t).call({
                                from: this.account
                            })
                        }
                    }, {
                        key: "deploy",
                        value: function(t) {
                            console.log(t);
                            var e = "",
                                n = this.InscriptionFactory.methods.deploy(t.tick, t.name, t.cap, t.limitPerMint, t.maxMintSize, t.freezeTime, t.onlyContractAddress, t.onlyMinQuantity, t.crowdFundingRate, t.crowdFundingAddress).encodeABI();
                            return this.web3.eth.sendTransaction({
                                from: this.account,
                                to: this.InscriptionFactory._address,
                                data: n,
                                value: d["a"].utils.parseEther("0.01")
                            }).on("transactionHash", (function(t) {
                                e = t,
                                    a["a"].prototype.$notify({
                                        content: "Transaction Submitted",
                                        link: "".concat(F.state.setting.explorer).concat(t),
                                        type: "loading",
                                        timeout: 3e4
                                    })
                            })).on("receipt", (function(t) {
                                F.commit("user/receiptHash", t.transactionHash),
                                    a["a"].prototype.$notify({
                                        content: "Transaction Succeed",
                                        link: "".concat(F.state.setting.explorer).concat(t.transactionHash)
                                    })
                            })).on("error", (function(t) {
                                4001 == t.code ? a["a"].prototype.$toast(t.message) : (F.commit("user/receiptHash", e),
                                    a["a"].prototype.$notify({
                                        content: "Transaction Error",
                                        link: "".concat(F.state.setting.explorer).concat(e),
                                        type: "error",
                                        timeout: 3e4
                                    }))
                            }))
                        }
                    }, {
                        key: "queryInscriptionAmountByType",
                        value: function(t) {
                            return this.InscriptionFactory.methods.getInscriptionAmountByType(t).call({
                                from: this.account
                            })
                        }
                    }, {
                        key: "queryIncriptions",
                        value: function(t) {
                            return this.InscriptionFactory.methods.getIncriptions(t.pageNo, t.pageSize, t.type, t.searchBy).call({
                                from: this.account
                            })
                        }
                    }, {
                        key: "getMintFee",
                        value: function(t, e) {
                            return this.Inscription._address = e,
                                this.Inscription.methods.getMintFee(t).call({
                                    from: this.account
                                })
                        }
                    }, {
                        key: "mint",
                        value: function(t) {
                            console.log(t),
                                this.Inscription._address = t.contractAddress;
                            var e = m()(t.fee).plus(t.crowdFundingRate),
                                n = "",
                                i = this.Inscription.methods.mint(t.address).encodeABI();
                            return this.web3.eth.sendTransaction({
                                from: this.account,
                                to: this.Inscription._address,
                                data: i,
                                value: e
                            }).on("transactionHash", (function(t) {
                                n = t,
                                    a["a"].prototype.$notify({
                                        content: "Transaction Submitted",
                                        link: "".concat(F.state.setting.explorer).concat(t),
                                        type: "loading",
                                        timeout: 3e4
                                    })
                            })).on("receipt", (function(t) {
                                F.commit("user/receiptHash", t.transactionHash),
                                    a["a"].prototype.$notify({
                                        content: "Transaction Succeed",
                                        link: "".concat(F.state.setting.explorer).concat(t.transactionHash)
                                    })
                            })).on("error", (function(t) {
                                4001 == t.code ? a["a"].prototype.$toast(t.message) : (F.commit("user/receiptHash", n),
                                    a["a"].prototype.$notify({
                                        content: "Transaction Error",
                                        link: "".concat(F.state.setting.explorer).concat(n),
                                        type: "error",
                                        timeout: 3e4
                                    }))
                            }))
                        }
                    }, {
                        key: "batchMint",
                        value: function(t) {
                            this.Inscription._address = t.contractAddress;
                            var e = 0;
                            0 != t.crowdFundingRate && (e = m()(t.num).times(t.crowdFundingRate));
                            var n = "",
                                i = this.Inscription.methods.batchMint(t.address, t.num).encodeABI();
                            return this.web3.eth.sendTransaction({
                                from: this.account,
                                to: this.Inscription._address,
                                data: i,
                                value: e
                            }).on("transactionHash", (function(t) {
                                n = t,
                                    a["a"].prototype.$notify({
                                        content: "Transaction Submitted",
                                        link: "".concat(F.state.setting.explorer).concat(t),
                                        type: "loading",
                                        timeout: 3e4
                                    })
                            })).on("receipt", (function(t) {
                                F.commit("user/receiptHash", t.transactionHash),
                                    a["a"].prototype.$notify({
                                        content: "Transaction Succeed",
                                        link: "".concat(F.state.setting.explorer).concat(t.transactionHash)
                                    })
                            })).on("error", (function(t) {
                                4001 == t.code ? a["a"].prototype.$toast(t.message) : (F.commit("user/receiptHash", n),
                                    a["a"].prototype.$notify({
                                        content: "Transaction Error",
                                        link: "".concat(F.state.setting.explorer).concat(n),
                                        type: "error",
                                        timeout: 3e4
                                    }))
                            }))
                        }
                    }, {
                        key: "getIncriptionByTick",
                        value: function(t) {
                            return this.InscriptionFactory.methods.getIncriptionByTick(t).call({
                                from: this.account
                            })
                        }
                    }, {
                        key: "getBalance",
                        value: function(t, e) {
                            return this.Inscription._address = e,
                                this.Inscription.methods.balanceOf(t).call({
                                    from: this.account
                                })
                        }
                    }, {
                        key: "getSymbol",
                        value: function(t) {
                            return this.ERC20._address = t,
                                this.ERC20.methods.symbol().call({
                                    from: this.account
                                })
                        }
                    }, {
                        key: "getThisBalance",
                        value: function(t, e) {
                            return this.ERC20._address = e,
                                this.ERC20.methods.balanceOf(t).call({
                                    from: this.account
                                })
                        }
                    }]),
                    n
            }(g),
            w = null;
        window.ethereum && (w = window.ethereum);
        var k = new T;
        k.initContractAll(w),
            a["a"].prototype.$contract = k;
        var j = {
                account: "",
                web3: null,
                chainId: 1,
                contract: null,
                ETHToken: 0,
                transactionHash: "",
                wallet: localStorage.getItem("wallet") || "",
                receiptHash: ""
            },
            C = {
                login: function(t) {
                    var e = arguments;
                    return Object(o["a"])(Object(r["a"])().mark((function n() {
                        var a, i;
                        return Object(r["a"])().wrap((function(n) {
                            while (1)
                                switch (n.prev = n.next) {
                                    case 0:
                                        return a = e.length > 1 && void 0 !== e[1] ? e[1] : "metamask",
                                            n.next = 3,
                                            k.connect(a);
                                    case 3:
                                        return i = n.sent,
                                            t.commit("saveState", {
                                                account: i
                                            }),
                                            "metamask" == a && (t.dispatch("accountInfo"),
                                                t.dispatch("addNetwork"),
                                                w.on("accountsChanged", (function(e) {
                                                    t.dispatch("login")
                                                })),
                                                w.on("chainChanged", (function(e) {
                                                    t.dispatch("login")
                                                }))),
                                            n.abrupt("return", i);
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                        }), n)
                    })))()
                },
                accountInfo: function(t) {
                    return Object(o["a"])(Object(r["a"])().mark((function e() {
                        var n, a, i, o;
                        return Object(r["a"])().wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                    case 0:
                                        return n = k.web3.eth.getBalance(t.state.account),
                                            e.prev = 1,
                                            e.next = 4,
                                            Promise.all([n]);
                                    case 4:
                                        a = e.sent,
                                            i = Object(s["a"])(a, 1),
                                            o = i[0],
                                            t.commit("saveState", {
                                                ETHToken: o
                                            }),
                                            e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10,
                                            e.t0 = e["catch"](1),
                                            console.log(e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                        }), e, null, [
                            [1, 10]
                        ])
                    })))()
                },
                addNetwork: function(t) {
                    return Object(o["a"])(Object(r["a"])().mark((function t() {
                        return Object(r["a"])().wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                            t.next = 3,
                                            w.request({
                                                method: "wallet_switchEthereumChain",
                                                params: [{
                                                    chainId: "0x89"
                                                }]
                                            });
                                    case 3:
                                        t.next = 14;
                                        break;
                                    case 5:
                                        return t.prev = 5,
                                            t.t0 = t["catch"](0),
                                            t.prev = 7,
                                            t.next = 10,
                                            w.request({
                                                method: "wallet_addEthereumChain",
                                                params: [{
                                                    chainId: "0x89",
                                                    chainName: "Polygon",
                                                    rpcUrls: ["https://polygon-rpc.com"],
                                                    iconUrls: ["https://polygonscan.com/images/favicon.ico"],
                                                    blockExplorerUrls: ["https://polygonscan.com"],
                                                    nativeCurrency: {
                                                        name: "MATIC",
                                                        symbol: "MATIC",
                                                        decimals: 18
                                                    }
                                                }]
                                            });
                                    case 10:
                                        t.next = 14;
                                        break;
                                    case 12:
                                        t.prev = 12,
                                            t.t1 = t["catch"](7);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                        }), t, null, [
                            [0, 5],
                            [7, 12]
                        ])
                    })))()
                },
                LogOut: function(t) {
                    var e = t.commit;
                    e("saveState", {
                            account: "",
                            AISHIBToken: 0,
                            AISCODEToken: 0
                        }),
                        localStorage.removeItem("wallet")
                }
            },
            x = {
                saveState: function(t, e) {
                    Object.keys(e).forEach((function(n) {
                        Object.prototype.hasOwnProperty.call(t, n) && (t[n] = e[n])
                    }))
                },
                transactionHash: function(t, e) {
                    t.transactionHash = e
                },
                receiptHash: function(t, e) {
                    t.receiptHash = e
                }
            },
            _ = {
                namespaced: !0,
                state: j,
                actions: C,
                mutations: x
            },
            M = {
                explorer: "https://polygonscan.com/tx/",
                title: "Polygon ERC20",
                uploadProgress: 0,
                language: localStorage.getItem("language") || "en-US"
            },
            A = {
                UPDATE_TITLE: function(t, e) {
                    t.title = e
                },
                UPDATE_PROGRESS: function(t, e) {
                    t.uploadProgress = e
                },
                CODERULES_LOAD: function(t, e) {
                    t.coderules = e
                }
            },
            O = {
                updateProgress: function(t, e) {
                    var n = t.commit;
                    n("UPDATE_PROGRESS", e)
                }
            },
            S = {
                namespaced: !0,
                state: M,
                actions: O,
                mutations: A
            },
            E = {
                id: function(t) {
                    return t.user.id
                }
            },
            I = E;
        a["a"].use(i["a"]);
        var F = e["a"] = new i["a"].Store({
            modules: {
                user: _,
                setting: S
            },
            getters: I
        })
    },
    4678: function(t, e, n) {
        var a = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function i(t) {
            var e = s(t);
            return n(e)
        }

        function s(t) {
            if (!n.o(a, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                    e
            }
            return a[t]
        }
        i.keys = function() {
                return Object.keys(a)
            },
            i.resolve = s,
            t.exports = i,
            i.id = "4678"
    },
    5: function(t, e) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("e260"),
            n("e6cf"),
            n("cca6"),
            n("a79d");
        var a = n("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "wrapper"
                }, [n("pageHeader"), n("div", {
                    staticClass: "pages"
                }, [n("router-view")], 1), n("pageFooter")], 1)
            },
            s = [],
            r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "header"
                }, [t._m(0), n("div", {
                    staticClass: "right"
                }, [t._m(1), t.account ? n("div", {
                    staticClass: "walletAccount"
                }, [n("a", {
                    staticClass: "btnUi",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            t.accountDialog = !0
                        }
                    }
                }, [n("span", [t._v(" " + t._s(t.shortAccount))]), n("i", {
                    staticClass: "arraw"
                })])]) : n("div", {
                    staticClass: "walletAccount"
                }, [n("a", {
                    staticClass: "btnUi",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            return t.connectWalletBtn()
                        }
                    }
                }, [n("span", [t._v("Connect Wallet")])])])]), n("Dialog", {
                    attrs: {
                        title: "Account",
                        width: "500px",
                        visible: t.accountDialog
                    },
                    on: {
                        "update:visible": function(e) {
                            t.accountDialog = e
                        }
                    }
                }, [n("div", {
                    staticClass: "walletAccount"
                }, [n("div", {
                    staticClass: "address"
                }, [t._v(t._s(t.shortAccount8))]), n("div", {
                    staticClass: "coin"
                }, [n("img", {
                    attrs: {
                        src: "/images/coin/ETH.png",
                        alt: ""
                    }
                }), t._v(" "), n("span", [t._v(t._s(t._f("formatETH")(t.ETHToken)))])]), n("a", {
                    staticClass: "btnUi",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            return t.disconnect()
                        }
                    }
                }, [n("span", [t._v("Disconnect")])])])]), n("Dialog", {
                    attrs: {
                        title: "Connect Wallet",
                        width: "500px",
                        visible: t.dialogWallet
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogWallet = e
                        }
                    }
                }, [n("div", {
                    staticClass: "walletLogin"
                }, [n("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.loginMetamask()
                        }
                    }
                }, [n("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "/images/logos/metamask.svg",
                        alt: ""
                    }
                }), n("div", {
                    staticClass: "name"
                }, [t._v("Metamask")])]), n("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.loginOKXWallet()
                        }
                    }
                }, [n("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "/images/logos/okx.png",
                        alt: ""
                    }
                }), n("div", {
                    staticClass: "name"
                }, [t._v("OKX Wallet")])]), n("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.loginTokenPocket()
                        }
                    }
                }, [n("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "/images/logos/tokenpocket.png",
                        alt: ""
                    }
                }), n("div", {
                    staticClass: "name"
                }, [t._v("TokenPocket")])]), n("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.loginBitKeep()
                        }
                    }
                }, [n("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "/images/logos/bitkeep.png",
                        alt: ""
                    }
                }), n("div", {
                    staticClass: "name"
                }, [t._v("BitKeep")])])])])], 1)
            },
            o = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "logo"
                }, [t._v("Polygon"), n("span", {
                    staticClass: "name"
                }, [t._v("ERC20")]), t._v(" "), n("span", {
                    staticClass: "on"
                }, [t._v("beta")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "social"
                }, [n("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://twitter.com/yedek_yedek2"
                    }
                }, [n("img", {
                    attrs: {
                        src: "/images/common/footer_twitter.svg",
                        alt: ""
                    }
                })])])
            }],
            c = n("c7eb"),
            u = n("1da1"),
            l = n("5530"),
            p = (n("99af"),
                n("2f62")),
            d = {
                name: "pageHeader",
                components: {},
                data: function() {
                    return {
                        dialogWallet: !1,
                        accountDialog: !1
                    }
                },
                computed: Object(l["a"])(Object(l["a"])({}, Object(p["b"])({
                    account: function(t) {
                        return t.user.account || ""
                    },
                    wallet: function(t) {
                        return t.user.wallet
                    },
                    ETHToken: function(t) {
                        return t.user.ETHToken
                    }
                })), {}, {
                    shortAccount: function() {
                        return this.account ? "".concat(this.account.substr(0, 4), "...").concat(this.account.substr(-4, 4)) : ""
                    },
                    shortAccount8: function() {
                        return this.account ? "".concat(this.account.substr(0, 8), "...").concat(this.account.substr(-8, 8)) : ""
                    }
                }),
                created: function() {},
                mounted: function() {
                    var t = this;
                    setTimeout((function() {
                        t.connect()
                    }), 1e3)
                },
                methods: {
                    noOpen: function() {
                        this.$toast("Coming Soon...")
                    },
                    connectWalletBtn2: function() {
                        this.$notify({
                            content: "Transaction in progress",
                            link: "https://etherscan.io/tx/0x0",
                            type: "loading",
                            timeout: 3e5
                        })
                    },
                    connect: function() {
                        "MetaMask" === this.wallet && this.loginMetamask(),
                            "TokenPocket" === this.wallet && this.loginTokenPocket(),
                            "BitKeep" === this.wallet && this.loginBitKeep(),
                            "WalletConnect" === this.wallet && localStorage.removeItem("wallet")
                    },
                    connectWalletBtn: function() {
                        this.dialogWallet = !0
                    },
                    loginMetamask: function() {
                        var t = this;
                        return Object(u["a"])(Object(c["a"])().mark((function e() {
                            return Object(c["a"])().wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if ("undefined" !== typeof window.ethereum) {
                                                e.next = 4;
                                                break
                                            }
                                            return t.$toast("Please Install Metamask Wallet"),
                                                window.open("https://metamask.io/download/", "_blank"),
                                                e.abrupt("return");
                                        case 4:
                                            return e.prev = 4,
                                                e.next = 7,
                                                t.$store.dispatch("user/login");
                                        case 7:
                                            e.sent,
                                                t.dialogWallet = !1,
                                                localStorage.setItem("wallet", "MetaMask"),
                                                e.next = 16;
                                            break;
                                        case 12:
                                            e.prev = 12,
                                                e.t0 = e["catch"](4),
                                                t.dialogWallet = !1,
                                                t.$toast(e.t0.message);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                            }), e, null, [
                                [4, 12]
                            ])
                        })))()
                    },
                    loginOKXWallet: function() {
                        var t = this;
                        return Object(u["a"])(Object(c["a"])().mark((function e() {
                            return Object(c["a"])().wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if ("undefined" != typeof window.okxwallet) {
                                                e.next = 5;
                                                break
                                            }
                                            if ("undefined" != typeof window.ethereum) {
                                                e.next = 5;
                                                break
                                            }
                                            return t.$toast("Please Install OKX Wallet"),
                                                window.open("https://www.okx.com/download", "_blank"),
                                                e.abrupt("return");
                                        case 5:
                                            return e.prev = 5,
                                                e.next = 8,
                                                t.$store.dispatch("user/login");
                                        case 8:
                                            e.sent,
                                                t.dialogWallet = !1,
                                                localStorage.setItem("wallet", "OKXWallet"),
                                                e.next = 17;
                                            break;
                                        case 13:
                                            e.prev = 13,
                                                e.t0 = e["catch"](5),
                                                t.dialogWallet = !1,
                                                t.$toast(e.t0.message);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                            }), e, null, [
                                [5, 13]
                            ])
                        })))()
                    },
                    loginTokenPocket: function() {
                        var t = this;
                        return Object(u["a"])(Object(c["a"])().mark((function e() {
                            return Object(c["a"])().wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if ("undefined" !== typeof window.ethereum) {
                                                e.next = 4;
                                                break
                                            }
                                            return t.$toast("Please Install TokenPocket Wallet"),
                                                window.open("https://www.tokenpocket.pro/en/download/app", "_blank"),
                                                e.abrupt("return");
                                        case 4:
                                            return e.prev = 4,
                                                e.next = 7,
                                                t.$store.dispatch("user/login");
                                        case 7:
                                            e.sent,
                                                t.dialogWallet = !1,
                                                localStorage.setItem("wallet", "TokenPocket"),
                                                e.next = 16;
                                            break;
                                        case 12:
                                            e.prev = 12,
                                                e.t0 = e["catch"](4),
                                                t.dialogWallet = !1,
                                                t.$toast(e.t0.message);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                            }), e, null, [
                                [4, 12]
                            ])
                        })))()
                    },
                    loginBitKeep: function() {
                        var t = this;
                        return Object(u["a"])(Object(c["a"])().mark((function e() {
                            var n;
                            return Object(c["a"])().wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if (n = window.bitkeep && window.bitkeep.ethereum,
                                                n) {
                                                e.next = 5;
                                                break
                                            }
                                            return t.$toast("Please Install BitKeep Wallet"),
                                                window.open("https://bitkeep.com/download?type=0&theme=light", "_blank"),
                                                e.abrupt("return");
                                        case 5:
                                            return e.prev = 5,
                                                e.next = 8,
                                                t.$store.dispatch("user/login");
                                        case 8:
                                            e.sent,
                                                t.dialogWallet = !1,
                                                localStorage.setItem("wallet", "BitKeep"),
                                                e.next = 17;
                                            break;
                                        case 13:
                                            e.prev = 13,
                                                e.t0 = e["catch"](5),
                                                t.dialogWallet = !1,
                                                t.$toast(e.t0.message);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                            }), e, null, [
                                [5, 13]
                            ])
                        })))()
                    },
                    disconnect: function() {
                        this.$store.dispatch("user/LogOut"),
                            this.accountDialog = !1
                    }
                }
            },
            y = d,
            m = (n("c11c"),
                n("2877")),
            f = Object(m["a"])(y, r, o, !1, null, "31edeb7c", null),
            h = f.exports,
            b = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "footer"
                }, [t._m(0), n("div", {
                    staticClass: "copyright"
                }, [n("a", {
                    staticClass: "icon",
                    attrs: {
                        href: "https://gist.github.com/jackygu2006/39dbc920703bcc46c8aa0fb2a071f720",
                        target: "_blank"
                    }
                }, [n("svg", {
                    staticClass: "mr-1 text-2xl",
                    attrs: {
                        stroke: "currentColor",
                        fill: "currentColor",
                        "stroke-width": "0",
                        viewBox: "0 0 16 16",
                        height: "1em",
                        width: "1em",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    }
                })])]), n("p", [t._v("Copyright © 2023 - All right reserved")])])])
            },
            v = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "logo"
                }, [t._v("Polygon"), n("span", {
                    staticClass: "name"
                }, [t._v("ERC20")]), t._v(" "), n("span", {
                    staticClass: "on"
                }, [t._v("beta")])])
            }],
            g = {
                name: "pageFooter",
                components: {},
                data: function() {
                    return {}
                },
                computed: {},
                created: function() {},
                mounted: function() {},
                methods: {}
            },
            T = g,
            w = (n("01a0"),
                Object(m["a"])(T, b, v, !1, null, "f8b962aa", null)),
            k = w.exports,
            j = {
                name: "app",
                components: {
                    pageFooter: k,
                    pageHeader: h
                },
                data: function() {
                    return {}
                },
                mounted: function() {},
                watch: {
                    $route: function(t, e) {
                        var n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + n
                    }
                },
                created: function() {},
                methods: {}
            },
            C = j,
            x = (n("ce51"),
                Object(m["a"])(C, i, s, !1, null, null, null)),
            _ = x.exports,
            M = (n("d3b7"),
                n("3ca3"),
                n("ddb0"),
                n("8c4f"));
        a["a"].use(M["a"]);
        var A = new M["a"]({
                mode: "history",
                base: "/",
                routes: [{
                    path: "/",
                    meta: {
                        title: "Polygon ERC20",
                        auth: !1
                    },
                    component: function() {
                        return n.e("index").then(n.bind(null, "1e4b"))
                    }
                }]
            }),
            O = n("4360"),
            S = (n("3d39"),
                n("a925")),
            E = {
                header: {}
            },
            I = E,
            F = {
                header: {
                    home: "Home",
                    lp: "LP",
                    earn: "Earn",
                    lucky: "Lucky Drop",
                    aicode: "AISCODE",
                    dao: "DAO",
                    connectWallet: "Connect Wallet"
                }
            },
            $ = F;
        a["a"].use(S["a"]);
        var B = {
                "zh-CN": Object(l["a"])({}, I),
                "en-US": Object(l["a"])({}, $)
            },
            z = new S["a"]({
                messages: B,
                fallbackLocale: "en-US",
                silentTranslationWarn: !0,
                locale: localStorage.getItem("language") || "en-US"
            }),
            H = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.showWrap ? n("div", {
                    staticClass: "toast",
                    class: t.showContent ? "fadein" : "fadeout"
                }, [n("div", {
                    staticClass: "text"
                }, [n("div", {
                    staticClass: "value",
                    style: {
                        color: "success" == t.type ? "#A7FF94" : ""
                    }
                }, [t._v(t._s(t.text))])])]) : t._e()
            },
            W = [],
            D = (n("be59"), {}),
            P = Object(m["a"])(D, H, W, !1, null, "0b2e46f2", null),
            R = P.exports,
            N = a["a"].extend(R);

        function U(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "warning",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4e3,
                a = new N({
                    el: document.createElement("div"),
                    data: function() {
                        return {
                            text: t,
                            type: e,
                            showWrap: !0,
                            showContent: !0
                        }
                    }
                });
            document.body.appendChild(a.$el),
                setTimeout((function() {
                    a.showContent = !1
                }), n - 1250),
                setTimeout((function() {
                    a.showWrap = !1
                }), n)
        }

        function L() {
            a["a"].prototype.$toast = U
        }
        var K = L,
            q = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("transition", {
                    attrs: {
                        name: "fade-transform"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.$attrs["visible"],
                        expression: "$attrs['visible']"
                    }],
                    staticClass: "dialog"
                }, [n("div", {
                    staticClass: "dialogCover"
                }), n("div", {
                    staticClass: "dialogWrap",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                                t.clickCover()
                        }
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.$attrs["visible"],
                        expression: "$attrs['visible']"
                    }],
                    staticClass: "dialogMain",
                    class: {
                        show: t.$attrs["visible"]
                    },
                    style: "width:" + t.width
                }, [t.title ? n("div", {
                    staticClass: "dialogTitle fontBold"
                }, [t._v(t._s(t.title))]) : t._e(), t.closeBtn ? n("a", {
                    staticClass: "closeBtn",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                                t.closeFuntion()
                        }
                    }
                }) : t._e(), n("div", {
                    staticClass: "dialogContent"
                }, [t._t("default")], 2)])])])])
            },
            Q = [],
            Y = {
                name: "Dialog",
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    width: {
                        type: String,
                        default: "500px"
                    },
                    closeBtn: {
                        type: Boolean,
                        default: !0
                    },
                    modalClickClose: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {}
                },
                methods: {
                    closeFuntion: function() {
                        this.$emit("update:visible", !1),
                            this.$emit("close")
                    },
                    clickCover: function() {
                        this.modalClickClose && (this.$emit("update:visible", !1),
                            this.$emit("close"))
                    }
                }
            },
            J = Y,
            V = (n("9ca4"),
                Object(m["a"])(J, q, Q, !1, null, "d7b5f4c8", null)),
            X = V.exports;
        X.install = function(t) {
            t.component("Dialog", X)
        };
        var Z = X,
            G = (n("b0c0"),
                function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("transition", {
                        attrs: {
                            name: "fade"
                        },
                        on: {
                            "after-enter": t.handleAfterEnter
                        }
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.visible,
                            expression: "visible"
                        }],
                        staticClass: "notification",
                        style: t.style
                    }, [a("span", {
                        staticClass: "notification_content"
                    }, ["loading" == t.type ? a("div", {
                        staticClass: "icon sk-fading-circle"
                    }, [a("div", {
                        staticClass: "sk-circle sk-circle-1"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-2"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-3"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-4"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-5"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-6"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-7"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-8"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-9"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-10"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-11"
                    }), a("div", {
                        staticClass: "sk-circle sk-circle-12"
                    })]) : t._e(), a("div", {
                        staticClass: "message"
                    }, [t.link ? a("div", {
                        staticClass: "tips"
                    }, [a("a", {
                        attrs: {
                            href: t.link,
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.content))])]) : a("div", {
                        staticClass: "tips"
                    }, [t._v(t._s(t.content))])])]), a("span", {
                        staticClass: "notificationBtn",
                        on: {
                            click: t.handleClose
                        }
                    }, [a("img", {
                        attrs: {
                            src: n("ff07"),
                            alt: ""
                        }
                    })])])])
                }
            ),
            tt = [],
            et = {
                name: "Notification",
                props: {
                    content: {
                        type: String,
                        required: !0
                    },
                    title: {
                        type: String
                    },
                    type: {
                        type: String
                    },
                    btn: {
                        type: String,
                        default: "Close"
                    },
                    link: {
                        type: String,
                        default: ""
                    }
                }
            },
            nt = et,
            at = (n("e688"),
                Object(m["a"])(nt, G, tt, !1, null, "4f55bd88", null)),
            it = at.exports,
            st = (n("c740"),
                n("a434"),
                n("14d9"),
                a["a"].extend(it)),
            rt = [],
            ot = 1,
            ct = function(t) {
                if (t) {
                    var e = rt.length,
                        n = rt.findIndex((function(e) {
                            return t.id === e.id
                        }));
                    if (rt.splice(n, 1), !(e <= 1))
                        for (var a = t.height, i = n; i < e - 1; i++)
                            rt[i].verticalOffset = parseInt(rt[i].verticalOffset) - a - 16
                }
            },
            ut = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!a["a"].prototype.$isServer) {
                    var e = new st({
                            propsData: t,
                            data: function() {
                                return {
                                    verticalOffset: 0,
                                    timer: null,
                                    visible: !1,
                                    height: 0
                                }
                            },
                            created: function() {},
                            computed: {
                                receiptHash: function() {
                                    return O["a"].state.user.receiptHash
                                },
                                style: function() {
                                    return {
                                        position: "fixed",
                                        right: "15px",
                                        top: "".concat(this.verticalOffset, "px")
                                    }
                                }
                            },
                            watch: {
                                receiptHash: function(t, e) {
                                    t && this.handleClose()
                                }
                            },
                            mounted: function() {
                                var t = this;
                                this.createTimer(),
                                    this.$el.addEventListener("mouseenter", (function() {
                                        t.timer && t.clearTimer(t.timer)
                                    })),
                                    this.$el.addEventListener("mouseleave", (function() {
                                        t.timer && t.clearTimer(t.timer),
                                            t.createTimer()
                                    }))
                            },
                            updated: function() {
                                this.height = this.$el.offsetHeight
                            },
                            beforeDestroy: function() {
                                this.clearTimer()
                            },
                            methods: {
                                createTimer: function() {
                                    var e = this;
                                    this.timer = setTimeout((function() {
                                        e.visible = !1,
                                            document.body.removeChild(e.$el),
                                            ct(e),
                                            e.$destroy()
                                    }), t.timeout || 5e3)
                                },
                                clearTimer: function() {
                                    this.timer && clearTimeout(this.timer)
                                },
                                handleClose: function() {
                                    this.visible = !1,
                                        document.body.removeChild(this.$el),
                                        ct(this),
                                        this.$destroy(!0)
                                },
                                handleAfterEnter: function() {
                                    this.height = this.$el.offsetHeight
                                }
                            }
                        }),
                        n = "notification_".concat(ot++);
                    e.id = n,
                        e = e.$mount(),
                        document.body.appendChild(e.$el),
                        e.visible = !0;
                    var i = 0;
                    return rt.forEach((function(t) {
                            i += t.$el.offsetHeight + 10
                        })),
                        i += 15,
                        e.verticalOffset = i,
                        rt.push(e),
                        e
                }
            },
            lt = ut,
            pt = function(t) {
                t.component(it.name, it),
                    t.prototype.$notify = lt
            },
            dt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "sk-fading-circle",
                    style: "width:" + t.size + "px;height:" + t.size + "px;"
                }, [n("div", {
                    staticClass: "sk-circle sk-circle-1"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-2"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-3"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-4"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-5"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-6"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-7"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-8"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-9"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-10"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-11"
                }), n("div", {
                    staticClass: "sk-circle sk-circle-12"
                })])
            },
            yt = [],
            mt = (n("a9e3"), {
                name: "loading",
                props: {
                    url: {
                        type: String,
                        default: ""
                    },
                    size: {
                        type: Number,
                        default: 30
                    }
                },
                data: function() {
                    return {}
                },
                methods: {}
            }),
            ft = mt,
            ht = (n("40a1"),
                Object(m["a"])(ft, dt, yt, !1, null, "7e089ce0", null)),
            bt = ht.exports;
        bt.install = function(t) {
            t.component("btnLoading", bt)
        };
        var vt = bt,
            gt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    ref: "popover",
                    staticClass: "popover",
                    on: {
                        click: t.showChange
                    }
                }, [t.show ? n("div", {
                    ref: "contentWrapper",
                    staticClass: "content-wrapper"
                }, [t._t("content")], 2) : t._e(), n("span", {
                    ref: "triggerWrapper",
                    staticClass: "clickBtn"
                }, [t._t("default")], 2)])
            },
            Tt = [],
            wt = {
                name: "Popover",
                data: function() {
                    return {
                        show: !1
                    }
                },
                methods: {
                    position: function() {
                        document.body.appendChild(this.$refs.contentWrapper);
                        var t = this.$refs.triggerWrapper.getBoundingClientRect(),
                            e = t.left,
                            n = t.top;
                        this.$refs.contentWrapper.style.top = n + scrollY + "px",
                            this.$refs.contentWrapper.style.left = e + scrollX + "px"
                    },
                    listener: function(t) {
                        this.$refs.popover && this.$refs.popover.contains(t.target) || this.$refs.popover === t.target || this.$refs.contentWrapper && this.$refs.contentWrapper.contains(t.target) || this.$refs.contentWrapper === t.target || this.close()
                    },
                    close: function() {
                        this.show = !1,
                            document.removeEventListener("click", this.listener)
                    },
                    open: function() {
                        var t = this;
                        this.show = !0,
                            this.$nextTick((function() {
                                t.position(),
                                    document.addEventListener("click", t.listener)
                            }))
                    },
                    showChange: function(t) {
                        this.$refs.triggerWrapper.contains(t.target) && (!0 === this.show ? this.close() : this.open())
                    }
                }
            },
            kt = wt,
            jt = (n("35fe"),
                Object(m["a"])(kt, gt, Tt, !1, null, "84fb6996", null)),
            Ct = jt.exports;
        Ct.install = function(t) {
            t.component("popover", Ct)
        };
        var xt = Ct,
            _t = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            Mt = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "vue-loading"
                    }
                }, [n("span", {
                    staticClass: "loader"
                })])
            }],
            At = {
                data: function() {
                    return {
                        visible: !0
                    }
                }
            },
            Ot = At,
            St = (n("a3c7"),
                Object(m["a"])(Ot, _t, Mt, !1, null, "32e0f394", null)),
            Et = St.exports,
            It = {
                installed: !1,
                install: function(t) {
                    It.installed || (t.prototype.$loading = {},
                        t.prototype.$loading.show = function() {
                            if (!document.querySelector("#vue-loading")) {
                                var e = t.extend(Et),
                                    n = (new e).$mount().$el;
                                document.body.appendChild(n),
                                    document.querySelector("#vue-loading").addEventListener("touchmove", (function(t) {
                                        t.stopPropagation(),
                                            t.preventDefault()
                                    })),
                                    It.installed = !0
                            }
                        },
                        t.prototype.$loading.hide = function() {
                            var t = document.querySelector("#vue-loading");
                            t && document.body.removeChild(t)
                        }
                    )
                }
            },
            Ft = It,
            $t = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "noData",
                    class: {
                        small: "small" == t.size,
                            medium: "medium" == t.size
                    }
                }, [n("div", {
                    staticClass: "tips"
                }, [t._v(t._s(t.tips))]), t._t("default")], 2)
            },
            Bt = [],
            zt = {
                props: {
                    size: {
                        type: String,
                        default: ""
                    },
                    tips: {
                        type: String,
                        default: "No items to display"
                    }
                },
                data: function() {
                    return {}
                }
            },
            Ht = zt,
            Wt = (n("b832"),
                Object(m["a"])(Ht, $t, Bt, !1, null, "46cd2412", null)),
            Dt = Wt.exports;
        Dt.install = function(t) {
            t.component("noData", Dt)
        };
        var Pt = Dt;
        a["a"].use(K),
            a["a"].use(Z),
            a["a"].use(pt),
            a["a"].use(vt),
            a["a"].use(xt),
            a["a"].use(Ft),
            a["a"].use(Pt);
        var Rt = n("901e"),
            Nt = n.n(Rt),
            Ut = n("4eb5"),
            Lt = n.n(Ut),
            Kt = n("c1df"),
            qt = n.n(Kt);
        n("4de4"),
            n("b680"),
            n("25f0");
        a["a"].filter("formatAddress", (function(t) {
                return t ? "".concat(t.substr(0, 3), "...").concat(t.substr(-4, 4)) : ""
            })),
            a["a"].filter("dateformat", (function(t) {
                var e = new Date(1e3 * t),
                    n = e.getFullYear() + ".",
                    a = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + ".",
                    i = e.getDate() + " ",
                    s = e.getHours() + ":",
                    r = (e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()) + ":",
                    o = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds();
                return t ? n + a + i + s + r + o : "--"
            })),
            a["a"].filter("formatBDOGE", (function(t) {
                return t ? Nt()(t).div(1e6).toFormat(3, 1) : 0
            })),
            a["a"].filter("formatETH", (function(t) {
                return t ? parseFloat(Nt()(t).div(1e18).toFixed(6, 1)) : 0
            })),
            a["a"].filter("formatBigNumberDecimals", (function(t, e) {
                return t ? Nt()(t).div(1e18).toFormat(e, 1) : 0
            })),
            a["a"].filter("formatSec", (function(t) {
                var e = Number(t);
                return e > 86400 ? parseFloat(Nt()(e).div(60).div(60).div(24).toFixed(1, 1)) + " Day" : e > 3600 ? parseFloat(Nt()(e).div(60).div(60).toFixed(1, 1)) + " Hour" : e > 60 ? parseFloat(Nt()(e).div(60).toFixed(1, 1)) + " Min" : parseInt(e).toString() + " Sec"
            })),
            document.addEventListener("touchstart", (function() {}), !0),
            a["a"].prototype.BigNumber = Nt.a,
            a["a"].use(Lt.a),
            a["a"].prototype.moment = qt.a,
            a["a"].prototype.$bus = new a["a"],
            new a["a"]({
                router: A,
                store: O["a"],
                i18n: z,
                render: function(t) {
                    return t(_)
                }
            }).$mount("#app")
    },
    5949: function(t, e, n) {},
    6: function(t, e) {},
    7: function(t, e) {},
    "7f7d": function(t, e, n) {},
    8: function(t, e) {},
    "8a6c": function(t, e, n) {},
    9: function(t, e) {},
    "9ca4": function(t, e, n) {
        "use strict";
        n("ec8a")
    },
    a3c7: function(t, e, n) {
        "use strict";
        n("8a6c")
    },
    b832: function(t, e, n) {
        "use strict";
        n("2a2b")
    },
    be59: function(t, e, n) {
        "use strict";
        n("0b55")
    },
    c11c: function(t, e, n) {
        "use strict";
        n("2d88")
    },
    ce51: function(t, e, n) {
        "use strict";
        n("0b2d")
    },
    d7be: function(t, e, n) {},
    e688: function(t, e, n) {
        "use strict";
        n("7f7d")
    },
    ec8a: function(t, e, n) {},
    edc4: function(t, e, n) {},
    ff07: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA61JREFUaEPtWMuS00YUPVefg+TZ8AGRus0nTEGYZMIjkCleUzCZSaBCGAJFwiuV8CieBXlSZA27SN1mzyqS5iOSDwgr3dR47MJ2tyzJkgucslYuV/e95/Q93X37EGb8oxnHjzmBd13BeQXmFai5Av9/CUU6vQDwIpjfgJwXMnAv1ly0sdP7+Rj4h0CdonyFFQh1ognwB7Kel4F3eRokIp18BeDSQOxUBp43LlchgUgnrwHsHg5CZ2XgftckiUinXwL87VBMxpYUnluTQLwJ0IXRIES8IfzW9SZIKBWvM9E1MxZflEFrsxaB7cmhSs4T4ZvRQMxYawvv+zokVCc5zQxbjFJSLZRQH5zqpGeZ+YpZCVoVvntrEhKhik8R0Y+W6p4TfmtYTjkJShPoVWKDCFeNSgAn2oF3twoJ1UmOMcOYQ+RsCH9XaWlWItAloeM1At0YBeuAVoLAfVCGRKjTzwh8vwlJViawQ2JrlZD9YAF7RAbe43EkIp18CuBRU1KciMB28kinJwC+bYKlgzJwf7KRiHR6AOCnTUiwH2NiAj0SKwDfM8ASL0u/9evg/1EUfwyHfqkjPdui1CLQJdFJjoDxcDR4xtnSHrHwrDfmQzC6v0e+QskV7anaBHYApgfB/MTQNdNeIAMT/WEAybJDUi4YcioCbOSoOiFv/J8qWXYIP5eKR86y9HcNSazUPMugRirQj6tepfs549/HgSGmJSFcm5wm4tAogW0EoY73Eui5DQ2D97WDlimniaDvTJoTGFw8pdL9TDMqoZnexHnHqANn33aFMmTmnnhfjtG83oZBH7UDt3sihfqvJYLz23t3kUU6XgHIaCXIwSfiA2+obVAqWWbLPVGli7UdVhOfQqFOjhNwx2wh+PAe0TJu5XE3Nk/wnujnnYhAqONVApntNOGo9D2jVR4kmdtOM60KUf1lV5lAqJIzRLhp9jZ8TMqW2Zla6p4nPeZsrS0WKr2xKxFQnXid2eYe0EkZuIacxl2weRKs6naUJmD1bXYQnpaBZ3udFTYIuVJEed+pFAGLY9YFx+DP20HLlFMh9LcDlErOsE2SQDO2Ss+rNMwlZnzRFp7FjKqAvjdUdbbWmTNLLNqs7Y1GOn4N0JC1SETnhO+W8m3K0snxnep7o0onmgfMXWZ83RbeoAFbFmPhOEOqjXmjTIsg/AvwyyKvshBlwYBIx5sgWiTG3wx+VZSv1CauC2qa8+cEprm6ZWLPK1BmlaY5Zl6Baa5umdgzX4H/AKb2gECzFe9IAAAAAElFTkSuQmCC"
    }
});