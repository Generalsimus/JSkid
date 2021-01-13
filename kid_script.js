/*! KID.js 
    v1.2.5 (c) soso
    MIT License
    
    (っ◔◡◔)っ ♥ JSkid ♥ https://github.com/Generalsimus/JSkid

*/

var KD_I = {},
    KD_VA = {},
    KD_ROUter = {},
    KD_ROUid = new Date().getTime();

window.location.params = {};

function KD_E(o, p, f) {

    Object.defineProperty(o, p, {
        get: f,
    });
}

function KD_flat(a) {
    return a instanceof Array ? a.reduce(function (c, v) {
        return c.concat(KD_flat(v))
    }, []) : a
}

function KD_li(o, prop, g) {
    var v = o[prop],
        d = Object.getOwnPropertyDescriptor(o, prop);

    try {
        Object.defineProperty(o, prop, {
            enumerable: true,
            configurable: true,
            get: function () {
                return v;
            },
            set: function (new_v) {

                v = new_v;
                var f_r = g.func(g.parent);
                if (g.attr) {
                    g.parent.setAttribute(g.attr, f_r)
                } else {
                    var next = g.last.nextSibling,
                        last = g.last,
                        f = KD_flat(f_r),
                        new_Arr = f instanceof Array ? f.length ? f : [""] : [f];

                    g.node.forEach(function (v, i) {
                        var n = next.nextSibling
                        if (i < new_Arr.length) {
                            last = KD_T(null, new_Arr[i])
                            next.Replace(last)
                        } else {
                            next.Remove()
                        }
                        next = n;
                    })



                    if (new_Arr.length > g.node.length) {
                        for (var i = g.node.length; i < new_Arr.length; i++) {
                            var e = KD_T(null, new_Arr[i]);
                            if (last) {
                                last.insert(e, "after");
                            }
                            last = e;
                        }
                    }
                    g.node = new_Arr

                }
                if (d && d.hasOwnProperty("set")) {
                    d.set(v);
                }
            }
        })
    } catch (e) {

    }

}


function KD_g(f, o, t) {
    f = f.bind(t)

    function r(p, a, r) {

        if (a) {
            r = f(p);
        } else {
            var c = KD_flat(f(p))
            c = [].concat(c instanceof Array && !c.length ? [""] : c)
        }

        var g = {
            node: c,
            attr: a,
            func: f,
            parent: p,
            last: p.lastChild || KD_T(p, "")
        };

        for (var prop in o) {
            KD_li(o[prop], prop, g)
        }

        return a ? r : c;
    };
    r.KD_origin = f
    return r
}

function KD_type(a) {
    return Object.prototype.toString.call(a).match(/(\w)\w+/g)[1];
}

var KD_method = {
    // getAttr 
    // g
    getAttr: function (a) {
        return this.getAttribute(a);
    },
    // setAttr  
    // m
    setAttr: function () {
        console.log(typeof arguments[0], arguments)

        switch (typeof arguments[0]) {
            case "object":
                var a = arguments[0]
                for (var i in a) {
                    this.setAttribute(i, a[i]);
                }
                break;
            case "string":
                var i = 0,
                    a;
                while (a = arguments[i]) {
                    this.setAttribute(a, arguments[i + 1])
                    i = +2
                }
                break;
            case "function":
                console.log(arguments)
                this.setAttr(arguments[0](this))
                break;
        }

        return this;
    },
    // Select
    // q
    Select: function (s) {
        return s instanceof Array ?
            this.querySelectorAll(s[0]) :
            this.querySelector(s);
    },
    // Child
    // h
    Child: function (l) {
        var c = this.children;
        return l == undefined ? c : c[l];
    },
    // Inner
    // i
    Inner: function (i) {
        if (i == undefined) {
            return this.innerHTML
        } else {
            return "string" == typeof i ? (this.innerHTML = i, this.firstChild) : (this.innerHTML = "", KD_T(this, i));
        }
    },
    // STYLE
    // y
    STYLE: function (o) {
        return o ? KD_assign(this.style, o) : this.style;
        // KD_style
    },
    // e
    e: function (s) {
        for (var l in s) {

            l.split("_").forEach(
                function (v) {
                    this.addEventListener(v, s[l]);
                }.bind(this)
            );
        }
        return this;
    },
    // Parent
    // o
    Parent: function (s, z, i) {
        z = this;
        s = s || 0;
        i = 0;

        while (typeof s == "number" && i <= s) {
            z = z.parentNode;
            i++;
        }

        return z;
    },
    // NextElement
    // n
    NextElement: function (s, z) {
        z = this;
        for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
            z = z.nextElementSibling;
        }

        return z;
    },
    // PreviousElement
    // p
    PreviousElement: function (s, z) {
        z = this;
        for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
            z = z.previousElementSibling;
        }
        return z;
    },
    // Append
    // a
    Append: function (s) {
        this.appendChild(KD_T(null, s));
        return s;
    },
    // Remove
    // r
    Remove: function () {
        this.Parent().removeChild(this);
    },
    // Replace
    // f
    Replace: function (t) {
        this.parentNode.replaceChild(KD_T(null, t), this);
        return t;
    },
    // Global
    // b
    Global: function (t, n) {
        // var b = n ? n : this;

        // KD_map(t, function (v) {
        //     if (v instanceof Array) {
        //         KD_group[v[0]] ? KD_group[v[0]].push(b) : (KD_group[v[0]] = [b]);
        //     } else {
        //         KD_group[v] = b;
        //     }
        // });

        return b;
    },
    // Mark
    // l
    Mark: function (f) {
        if (f instanceof Function) {
            f(this)
        }
        return this;
    },
    // insert
    // u
    insert: function (o, m) {

        switch (m) {
            case "after":
                var n = this.nextSibling,
                    p = this.Parent();
                n ? p.insertBefore(KD_T(null, o), n) : p.Append(o)
                break;
            case "before":
                this.Parent().insertBefore(KD_T(null, o), this);
                break;
        }
        return this
    },
    // Restart
    Restart: function (v) {
        this.Replace(KD_T(null, this.KD_OBJECT))
    },
};


function KD_assign() {
    try {
        Object.assign.apply(null, arguments);
    } catch (e) {
        for (var i = 1; i < arguments.length; i++) {
            var v = arguments[i]
            for (var p in v) {
                arguments[0][p] = v[p];
            }
        }
    }

    return arguments[0];
}
KD_assign(Node.prototype, KD_method);

window.location.params = {};
function KD_routeGeN(TO, REGEX, z) {
    z = decodeURI(document.location.pathname).match(REGEX);
    TO.replace(/\:/g, "").match(REGEX).forEach(function (v, i) {
        // console.log(v, z[i])
        window.location.params[v] = z[i]
    })
}



function KD_Rgen(url, id) {
    var p_c = []
    // console.log(KD_ROUter)

    for (var i in KD_ROUter) {
        var o = KD_ROUter[i],
            test = o[0].test(url);

        o[1].forEach(function (v) {
            v.parent.Inner(" ")
            if (test && !v.parent.hidden) {
                var path = v.general.path;
                path = path.KD_origin ? path.KD_origin() : path;

                KD_routeGeN(path, o[0])

                p_c.push([v.parent, v.children[id] || (v.children[id] = KD_el(v.general))])


            }

        })

    }

    p_c.forEach(function (v) {
        v[0].Append(v[1])
    })
}
history.replaceState({
    ID: KD_ROUid
}, document.title, document.location.pathname);
window.addEventListener("popstate", (function (e) {
    // console.log(e.state.ID)
    KD_ROUid = e.state.ID
    KD_Rgen(decodeURI(document.location.pathname), KD_ROUid)
}));

function KD_node(createEl, type) {
    function KD_el(r) {
        var domK = Object.keys(r);

        function KD_dom(name) {
            domK.forEach(function (v, i) {
                if (i) {

                    var a = r[v] instanceof Function ?
                        r[v](name, v) :
                        r[v];
                    if (KD_method[v]) {

                        name[v](a);
                    } else {
                        name.setAttribute(v, a);
                    }
                } else {
                    name = createEl(name);
                    name.KD_OBJECT = r;

                }
            })
            KD_T(name, r[domK[0]]);
            return name;
        }

        var tags = {
            svg: function () {
                return type == "EL" ? KD_NS(r) : KD_dom("svg")
            },
            switch: function () {
                return KD_dom("a").e({
                    click: function (e) {
                        e.preventDefault();
                        var h = this.getAttr('href')
                        if (h) {
                            KD_ROUid = new Date().getTime();

                            history.pushState({
                                ID: KD_ROUid
                            }, document.title, h)
                            KD_Rgen(h, KD_ROUid);
                            window.scrollTo(0, 0)
                        }
                    }
                })
            },
            // routerDIV: function (name) {


            //     return KD_dom(name)
            // }
            router: function () {
                var list = r.router;

                r.router = [];
                var parent = KD_dom('div'),
                    doc_path = decodeURI(document.location.pathname);
                r.router = list;

                function z(a) {
                    switch (KD_type(a)) {
                        case "Array":
                            a.forEach(function (v) {
                                z(v)
                            })
                            break
                        case "Function":
                            z(a(parent))
                            break
                        case "Object":
                            if (a.path) {
                                var to = a.path.KD_origin ? a.path.KD_origin() : a.path;

                                var genREGEX = (a.unic && a.unic.KD_origin ? a.unic.KD_origin() : a.unic) ? (function (regexlist, rgxURL) {
                                    regexlist.forEach((function (v) {
                                        rgxURL = rgxURL.replace(v[0], v[1])
                                    }));
                                    return new RegExp("^" + rgxURL + "$", "i")
                                })([
                                    [/[\-{}\[\]+?.,\\\^$|#\s]/g, "\\$&"],
                                    [/\((.*?)\)/g, "(?:$1)?"],
                                    [/(\(\?)?:\w+/g, function (match, optional) {
                                        return optional ? match : "([^/]+)"
                                    }],
                                    [/\*\w+/g, "(.*?)"]
                                ], to) : new RegExp(to.replace(/:[^\s/]+/g, "([\\w-]+)")),
                                    el = {
                                        parent: parent,
                                        general: a,
                                        children: {}
                                    };


                                if (genREGEX.test(doc_path)) {
                                    KD_routeGeN(to, genREGEX)
                                    el.children[KD_ROUid] = KD_T(parent, a);
                                }
                                var g_o = KD_ROUter[genREGEX];

                                if (g_o) {
                                    g_o[1].push(el)
                                } else {

                                    KD_ROUter[genREGEX] = [
                                        genREGEX,
                                        [el]
                                    ]
                                }
                            }
                            break
                    }
                }
                z(list)


                return parent
            }
        };

        return (tags[domK[0]] || KD_dom)(domK[0])
        return tags[domK[0]] ? tags[domK[0]]() : KD_dom(domK[0]);
    }

    function KD_T(p, s, n) {
        // console.log(KD_type(s))
        switch (KD_type(s)) {
            case "Array":
                return s.map(function (tag) {
                    return KD_T(p, tag);
                });
            case "Function":
                // var r = s(p);
                // if (r != undefined) {
                //     return KD_T(p, r);
                // } 
                return KD_T(p, s(p))
            case "Object":
                n = KD_el(s);
                break;
            case "Number":
            case "Undefined":
            case "Null":
            case "String":
            case "Boolean":
            case "Date":
            case "RegExp":
            case "BigInt":
            case "Symbol":
                n = document.createTextNode(String(s));
                n.KD_OBJECT = s;
                break;
            default:
                n = s;
                break;
        }

        if (p && n) {
            p.appendChild(n);
        }

        return n;
    }
    return [KD_el, KD_T]
}

var el = KD_node(document.createElement.bind(document), "EL"),
    NS = KD_node(function (name) {

        return document.createElementNS('http://www.w3.org/2000/svg', name)
    }, "NS"),
    KD_NS = NS[0],
    KD_T_NS = NS[1],
    KD_el = el[0],
    KD_T = el[1],
    KD_style = KD_T(document.head, {
        style: ''
    })