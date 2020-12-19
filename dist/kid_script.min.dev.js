"use strict";

/*! KID.js 
    v1.2.1 (c) soso
    MIT License
    
    (っ◔◡◔)っ ♥ JSkid ♥ https://github.com/Generalsimus/JSkid

*/
var KD_I = {},
    KD_VA = {};

function KD_E(o, p, f) {
  Object.defineProperty(o, p, {
    get: f
  });
}

function KD_zez(o, prop, g) {
  var v = o[prop],
      d = Object.getOwnPropertyDescriptor(o, prop);
  Object.defineProperty(o, prop, {
    get: function get() {
      return v;
    },
    set: function set(new_v) {
      var ol;
      if (v != (v = new_v)) if (d && d.hasOwnProperty("set") && d.set(new_v), g.attr) g.node[0].setAttribute(g.attr, g.func());else {
        var f = g.func(),
            new_Arr = f instanceof Array ? f.length ? f : [""] : [f];
        if (g.node = g.node.reduce(function (arr, v, i) {
          if (i < new_Arr.length) {
            var e = v.KD_OBJECT == new_Arr[i] ? v : KD_T(null, new_Arr[i]);
            arr.push(e), v.f(e);
          } else v.r();

          return arr;
        }, []), new_Arr.length > g.node.length) for (var i = g.node.length; i < new_Arr.length; i++) {
          var e = KD_T(null, new_Arr[i]);
          g.node[g.node.length - 1].u(e, "after"), g.node.push(e);
        }
      }
    }
  });
}

function KD_g(f, o) {
  return function (p, a, r) {
    if (a) r = f(p);else {
      var c = f(p);
      p = KD_T(p, c instanceof Array && !c.length ? [""] : c);
    }
    var g = {
      node: [].concat(p),
      attr: a,
      func: f
    };

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
  if (val.length && "number" == typeof val.length) for (var array = [], i = 0; i < val.length; i++) {
    var v;
    (v = fun(val[i], i, val)) && array.push(v);
  } else for (var i in val) {
    var v;
    (v = fun(val[i], i, val)) && (val[i] = v);
  }
  return array || val;
}

var KD_method = {
  g: function g(a) {
    return this.getAttribute(a);
  },
  m: function m(a) {
    for (var i in a) {
      this.setAttribute(i, a[i]);
    }

    return this;
  },
  q: function q(s) {
    return s instanceof Array ? this.querySelectorAll(s[0]) : this.querySelector(s);
  },
  h: function h(l) {
    var c = this.children;
    return "number" == typeof l ? c[l] : c;
  },
  i: function i(_i) {
    return _i && (_i instanceof Object ? KD_T(this, _i) : this.innerHTML = _i), _i ? this : this.innerHTML;
  },
  y: function y(o) {
    return o ? KD_assign(this.style, o) : this.style;
  },
  e: function e(s) {
    for (var l in s) {
      l.split("_").forEach(function (v) {
        this.addEventListener(v, s[l]);
      }.bind(this));
    }

    return this;
  },
  o: function o(s, z, i) {
    for (z = this, s = s || 0, i = 0; "number" == typeof s && i <= s;) {
      z = z.parentNode, i++;
    }

    return z;
  },
  n: function n(s, z) {
    z = this;

    for (var i = 0; i <= ("number" == typeof s ? s : 0); i++) {
      z = z.nextElementSibling;
    }

    return z;
  },
  p: function p(s, z) {
    z = this;

    for (var i = 0; i <= ("number" == typeof s ? s : 0); i++) {
      z = z.previousElementSibling;
    }

    return z;
  },
  a: function a(s) {
    return this.appendChild(s), s;
  },
  r: function r() {
    this.o().removeChild(this);
  },
  f: function f(t) {
    return this.parentNode.replaceChild(t, this), t;
  },
  b: function b(t, n) {
    var b = n || this;
    return KD_map(t, function (v) {
      v instanceof Array ? KD_group[v[0]] ? KD_group[v[0]].push(b) : KD_group[v[0]] = [b] : KD_group[v] = b;
    }), b;
  },
  l: function l(f) {
    return KD_T(this, f), this;
  },
  u: function u(o, m, b) {
    return b = this, "after" != m || (b = this.nextSibling) ? (b.o().insertBefore(o, b), b) : (this.o().a(o), b);
  },
  Restart: function Restart(v) {
    var n = this.n(),
        o;
    (n ? this : this.o())[n ? "u" : "a"](KD_el(v || this.KD_OB)), this.r();
  }
};

function KD_m(a) {
  return KD_method[a].bind(this);
}

var KD_NM_C = {
  getAttr: KD_m("g"),
  setAttr: KD_m("m"),
  Select: KD_m("q"),
  Child: KD_m("h"),
  Inner: KD_m("i"),
  STYLE: KD_m("y"),
  Parent: KD_m("o"),
  NextElement: KD_m("n"),
  PreviousElement: KD_m("p"),
  Append: KD_m("a"),
  Remove: KD_m("r"),
  Replace: KD_m("f"),
  Global: KD_m("b"),
  Mark: KD_m("l"),
  insertAfter: KD_m("u")
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

function KD_el(r) {
  var domK = Object.keys(r);

  function KD_dom(name) {
    for (var v in domK) {
      switch (v) {
        case "0":
          (name = document.createElement(name)).KD_OBJECT = r, KD_T(name, r[domK[0]]);
          break;

        default:
          var a = r[domK[v]] instanceof Function ? r[domK[v]](name, domK[v]) : r[domK[v]];
          if (KD_method[domK[v]]) name[domK[v]](a);else {
            var t = {};
            t[domK[v]] = a, name.m(t);
          }
      }
    }

    return name;
  }

  var tags = {
    d: ["div", KD_dom]
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
      return null != r ? KD_T(p, r) : void 0;

    case "Object":
      n = KD_el(s);
      break;

    case "Number":
    case "Undefined":
    case "Null":
    case "String":
      (n = document.createTextNode(String(s))).KD_OBJECT = s;
      break;

    default:
      n = s;
  }

  return p && n && p.a(n), n;
}

KD_assign(Node.prototype, KD_method, KD_NM_C);
var KD_style = KD_T(document.head, {
  style: ""
});