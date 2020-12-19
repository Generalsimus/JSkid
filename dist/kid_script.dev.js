"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! KID.js 
    v1.2.1 (c) soso
    MIT License
    
    (っ◔◡◔)っ ♥ JSkid ♥ https://github.com/Generalsimus/JSkid

*/
var KD_I = {},
    KD_VA = {},
    KD_ROUter = {};
window.location.params = {};

function KD_E(o, p, f) {
  Object.defineProperty(o, p, {
    get: f
  });
}

function KD_flat(a) {
  return a instanceof Array ? a.reduce(function (c, v) {
    return c.concat(KD_flat(v));
  }, []) : a;
}

function KD_li(o, prop, g) {
  var v = o[prop],
      d = Object.getOwnPropertyDescriptor(o, prop);
  Object.defineProperty(o, prop, {
    configurable: true,
    get: function get() {
      return v;
    },
    set: function set(new_v) {
      console.log(new_v);
      v = new_v;
      var f_r = g.func(g.parent);

      if (g.attr) {
        g.parent.setAttribute(g.attr, f_r);
      } else {
        var next = g.last.nextSibling,
            last = g.last,
            f = KD_flat(f_r),
            new_Arr = f instanceof Array ? f.length ? f : [""] : [f];
        g.node.forEach(function (v, i) {
          var n = next.nextSibling;

          if (i < new_Arr.length) {
            last = KD_T(null, new_Arr[i]);
            next.Replace(last);
          } else {
            next.Remove();
          }

          next = n;
        });

        if (new_Arr.length > g.node.length) {
          for (var i = g.node.length; i < new_Arr.length; i++) {
            var e = KD_T(null, new_Arr[i]);

            if (last) {
              last.insert(e, "after");
            }

            last = e;
          }
        }

        g.node = new_Arr;
      }

      if (d && d.hasOwnProperty("set")) {
        d.set(v);
      }
    }
  });
}

function KD_g(f, o, t) {
  f = f.bind(t);

  function r(p, a, r) {
    if (a) {
      r = f(p);
    } else {
      var c = KD_flat(f(p));
      c = [].concat(c instanceof Array && !c.length ? [""] : c);
    }

    var g = {
      node: c,
      attr: a,
      func: f,
      parent: p,
      last: p.lastChild || KD_T(p, "")
    };

    for (var prop in o) {
      KD_li(o[prop], prop, g);
    }

    return a ? r : c;
  }

  ;
  r.KD_origin = f;
  return r;
}

function KD_type(a) {
  return Object.prototype.toString.call(a).match(/(\w)\w+/g)[1];
}

var KD_method = {
  // getAttr 
  // g
  getAttr: function getAttr(a) {
    return this.getAttribute(a);
  },
  // setAttr  
  // m
  setAttr: function setAttr() {
    console.log(_typeof(arguments[0]), arguments);

    switch (_typeof(arguments[0])) {
      case "object":
        var a = arguments[0];

        for (var i in a) {
          this.setAttribute(i, a[i]);
        }

        break;

      case "string":
        var i = 0,
            a;

        while (a = arguments[i]) {
          this.setAttribute(a, arguments[i + 1]);
          i = +2;
        }

        break;

      case "function":
        console.log(arguments);
        this.setAttr(arguments[0](this));
        break;
    }

    return this;
  },
  // Select
  // q
  Select: function Select(s) {
    return s instanceof Array ? this.querySelectorAll(s[0]) : this.querySelector(s);
  },
  // Child
  // h
  Child: function Child(l) {
    var c = this.children;
    return typeof l == "number" ? c[l] : c;
  },
  // Inner
  // i
  Inner: function Inner(i) {
    i ? i instanceof Object ? KD_T(this, i) : this.innerHTML = i : 0;
    return i ? this : this.innerHTML;
  },
  // STYLE
  // y
  STYLE: function STYLE(o) {
    return o ? KD_assign(this.style, o) : this.style; // KD_style
  },
  // e
  e: function e(s) {
    for (var l in s) {
      l.split("_").forEach(function (v) {
        this.addEventListener(v, s[l]);
      }.bind(this));
    }

    return this;
  },
  // Parent
  // o
  Parent: function Parent(s, z, i) {
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
  NextElement: function NextElement(s, z) {
    z = this;

    for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
      z = z.nextElementSibling;
    }

    return z;
  },
  // PreviousElement
  // p
  PreviousElement: function PreviousElement(s, z) {
    z = this;

    for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
      z = z.previousElementSibling;
    }

    return z;
  },
  // Append
  // a
  Append: function Append(s) {
    this.appendChild(s);
    return s;
  },
  // Remove
  // r
  Remove: function Remove() {
    this.Parent().removeChild(this);
  },
  // Replace
  // f
  Replace: function Replace(t) {
    this.parentNode.replaceChild(t, this);
    return t;
  },
  // Global
  // b
  Global: function Global(t, n) {
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
  Mark: function Mark(f) {
    f(this);
    return this;
  },
  // insert
  // u
  insert: function insert(o, m) {
    switch (m) {
      case "after":
        var n = this.nextSibling,
            p = this.Parent();
        n ? p.insertBefore(o, n) : p.Append(o);
        break;

      case "before":
        this.Parent().insertBefore(o, this);
        break;
    }

    return this;
  },
  // Restart
  Restart: function Restart(v) {
    this.Replace(KD_T(null, this.KD_OBJECT));
  }
};

function KD_assign() {
  try {
    Object.assign.apply(null, arguments);
  } catch (e) {
    for (var i = 1; i < arguments.length; i++) {
      var v = arguments[i];

      for (var p in v) {
        arguments[0][p] = v[p];
      }
    }
  }

  return arguments[0];
}

KD_assign(Node.prototype, KD_method);

function KD_routeGeN(TO, REGEX, z) {
  z = document.location.pathname.match(REGEX);
  TO.replace(/\:/g, "").match(REGEX).forEach(function (v, i) {
    window.location.params[v] = z[i];
  });
}

function KD_Rgen(url, id) {
  var p_c = [];

  for (var i in KD_ROUter) {
    var o = KD_ROUter[i],
        test = o[0].test(url);
    o[1].forEach(function (v) {
      v.parent.Inner(" ");

      if (test) {
        var to = v.general.to;
        to = to.KD_origin ? to.KD_origin() : to;
        KD_routeGeN(to, o[0]);
        p_c.push([v.parent, v.children[id] || (v.children[id] = KD_el(v.general))]);
      }
    });
  }

  p_c.forEach(function (v) {
    v[0].Append(v[1]);
  });
}

window.addEventListener("popstate", function (e) {
  KD_Rgen(document.location.pathname, e.state.ID);
});

function KD_node(createEl, type) {
  function KD_el(r) {
    var domK = Object.keys(r);

    function KD_dom(name) {
      domK.forEach(function (v, i) {
        if (i) {
          var a = r[v] instanceof Function ? r[v](name, v) : r[v];

          if (KD_method[v]) {
            name[v](a);
          } else {
            name.setAttribute(v, a);
          }
        } else {
          name = createEl(name);
          name.KD_OBJECT = r;
          KD_T(name, r[domK[0]]);
        }
      });
      return name;
    }

    var tags = {
      svg: function svg() {
        return type == "EL" ? KD_NS(r) : KD_dom("svg");
      },
      "switch": function _switch() {
        return KD_dom("a").e({
          click: function click(e) {
            e.preventDefault();
            var h = this.getAttr('href');

            if (h) {
              var m = new Date().getTime();
              history.pushState({
                ID: m
              }, document.title, h);
              KD_Rgen(h, m);
              window.scrollTo(0, 0);
            }
          }
        });
      },
      router: function router() {
        var list = r.router;
        r.router = [];
        var parent = KD_dom('div'),
            path = document.location.pathname;

        function z(a) {
          switch (KD_type(a)) {
            case "Array":
              a.forEach(function (v) {
                z(v);
              });
              break;

            case "Function":
              z(a(parent));
              break;

            case "Object":
              if (a.to) {
                var to = a.to.KD_origin ? a.to.KD_origin() : a.to;
                var genREGEX = a.unic ? function (regexlist, rgxURL) {
                  regexlist.forEach(function (v) {
                    rgxURL = rgxURL.replace(v[0], v[1]);
                  });
                  return new RegExp("^" + rgxURL + "$", "i");
                }([[/[\-{}\[\]+?.,\\\^$|#\s]/g, "\\$&"], [/\((.*?)\)/g, "(?:$1)?"], [/(\(\?)?:\w+/g, function (match, optional) {
                  return optional ? match : "([^/]+)";
                }], [/\*\w+/g, "(.*?)"]], to) : new RegExp(to.replace(/:[^\s/]+/g, "([\\w-]+)")),
                    el = {
                  parent: parent,
                  general: a,
                  children: {}
                };

                if (genREGEX.test(path)) {
                  KD_routeGeN(to, genREGEX);
                  el.children[0 + path] = KD_T(parent, a);
                  history.replaceState({
                    ID: 0 + path
                  }, r.title, path);
                }

                var g_o = KD_ROUter[genREGEX];

                if (g_o) {
                  g_o[1].push(el);
                } else {
                  KD_ROUter[genREGEX] = [genREGEX, [el]];
                }
              }

              break;
          }
        }

        z(list);
        return parent;
      }
    };
    return (tags[domK[0]] || KD_dom)(domK[0]);
    return tags[domK[0]] ? tags[domK[0]]() : KD_dom(domK[0]);
  }

  function KD_T(p, s, n) {
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
        return KD_T(p, s(p));

      case "Object":
        n = KD_el(s);
        break;

      case "Number":
      case "Undefined":
      case "Null":
      case "String":
      case "Boolean":
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
      p.Append(n);
    }

    return n;
  }

  return [KD_el, KD_T];
}

var el = KD_node(document.createElement.bind(document), "EL"),
    NS = KD_node(function (name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}, "NS"),
    KD_NS = NS[0],
    KD_T_NS = NS[1],
    KD_el = el[0],
    KD_T = el[1],
    KD_style = KD_T(document.head, {
  style: ''
});