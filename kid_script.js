/*! KID.js 
    v1.0.3 (c) soso
    MIT License
*/
var kid_css = {


    },
    kid_group = {},
    kid_cssselector = 'kid_css_';

var kid_style = kid_t(document.head, [{
    style: [],
}]).z;


function kid_csap(s) {
    kid_style.insertAdjacentHTML("afterbegin", s)
}




kid_map([], function (v) {


    var a = kid_css[v]
    var css = '';

    kid_map(a[1], function (v, i) {

        css = css + kid_k(i[0] == '*' ? i.slice(1) : '.' + kid_c(i), v);

    })
    kid_csap(a[0] + '{' + css + '}')
})

function kid_map(val, fun) {

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

function kid_type(a) {
    return Object.prototype.toString.call(a).match(/(\w)\w+/g)[1]
}

// csssis dasagenireblad

function kid_c(s, r) {
    var d = '',
        c = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
    s = String(s)
    for (var l = 0; l < s.length; l++) {
        d = d + c[s[l]];
    }
    return (r ? r : kid_cssselector) + d;

}

function kid_k(r, c) {
    var s = '',
        l = '';




    for (var a in c) {

        ((a[0] == '_' || c[a][0] == '_') ? ['-webkit-', '-moz-', '-ms-', '-o-', ''] : ['']).map(function (v) {


            a[0] == '&' ? kid_map(a.slice(1).split('&'), function (v) {
                // console.log([r + v,c[a]])
                l = l + kid_k(r + v, c[a]);
            }) : (s = s + (a[0] == '_' ? v : '') + a.split(/(?=[A-Z])/).join('-').replace(/_/g, '').toLowerCase() + ':' + (c[a][0] == '_' ? v + c[a].substring(1) : c[a]) + ';');

        })


    }

    return l + r + '{' + s + '}';

}





function kid_t(p, s) {

    // var alllf='qwertyuiopasdfghjklzxcvbnm';
    function rt(t, k) {

        var l = k ? k : m;

        try {
            return Object.assign(t, l);
        } catch (e) {
            kid_map(l, function (v, k) {
                t[k] = v;
            })
        }


        // if (t) {

        //     for (let n in l) {

        //         // alllf=alllf.replace(n, "")

        //         t[n] = l[n];
        //     }
        // }
        // console.log(alllf)
        return t;
    }

    //   methodebis sia ...........................                
    var m = {
        g: function (a) {
            return this.getAttribute(a);
        },
        m: function (a) {
            kid_map(a, function (v) {
                p.setAttribute(v[0], v[1])
            })

            return p;
        },
        q: function (s) {
            return s instanceof Array ? kid_map(this.querySelectorAll(s[0]), rt) : rt(this.querySelector(s));
        },

        c: function (j) {
            p = this;

            function v(j) {
                switch (Object.prototype.toString.call(j)) {
                    case '[object Array]':
                        kid_map(j, v);
                        break;
                    case '[object Number]':
                        var c = kid_c(j);

                        kid_csap(kid_k('.' + c, kid_css[j]))
                        p.classList.add(c);
                        break;
                    case '[object String]':
                        p.classList.add(j);
                        break;
                    case '[object Object]':
                        kid_map(j, function (j, i) {
                            var c = kid_c(i);

                            kid_csap(kid_k('.' + c + j, kid_css[i]))

                            p.classList.add(c);
                        });
                        break;
                }
            }

            v(j)

            return p;


        },
        h: function (l) {
            var c = this.children
            return typeof l == 'number' ? c[l] : c
        },
        i: function (i) {
            i ? i instanceof Object ? kid_t(this, i) : this.innerHTML = i : 0;
            return i ? this : this.innerHTML
        },
        y: function (o) {
            return o ? Object.assign(this.style, o) : this.style;
        },
        e: function (s) {
            for (var l in s) {
                l.split('_').forEach(function (v) {
                    p.addEventListener(v, s[l]);
                })
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

            return rt(z);
        },
        p: function (s, z) {
            z = this;
            for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {

                z = z.previousElementSibling
            }
            return rt(z);
        },
        a: function (s) {

            this.appendChild(s)
            return s;
        },
        r: function () {
            this.o().removeChild(this)
        },
        f: function (t) {
            p.parentElement.replaceChild(t, p)
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
                            kid_group[v] ? kid_group[v].push(b) : kid_group[v] = [b];
                        }

                    })

                } else if (typeof t == "number") {
                    kid_group[t] = b;

                } else {
                    for (var h in t) {
                        kid_group[h] = t[h];

                    }
                }
            }


            addb(t)


            return b;
        },
        w: function (a) {


            kid_map(a, function (v, k) {

                kid_map(v, function (s, b) {
                    var l = 0,
                        o = 0;

                    function c() {


                        if (window.innerWidth <= s && !l) {

                            if (k == 'in') {
                                l = kid_group[b].o()[kid_group[b].n() ? 'insertBefore' : 'a'].bind(kid_group[b].o())
                                p.appendChild(kid_group[b])
                            }
                            console.log('resizes dros appen chaildi ar mushaobs kargad in da outi araaa damatebuli')
                        } else if (l) {
                            l(kid_group[b])
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
                kid_map(o, function (v, i) {
                    function g() {

                        p.y()[i] = v()
                    }
                    // window.onresize = g;
                    window.addEventListener("resize", g)
                    g()
                })
            }

        },
        u:function(o){
            this.o().insertBefore(o, this);
        }
    }


    rt(p)
    // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm


    s instanceof Array ? kid_map(s, function (r, h, k, l) {

        if (r.for) {

            for (var f = (typeof r.for[0] == "number" ? 1 : 0); f <= (typeof r.for[0] == "number" ? r.for[0] : r.for.length - 1); f++) {
                var x = Object.assign({}, r)
                delete x.for;

                r.for[f] && Array.isArray(x.c) && Array.isArray(r.for[f].c) ? r.for[f].c = x.c.concat(r.for[f].c).filter(function (o, v, a) {
                    return a.indexOf(o) === v
                }) : 0;

                var se = r.for[f] ? rt(x, r.for[f]) : x;


                kid_t(p, [se])
            }
            return;
        }

        k = Object.keys(r)[0]
        l = r[k]



        var tags = {
            d: 'div',
            s: "span"
        }

        var o = document.createElement(tags[k] ? tags[k] : k);





        p.a(o);
        var z = kid_t(o, l)

        r.c ? z.m([
            ['ClASSID', String(JSON.stringify(r.c))]
        ]) : 0;



// return ;
        p.z = z

        for (var a in r) {

            if (![k].includes(a)) {

                if (typeof z[a] == 'function') {
                    z[a](r[a])
                } else {
                    z.m([
                        [a, r[a]]
                    ])
                }
            };
        }



    }) : s instanceof Function ? p.l(s) : p.i(s);
    


    return p;
    
}

function kid_xhr(call, link, method) {

    var xhr = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : (XMLHttpRequest && new XMLHttpRequest());

    xhr.open(method ? method : 'POST', link ? link : window.location);

    xhr.onload = function () {
        call ? call(JSON.parse(xhr.response ? xhr.response : 0)) : 0;

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
