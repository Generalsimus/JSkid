/*! KID.js 
    v1.2.13 (c) soso
    MIT License
    
    (っ◔◡◔)っ ♥ JSkid ♥ https://github.com/Generalsimus/JSkid

*/
/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+jsx+scss */
function KD_G(REGISTER_NODE) {
  var register_LIST = [],
      EXIST_NODES;

  function get_NODES() {
    var REGISTER_VALUE = REGISTER_NODE(register);
    return EXIST_NODES = KD_(null, REGISTER_VALUE instanceof Array ? REGISTER_VALUE.length ? REGISTER_VALUE : [""] : [REGISTER_VALUE]);
  }

  function register() {
    var reduced = Array.prototype.reduce.call(arguments, function (o, prop) {
      var value = o[prop];
      value = typeof value == "function" ? value.bind(o) : value;

      for (var reg in register_LIST) {
        var el = register_LIST[reg];

        if (el.o == o && el.p == prop) {
          return value;
        }
      }

      register_LIST.push({
        o: o,
        p: prop
      });
      var descriptor = Object.getOwnPropertyDescriptor(o, prop);

      try {
        Object.defineProperty(o, prop, {
          enumerable: true,
          configurable: true,
          get: function () {
            return value;
          },
          set: function (new_v) {
            value = new_v;

            if (descriptor.set) {
              descriptor.set(new_v);
            }

            if (register.ATTRIBUTE) {
              register.HTML_NODE.setAttr(register.ATTRIBUTE, REGISTER_NODE(register));
              return;
            }

            var old_nodes = EXIST_NODES,
                new_nodes = get_NODES(),
                last_node;

            function Replace_nodes(old_nodes, new_nodes, old_index, new_index, old_, new_) {
              do {
                old_ = old_nodes[old_index];
                new_ = new_nodes[new_index];

                if (old_ instanceof Array) {
                  Replace_nodes(old_, new_nodes, 0, new_index);
                  new_index = new_nodes.length;
                  old_index++;
                  continue;
                } else if (new_ instanceof Array) {
                  Replace_nodes(old_nodes, new_, old_index, 0);
                  old_index = old_nodes.length;
                  new_index++;
                  continue;
                } else {
                  if (old_) {
                    if (last_node) {
                      last_node.Remove();
                    }

                    last_node = old_;
                  }

                  if (new_) {
                    last_node.insert(new_, "before");
                  }
                }

                old_index++;
                new_index++;
              } while (old_ || new_);
            }

            Replace_nodes(old_nodes, new_nodes, 0, 0);
            last_node.Remove();
          }
        });
      } catch (e) {}

      return value;
    });
    return reduced;
  }

  return function (HTML_NODE, ATTRIBUTE) {
    register.HTML_NODE = HTML_NODE;
    register.ATTRIBUTE = ATTRIBUTE;
    return ATTRIBUTE ? REGISTER_NODE(register) : get_NODES();
  };
}

var KD_method = {
  getAttr: function (a) {
    return this.getAttribute(a);
  },
  setAttr: function () {
    var i = 1;

    while (arguments[i]) {
      var attribute = arguments[i - 1],
          value = arguments[i];
      typeof value == "function" ? this.setAttr(attribute, value(this, attribute)) : KD_method[attribute] ? this[attribute](value, attribute, this) : this.setAttribute(attribute, value);
      i++;
    }

    return this;
  },
  Select: function (s) {
    return s instanceof Array ? this.querySelectorAll(s[0]) : this.querySelector(s);
  },
  Child: function (l) {
    var c = this.children;
    return l == undefined ? c : c[l];
  },
  Inner: function (i) {
    if (i == undefined) {
      return this.innerHTML;
    } else {
      return "string" == typeof i ? (this.innerHTML = i, this.firstChild) : (this.innerHTML = "", KD_(this, i));
    }
  },
  STYLE: function (o) {
    return o ? KD_.assign(this.style, o) : this.style;
  },
  e: function (s) {
    for (var l in s) {
      l.split("_").forEach(function (v) {
        this.addEventListener(v, s[l]);
      }.bind(this));
    }

    return this;
  },
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
  NextElement: function (s, z) {
    z = this;

    for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
      z = z.nextElementSibling;
    }

    return z;
  },
  PreviousElement: function (s, z) {
    z = this;

    for (var i = 0; i <= (typeof s == "number" ? s : 0); i++) {
      z = z.previousElementSibling;
    }

    return z;
  },
  Append: function (s) {
    return KD_(this, s);
  },
  Remove: function () {
    this.Parent().removeChild(this);
  },
  Replace: function (t) {
    this.parentNode.replaceChild(KD_(null, t), this);
    return t;
  },
  insert: function (o, m) {
    switch (m) {
      case "after":
        var n = this.nextSibling,
            p = this.Parent();
        n ? p.insertBefore(KD_(null, o), n) : p.Append(o);
        break;

      case "before":
        this.Parent().insertBefore(KD_(null, o), this);
        break;
    }

    return this;
  },
  Restart: function (v) {
    this.Replace(KD_(null, this.KD_OBJECT));
  }
};
window.location.params = {};

function KD_node(createEl, KD_T_SVG) {
  function KD_v(v) {
    return typeof v == "function" ? v(undefined, true) : v;
  }

  var KD_NODES = {
    svg: function (r) {
      return KD_T_SVG ? KD_T_SVG(null, r) : KD_el(r, createEl("svg"));
    },
    switch: function (r, prop) {
      return KD_el(r, createEl("a")).e({
        click: function (e) {
          e.preventDefault();
          window.scrollTo(0, 0);
          var event = document.createEvent('Event');
          event.state = {
            ID: new Date().getTime()
          };
          history.pushState(event.state, document.title, this.getAttr('href'));
          event.initEvent('popstate', true, true);
          window.dispatchEvent(event);
        }
      });
    },
    routerBlock: function (r) {
      var tagname = r.tagname || "div",
          ifemptycomponent = r.ifemptycomponent || "",
          routerBlock = r.routerBlock,
          fake_node = KD_T(null, ""),
          exist_node = fake_node,
          new_r = {};
      new_r[tagname] = [fake_node, routerBlock];
      new_r = KD_.assign(new_r, r);
      delete new_r.tagname;
      delete new_r.ifemptycomponent;
      delete new_r.routerBlock;
      var node = KD_T(null, new_r);

      function c_e() {
        var exis_node = exist_node.PreviousElement() || exist_node.NextElement();

        if (exis_node && fake_node != exist_node) {
          exist_node.Replace(fake_node);
          exist_node = fake_node;
        } else if (!exis_node && fake_node == exist_node) {
          exist_node.Replace(ifemptycomponent = KD_T(null, ifemptycomponent));
          exist_node = ifemptycomponent;
        }
      }

      window.addEventListener("popstate", c_e);
      c_e();
      return node;
    },
    router: function (r) {
      var to = KD_v(r.path),
          unic = KD_v(r.unic),
          component = KD_v(r.component),
          fake_node = KD_T(null, ""),
          esc_reg = [/[\-{}\[\]+?.,\\\^$|#\s]/g, "\\$&"],
          to_path = (unic ? [esc_reg, [/:[^\s/]+/g, "([\\w-]+)"]] : [esc_reg, [/\((.*?)\)/g, "(?:$1)?"], [/(\(\?)?:\w+/g, function (match, optional) {
        return optional ? match : "([^/]+)";
      }], [/\*\w+/g, "(.*?)"]]).reduce(function (repl, reg) {
        return repl.replace(reg[0], reg[1]);
      }, to),
          reg = new RegExp(unic ? to_path : "^" + to_path + "$", "i"),
          NODES = {},
          N = function (ID) {
        var loc_path = decodeURI(document.location.pathname),
            mathch_path = loc_path.match(reg) || [];
        to.replace(/\/:/g, "/").match(reg).forEach(function (v, i) {
          window.location.params[v] = mathch_path[i];
        });
        return reg.test(loc_path) ? NODES[ID] || (NODES[ID] = KD_T(null, component)) : fake_node;
      },
          EXIS_NODE = N();

      window.addEventListener("popstate", function (e) {
        var new_node = N((e.state || {}).ID);

        if (EXIS_NODE != new_node) {
          EXIS_NODE.Replace(new_node);
          EXIS_NODE = new_node;
        }
      });
      return EXIS_NODE;
    }
  };

  function KD_el(r, created, NODE) {
    for (var prop in r) {
      if (NODE) {
        NODE.setAttr(prop, r[prop]);
      } else {
        if (KD_NODES[prop]) {
          if (!(NODE = created) && (NODE = KD_NODES[prop](r, prop))) {
            break;
          }
        } else {
          NODE = createEl(prop);
        }

        NODE.KD_OBJECT = r;
        KD_T(NODE, r[prop]);
      }
    }

    return NODE;
  }

  function KD_type(a) {
    return Object.prototype.toString.call(a).match(/\w+/g)[1];
  }

  function KD_T(p, s, n) {
    switch (KD_type(s)) {
      case "Array":
        return s.map(function (tag) {
          return KD_T(p, tag);
        });

      case "Function":
        return KD_T(p, s(p));

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
      case "Error":
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

  KD_T.render = KD_T;
  KD_T.style = KD_T(document.head, {
    style: ''
  });

  KD_T.assign = function () {
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
  };

  KD_T.createElement = function (nodeName, nodeGen) {
    KD_NODES[nodeName] = function (o, n) {
      return KD_T(null, nodeGen(o, n));
    };
  };

  KD_T.createAttribute = function (AttributeName, AttributeGen) {
    KD_method[AttributeName] = AttributeGen;
    Node.prototype[AttributeName] = AttributeGen;
  };

  KD_NODES;
  return KD_T;
}

var KD_ = KD_node(document.createElement.bind(document), KD_node(function (name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}));
KD_.assign(Node.prototype, KD_method);

try {
  (function () {
    var url = "ws://${{{KIX_SCRIPT_CONTROLER_DEV_MODE}}}/KD/K_KD_Socket_KD_K",
        socket = new WebSocket(url),
        extrac_url = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi,
        ERROR_NODE_FOR_KID;

    var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
        Prism = function (u) {
      var c = /\blang(?:uage)?-([\w-]+)\b/i,
          n = 0,
          _ = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof M ? new M(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return e.__id || Object.defineProperty(e, "__id", {
              value: ++n
            }), e.__id;
          },
          clone: function t(e, r) {
            var a, n;

            switch (r = r || {}, _.util.type(e)) {
              case "Object":
                if (n = _.util.objId(e), r[n]) return r[n];

                for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r));

                return a;

              case "Array":
                return n = _.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) {
                  a[n] = t(e, r);
                }), a);

              default:
                return e;
            }
          },
          getLanguage: function (e) {
            for (; e && !c.test(e.className);) e = e.parentElement;

            return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
          },
          currentScript: function () {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;

            try {
              throw new Error();
            } catch (e) {
              var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];

              if (n) {
                var t = document.getElementsByTagName("script");

                for (var r in t) if (t[r].src == n) return t[r];
              }

              return null;
            }
          },
          isActive: function (e, n, t) {
            for (var r = "no-" + n; e;) {
              var a = e.classList;
              if (a.contains(n)) return !0;
              if (a.contains(r)) return !1;
              e = e.parentElement;
            }

            return !!t;
          }
        },
        languages: {
          extend: function (e, n) {
            var t = _.util.clone(_.languages[e]);

            for (var r in n) t[r] = n[r];

            return t;
          },
          insertBefore: function (t, e, n, r) {
            var a = (r = r || _.languages)[t],
                i = {};

            for (var l in a) if (a.hasOwnProperty(l)) {
              if (l == e) for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
              n.hasOwnProperty(l) || (i[l] = a[l]);
            }

            var s = r[t];
            return r[t] = i, _.languages.DFS(_.languages, function (e, n) {
              n === s && e != t && (this[e] = i);
            }), i;
          },
          DFS: function e(n, t, r, a) {
            a = a || {};
            var i = _.util.objId;

            for (var l in n) if (n.hasOwnProperty(l)) {
              t.call(n, l, n[l], r || l);

              var o = n[l],
                  s = _.util.type(o);

              "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a));
            }
          }
        },
        plugins: {},
        highlightAll: function (e, n) {
          _.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, t) {
          var r = {
            callback: t,
            container: e,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          _.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), _.hooks.run("before-all-elements-highlight", r);

          for (var a, i = 0; a = r.elements[i++];) _.highlightElement(a, !0 === n, r.callback);
        },
        highlightElement: function (e, n, t) {
          var r = _.util.getLanguage(e),
              a = _.languages[r];

          e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
          var i = e.parentElement;
          i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
          var l = {
            element: e,
            language: r,
            grammar: a,
            code: e.textContent
          };

          function o(e) {
            l.highlightedCode = e, _.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, _.hooks.run("after-highlight", l), _.hooks.run("complete", l), t && t.call(l.element);
          }

          if (_.hooks.run("before-sanity-check", l), !l.code) return _.hooks.run("complete", l), void (t && t.call(l.element));
          if (_.hooks.run("before-highlight", l), l.grammar) {
            if (n && u.Worker) {
              var s = new Worker(_.filename);
              s.onmessage = function (e) {
                o(e.data);
              }, s.postMessage(JSON.stringify({
                language: l.language,
                code: l.code,
                immediateClose: !0
              }));
            } else o(_.highlight(l.code, l.grammar, l.language));
          } else o(_.util.encode(l.code));
        },
        highlight: function (e, n, t) {
          var r = {
            code: e,
            grammar: n,
            language: t
          };
          return _.hooks.run("before-tokenize", r), r.tokens = _.tokenize(r.code, r.grammar), _.hooks.run("after-tokenize", r), M.stringify(_.util.encode(r.tokens), r.language);
        },
        tokenize: function (e, n) {
          var t = n.rest;

          if (t) {
            for (var r in t) n[r] = t[r];

            delete n.rest;
          }

          var a = new i();
          return z(a, a.head, e), function e(n, t, r, a, i, l) {
            for (var o in r) if (r.hasOwnProperty(o) && r[o]) {
              var s = r[o];
              s = Array.isArray(s) ? s : [s];

              for (var u = 0; u < s.length; ++u) {
                if (l && l.cause == o + "," + u) return;
                var c = s[u],
                    g = c.inside,
                    f = !!c.lookbehind,
                    h = !!c.greedy,
                    d = c.alias;

                if (h && !c.pattern.global) {
                  var v = c.pattern.toString().match(/[imsuy]*$/)[0];
                  c.pattern = RegExp(c.pattern.source, v + "g");
                }

                for (var p = c.pattern || c, m = a.next, y = i; m !== t.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {
                  var k = m.value;
                  if (t.length > n.length) return;

                  if (!(k instanceof M)) {
                    var b,
                        x = 1;

                    if (h) {
                      if (!(b = W(p, y, n, f))) break;
                      var w = b.index,
                          A = b.index + b[0].length,
                          P = y;

                      for (P += m.value.length; P <= w;) m = m.next, P += m.value.length;

                      if (P -= m.value.length, y = P, m.value instanceof M) continue;

                      for (var S = m; S !== t.tail && (P < A || "string" == typeof S.value); S = S.next) x++, P += S.value.length;

                      x--, k = n.slice(y, P), b.index -= y;
                    } else if (!(b = W(p, 0, k, f))) continue;

                    var w = b.index,
                        E = b[0],
                        O = k.slice(0, w),
                        L = k.slice(w + E.length),
                        N = y + k.length;
                    l && N > l.reach && (l.reach = N);
                    var j = m.prev;
                    O && (j = z(t, j, O), y += O.length), I(t, j, x);
                    var C = new M(o, g ? _.tokenize(E, g) : E, d, E);
                    m = z(t, j, C), L && z(t, m, L), 1 < x && e(n, t, r, m.prev, y, {
                      cause: o + "," + u,
                      reach: N
                    });
                  }
                }
              }
            }
          }(e, a, n, a.head, 0), function (e) {
            var n = [],
                t = e.head.next;

            for (; t !== e.tail;) n.push(t.value), t = t.next;

            return n;
          }(a);
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = _.hooks.all;
            t[e] = t[e] || [], t[e].push(n);
          },
          run: function (e, n) {
            var t = _.hooks.all[e];
            if (t && t.length) for (var r, a = 0; r = t[a++];) r(n);
          }
        },
        Token: M
      };

      function M(e, n, t, r) {
        this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length;
      }

      function W(e, n, t, r) {
        e.lastIndex = n;
        var a = e.exec(t);

        if (a && r && a[1]) {
          var i = a[1].length;
          a.index += i, a[0] = a[0].slice(i);
        }

        return a;
      }

      function i() {
        var e = {
          value: null,
          prev: null,
          next: null
        },
            n = {
          value: null,
          prev: e,
          next: null
        };
        e.next = n, this.head = e, this.tail = n, this.length = 0;
      }

      function z(e, n, t) {
        var r = n.next,
            a = {
          value: t,
          prev: n,
          next: r
        };
        return n.next = a, r.prev = a, e.length++, a;
      }

      function I(e, n, t) {
        for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;

        (n.next = r).prev = n, e.length -= a;
      }

      if (u.Prism = _, M.stringify = function n(e, t) {
        if ("string" == typeof e) return e;

        if (Array.isArray(e)) {
          var r = "";
          return e.forEach(function (e) {
            r += n(e, t);
          }), r;
        }

        var a = {
          type: e.type,
          content: n(e.content, t),
          tag: "span",
          classes: ["token", e.type],
          attributes: {},
          language: t
        },
            i = e.alias;
        i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), _.hooks.run("wrap", a);
        var l = "";

        for (var o in a.attributes) l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';

        return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">";
      }, !u.document) return u.addEventListener && (_.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
        var n = JSON.parse(e.data),
            t = n.language,
            r = n.code,
            a = n.immediateClose;
        u.postMessage(_.highlight(r, _.languages[t], t)), a && u.close();
      }, !1)), _;

      var e = _.util.currentScript();

      function t() {
        _.manual || _.highlightAll();
      }

      if (e && (_.filename = e.src, e.hasAttribute("data-manual") && (_.manual = !0)), !_.manual) {
        var r = document.readyState;
        "loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16);
      }

      return _;
    }(_self);

    "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
    Prism.languages.markup = {
      comment: /<!--[\s\S]*?-->/,
      prolog: /<\?[\s\S]+?\?>/,
      doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/,
          name: /[^\s<>'"]+/
        }
      },
      cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      }, /&#x?[\da-f]{1,8};/i]
    }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) {
      "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
      value: function (a, e) {
        var s = {};
        s["language-" + e] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var n = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: s
          }
        };
        n["language-" + e] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[e]
        };
        var t = {};
        t[a] = {
          pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
            return a;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: n
        }, Prism.languages.insertBefore("markup", "cdata", t);
      }
    }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
    !function (s) {
      var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
          }
        },
        url: {
          pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + e.source + "$"),
              alias: "url"
            }
          }
        },
        selector: RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
        string: {
          pattern: e,
          greedy: !0
        },
        property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
      }, s.languages.css.atrule.inside.rest = s.languages.css;
      var t = s.languages.markup;
      t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
          pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
          lookbehind: !0,
          inside: {
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                style: {
                  pattern: /(["'])[\s\S]+(?=["']$)/,
                  lookbehind: !0,
                  alias: "language-css",
                  inside: s.languages.css
                },
                punctuation: [{
                  pattern: /^=/,
                  alias: "attr-equals"
                }, /"|'/]
              }
            },
            "attr-name": /^style/i
          }
        }
      }, t.tag));
    }(Prism);
    Prism.languages.clike = {
      comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      boolean: /\b(?:true|false)\b/,
      function: /\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    };
    Prism.languages.javascript = Prism.languages.extend("clike", {
      "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
      }],
      keyword: [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: !0
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }],
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: Prism.languages.regex
          },
          "regex-flags": /[a-z]+$/,
          "regex-delimiter": /^\/|\/$/
        }
      },
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      }, {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      }],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
      "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\${|}$/,
                alias: "punctuation"
              },
              rest: Prism.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      }
    }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
    !function (i) {
      var t = i.util.clone(i.languages.javascript);
      i.languages.jsx = i.languages.extend("markup", t), i.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i, i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i, i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.insertBefore("inside", "attr-name", {
        spread: {
          pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
          inside: {
            punctuation: /\.{3}|[{}.]/,
            "attr-value": /\w+/
          }
        }
      }, i.languages.jsx.tag), i.languages.insertBefore("inside", "attr-value", {
        script: {
          pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
          inside: {
            "script-punctuation": {
              pattern: /^=(?={)/,
              alias: "punctuation"
            },
            rest: i.languages.jsx
          },
          alias: "language-javascript"
        }
      }, i.languages.jsx.tag);

      var o = function (t) {
        return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(o).join("") : "";
      },
          p = function (t) {
        for (var n = [], e = 0; e < t.length; e++) {
          var a = t[e],
              s = !1;

          if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === o(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({
            tagName: o(a.content[0].content[1]),
            openedBraces: 0
          }) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : s = !0), (s || "string" == typeof a) && 0 < n.length && 0 === n[n.length - 1].openedBraces) {
            var g = o(a);
            e < t.length - 1 && ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) && (g += o(t[e + 1]), t.splice(e + 1, 1)), 0 < e && ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) && (g = o(t[e - 1]) + g, t.splice(e - 1, 1), e--), t[e] = new i.Token("plain-text", g, null, g);
          }

          a.content && "string" != typeof a.content && p(a.content);
        }
      };

      i.hooks.add("after-tokenize", function (t) {
        "jsx" !== t.language && "tsx" !== t.language || p(t.tokens);
      });
    }(Prism);
    Prism.languages.scss = Prism.languages.extend("css", {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0
      },
      atrule: {
        pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
        inside: {
          rule: /@[\w-]+/
        }
      },
      url: /(?:[-a-z]+-)?url(?=\()/i,
      selector: {
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
        inside: {
          parent: {
            pattern: /&/,
            alias: "important"
          },
          placeholder: /%[-\w]+/,
          variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
      },
      property: {
        pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
      }
    }), Prism.languages.insertBefore("scss", "atrule", {
      keyword: [/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: !0
      }]
    }), Prism.languages.insertBefore("scss", "important", {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }), Prism.languages.insertBefore("scss", "function", {
      "module-modifier": {
        pattern: /\b(?:as|with|show|hide)\b/i,
        alias: "keyword"
      },
      placeholder: {
        pattern: /%[-\w]+/,
        alias: "selector"
      },
      statement: {
        pattern: /\B!(?:default|optional)\b/i,
        alias: "keyword"
      },
      boolean: /\b(?:true|false)\b/,
      null: {
        pattern: /\bnull\b/,
        alias: "keyword"
      },
      operator: {
        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
        lookbehind: !0
      }
    }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
    socket.addEventListener("message", function (event) {
      var responsWS = JSON.parse(event.data);

      switch (responsWS.method) {
        case "create_error_code":
          function run_body_code() {
            if (responsWS.data.length) {
              KD_(KD_.style, "code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#282a36}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#6272a4}.token.tag{color:#038dff}.token.attr-name{color:#9cdcfe}.token.deleted,.token.namespace{color:#fff}.token.function-name{color:#6196cc}.token.boolean{color:#448dff}.token.number{color:#b5cea8}.token.function{color:#ffb86c}.token.class-name,.token.constant,.token.property,.token.symbol{color:#bd93f9}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#ff79c6}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#CE9178}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}");

              if (!ERROR_NODE_FOR_KID) {
                ERROR_NODE_FOR_KID = KD_(document.body, {
                  div: "",
                  style: "position: fixed;width: 100%;height: 100%;background: #262626;top: 0;left: 0;z-index: 88888;padding: 5vw;box-sizing: border-box;overflow: auto;"
                });
              }

              function create_code(element) {
                var line_coll = element.line_coll,
                    SPLIT_LINE = element.code.split(/\r?\n/);
                var LINE = SPLIT_LINE.slice(Math.max(line_coll[0] - 5, 0), 10 + Math.max(line_coll[0] - 5, 0));
                return [{
                  pre: [{
                    div: LINE.map(function (v, i) {
                      return {
                        div: Math.max(line_coll[0] - 5, 0) + i + 1
                      };
                    }),
                    style: "border-right: 1px solid #642b34;margin-right: 20px;display: flex;flex-direction: column;padding-right: 1em;"
                  }, {
                    div: Array.from(Array(Math.abs(Math.min(line_coll[0] - 6, 0) - 5)), function (v, i) {
                      return {
                        div: " ",
                        style: "width: 100%;background: #48242e;background: rgb(227 48 48 / " + (i + 1 == line_coll[0] - Math.max(line_coll[0] - 5, 0) ? 0.2 : 0) + ");"
                      };
                    }),
                    style: "position: absolute;width: 100%;display: flex;flex-direction: column;left: 0;pointer-events: none;"
                  }, {
                    code: "",
                    class: "language-jsx",
                    Mark: function (tag) {
                      var CODE = LINE.join("\r\n");
                      tag.Inner(Prism.highlight(CODE, Prism.languages["jsx"], "jsx"));
                    }
                  }],
                  class: "language-jsx",
                  style: "border: 1px solid #353535; border-radius: 5px;display: flex;position:relative"
                }];
              }

              KD_(ERROR_NODE_FOR_KID, {
                div: [{
                  h2: responsWS.general_error,
                  style: "color: #e33030;"
                }, responsWS.data.reverse().map(function (element) {
                  return element.code ? [{
                    div: element.error_cod,
                    style: "color: #59769b;word-break: break-word;margin: 1vw 0;"
                  }, element.line_coll ? create_code(element) : "NOT LINE_COLL"] : [];
                })],
                style: "border: 7px solid #a0111100;padding: 0 1vw;border-radius: 5px;border-left-color: #e33030;box-shadow: 0px 0px 20px #ff000073;    margin-bottom: 4em;"
              });
            }
          }

          if (document.body) {
            run_body_code();
          } else {
            document.addEventListener("DOMContentLoaded", function () {
              run_body_code();
            });
          }

          break;

        case "restart_page":
          location.reload(true);
          break;
      }
    });
    window.addEventListener('error', function (event) {
      function flat(a) {
        return a instanceof Array ? a.reduce(function (c, v) {
          return c.concat(flat(v));
        }, []) : a;
      }

      var error_list = event.error.stack.split(/\r?\n/),
          error_data = flat(error_list.slice(1).map(function (error_cod) {
        var url_match = error_cod.match(extrac_url);

        if (url_match && url_match.length) {
          var last_url = url_match.pop();
          var l_c_reg = /(:(\d*):(\d*))$/g,
              line_coll = last_url.match(l_c_reg)[0].slice(1).split(":").map(Number),
              full_url = last_url.replace(l_c_reg, "");
          path = new URL(full_url).pathname;
          return {
            path: path,
            line_coll,
            error_cod: error_cod.trim()
          };
        } else {
          return [];
        }
      })),
          error_path = new URL(event.filename).pathname;
      error_data = error_data.findIndex(function (v) {
        return v.path == error_path;
      }) < 0 ? [{
        path: new URL(event.filename).pathname,
        line_coll: [event.lineno, event.colno],
        error_cod: event.message
      }].concat(error_data) : error_data;

      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          method: "get_error_files",
          data: error_data,
          general_error: event.message
        }));
      } else {
        socket.addEventListener('open', function () {
          socket.send(JSON.stringify({
            method: "get_error_files",
            data: error_data,
            general_error: event.message
          }));
        });
      }
    });
  })();
} catch (e) {
  console.error(e);
}