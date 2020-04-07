/*! KID.js 
    v1.0.3 (c) soso
    MIT License
    
    (っ◔◡◔)っ ♥ JSkid ♥ https://github.com/Generalsimus/JSkid

*/
var KD_css = {


    },
    KD_group = {},
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
        KD_map(a, function (v) {

            if (typeof v[1] == "string") {
                this.setAttribute(v[0], v[1])
            }
        }.bind(this))

        return this;
    },
    q: function (s) {
        return s instanceof Array ? KD_map(this.querySelectorAll(s[0]), rt) : rt(this.querySelector(s));
    },

    c: function (j) {

        var v = function (j) {

            switch (KD_type(j)) {
                case 'Array':
                    KD_map(j, v);
                    break;
                case 'Number':
                    var c = KD_c(j);

                    KD_csap(KD_k('.' + c, KD_css[j]))
                    this.classList.add(c);
                    break;
                case 'String':
                    this.classList.add(j);
                    break;
                case 'Object':
                    KD_map(j, function (j, i) {
                        var c = KD_c(i);

                        KD_csap(KD_k('.' + c + j, KD_css[i]))

                        this.classList.add(c);
                    });
                    break;
            }
        }.bind(this)

        v(j)

        return this;


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
        return o ? Object.assign(this.style, o) : this.style;
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

    b: function (t) {
        var b = this;

        function addb(t) {
            if (t instanceof Array) {

                t.map(function (v) {
                    if (v instanceof Object) {
                        addb(v)
                    } else {
                        KD_group[v] ? KD_group[v].push(b) : KD_group[v] = [b];
                    }

                })

            } else if (typeof t == "number") {
                KD_group[t] = b;

            } else {
                for (var h in t) {
                    KD_group[h] = t[h];

                }
            }
        }


        addb(t)


        return b;
    },
    w: function (a) {


        KD_map(a, function (v, k) {

            KD_map(v, function (s, b) {
                var l = 0,
                    o = 0;

                function c() {


                    if (window.innerWidth <= s && !l) {

                        if (k == 'in') {
                            l = KD_group[b].o()[KD_group[b].n() ? 'insertBefore' : 'a'].bind(KD_group[b].o())
                            p.appendChild(KD_group[b])
                        }
                        console.log('resizes dros appen chaildi ar mushaobs kargad in da outi araaa damatebuli')
                    } else if (l) {
                        l(KD_group[b])
                        l = 0;
                    }
                }
                c();

                window.addEventListener("resize", c)

            })

        })





    },
    l: function (f) {
        return f(this);
    },
    x: function (o) {

        window.onload = function () {
            KD_map(o, function (v, i) {
                function g() {

                    p.y()[i] = v()
                }
                // window.onresize = g;
                window.addEventListener("resize", g)
                g()
            })
        }

    },
    u: function (o) {
        this.o().insertBefore(o, this);
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
}]).z;


function KD_csap(s) {
    KD_style.insertAdjacentHTML("afterbegin", s)
}




KD_map([], function (v) {


    var a = KD_css[v]
    var css = '';

    KD_map(a[1], function (v, i) {

        css = css + KD_k(i[0] == '*' ? i.slice(1) : '.' + KD_c(i), v);

    })
    KD_csap(a[0] + '{' + css + '}')
})



// csssis dasagenireblad

function KD_c(s, r) {
    var d = '',
        c = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
    s = String(s)
    for (var l = 0; l < s.length; l++) {
        d = d + c[s[l]];
    }
    return (r ? r : KD_cssselector) + d;

}

function KD_k(r, c) {
    var s = '',
        l = '';


    for (var a in c) {

        ((a[0] == '_' || c[a][0] == '_') ? ['-webkit-', '-moz-', '-ms-', '-o-', ''] : ['']).map(function (v) {


            a[0] == '&' ? KD_map(a.slice(1).split('&'), function (v) {
                // console.log([r + v,c[a]])
                l = l + KD_k(r + v, c[a]);
            }) : (s = s + (a[0] == '_' ? v : '') + a.split(/(?=[A-Z])/).join('-').replace(/_/g, '').toLowerCase() + ':' + (c[a][0] == '_' ? v + c[a].substring(1) : c[a]) + ';');

        })


    }

    return l + r + '{' + s + '}';

}


// switch(typeof s){
// case Array:

// }
KD_ROUter = {};
function KD_routeReG(defURL){
    for (var url in KD_ROUter) {

        if (KD_ROUter[url][0].test(defURL)) {

            KD_map(KD_ROUter[url][1], function (v) {
                v.p.i(' ')

                v.p.a(v.dom instanceof HTMLElement ? v.dom : KD_el(v.dom))
            })


        }

    }
}

window.addEventListener('popstate', function (e) {
    console.log("location: " + document.location + ", state: " + JSON.stringify(e.state));

    KD_routeReG(document.location.pathname)

    //  console.log(KD_ROUterHistory[document.location.pathname])
});

function KD_el(r) {
    var domK = Object.keys(r)

    function KD_dom(name) {

        var o = document.createElement(name);

        KD_map(domK.slice(1), function (attribut) {

            if (typeof o[attribut] == 'function') {

                o[attribut](r[attribut])

            } else {

                o.m([
                    [attribut, r[attribut]]
                ])

            }
        })

        KD_T(o, r[domK[0]])
        return o;
    }



    var tags = {
        d: ['div', KD_dom],
        s: ['span', KD_dom],
        switch: ['a', function (name) {
            var a = Object.assign({
                a: r.switch,
                e: {
                    click: function (e) {
                        e.preventDefault()

                        KD_routeReG(r.href)
                        
                        window.history.pushState(r.href, 'Title', r.href);
                    }
                }
            }, r)

            delete a.switch

            return KD_el(a)
        }],
        router: ["div", function (name) {

            var parent = KD_assign({
                div: []
            }, r);
            delete parent.router

            parent = KD_el(parent)

            KD_map(r.router, function (tag) {
                var dompush = {
                    p: parent,
                    dom: tag
                };
                KD_ROUter[tag.to] ? KD_ROUter[tag.to][1].push(dompush) : KD_ROUter[tag.to] = [
                    (function (regexlist, rgxURL) {
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
                    ], tag.to), [dompush]
                ];
                if (KD_ROUter[tag.to][0].test(document.location.pathname)) {
                    dompush.dom = KD_el(tag)
                    parent.a(dompush.dom)
                }


            })

            return parent
        }]
    }

    return tags[domK[0]] ? tags[domK[0]][1](tags[domK[0]][0]) : KD_dom(domK[0])
}

function KD_T(p, s) {
    switch (KD_type(s)) {
        case "Array":
            KD_map(s, function (r) {

                p.appendChild(KD_el(r))
            })
            break;
        case "Function":
            p.l(s)
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