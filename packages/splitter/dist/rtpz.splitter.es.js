(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("._root_13kmz_1{display:grid;width:100%;height:100%;transition:all .1s linear}._pane_13kmz_7{overflow:auto}._separator_13kmz_10{display:block;transition:background .1s linear;background:hsl(0,0%,0%,.1);--tz-split-pane-separator: 5px;border:none;padding:0}._separator_13kmz_10:not([aria-disabled]):hover{background:hsl(0,0%,0%,.2)}._separator_13kmz_10[aria-orientation=horizontal]{cursor:col-resize;width:var(--tz-split-pane-separator)}._separator_13kmz_10[aria-orientation=vertical]{cursor:row-resize;height:var(--tz-split-pane-separator)}._separator_13kmz_10[aria-disabled]{cursor:auto;background:hsl(0,0%,0%,.025)}")),document.head.appendChild(a)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import qe, { useCallback as O, useEffect as Z, useRef as G, useLayoutEffect as xr, forwardRef as Xe } from "react";
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
  var s = qe, m = Symbol.for("react.element"), g = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, _ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(d, v, c) {
    var l, y = {}, S = null, A = null;
    c !== void 0 && (S = "" + c), v.key !== void 0 && (S = "" + v.key), v.ref !== void 0 && (A = v.ref);
    for (l in v)
      E.call(v, l) && !b.hasOwnProperty(l) && (y[l] = v[l]);
    if (d && d.defaultProps)
      for (l in v = d.defaultProps, v)
        y[l] === void 0 && (y[l] = v[l]);
    return { $$typeof: m, type: d, key: S, ref: A, props: y, _owner: _.current };
  }
  return H.Fragment = g, H.jsx = x, H.jsxs = x, H;
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
    var s = qe, m = Symbol.for("react.element"), g = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), C = Symbol.iterator, k = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = C && e[C] || e[k];
      return typeof r == "function" ? r : null;
    }
    var p = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        T("error", e, t);
      }
    }
    function T(e, r, t) {
      {
        var n = p.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var h = t.map(function(u) {
          return String(u);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var o = !1, R = !1, W = !1, Q = !1, ee = !1, he;
    he = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === b || ee || e === _ || e === c || e === l || Q || e === A || o || R || W || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === y || e.$$typeof === x || e.$$typeof === d || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === he || e.getModuleId !== void 0));
    }
    function Ge(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function Ee(e) {
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
        case E:
          return "Fragment";
        case g:
          return "Portal";
        case b:
          return "Profiler";
        case _:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return Ee(r) + ".Consumer";
          case x:
            var t = e;
            return Ee(t._context) + ".Provider";
          case v:
            return Ge(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : F(e.type) || "Memo";
          case S: {
            var f = e, h = f._payload, u = f._init;
            try {
              return F(u(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, q = 0, be, Re, _e, xe, we, Pe, Te;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function Ze() {
      {
        if (q === 0) {
          be = console.log, Re = console.info, _e = console.warn, xe = console.error, we = console.group, Pe = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
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
              value: be
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
              value: Te
            })
          });
        }
        q < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = p.ReactCurrentDispatcher, ce;
    function re(e, r, t) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
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
      var f = Error.prepareStackTrace;
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
`), w = i.length - 1, P = j.length - 1; w >= 1 && P >= 0 && i[w] !== j[P]; )
            P--;
          for (; w >= 1 && P >= 0; w--, P--)
            if (i[w] !== j[P]) {
              if (w !== 1 || P !== 1)
                do
                  if (w--, P--, P < 0 || i[w] !== j[P]) {
                    var D = `
` + i[w].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, D), D;
                  }
                while (w >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        le = !1, ue.current = h, Qe(), Error.prepareStackTrace = f;
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
        case l:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return rr(e.render);
          case y:
            return ne(e.type, r, t);
          case S: {
            var n = e, f = n._payload, h = n._init;
            try {
              return ne(h(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, Ce = {}, je = p.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    function nr(e, r, t, n, f) {
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
            } catch (w) {
              i = w;
            }
            i && !(i instanceof Error) && (oe(f), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof i), oe(null)), i instanceof Error && !(i.message in Ce) && (Ce[i.message] = !0, oe(f), a("Failed %s type: %s", t, i.message), oe(null));
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
    var X = p.ReactCurrentOwner, sr = {
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
    var pr = function(e, r, t, n, f, h, u) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
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
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function vr(e, r, t, n, f) {
      {
        var h, u = {}, i = null, j = null;
        t !== void 0 && (ke(t), i = "" + t), cr(r) && (ke(r.key), i = "" + r.key), ur(r) && (j = r.ref, lr(r, f));
        for (h in r)
          ae.call(r, h) && !sr.hasOwnProperty(h) && (u[h] = r[h]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (h in w)
            u[h] === void 0 && (u[h] = w[h]);
        }
        if (i || j) {
          var P = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && fr(u, P), j && dr(u, P);
        }
        return pr(e, i, j, f, n, X.current, u);
      }
    }
    var pe = p.ReactCurrentOwner, Fe = p.ReactDebugCurrentFrame;
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
      return typeof e == "object" && e !== null && e.$$typeof === m;
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
          var f = L(e);
          if (typeof f == "function" && f !== e.entries)
            for (var h = f.call(e), u; !(u = h.next()).done; )
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
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = F(r);
          nr(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ve) {
          ve = !0;
          var f = F(r);
          a("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
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
    function Me(e, r, t, n, f, h) {
      {
        var u = Je(e);
        if (!u) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = yr(f);
          j ? i += j : i += $e();
          var w;
          e === null ? w = "null" : fe(e) ? w = "array" : e !== void 0 && e.$$typeof === m ? (w = "<" + (F(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, a("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, i);
        }
        var P = vr(e, r, t, f, h);
        if (P == null)
          return P;
        if (u) {
          var D = r.children;
          if (D !== void 0)
            if (n)
              if (fe(D)) {
                for (var B = 0; B < D.length; B++)
                  Ne(D[B], e);
                Object.freeze && Object.freeze(D);
              } else
                a("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(D, e);
        }
        return e === E ? hr(P) : gr(P), P;
      }
    }
    function Er(e, r, t) {
      return Me(e, r, t, !0);
    }
    function br(e, r, t) {
      return Me(e, r, t, !1);
    }
    var Rr = br, _r = Er;
    J.Fragment = E, J.jsx = Rr, J.jsxs = _r;
  }()), J;
}
process.env.NODE_ENV === "production" ? me.exports = wr() : me.exports = Pr();
var K = me.exports;
const Tr = "_root_13kmz_1", Or = "_pane_13kmz_7", Sr = "_separator_13kmz_10", ge = {
  root: Tr,
  pane: Or,
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
}, I = {
  expanded: "aria-expanded",
  orientation: "aria-orientation",
  controls: "aria-controls",
  valueMax: "aria-valuemax",
  valueMin: "aria-valuemin",
  valueNow: "aria-valuenow",
  role: "role"
}, Cr = {
  separator: "separator"
}, jr = ({
  separatorRef: s,
  containerRef: m,
  setContainerSize: g,
  getCurrentSize: E,
  setLayout: _,
  min: b,
  max: x,
  direction: d,
  disabled: v
}) => {
  const c = O(() => {
    const o = s.current, R = m.current;
    if (!o || !R || v)
      return null;
    o.toggleAttribute(I.expanded), R.style.setProperty("transition", "none"), _({
      dir: d,
      collapsed: !o.hasAttribute(I.expanded)
    }), R.offsetHeight, R.style.removeProperty("transition");
  }, [m, d, s, _]), l = O(() => {
    g(b);
  }, [b, g]), y = O(() => {
    g(x);
  }, [x, g]), S = O(() => {
    console.log("cyclePane is not implemented");
  }, []), A = O(
    (o) => {
      const R = o.shiftKey ? 10 : 1;
      g(E() - Be * R);
    },
    [E, g]
  ), C = O(
    (o) => {
      const R = o.shiftKey ? 10 : 1;
      g(E() + Be * R);
    },
    [E, g]
  ), k = O(
    (o) => {
      d === z.horizontal && A(o);
    },
    [A, d]
  ), L = O(
    (o) => {
      d === z.horizontal && C(o);
    },
    [d, C]
  ), p = O(
    (o) => {
      d === z.vertical && C(o);
    },
    [d, C]
  ), a = O(
    (o) => {
      d === z.vertical && A(o);
    },
    [A, d]
  ), T = O(
    (o) => {
      var W;
      const R = {
        [Y.Enter]: c,
        [Y.Home]: l,
        [Y.End]: y,
        [Y.F6]: S,
        [Y.Left]: k,
        [Y.Right]: L,
        [Y.Up]: a,
        [Y.Down]: p
      };
      (W = R[o.key]) == null || W.call(R, o);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  Z(() => {
    const o = s.current;
    if (!(!o || v))
      return o.addEventListener(N.keydown, T), () => {
        o.removeEventListener(N.keydown, T);
      };
  }, [s, T, v]);
}, ie = Math.round, Ar = (s, m, g) => Math.min(Math.max(s, m), g), se = (s) => ({
  x: s.getBoundingClientRect().width,
  y: s.getBoundingClientRect().height
}), kr = ({
  dir: s,
  collapsed: m,
  invert: g
}) => {
  const E = s === z.horizontal ? "grid-template-columns" : "grid-template-rows", _ = `var(${M.primary}, auto)`, b = `var(${M.separator}, min-content)`, x = `var(${M.secondary}, auto)`;
  return [E, (m ? g ? ["auto", b, "0"] : ["0", b, "auto"] : g ? [x, b, _] : [_, b, x]).join(" ")];
}, Dr = (s, m, g, E) => (_) => {
  const b = Ar(ie(_), m, g || E);
  s.style.setProperty(M.primary, `${b}px`), s.style.setProperty(M.secondary, `${ie(E - b)}px`);
}, He = (s) => s === z.horizontal ? Ve.X : Ve.Y, Ir = ({
  separatorRef: s,
  primaryRef: m,
  secondaryRef: g,
  containerRef: E,
  setContainerSize: _,
  setLayout: b,
  direction: x,
  invert: d,
  disabled: v
}) => {
  const c = G({ x: 0, y: 0 }), l = He(x);
  Z(() => {
    const y = s.current, S = m.current, A = g.current, C = E.current;
    if (!y || !S || !A || !C)
      return;
    let k = se(S);
    _(k[l]);
    const L = (o) => {
      const R = c.current.x || 0, W = c.current.y || 0, Q = o.clientX, ee = o.clientY;
      return d ? {
        x: R - Q,
        y: W - ee
      } : {
        x: Q - R,
        y: ee - W
      };
    }, p = (o) => {
      const R = L(o);
      console.log(k[l], R[l], k[l] + R[l]), _(k[l] + R[l]);
    }, a = (o) => {
      y.removeEventListener(N.pointermove, p), y.releasePointerCapture(o.pointerId), C.style.removeProperty("transition");
    }, T = (o) => {
      if (v)
        return;
      if (console.log(o), y.setPointerCapture(o.pointerId), !y.hasAttribute(I.expanded)) {
        y.toggleAttribute(I.expanded), b({ dir: x, collapsed: !1 }), o.preventDefault();
        return;
      }
      k = se(S), c.current = { x: o.clientX, y: o.clientY }, y.addEventListener(N.pointermove, p), C.style.setProperty("transition", "none");
    };
    return y.addEventListener(N.pointerdown, T), y.addEventListener(N.pointerup, a), () => {
      y.removeEventListener(N.pointerdown, T), y.removeEventListener(N.pointerup, a);
    };
  }, [
    l,
    _,
    s,
    m,
    g,
    E,
    c,
    b,
    x,
    d
  ]);
}, Fr = ({
  value: s,
  min: m,
  max: g,
  direction: E,
  collapsed: _,
  invert: b
}) => {
  const x = G(null), d = G(null), v = G(null), c = G(null);
  Z(() => {
    const p = c.current;
    if (!p)
      return;
    const a = new ResizeObserver(() => {
      p.style.setProperty(M.secondary, "auto");
    });
    return a.observe(p), () => {
      a.disconnect();
    };
  }, []);
  const l = He(E), y = O(() => {
    const p = x.current, a = v.current;
    return !p || !a ? 0 : ie(se(p)[l] + se(a)[l]);
  }, [l]), S = O((p) => {
    const a = d.current, T = x.current;
    if (!a || !T || (a.setAttribute(I.valueMax, y().toString()), a.setAttribute(I.valueNow, L().toString()), !p))
      return;
    const o = `tpz-sp-primary:${crypto.randomUUID()}`;
    a.setAttribute(I.valueMin, m.toString()), a.setAttribute(I.role, Cr.separator), a.setAttribute(I.orientation, E), a.setAttribute(I.controls, o), T.setAttribute("id", o), a.toggleAttribute(I.expanded, !0);
  }, []), A = b ? M.secondary : M.primary, C = O(
    (p) => {
      const a = c.current;
      if (!a)
        return;
      const [T, o] = kr({ ...p, invert: b });
      p.value && a.style.setProperty(A, `${p.value}px`), a.style.setProperty(T, o);
    },
    [b]
  ), k = O(
    (p) => {
      const a = c.current, T = d.current;
      if (!(!a || !T))
        return T.setAttribute(I.valueNow, ie(p).toString()), Dr(a, m, g, y())(p);
    },
    [y, m]
  ), L = O(() => {
    const p = c.current;
    if (!p)
      return 0;
    const a = p.style.getPropertyValue(A);
    return parseInt(a, 10);
  }, []);
  return Z(() => {
    S(!0);
  }, []), Z(() => {
    s && k(s);
  }, [s]), xr(() => {
    C({ dir: E, collapsed: _, value: s });
  }, [c, E, _, C, s]), {
    setLayout: C,
    separatorRef: d,
    containerRef: c,
    primaryRef: x,
    secondaryRef: v,
    setContainerSize: k,
    getCurrentSize: L,
    getMaxSize: y
  };
}, $r = Xe((s, m) => /* @__PURE__ */ K.jsx("button", { ref: m, ...s })), Ke = Xe(({ children: s }, m) => /* @__PURE__ */ K.jsx("div", { ref: m, className: ge.pane, children: s })), Yr = ({
  children: [s, m],
  min: g = 0,
  max: E = 0,
  value: _ = 0,
  direction: b = z.horizontal,
  collapsed: x = !1,
  invert: d = !1,
  disabled: v = !1
}) => {
  const c = Fr({
    value: _,
    min: g,
    max: E,
    direction: b,
    collapsed: x,
    invert: d
  });
  jr({
    ...c,
    direction: b,
    min: g,
    max: c.getMaxSize(),
    disabled: v
  }), Ir({
    ...c,
    direction: b,
    invert: d,
    disabled: v
  });
  const l = d ? { start: c.secondaryRef, end: c.primaryRef } : { start: c.primaryRef, end: c.secondaryRef };
  return /* @__PURE__ */ K.jsxs("div", { ref: c.containerRef, className: ge.root, children: [
    /* @__PURE__ */ K.jsx(Ke, { tabIndex: -1, ref: l.start, children: s }),
    /* @__PURE__ */ K.jsx(
      $r,
      {
        className: ge.separator,
        ref: c.separatorRef,
        "aria-disabled": v || void 0
      }
    ),
    /* @__PURE__ */ K.jsx(Ke, { tabIndex: -1, ref: l.end, children: m })
  ] });
};
export {
  Yr as default
};
