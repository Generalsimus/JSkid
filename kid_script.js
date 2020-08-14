/*! KID.js 
    v1.1.0 (c) soso
    MIT License
    
    (っ◔◡◔)っ ♥ JSkid ♥ https://github.com/Generalsimus/JSkid

*/
var KD_group = {},
    KD_I = Math.round(Math.random() * 100),
    KD_cssselector = 'KD_css_';

function KD_type(a) {

    return Object.prototype.toString.call(a).match(/(\w)\w+/g)[1]
}

function KD_map(val, fun) {

    if (val.length && typeof val.length == "number") {
        var array = [];
        for (var i = 0; i < val.length; i++) {
            var v = fun(val[i], i, val)

            v ? array.push(v) : 0;

        }
    } else {
        for (var i in val) {
            var v = fun(val[i], i, val)
            v ? val[i] = v : 0;
        }
    }

    return array ? array : val;
}
var KD_method = {
    g: function (a) {
        return this.getAttribute(a);
    },
    m: function (a) {
        for (var i in a) {
            if (typeof a[i] == "string") {
                this.setAttribute(i, a[i])
            }
        }
        return this;
    },
    q: function (s) {
        return s instanceof Array ? this.querySelectorAll(s[0]) : this.querySelector(s);
    },

    c: function (j) {

        // KD_style
        // DISABLE
        // var v = function (j) {

        //     switch (KD_type(j)) {
        //         case 'Array':
        //             KD_map(j, v);
        //             break;
        //         case 'Number':
        //             var c = KD_c(j);

        //             KD_csap(KD_k('.' + c, KD_css[j]))
        //             this.classList.add(c);
        //             break;
        //         case 'String':
        //             this.classList.add(j);
        //             break;
        //         case 'Object':
        //             KD_map(j, function (j, i) {
        //                 var c = KD_c(i);

        //                 KD_csap(KD_k('.' + c + j, KD_css[i]))

        //                 this.classList.add(c);
        //             });
        //             break;
        //     }
        // }.bind(this)

        // v(j)

        // return this;


    },
    h: function (l) {
        var c = this.children
        return typeof l == 'number' ? c[l] : c
    },
    i: function (i) {
        i ? i instanceof Object ? KD_T(this, i) : this.innerHTML = i : 0;
        return i ? this : this.innerHTML
    },
    y: function (o) {
        return o ? KD_assign(this.style, o) : this.style;
        // KD_style
    },
    e: function (s) {
        for (var l in s) {
            l.split('_').forEach(function (v) {
                this.addEventListener(v, s[l]);
            }.bind(this))
        }
    },
    o: function (s, z) {
        z = this;
        for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
            z = z.parentElement
        }

        return z;
    },

    n: function (s, z) {
        z = this;
        for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
            z = z.nextElementSibling
        }

        return z;
    },
    p: function (s, z) {
        z = this;
        for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {

            z = z.previousElementSibling
        }
        return z;
    },
    a: function (s) {
        this.appendChild(s)
        return s;
    },
    r: function () {
        this.o().removeChild(this)
    },
    f: function (t) {
        this.parentElement.replaceChild(t, this)
        return p;
    },

    b: function (t, n) {
        var b = n ? n : this;

        KD_map(t, function (v) {

            if (v instanceof Array) {
                KD_group[v[0]] ? KD_group[v[0]].push(b) : KD_group[v[0]] = [b]
            } else {
                KD_group[v] = b
            }

        })

        return b;
    },
    w: function (a) {
        // [1025,tag,"in"]


        var p = a[2] == "in" ? this : a[1],
            c = a[2] == "in" ? a[1] : this,
            l = null,
            o = null;

        function m() {
            if (window.innerWidth <= a[0]) {
                if (c.o() !== p) {
                    var n = c.n();
                    l = n ? c.n() : c.o();
                    o = n ? "u" : "a";

                    p.a(c)
                }

            } else if (l) {
                l[o](c)
            }
        }
        m()
        window.addEventListener("resize", m)





    },
    l: function (f) {
        var fun = f(this);

        return fun ? KD_T(this, fun) : this;
    },
    x: function (o) {

        // empty

    },
    u: function (o) {
        this.o().insertBefore(o, this);
    },
    restart: function (v) {
        var n = this.n(),
            o = n ? this : this.o();
        o[n ? "u" : "a"](KD_el(v ? v : this.KD_OB))
        this.r()

    }
}

function KD_assign(obj1, obj2) {
    try {
        obj1 = Object.assign(obj1, obj2)
    } catch (error) {
        KD_map(obj2, function (method, key) {
            obj1[key] = method
        })
    }
    return obj1;
}
KD_assign(HTMLElement.prototype, KD_method)

var KD_style = KD_T(document.head, [{
    style: [],
}]);





// KD_map([], function (v) {


//     var a = KD_css[v]
//     var css = '';

//     KD_map(a[1], function (v, i) {

//         css = css + KD_k(i[0] == '*' ? i.slice(1) : '.' + KD_c(i), v);

//     })
//     KD_csap(a[0] + '{' + css + '}')
// })



// csssis dasagenireblad

// function KD_c(s, r) {
//     var d = '',
//         c = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
//     s = String(s)
//     for (var l = 0; l < s.length; l++) {
//         d = d + c[s[l]];
//     }
//     return (r ? r : KD_cssselector) + d;

// }

// function KD_k(r, c) {
//     var s = '',
//         l = '';


//     for (var a in c) {

//         ((a[0] == '_' || c[a][0] == '_') ? ['-webkit-', '-moz-', '-ms-', '-o-', ''] : ['']).map(function (v) {


//             a[0] == '&' ? KD_map(a.slice(1).split('&'), function (v) {
//                 // console.log([r + v,c[a]])
//                 l = l + KD_k(r + v, c[a]);
//             }) : (s = s + (a[0] == '_' ? v : '') + a.split(/(?=[A-Z])/).join('-').replace(/_/g, '').toLowerCase() + ':' + (c[a][0] == '_' ? v + c[a].substring(1) : c[a]) + ';');

//         })


//     }

//     return l + r + '{' + s + '}';

// }


// switch(typeof s){
// case Array:

// }
KD_ROUter = {};

function KD_routeReG(test) {

    for (var url in KD_ROUter) {
        url = KD_ROUter[url]
        for (var el in url) {
            el = url[el]

            if (el[0].test(test)) {
                el[1].dom = el[1].dom instanceof HTMLElement ? el[1].dom : KD_el(el[1].dom);
                window.scrollTo(0, 0);
                if (el[1].p.h(0) !== el[1].dom) {
                    el[1].p.i(' ');
                    el[1].p.a(el[1].dom);
                }
            }
        }


    }
}

window.addEventListener('popstate', function () {
    KD_routeReG(document.location.pathname)
});





function KD_el(r, p) {
    var domK = Object.keys(r);

    function KD_dom(name) {
        var a = document.createElement(name);

        KD_T(a, r[domK[0]])
        a.KD_OB = r

        for (var i in r) {
            if (i !== domK[0]) {
                if (a[i] instanceof Function) {

                    a[i](r[i])

                } else {

                    a.m({
                        [i]: r[i]
                    })

                }
            }
        }
        return a
    }

    var tags = {
        d: ['div', KD_dom],
        s: ['span', KD_dom],
        assign: [null, function () {

            var ass = r.assign
            delete r.assign
            for (var i in ass) {
                KD_assign(ass[i], r)
            }
            KD_T(p, ass.slice(0, -1))
            return KD_el(ass[ass.length - 1])
        }],
        switch: ["a", function (name) {
            KD_assign(r, {
                e: {
                    click: function (e) {
                        e.preventDefault();

                        window.history.pushState(r.href, 'Title', r.href);
                        KD_routeReG(r.href)

                    }
                }
            })

            return KD_dom(name)
        }],
        router: ["div", function (name) {
            var list = r.router;
            r.router = []
            var parent = KD_dom(name);

            KD_map(list, function (tag) {
                var genREGEX = tag.unic ? (function (regexlist, rgxURL) {
                        regexlist.forEach(function (v) {
                            rgxURL = rgxURL.replace(v[0], v[1])
                        })
                        return new RegExp('^' + rgxURL + '$', 'i');
                    })([
                        [/[\-{}\[\]+?.,\\\^$|#\s]/g, '\\$&'],
                        [/\((.*?)\)/g, '(?:$1)?'],
                        [/(\(\?)?:\w+/g, function (match, optional) {
                            return optional ? match : '([^\/]+)';
                        }],
                        [/\*\w+/g, '(.*?)']
                    ], tag.to) : new RegExp(tag.to.replace(/:[^\s/]+/g, '([\\w-]+)')),
                    dompush = {
                        p: parent,
                        dom: tag
                    };

                // console.log(genREGEX.exec(document.location.pathname))

                if (genREGEX.test(document.location.pathname)) {
                    dompush.dom = KD_el(tag)
                    parent.a(dompush.dom)
                }



                KD_ROUter[tag.to] ? KD_ROUter[tag.to].push([genREGEX, dompush]) : KD_ROUter[tag.to] = [
                    [genREGEX, dompush]
                ];


            })

            return parent
        }]
    }

    return tags[domK[0]] ? tags[domK[0]][1](tags[domK[0]][0]) : KD_dom(domK[0])

}






function KD_T(p, s) {

    switch (KD_type(s)) {
        case "Array":
            KD_map(s, function (tag) {
                p.a(KD_el(tag, p))
            })
            break;
        case "Function":

            p.l(s)
            break;
        case "Object":
            p.a(KD_el(s, p))
            break;
        default:
            p.i(s)
            break;

    }


    return p;
}

function KD_xhr(call, link, method) {

    var xhr = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : (XMLHttpRequest && new XMLHttpRequest());

    xhr.open(method ? method : 'POST', link ? link : window.location);

    xhr.onload = function () {
        call ? call(xhr.response ? xhr.response : 0) : 0;

    }
    xhr.run = function (t) {
        if (typeof t == "string") {
            this.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
        }
        this.send(t);
    }
    return xhr;
}






///////////////////////////////////////////////////////