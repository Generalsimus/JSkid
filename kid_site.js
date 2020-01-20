var kid_css = {
        0: {
            margin: 0,
            "& ul": {
                margin: 0,
                padding: 0,
                listStyleType: 'none',
                zIndex: 20
            },
            "& *": {
                boxSizing: ' border-box',
                transition: 'all .25s ease-in-out'
            }
        },
        1: {
            width: '100%',
            background: '#23282d',
            '& *': {
                color: 'white'
            }
        },
        2: {
            display: 'flex'
        },
        3: {
            height: '100px',
        },
        4: {
            cursor: 'pointer',
            height: '55px',
            display: "flex",
            margin: '0 10px',
            alignItems: 'center'
        },
        5: {
            cursor: 'pointer',
            borderBottom: '1px solid #ededed',
            "& ul": {
                height: 0,
                overflow: 'hidden',
                borderLeft: '1px solid #ededed',
                marginLeft: '15px'
            },
            '& li:last-child': {
                borderBottom: "none"
            },
            "&>div:only-child>div": {
                display: "none"
            },
            "&>div:only-child>span": {
                width: '100%',
                height: '40px'
            }
        },
        6: {
            padding: '60px 0'
        },
        7: {
            width: '230px',
            paddingRight: '6px',
            background: '#f2f2f2',
            "& li:first-child": {
                borderTop: '1px solid #ededed'
            }
        },
        8: {
            width: 'calc(100% - 230px)',
            paddingLeft: '6px',
            "& iframe": {
                marginBottom: '50px'
            }
        },
        9: {
            padding: '15px 0',
            background: '#007effa1',
            margin: 0,
            color: 'white'
        },
        10: {
            paddingLeft: '150px',
            paddingRight: '150px',
        },
        11: {
            width: 'calc(100% - 40px)',
            paddingLeft: '15px'
        },
        12: {
            width: '40px',
            height: '40px',
            borderLeft: '1px solid #ededed',
            justifyContent: 'center',
            "&.active": {
                background: '#dbedff'
            },
            "&.active svg": {
                transform: 'rotate(180deg)'
            },
            "& svg": {
                width: '15px',
                height: '15px',
                fill: '#5eadff'
            }
        },
        13: {
            alignItems: 'center'
        },
        14: {
            width: '100%',
            flexWrap: 'wrap',
            border: '1px solid #cccccc',
            '&>*': {
                width: '100%',
                display: 'flex',
                borderBottom: '1px solid #cccccc',
                padding: '10px'
            },
            '&>*:nth-child(even)': {
                background: '#f1f1f1'
            },
            '&>*:last-child': {
                border: "none"
            },
            '&>div>*': {
                width: '50%',
                textAlign: 'center'
            }
        },
        15: {
            width: '100%',
            height: '400px',
            marginBottom: '30px',
            '& *': {
                transition: "none !important"
            }
        }


    },
    kid_group = {},
    kid_cssselector = 'kid_css_';


(function (t, map, c, xhr, group, type) {
    var kid_dom = {
        0: function (id) {
            return {
                iframe: 'See the Pen',
                i: [{
                    a: 'abzGgKw',
                    href: 'https://codepen.io/zigzi6/pen/' + id
                }],
                height: 300,
                style: "width: 100%;",
                scrolling: "no",
                title: id,
                frameborder: "no",
                allowtransparency: "true",
                allowfullscreen: "true",
                src: "https://codepen.io/zigzi6/embed/" + id + "?height=300&theme-id=default&default-tab=js,result"
            }
        },
        1: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493 493"><path d="M266.2 382.68L485.14 163.73C490.21 158.67 493 151.91 493 144.7C493 137.49 490.21 130.73 485.14 125.67L469.02 109.54C458.52 99.05 441.44 99.05 430.96 109.54L247.1 293.4L63.04 109.34C57.97 104.27 51.22 101.48 44.01 101.48C36.8 101.48 30.04 104.27 24.97 109.34L8.86 125.46C3.79 130.53 1 137.29 1 144.49C1 151.7 3.79 158.46 8.86 163.53L228 382.68C233.08 387.75 239.87 390.54 247.09 390.53C254.33 390.54 261.12 387.75 266.2 382.68Z"/></svg>',
        2: function (i, li) {
            return {
                li: [{
                        d: [{
                            s: i[0],
                            c: [2, 13, 11],
                            e: {
                                click: function () {
                                    kid_dom[10](i)


                                }
                            }
                        }, {
                            d: kid_dom[1],
                            e: {
                                click: function () {

                                    var o = this.o().n();
                                    o.y().height = (this.classList.contains("active") ? 0 : o.scrollHeight) + 'px';

                                    this.classList.toggle("active");
                                }
                            },
                            c: [2, 12, 13]
                        }],
                        c: 2
                    }

                ],
                c: 5,
                l: function (z) {
                    li ? t(z, [{
                        ul: li
                    }]) : 0;
                }
            }
        },
        3: function (d, v) {
            d.c(15)
            var a = ace.edit(d);
            a.setTheme("ace/theme/twilight");
            a.getSession().setMode("ace/mode/javascript");
            a.setValue(v, -1)
        },
        4: function (v) {
            return {
                d: function (z) {
                    kid_dom[3](z, v)
                }
            }
        },
        5: function (a, v, d) {


            history.pushState({
                page: a
            }, v, "?page=" + JSON.stringify(group.url))
            group[a[0]].i(' ')
            console.log(v ? v : kid_dom[a[1]]()[0])
            group[1].i(v ? v : kid_dom[a[1]]()[0])
            t(group[a[0]], d ? d : kid_dom[a[1]]()[1])
        },
        6: function () {
            return ['Home', [{
                d: 'home'
            }]]
        },
        7: function (i) {
            var a = [
                ['.e()', [{
                    inner: 'vYEaGLY',
                    after: kid_dom[4]('function e(s) {\r\n            for (var l in s) {\r\n                l.split(\'_\').forEach(function (v) {\r\n                    p.addEventListener(v, s[l]);\r\n                })\r\n            }\r\n        }')
                }]],
                ['.b()', [{
                    inner: 'jOEpqop',
                    after: kid_dom[4]('function b(t) {\r\n    var b = this;\r\n\r\n    function addb(t) {\r\n        if (t instanceof Array) {\r\n\r\n            t.map(function (v) {\r\n                if (v instanceof Object) {\r\n                    addb(v)\r\n                } else {\r\n                    kid_group[v] ? kid_group[v].push(b) : kid_group[v] = [b];\r\n                }\r\n\r\n            })\r\n\r\n        } else if (typeof t == \"number\") {\r\n            kid_group[t] = b;\r\n\r\n        } else {\r\n            for (var h in t) {\r\n                kid_group[h] = t[h];\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    addb(t)\r\n\r\n\r\n    return b;\r\n}')
                }]],
                ['.i()', ['mdyKQWX', {
                    inner: 'eYmKQRm',
                    after: kid_dom[4]('function i(i) {\r\n            i ? i instanceof Object ? kid_t(this, i) : this.innerHTML = i : 0;\r\n            return i ? this : this.innerHTML\r\n        }')
                }]],
                ['.l()', [{
                    inner: 'JjoZmJg',
                    after: kid_dom[4]('function l(f) {\r\n            return f(this);\r\n        }')
                }]],
                ['.g()', [{
                    inner: 'bGNKmaY',
                    after: kid_dom[4]('function g(a) {\r\n    return this.getAttribute(a);\r\n}')
                }]],
                ['.m()', ['povKxaZ', {
                    inner: 'eYmKPrx',
                    after: kid_dom[4]('function m(a) {\r\nkid_map(a, function (v) {\r\n                p.setAttribute(v[0], v[1])\r\n            })\r\n\r\n            return p;\r\n        }')
                }]],
                ['.q()', ['jOEKeep', {
                    inner: 'dyPKgwX',
                    after: kid_dom[4]('function q(s) {\r\n    return s instanceof Array ? kid_map(this.querySelectorAll(s[0]), rt) : rt(this.querySelector(s));\r\n}')
                }]],
                ['.h()', ['QWwxJWZ', {
                    inner: 'XWJYyjb',
                    after: kid_dom[4]('function h(l) {\r\n            var c = this.children\r\n            return typeof l == \'number\' ? c[l] : c\r\n        }')
                }]],
                ['.y()', ['jOEKQao', 'JjoZepW', {
                    inner: 'gObKQej',
                    after: kid_dom[4]('function y(o) {\r\n            return o ? Object.assign(this.style, o) : this.style;\r\n        }')
                }]],
                ['.o()', [{
                    inner: 'dyPKQKZ',
                    after: kid_dom[4]('function o(s, z) {\r\n    z = this;\r\n    for (var i = 0; i <= (typeof s == \"number\" ? s : 0); i++) {\r\n        z = z.parentElement\r\n    }\r\n\r\n    return z;\r\n}')
                }]],
                ['.n()', ['dyPKQgJ', {
                    inner: 'rNarOJO',
                    after: kid_dom[4]('function n(s, z) {\r\n            z = this;\r\n            for (var i = 0; i <= (typeof s == \"number\" ? s : 0); i++) {\r\n                z = z.nextElementSibling\r\n            }\r\n\r\n            return rt(z);\r\n        }')
                }]],
                ['.p()', ['vYEaNZe', {
                    inner: 'rNarOpV',
                    after: kid_dom[4]('function p(s, z) {\r\n            z = this;\r\n            for (var i = 0; i <= (typeof s == \"number\" ? s : 0); i++) {\r\n\r\n                z = z.previousElementSibling\r\n            }\r\n            return rt(z);\r\n        }')
                }]],
                ['.r()', [{
                    inner: 'eYmjZYM',
                    after: kid_dom[4]('function r() {\r\n            this.o().removeChild(this)\r\n        }')
                }]],
                ['Create HTML Elements', ['abzGgKw', 'oNgyNxw', 'VwYdVOx', 'GRgGRWG', 'OJPEJja', 'VwYdwrQ', 'KKweKow', 'qBEKBKV']],
                ['Tag Attributes', ['MWYXmgV', 'abzKqyg', 'RwNJZJX', 'abzKVdN', 'YzPvYPJ']],
                ['JS DOM Methods', [{
                    before: {
                        d: [{
                            d: [{
                                d: [{
                                    strong: 'Javascript'
                                }, {
                                    strong: 'JSKID'
                                }]
                            }],
                            l: function (z) {
                                map([
                                    ['.innerHTML', '.i()'],
                                    ['', '.l()'],
                                    ['', '.b()'],
                                    ['.getAttribute()', '.g()'],
                                    ['.setAttribute(_)', '.m()'],
                                    ['.querySelector()', '.q()'],
                                    ['.querySelectorAll()', '.q([])'],
                                    ['.children', '.h()'],
                                    ['.firstElementChild', '.h(0)'],
                                    ['.style', '.y()'],
                                    ['.parentElement', '.o()'],
                                    ['.nextElementSibling', '.n()'],
                                    ['.previousElementSibling', '.p()'],
                                    ['.appendChild()', '.a()'],
                                    ['.removeChild()', '.r()'],
                                    ['.replaceChild()', '.f()'],
                                    ['.addEventListener("click", function(){ });', '.e(click:function(){ })']

                                ], function (v) {
                                    t(z, [{
                                        d: [{
                                            s: v[0]
                                        }, {
                                            s: v[1]
                                        }]
                                    }])
                                })
                            },
                            c: [14, 2]
                        }]
                    }
                }, ]],
                ['CSS in JSKID', []],
                ['JSKID Functions', []]
            ][i];
            a.push(i);

            return a
        },
        8: function () {
            return ['API Documentation', [{
                d: [{
                    ul: [
                        kid_dom[2](kid_dom[7](13)),
                        kid_dom[2](kid_dom[7](14)),
                        kid_dom[2](kid_dom[7](15), [
                            kid_dom[2](kid_dom[7](0)),
                            kid_dom[2](kid_dom[7](1)),
                            kid_dom[2](kid_dom[7](2)),
                            kid_dom[2](kid_dom[7](3)),
                            kid_dom[2](kid_dom[7](4)),
                            kid_dom[2](kid_dom[7](5)),
                            kid_dom[2](kid_dom[7](6)),
                            kid_dom[2](kid_dom[7](7)),
                            kid_dom[2](kid_dom[7](8)),
                            kid_dom[2](kid_dom[7](9)),
                            kid_dom[2](kid_dom[7](10)),
                            kid_dom[2](kid_dom[7](11)),
                            kid_dom[2](kid_dom[7](12))


                            // v.before
                            // v.after


                        ]),
                        kid_dom[2](kid_dom[7](16)),
                        kid_dom[2](kid_dom[7](17))
                    ]
                }],
                c: 7
            }, {
                d: 0,
                b: 0,
                c: 8
            }]]
        },
        9: function (i, v) {
            var o = [{
                p: [{
                    h1: v
                }]
            }];

            i ? map(i, function (v) {

                if (type(v) == 'Object') {
                    v.before ? o.push(v.before) : 0;
                    v.inner ? o.push(kid_dom[0](v.inner)) : 0;
                    v.after ? o.push(v.after) : 0;

                } else {
                    o.push(kid_dom[0](v))

                }
            }) : 0;
            return o;
        },
        10: function (i) {
            group.url[1] = [0, i[2]]

            kid_dom[5]([0, i[2]], i[0], kid_dom[9](i[1], i[0]))
        }
    };



    t(document.body, [{
        d: [{
            d: [{
                a: [{
                    img: 0,
                    src: 'http://23.101.114.158/wp-content/themes/easytube/screenshot.png',
                    c: 3
                }],
                href: location.origin
            }],
            c: 2
        }, {
            d: [{
                d: 'Home',
                e: {
                    click: function () {
                        group.url = [
                            [2, 6]
                        ]
                        kid_dom[5]([2, 6])
                    }
                },
                c: 4
            }, {
                d: 'Docs',
                e: {
                    click: function () {
                        group.url = [
                            [2, 8]
                        ]
                        kid_dom[5]([2, 8])

                    }
                },
                c: 4
            }, {
                d: 'Download',
                c: 4
            }],
            c: 2
        }],
        c: [10, 1]
    }, {
        h1: 'Home',
        b: 1,
        c: [10, 9]
    }, {
        d: 0,
        b: 2,
        c: [10, 2, 6],
        l: function (z) {
            window.onpopstate = function (e) {

            }

            function getQueryStringValue(key) {
                return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
            }

            try {
                var locat = getQueryStringValue("page").split(',');
                group.url = JSON.parse(locat)
                var d = group.url

                kid_dom[5](d[0])

                if (d[0][1] == 8) {
                    console.log('888888888')
                    if(d[1][1]) {
                        console.log('sdd')
                        kid_dom[10](kid_dom[7](d[1][1]));
                    }else {
                        console.log(d)
                        kid_dom[10](kid_dom[7](13));
                    }

                }
            } catch (e) {

                if (e instanceof SyntaxError) {
                    group.url = []
                    z.i(kid_dom[6]()[1])
                }

            }


        }
    }]).c(0)


})(kid_t, kid_map, kid_c, kid_xhr, kid_group, kid_type)