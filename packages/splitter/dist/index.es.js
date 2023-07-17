(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("._root_13kmz_1{display:grid;width:100%;height:100%;transition:all .1s linear}._pane_13kmz_7{overflow:auto}._separator_13kmz_10{display:block;transition:background .1s linear;background:hsl(0,0%,0%,.1);--tz-split-pane-separator: 5px;border:none;padding:0}._separator_13kmz_10:not([aria-disabled]):hover{background:hsl(0,0%,0%,.2)}._separator_13kmz_10[aria-orientation=horizontal]{cursor:col-resize;width:var(--tz-split-pane-separator)}._separator_13kmz_10[aria-orientation=vertical]{cursor:row-resize;height:var(--tz-split-pane-separator)}._separator_13kmz_10[aria-disabled]{cursor:auto;background:hsl(0,0%,0%,.025)}")),document.head.appendChild(a)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import qe, { useCallback as T, useEffect as Z, useRef as G, useLayoutEffect as xr, forwardRef as Xe } from "react";
var me = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function wr() {
  if (Ue)
    return H;
  Ue = 1;
  var s = qe, y = Symbol.for("react.element"), m = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, R = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(f, p, c) {
    var g, v = {}, S = null, A = null;
    c !== void 0 && (S = "" + c), p.key !== void 0 && (S = "" + p.key), p.ref !== void 0 && (A = p.ref);
    for (g in p)
      b.call(p, g) && !E.hasOwnProperty(g) && (v[g] = p[g]);
    if (f && f.defaultProps)
      for (g in p = f.defaultProps, p)
        v[g] === void 0 && (v[g] = p[g]);
    return { $$typeof: y, type: f, key: S, ref: A, props: v, _owner: R.current };
  }
  return H.Fragment = m, H.jsx = _, H.jsxs = _, H;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Pr() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    var s = qe, y = Symbol.for("react.element"), m = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), C = Symbol.iterator, I = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = C && e[C] || e[I];
      return typeof r == "function" ? r : null;
    }
    var d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        O("error", e, t);
      }
    }
    function O(e, r, t) {
      {
        var n = d.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var h = t.map(function(u) {
          return String(u);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var o = !1, w = !1, W = !1, Q = !1, ee = !1, he;
    he = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === E || ee || e === R || e === c || e === g || Q || e === A || o || w || W || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === v || e.$$typeof === _ || e.$$typeof === f || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === he || e.getModuleId !== void 0));
    }
    function Ge(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function be(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case m:
          return "Portal";
        case E:
          return "Profiler";
        case R:
          return "StrictMode";
        case c:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return be(r) + ".Consumer";
          case _:
            var t = e;
            return be(t._context) + ".Provider";
          case p:
            return Ge(e, e.render, "ForwardRef");
          case v:
            var n = e.displayName || null;
            return n !== null ? n : F(e.type) || "Memo";
          case S: {
            var l = e, h = l._payload, u = l._init;
            try {
              return F(u(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, q = 0, Ee, Re, _e, xe, we, Pe, Oe;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function Ze() {
      {
        if (q === 0) {
          Ee = console.log, Re = console.info, _e = console.warn, xe = console.error, we = console.group, Pe = console.groupCollapsed, Oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        q++;
      }
    }
    function Qe() {
      {
        if (q--, q === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, e, {
              value: Ee
            }),
            info: U({}, e, {
              value: Re
            }),
            warn: U({}, e, {
              value: _e
            }),
            error: U({}, e, {
              value: xe
            }),
            group: U({}, e, {
              value: we
            }),
            groupCollapsed: U({}, e, {
              value: Pe
            }),
            groupEnd: U({}, e, {
              value: Oe
            })
          });
        }
        q < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = d.ReactCurrentDispatcher, ce;
    function re(e, r, t) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            ce = n && n[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var le = !1, te;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      te = new er();
    }
    function Se(e, r) {
      if (!e || le)
        return "";
      {
        var t = te.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      le = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = ue.current, ue.current = null, Ze();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch ($) {
              n = $;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch ($) {
              n = $;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            n = $;
          }
          e();
        }
      } catch ($) {
        if ($ && n && typeof $.stack == "string") {
          for (var i = $.stack.split(`
`), j = n.stack.split(`
`), x = i.length - 1, P = j.length - 1; x >= 1 && P >= 0 && i[x] !== j[P]; )
            P--;
          for (; x >= 1 && P >= 0; x--, P--)
            if (i[x] !== j[P]) {
              if (x !== 1 || P !== 1)
                do
                  if (x--, P--, P < 0 || i[x] !== j[P]) {
                    var k = `
` + i[x].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, k), k;
                  }
                while (x >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        le = !1, ue.current = h, Qe(), Error.prepareStackTrace = l;
      }
      var B = e ? e.displayName || e.name : "", We = B ? re(B) : "";
      return typeof e == "function" && te.set(e, We), We;
    }
    function rr(e, r, t) {
      return Se(e, !1);
    }
    function tr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ne(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, tr(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case c:
          return re("Suspense");
        case g:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return rr(e.render);
          case v:
            return ne(e.type, r, t);
          case S: {
            var n = e, l = n._payload, h = n._init;
            try {
              return ne(h(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, Ce = {}, je = d.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    function nr(e, r, t, n, l) {
      {
        var h = Function.call.bind(ae);
        for (var u in e)
          if (h(e, u)) {
            var i = void 0;
            try {
              if (typeof e[u] != "function") {
                var j = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              i = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              i = x;
            }
            i && !(i instanceof Error) && (oe(l), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof i), oe(null)), i instanceof Error && !(i.message in Ce) && (Ce[i.message] = !0, oe(l), a("Failed %s type: %s", t, i.message), oe(null));
          }
      }
    }
    var ar = Array.isArray;
    function fe(e) {
      return ar(e);
    }
    function or(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ir(e) {
      try {
        return Ae(e), !1;
      } catch {
        return !0;
      }
    }
    function Ae(e) {
      return "" + e;
    }
    function ke(e) {
      if (ir(e))
        return a("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(e)), Ae(e);
    }
    var X = d.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Ie, de;
    de = {};
    function ur(e) {
      if (ae.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function cr(e) {
      if (ae.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, r) {
      if (typeof e.ref == "string" && X.current && r && X.current.stateNode !== r) {
        var t = F(X.current.type);
        de[t] || (a('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(X.current.type), e.ref), de[t] = !0);
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          De || (De = !0, a("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function dr(e, r) {
      {
        var t = function() {
          Ie || (Ie = !0, a("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, t, n, l, h, u) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function vr(e, r, t, n, l) {
      {
        var h, u = {}, i = null, j = null;
        t !== void 0 && (ke(t), i = "" + t), cr(r) && (ke(r.key), i = "" + r.key), ur(r) && (j = r.ref, lr(r, l));
        for (h in r)
          ae.call(r, h) && !sr.hasOwnProperty(h) && (u[h] = r[h]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (h in x)
            u[h] === void 0 && (u[h] = x[h]);
        }
        if (i || j) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && fr(u, P), j && dr(u, P);
        }
        return pr(e, i, j, l, n, X.current, u);
      }
    }
    var pe = d.ReactCurrentOwner, Fe = d.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(t);
      } else
        Fe.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function ye(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function $e() {
      {
        if (pe.current) {
          var e = F(pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function yr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Le = {};
    function mr(e) {
      {
        var r = $e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = mr(r);
        if (Le[t])
          return;
        Le[t] = !0;
        var n = "";
        e && e._owner && e._owner !== pe.current && (n = " It was passed a child from " + F(e._owner.type) + "."), V(e), a('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), V(null);
      }
    }
    function Ne(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ye(n) && Ye(n, r);
          }
        else if (ye(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = L(e);
          if (typeof l == "function" && l !== e.entries)
            for (var h = l.call(e), u; !(u = h.next()).done; )
              ye(u.value) && Ye(u.value, r);
        }
      }
    }
    function gr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === v))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = F(r);
          nr(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ve) {
          ve = !0;
          var l = F(r);
          a("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && a("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            V(e), a("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), a("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Me(e, r, t, n, l, h) {
      {
        var u = Je(e);
        if (!u) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = yr(l);
          j ? i += j : i += $e();
          var x;
          e === null ? x = "null" : fe(e) ? x = "array" : e !== void 0 && e.$$typeof === y ? (x = "<" + (F(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, a("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, i);
        }
        var P = vr(e, r, t, l, h);
        if (P == null)
          return P;
        if (u) {
          var k = r.children;
          if (k !== void 0)
            if (n)
              if (fe(k)) {
                for (var B = 0; B < k.length; B++)
                  Ne(k[B], e);
                Object.freeze && Object.freeze(k);
              } else
                a("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(k, e);
        }
        return e === b ? hr(P) : gr(P), P;
      }
    }
    function br(e, r, t) {
      return Me(e, r, t, !0);
    }
    function Er(e, r, t) {
      return Me(e, r, t, !1);
    }
    var Rr = Er, _r = br;
    J.Fragment = b, J.jsx = Rr, J.jsxs = _r;
  }()), J;
}
process.env.NODE_ENV === "production" ? me.exports = wr() : me.exports = Pr();
var K = me.exports;
const Or = "_root_13kmz_1", Tr = "_pane_13kmz_7", Sr = "_separator_13kmz_10", ge = {
  root: Or,
  pane: Tr,
  separator: Sr
}, Ve = {
  X: "x",
  Y: "y"
}, Y = {
  Enter: "Enter",
  Home: "Home",
  End: "End",
  F6: "F6",
  Left: "ArrowLeft",
  Right: "ArrowRight",
  Up: "ArrowUp",
  Down: "ArrowDown"
}, M = {
  primary: "--tz-split-pane-primary",
  secondary: "--tz-split-pane-secondary",
  separator: "--tz-split-pane-separator"
}, Be = 10, N = {
  pointerdown: "pointerdown",
  pointerup: "pointerup",
  pointermove: "pointermove",
  keydown: "keydown"
}, z = {
  horizontal: "horizontal",
  vertical: "vertical"
}, D = {
  expanded: "aria-expanded",
  orientation: "aria-orientation",
  controls: "aria-controls",
  valueMax: "aria-valuemax",
  valueMin: "aria-valuemin",
  valueNow: "aria-valuenow",
  role: "role"
}, Cr = {
  separator: "separator"
}, jr = ({ separatorRef: s, containerRef: y, setContainerSize: m, getCurrentSize: b, setLayout: R, min: E, max: _, direction: f, disabled: p }) => {
  const c = T(() => {
    const o = s.current, w = y.current;
    if (!o || !w || p)
      return null;
    o.toggleAttribute(D.expanded), w.style.setProperty("transition", "none"), R({
      dir: f,
      collapsed: !o.hasAttribute(D.expanded)
    }), w.offsetHeight, w.style.removeProperty("transition");
  }, [y, f, s, R]), g = T(() => {
    m(E);
  }, [E, m]), v = T(() => {
    m(_);
  }, [_, m]), S = T(() => {
    console.log("cyclePane is not implemented");
  }, []), A = T((o) => {
    const w = o.shiftKey ? 10 : 1;
    m(b() - Be * w);
  }, [b, m]), C = T((o) => {
    const w = o.shiftKey ? 10 : 1;
    m(b() + Be * w);
  }, [b, m]), I = T((o) => {
    f === z.horizontal && A(o);
  }, [A, f]), L = T((o) => {
    f === z.horizontal && C(o);
  }, [f, C]), d = T((o) => {
    f === z.vertical && C(o);
  }, [f, C]), a = T((o) => {
    f === z.vertical && A(o);
  }, [A, f]), O = T(
    (o) => {
      var w;
      const W = {
        [Y.Enter]: c,
        [Y.Home]: g,
        [Y.End]: v,
        [Y.F6]: S,
        [Y.Left]: I,
        [Y.Right]: L,
        [Y.Up]: a,
        [Y.Down]: d
      };
      (w = W[o.key]) === null || w === void 0 || w.call(W, o);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  Z(() => {
    const o = s.current;
    if (!(!o || p))
      return o.addEventListener(N.keydown, O), () => {
        o.removeEventListener(N.keydown, O);
      };
  }, [s, O, p]);
}, ie = Math.round, Ar = (s, y, m) => Math.min(Math.max(s, y), m), se = (s) => ({
  x: s.getBoundingClientRect().width,
  y: s.getBoundingClientRect().height
}), kr = ({ dir: s, collapsed: y, invert: m }) => {
  const b = s === z.horizontal ? "grid-template-columns" : "grid-template-rows", R = `var(${M.primary}, auto)`, E = `var(${M.separator}, min-content)`, _ = `var(${M.secondary}, auto)`;
  return [b, (y ? m ? ["auto", E, "0"] : ["0", E, "auto"] : m ? [_, E, R] : [R, E, _]).join(" ")];
}, Dr = (s, y, m, b) => (R) => {
  const E = Ar(ie(R), y, m || b);
  s.style.setProperty(M.primary, `${E}px`), s.style.setProperty(M.secondary, `${ie(b - E)}px`);
}, He = (s) => s === z.horizontal ? Ve.X : Ve.Y, Ir = ({ separatorRef: s, primaryRef: y, secondaryRef: m, containerRef: b, setContainerSize: R, setLayout: E, direction: _, invert: f, disabled: p }) => {
  const c = G({ x: 0, y: 0 }), g = He(_);
  Z(() => {
    const v = s.current, S = y.current, A = m.current, C = b.current;
    if (!v || !S || !A || !C)
      return;
    let I = se(S);
    R(I[g]);
    const L = (o) => {
      const w = c.current.x || 0, W = c.current.y || 0, Q = o.clientX, ee = o.clientY;
      return f ? {
        x: w - Q,
        y: W - ee
      } : {
        x: Q - w,
        y: ee - W
      };
    }, d = (o) => {
      const w = L(o);
      R(I[g] + w[g]);
    }, a = (o) => {
      v.removeEventListener(N.pointermove, d), v.releasePointerCapture(o.pointerId), C.style.removeProperty("transition");
    }, O = (o) => {
      if (p)
        return;
      if (v.setPointerCapture(o.pointerId), !v.hasAttribute(D.expanded)) {
        v.toggleAttribute(D.expanded), E({ dir: _, collapsed: !1 }), o.preventDefault();
        return;
      }
      I = se(S), c.current = { x: o.clientX, y: o.clientY }, v.addEventListener(N.pointermove, d), C.style.setProperty("transition", "none");
    };
    return v.addEventListener(N.pointerdown, O), v.addEventListener(N.pointerup, a), () => {
      v.removeEventListener(N.pointerdown, O), v.removeEventListener(N.pointerup, a);
    };
  }, [
    g,
    R,
    s,
    y,
    m,
    b,
    c,
    E,
    _,
    f
  ]);
}, Fr = ({ value: s, min: y, max: m, direction: b, collapsed: R, invert: E }) => {
  const _ = G(null), f = G(null), p = G(null), c = G(null);
  Z(() => {
    const d = c.current;
    if (!d)
      return;
    const a = new ResizeObserver(() => {
      d.style.setProperty(M.secondary, "auto");
    });
    return a.observe(d), () => {
      a.disconnect();
    };
  }, []);
  const g = He(b), v = T(() => {
    const d = _.current, a = p.current;
    return !d || !a ? 0 : ie(se(d)[g] + se(a)[g]);
  }, [g]), S = T((d) => {
    const a = f.current, O = _.current;
    if (!a || !O || (a.setAttribute(D.valueMax, v().toString()), a.setAttribute(D.valueNow, L().toString()), !d))
      return;
    const o = `tpz-sp-primary:${crypto.randomUUID()}`;
    a.setAttribute(D.valueMin, y.toString()), a.setAttribute(D.role, Cr.separator), a.setAttribute(D.orientation, b), a.setAttribute(D.controls, o), O.setAttribute("id", o), a.toggleAttribute(D.expanded, !0);
  }, []), A = E ? M.secondary : M.primary, C = T((d) => {
    const a = c.current;
    if (!a)
      return;
    const [O, o] = kr(Object.assign(Object.assign({}, d), { invert: E }));
    d.value && a.style.setProperty(A, `${d.value}px`), a.style.setProperty(O, o);
  }, [E]), I = T((d) => {
    const a = c.current, O = f.current;
    if (!(!a || !O))
      return O.setAttribute(D.valueNow, ie(d).toString()), Dr(a, y, m, v())(d);
  }, [v, y]), L = T(() => {
    const d = c.current;
    if (!d)
      return 0;
    const a = d.style.getPropertyValue(A);
    return parseInt(a, 10);
  }, []);
  return Z(() => {
    S(!0);
  }, []), Z(() => {
    s && I(s);
  }, [s]), xr(() => {
    C({ dir: b, collapsed: R, value: s });
  }, [c, b, R, C, s]), {
    setLayout: C,
    separatorRef: f,
    containerRef: c,
    primaryRef: _,
    secondaryRef: p,
    setContainerSize: I,
    getCurrentSize: L,
    getMaxSize: v
  };
}, $r = Xe((s, y) => K.jsx("button", Object.assign({ ref: y }, s))), Ke = Xe(({ children: s }, y) => K.jsx("div", { ref: y, className: ge.pane, children: s })), Yr = ({ children: [s, y], min: m = 0, max: b = 0, value: R = 0, direction: E = z.horizontal, collapsed: _ = !1, invert: f = !1, disabled: p = !1 }) => {
  const c = Fr({
    value: R,
    min: m,
    max: b,
    direction: E,
    collapsed: _,
    invert: f
  });
  jr(Object.assign(Object.assign({}, c), {
    direction: E,
    min: m,
    max: c.getMaxSize(),
    disabled: p
  })), Ir(Object.assign(Object.assign({}, c), {
    direction: E,
    invert: f,
    disabled: p
  }));
  const g = f ? { start: c.secondaryRef, end: c.primaryRef } : { start: c.secondaryRef, end: c.primaryRef };
  return K.jsxs("div", { ref: c.containerRef, className: ge.root, children: [K.jsx(Ke, { tabIndex: -1, ref: g.start, children: s }), K.jsx($r, { className: ge.separator, ref: c.separatorRef, "aria-disabled": p || void 0 }), K.jsx(Ke, { tabIndex: -1, ref: g.end, children: y })] });
};
export {
  Yr as default
};
