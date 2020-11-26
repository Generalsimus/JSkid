/*! KID.js 
    v1.2.0 (c) soso
    MIT License
    
    (っ◔◡◔)っ ♥ JSkid ♥ https://github.com/Generalsimus/JSkid

*/

var KD_I = {},
  KD_VA = {};

function KD_E(o, p, f) {
  Object.defineProperty(o, p, {
    get: f,
  });
}
function KD_zez(o, prop, g) {
  var v = o[prop],
    d = Object.getOwnPropertyDescriptor(o, prop);

  Object.defineProperty(o, prop, {
    get: function () {
      return v;
    },
    set: function (new_v) {
      var ol = v;
      v = new_v;

      if (ol != v) {
        if (d.set) {
          d.set(new_v);
        }
        if (g.attr) {
          g.node[0].setAttribute(g.attr, g.func());
        } else {

          var f = g.func(),
            new_Arr = f instanceof Array ? f.length ? f : [""] : [f];

          // c instanceof Array && !c.length ? [""] : c


          g.node = g.node.reduce(function (arr, v, i) {
            if (i < new_Arr.length) {

              var e = v.KD_OBJECT == new_Arr[i] ? v : KD_T(null, new_Arr[i]);

              arr.push(e);
              v.f(e);
            } else {
              v.r();
            }
            return arr
          }, [])

          if (new_Arr.length > g.node.length) {

            for (var i = g.node.length; i < new_Arr.length; i++) {
              var e = KD_T(null, new_Arr[i]);

              g.node[g.node.length - 1].u(e, "after");

              g.node.push(e);
            }
          }

        }

      }

    },
  });
}

function KD_g(f, o) {
  return function (p, a, r) {
    if (a) {
      r = f(p);
    } else {
      var c = f(p)
      p = KD_T(p, c instanceof Array && !c.length ? [""] : c);

    }

    var g = { node: [].concat(p), attr: a, func: f };

    for (var prop in o) {
      KD_zez(o[prop], prop, g);
    }
    return r;
  };
}

function KD_type(a) {
  return {}.toString.call(a).match(/(\w)\w+/g)[1];
}
function KD_map(val, fun) {
  if (val.length && typeof val.length == "number") {
    var array = [];
    for (var i = 0; i < val.length; i++) {
      var v = fun(val[i], i, val);

      v ? array.push(v) : 0;
    }
  } else {
    for (var i in val) {
      var v = fun(val[i], i, val);
      v ? (val[i] = v) : 0;
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
      this.setAttribute(i, a[i]);
    }
    return this;
  },
  q: function (s) {
    return s instanceof Array
      ? this.querySelectorAll(s[0])
      : this.querySelector(s);
  },
  h: function (l) {
    var c = this.children;
    return typeof l == "number" ? c[l] : c;
  },
  i: function (i) {
    i ? (i instanceof Object ? KD_T(this, i) : (this.innerHTML = i)) : 0;
    return i ? this : this.innerHTML;
  },
  y: function (o) {
    return o ? KD_assign(this.style, o) : this.style;
    // KD_style
  },
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
  o: function (s, z, i) {
    z = this;
    s = s || 0;
    i = 0;

    while (typeof s == "number" && i <= s) {
      z = z.parentNode;
      i++;
    }

    return z;
  },

  n: function (s, z) {
    z = this;
    for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
      z = z.nextElementSibling;
    }

    return z;
  },
  p: function (s, z) {
    z = this;
    for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
      z = z.previousElementSibling;
    }
    return z;
  },
  a: function (s) {
    this.appendChild(s);
    return s;
  },
  r: function () {
    this.o().removeChild(this);
  },
  f: function (t) {
    this.parentNode.replaceChild(t, this);
    return t;
  },

  b: function (t, n) {
    var b = n ? n : this;

    KD_map(t, function (v) {
      if (v instanceof Array) {
        KD_group[v[0]] ? KD_group[v[0]].push(b) : (KD_group[v[0]] = [b]);
      } else {
        KD_group[v] = b;
      }
    });

    return b;
  },

  l: function (f) {
    KD_T(this, f);
    return this;
  },
  u: function (o, m, b) {
    b = this;
    if (m == "after") {
      b = this.nextSibling;
      if (!b) {
        this.o().a(o);
        return b;
      }
    }

    b.o().insertBefore(o, b);
    return b;
  },
  // KD_cl: [],
  // KD_pa: true,
  // KD_on: true,
  restart: function (v) {
    var n = this.n(),
      o = n ? this : this.o();
    o[n ? "u" : "a"](KD_el(v ? v : this.KD_OB));
    this.r();
  },
};

function KD_assign(obj1, obj2) {
  try {
    obj1 = Object.assign(obj1, obj2);
  } catch (e) {
    for (var p in obj2) {
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}
KD_assign(Node.prototype, KD_method);

function KD_el(r) {
  var domK = Object.keys(r);


  function KD_dom(name) {
    for (var v in domK) {
      switch (v) {
        case "0":
          name = document.createElement(name);
          name.KD_OBJECT = r;
          KD_T(name, r[domK[0]]);
          break;
        default:
          var a =
            r[domK[v]] instanceof Function
              ? r[domK[v]](name, domK[v])
              : r[domK[v]];
          if (KD_method[domK[v]]) {
            name[domK[v]](a);
          } else {
            var t = {};
            t[domK[v]] = a;
            name.m(t);
          }

          break;
      }
    }

    return name;
  }

  var tags = {
    d: ["div", KD_dom],
  };

  return tags[domK[0]] ? tags[domK[0]][1](tags[domK[0]][0]) : KD_dom(domK[0]);
}

function KD_T(p, s, n) {
  switch (KD_type(s)) {
    case "Array":
      return s.map(function (tag) {
        return KD_T(p, tag);
      });
    case "Function":
      var r = s(p);
      if (r != undefined) {
        return KD_T(p, r);
      }

      return;
    case "Object":
      n = KD_el(s);
      break;
    case "Number":
    case "Undefined":
    case "Null":
    case "String":
      n = document.createTextNode(String(s));
      n.KD_OBJECT = s;
      break;
    default:
      n = s;
      break;
  }

  if (p && n) {
    p.a(n);
  }

  return n;
}
