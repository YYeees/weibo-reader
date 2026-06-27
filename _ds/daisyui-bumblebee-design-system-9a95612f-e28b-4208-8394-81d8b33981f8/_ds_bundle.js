/* @ds-bundle: {"format":3,"namespace":"DaisyUIBumblebeeDesignSystem_9a9561","components":[{"name":"Badge","sourcePath":"components/actions/Badge.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Avatar","sourcePath":"components/layout/Avatar.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"CardBody","sourcePath":"components/layout/Card.jsx"},{"name":"CardTitle","sourcePath":"components/layout/Card.jsx"},{"name":"CardActions","sourcePath":"components/layout/Card.jsx"},{"name":"Stats","sourcePath":"components/layout/Stat.jsx"},{"name":"Stat","sourcePath":"components/layout/Stat.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Badge.jsx":"ac141057c79a","components/actions/Button.jsx":"0fede60a87df","components/feedback/Alert.jsx":"a65a63d2f709","components/feedback/Progress.jsx":"3dd73b5b00ee","components/forms/Checkbox.jsx":"74c445ca90a1","components/forms/Input.jsx":"b76459bc5bb1","components/forms/Radio.jsx":"7fb961a148d5","components/forms/Select.jsx":"1eb5fafb3db3","components/forms/Toggle.jsx":"7c9b8783fb81","components/layout/Avatar.jsx":"6c1048290e7b","components/layout/Card.jsx":"bd55a27b1635","components/layout/Stat.jsx":"55ae42230749","components/navigation/Tabs.jsx":"2a1acaa1cec8","ui_kits/shop/Shop.jsx":"983857e62747","ui_kits/shop/shop-data.js":"80baa0e44a0e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DaisyUIBumblebeeDesignSystem_9a9561 = window.DaisyUIBumblebeeDesignSystem_9a9561 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * daisyUI Badge — small status / count label.
 */
function Badge({
  color,
  variant,
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const cls = ["badge", color ? `badge-${color}` : "", variant ? `badge-${variant}` : "",
  // outline | soft | ghost
  size && size !== "md" ? `badge-${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Badge.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * daisyUI Button — emits `.btn` classes from the bumblebee CSS.
 */
function Button({
  variant = "default",
  size = "md",
  shape,
  color,
  wide = false,
  block = false,
  active = false,
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  className = "",
  children,
  as = "button",
  ...rest
}) {
  // color is the daisyUI semantic color: primary, secondary, accent, neutral, info, success, warning, error
  const colorClass = color ? `btn-${color}` : "";
  const variantClass = variant && variant !== "default" ? `btn-${variant}` : ""; // outline | soft | ghost | link | dash
  const sizeClass = size && size !== "md" ? `btn-${size}` : "";
  const shapeClass = shape ? `btn-${shape}` : ""; // square | circle | wide | block
  const cls = ["btn", colorClass, variantClass, sizeClass, shapeClass, wide ? "btn-wide" : "", block ? "btn-block" : "", active ? "btn-active" : "", className].filter(Boolean).join(" ");
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: disabled || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "loading loading-sm",
    "aria-hidden": "true"
  }), !loading && startIcon, children, !loading && endIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI alert — inline contextual message. */
function Alert({
  color,
  variant,
  icon,
  className = "",
  children,
  ...rest
}) {
  const cls = ["alert", color ? `alert-${color}` : "", variant ? `alert-${variant}` : "",
  // soft | outline | dash
  className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: cls
  }, rest), icon, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI progress bar. Omit `value` for an indeterminate bar. */
function Progress({
  color,
  value,
  max = 100,
  className = "",
  ...rest
}) {
  const cls = ["progress", color ? `progress-${color}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("progress", _extends({
    className: cls,
    value: value,
    max: max
  }, rest));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI checkbox. Controlled or uncontrolled native checkbox. */
function Checkbox({
  color,
  size = "md",
  className = "",
  ...rest
}) {
  const cls = ["checkbox", color ? `checkbox-${color}` : "", size && size !== "md" ? `checkbox-${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI text input. Wraps a native <input> with `.input` styling. */
function Input({
  color,
  size = "md",
  className = "",
  ...rest
}) {
  const cls = ["input", color ? `input-${color}` : "", size && size !== "md" ? `input-${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI radio button. Give a shared `name` to group them. */
function Radio({
  color,
  size = "md",
  className = "",
  ...rest
}) {
  const cls = ["radio", color ? `radio-${color}` : "", size && size !== "md" ? `radio-${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI select dropdown. */
function Select({
  color,
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const cls = ["select", color ? `select-${color}` : "", size && size !== "md" ? `select-${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("select", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI toggle switch (boolean on/off). */
function Toggle({
  color,
  size = "md",
  className = "",
  ...rest
}) {
  const cls = ["toggle", color ? `toggle-${color}` : "", size && size !== "md" ? `toggle-${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/layout/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI avatar. Pass `src` for an image, or `children` (e.g. initials) for a placeholder. */
function Avatar({
  src,
  alt = "",
  size = 48,
  rounded = "rounded",
  status,
  className = "",
  children,
  ...rest
}) {
  const radius = rounded === "circle" ? "9999px" : rounded === "square" ? "0.25rem" : "0.75rem";
  const statusClass = status ? `avatar-${status}` : "";
  const placeholder = !src ? "avatar-placeholder" : "";
  const cls = ["avatar", statusClass, placeholder, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: radius
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.4
    }
  }, children)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI card. Compose with CardBody, CardTitle, CardActions or pass children. */
function Card({
  bordered = false,
  side = false,
  image,
  imageAlt = "",
  className = "",
  children,
  ...rest
}) {
  const cls = ["card", bordered ? "card-border" : "", side ? "card-side" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), image && /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  })), children);
}
function CardBody({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["card-body", className].filter(Boolean).join(" ")
  }, rest), children);
}
function CardTitle({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h2", _extends({
    className: ["card-title", className].filter(Boolean).join(" ")
  }, rest), children);
}
function CardActions({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["card-actions", className].filter(Boolean).join(" "),
    style: {
      justifyContent: "flex-end",
      ...(rest.style || {})
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardBody, CardTitle, CardActions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** daisyUI stats container. */
function Stats({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["stats", className].filter(Boolean).join(" ")
  }, rest), children);
}

/** A single stat block inside <Stats>. */
function Stat({
  title,
  value,
  desc,
  figure,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["stat", className].filter(Boolean).join(" ")
  }, rest), figure && /*#__PURE__*/React.createElement("div", {
    className: "stat-figure"
  }, figure), title != null && /*#__PURE__*/React.createElement("div", {
    className: "stat-title"
  }, title), value != null && /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, value), desc != null && /*#__PURE__*/React.createElement("div", {
    className: "stat-desc"
  }, desc));
}
Object.assign(__ds_scope, { Stats, Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Stat.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * daisyUI tabs. Controlled: pass `value` + `onChange`, or uncontrolled with `defaultValue`.
 * tabs = [{ value, label }]
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "border",
  className = "",
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const cls = ["tabs", `tabs-${variant}`, className].filter(Boolean).join(" "); // border | box | lift
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: cls
  }, rest), tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    type: "button",
    className: ["tab", active === t.value ? "tab-active" : ""].filter(Boolean).join(" "),
    onClick: () => select(t.value)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Shop.jsx
try { (() => {
/* Bumblebee Shop — interactive daisyUI storefront.
   Composes design-system primitives from the compiled bundle + raw daisyUI classes.
   Screens: storefront grid → product detail → cart drawer → order confirmation. */
const DS = window.DaisyUIBumblebeeDesignSystem_9a9561;
const {
  Button,
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardActions,
  Input,
  Tabs,
  Alert,
  Avatar
} = DS;
const {
  useState,
  useMemo
} = React;
const fmt = n => "$" + n.toFixed(2);
const Icon = ({
  name,
  size = 18,
  ...p
}) => React.createElement("i", {
  "data-lucide": name,
  style: {
    width: size,
    height: size,
    display: "inline-flex"
  },
  ...p
});
function Stars({
  rating
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      color: "var(--color-secondary)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 14
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)",
      fontWeight: 600
    }
  }, rating));
}
function ProductFigure({
  p,
  height = 180
}) {
  const g = `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1] || p.colors[0]})`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: g,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://picsum.photos/seed/${p.seed}/600/400`,
    alt: p.name,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      mixBlendMode: "luminosity",
      opacity: 0.92
    },
    onError: e => {
      e.target.style.display = "none";
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontSize: 40,
      filter: "drop-shadow(0 2px 6px rgba(0,0,0,.25))"
    }
  }, "\uD83D\uDC1D"), p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: p.badge === "Hot" ? "error" : "primary"
  }, p.badge)));
}

/* ---------- Navbar ---------- */
function TopNav({
  cartCount,
  onCart,
  onHome,
  query,
  setQuery
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar",
    style: {
      borderBottom: "1px solid var(--color-base-300)",
      position: "sticky",
      top: 0,
      zIndex: 20,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-start",
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    className: "btn btn-ghost",
    style: {
      fontSize: 20,
      fontWeight: 700,
      gap: 8,
      paddingInline: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-box)",
      background: "var(--color-primary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20
    }
  }, "\uD83C\uDF3C"), "daisy", /*#__PURE__*/React.createElement("b", null, "Shop"))), /*#__PURE__*/React.createElement("div", {
    className: "navbar-center",
    style: {
      flex: 2,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "join",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    className: "join-item",
    placeholder: "Search the hive\u2026",
    value: query,
    onChange: e => setQuery(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    className: "join-item",
    shape: "square"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "navbar-end",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    shape: "circle",
    "aria-label": "favorites"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    shape: "circle",
    onClick: onCart,
    "aria-label": "cart",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      right: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "error",
    size: "xs"
  }, cartCount))), /*#__PURE__*/React.createElement(Avatar, {
    size: 36,
    rounded: "circle",
    status: "online"
  }, "YE")));
}

/* ---------- Storefront ---------- */
function Storefront({
  products,
  onOpen,
  onAdd,
  query
}) {
  const [cat, setCat] = useState("all");
  const cats = ["all", "Bags", "Apparel", "Home"];
  const list = useMemo(() => products.filter(p => (cat === "all" || p.cat === cat) && p.name.toLowerCase().includes(query.toLowerCase())), [products, cat, query]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-primary)",
      color: "var(--color-primary-content)",
      padding: "44px 32px",
      borderRadius: "var(--radius-box)",
      margin: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "accent",
    style: {
      marginBottom: 12
    }
  }, "Spring drop"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      margin: "0 0 8px",
      letterSpacing: "-0.02em"
    }
  }, "Busy as a bee?", /*#__PURE__*/React.createElement("br", null), "Gear up the hive."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 18px",
      fontSize: 15,
      opacity: 0.85
    }
  }, "Hand-picked everyday goods in our signature bumblebee yellow. Free shipping over $50."), /*#__PURE__*/React.createElement(Button, {
    color: "accent",
    size: "lg"
  }, "Shop new arrivals")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 120,
      lineHeight: 1
    }
  }, "\uD83D\uDC1D")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "box",
    value: cat,
    onChange: setCat,
    tabs: cats.map(c => ({
      value: c,
      label: c === "all" ? "All" : c
    }))
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, list.length, " products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
      gap: 20
    }
  }, list.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    bordered: true,
    style: {
      overflow: "hidden",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(p)
  }, /*#__PURE__*/React.createElement(ProductFigure, {
    p: p
  })), /*#__PURE__*/React.createElement(CardBody, {
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CardTitle, {
    style: {
      fontSize: 16
    },
    onClick: () => onOpen(p)
  }, p.name), /*#__PURE__*/React.createElement(Stars, {
    rating: p.rating
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, p.cat), /*#__PURE__*/React.createElement(CardActions, {
    style: {
      marginTop: 6,
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18
    }
  }, fmt(p.price)), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "sm",
    onClick: () => onAdd(p)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  }), " Add"))))), list.length === 0 && /*#__PURE__*/React.createElement(Alert, {
    color: "warning",
    variant: "soft"
  }, "No products match \u201C", query, "\u201D."))));
}

/* ---------- Product detail ---------- */
function ProductView({
  p,
  onBack,
  onAdd
}) {
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("desc");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      maxWidth: 980,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onBack,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Back to shop"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    bordered: true,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(ProductFigure, {
    p: p,
    height: 360
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, p.cat), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      margin: "4px 0 8px"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    rating: p.rating
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: 13
    }
  }, "\xB7 128 reviews")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      marginBottom: 18
    }
  }, fmt(p.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, "Colorways"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, p.colors.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 30,
      height: 30,
      borderRadius: 9999,
      background: c,
      border: "2px solid var(--color-base-100)",
      boxShadow: "0 0 0 1px var(--color-base-300)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "join"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "join-item",
    variant: "outline",
    shape: "square",
    onClick: () => setQty(q => Math.max(1, q - 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "join-item btn btn-outline",
    style: {
      pointerEvents: "none",
      minWidth: 48
    }
  }, qty), /*#__PURE__*/React.createElement(Button, {
    className: "join-item",
    variant: "outline",
    shape: "square",
    onClick: () => setQty(q => q + 1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  }))), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => onAdd(p, qty)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 18
  }), " Add to bag \xB7 ", fmt(p.price * qty))), /*#__PURE__*/React.createElement(Tabs, {
    variant: "border",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "desc",
      label: "Description"
    }, {
      value: "ship",
      label: "Shipping"
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, tab === "desc" ? p.blurb : "Ships in 1–2 business days via carbon-neutral courier. Free over $50. 30-day returns, no questions — just buzz us."))));
}

/* ---------- Cart drawer ---------- */
function CartDrawer({
  open,
  items,
  onClose,
  onQty,
  onCheckout
}) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 40,
      pointerEvents: open ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,.4)",
      opacity: open ? 1 : 0,
      transition: "opacity .25s"
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      width: 380,
      maxWidth: "92vw",
      background: "var(--color-base-100)",
      boxShadow: "-8px 0 30px rgba(0,0,0,.18)",
      transform: open ? "translateX(0)" : "translateX(100%)",
      transition: "transform .28s cubic-bezier(0,0,0.2,1)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      borderBottom: "1px solid var(--color-base-300)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 18,
      margin: 0
    }
  }, "Your bag"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    shape: "circle",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--text-muted)",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40
    }
  }, "\uD83C\uDF6F"), "Your bag is empty."), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--radius-field)",
      background: `linear-gradient(135deg, ${it.colors[0]}, ${it.colors[1] || it.colors[0]})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22,
      flex: "none"
    }
  }, "\uD83D\uDC1D"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, fmt(it.price))), /*#__PURE__*/React.createElement("div", {
    className: "join"
  }, /*#__PURE__*/React.createElement("button", {
    className: "join-item btn btn-xs btn-outline",
    onClick: () => onQty(it.id, -1)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "join-item btn btn-xs btn-outline",
    style: {
      pointerEvents: "none"
    }
  }, it.qty), /*#__PURE__*/React.createElement("button", {
    className: "join-item btn btn-xs btn-outline",
    onClick: () => onQty(it.id, 1)
  }, "+"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderTop: "1px solid var(--color-base-300)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("strong", null, fmt(total))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      color: "var(--text-muted)",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "Shipping"), /*#__PURE__*/React.createElement("span", null, total > 50 || total === 0 ? "Free" : "$4.95")), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    block: true,
    disabled: items.length === 0,
    onClick: onCheckout
  }, "Checkout"))));
}

/* ---------- Confirmation ---------- */
function Confirmation({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      maxWidth: 520,
      margin: "60px auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      marginBottom: 8
    }
  }, "\uD83D\uDC1D"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      margin: "0 0 8px"
    }
  }, "Order placed!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginBottom: 20
    }
  }, "The hive is on it. We sent a confirmation to your inbox \u2014 order ", /*#__PURE__*/React.createElement("strong", null, "#BZZ-4821"), "."), /*#__PURE__*/React.createElement(Alert, {
    color: "success",
    style: {
      marginBottom: 20,
      textAlign: "left"
    }
  }, "Arriving Thu, Jun 26 \xB7 carbon-neutral shipping"), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    onClick: onBack
  }, "Keep shopping"));
}

/* ---------- App shell ---------- */
function ShopApp() {
  const [screen, setScreen] = useState("home"); // home | product | done
  const [active, setActive] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState("");
  const add = (p, qty = 1) => {
    setCart(c => {
      const ex = c.find(i => i.id === p.id);
      if (ex) return c.map(i => i.id === p.id ? {
        ...i,
        qty: i.qty + qty
      } : i);
      return [...c, {
        ...p,
        qty
      }];
    });
    setCartOpen(true);
  };
  const changeQty = (id, d) => setCart(c => c.map(i => i.id === id ? {
    ...i,
    qty: i.qty + d
  } : i).filter(i => i.qty > 0));
  const count = cart.reduce((s, i) => s + i.qty, 0);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--color-base-200)"
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    cartCount: count,
    query: query,
    setQuery: setQuery,
    onCart: () => setCartOpen(true),
    onHome: () => {
      setScreen("home");
    }
  }), /*#__PURE__*/React.createElement("main", null, screen === "home" && /*#__PURE__*/React.createElement(Storefront, {
    products: window.SHOP_PRODUCTS,
    query: query,
    onOpen: p => {
      setActive(p);
      setScreen("product");
      window.scrollTo(0, 0);
    },
    onAdd: add
  }), screen === "product" && active && /*#__PURE__*/React.createElement(ProductView, {
    p: active,
    onBack: () => setScreen("home"),
    onAdd: add
  }), screen === "done" && /*#__PURE__*/React.createElement(Confirmation, {
    onBack: () => {
      setScreen("home");
      setCart([]);
    }
  })), /*#__PURE__*/React.createElement(CartDrawer, {
    open: cartOpen,
    items: cart,
    onClose: () => setCartOpen(false),
    onQty: changeQty,
    onCheckout: () => {
      setCartOpen(false);
      setScreen("done");
      window.scrollTo(0, 0);
    }
  }));
}
window.ShopApp = ShopApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Shop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/shop-data.js
try { (() => {
// Demo catalog for the Bumblebee Shop UI kit (fake data).
window.SHOP_PRODUCTS = [{
  id: 1,
  name: "Honeycomb Tote",
  price: 38,
  cat: "Bags",
  rating: 4.8,
  seed: "honeytote",
  badge: "New",
  blurb: "Roomy waxed-canvas tote with a hexagon-quilted base. Carries a week of groceries or a laptop and lunch.",
  colors: ["#F5C518", "#E89A2C", "#1a1a1a"]
}, {
  id: 2,
  name: "Worker Bee Mug",
  price: 16,
  cat: "Home",
  rating: 4.6,
  seed: "beemug",
  badge: null,
  blurb: "12oz stoneware mug, matte glaze, comfy thumb rest. Microwave & dishwasher safe.",
  colors: ["#F5C518", "#ffffff"]
}, {
  id: 3,
  name: "Pollen Knit Beanie",
  price: 24,
  cat: "Apparel",
  rating: 4.9,
  seed: "beanie",
  badge: "Hot",
  blurb: "Soft merino-blend beanie in bumblebee yellow with a folded cuff.",
  colors: ["#F5C518", "#1a1a1a", "#E89A2C"]
}, {
  id: 4,
  name: "Hive Desk Lamp",
  price: 72,
  cat: "Home",
  rating: 4.7,
  seed: "lamp",
  badge: null,
  blurb: "Warm dimmable LED lamp with a hexagon shade and a tactile brass dial.",
  colors: ["#1a1a1a", "#E89A2C"]
}, {
  id: 5,
  name: "Forager Backpack",
  price: 89,
  cat: "Bags",
  rating: 4.5,
  seed: "backpack",
  badge: "New",
  blurb: "Weatherproof 22L daypack, padded laptop sleeve, magnetic buckles.",
  colors: ["#1a1a1a", "#F5C518"]
}, {
  id: 6,
  name: "Nectar Water Bottle",
  price: 28,
  cat: "Home",
  rating: 4.4,
  seed: "bottle",
  badge: null,
  blurb: "Insulated 600ml bottle, keeps cold 24h / hot 12h. Leakproof lid.",
  colors: ["#F5C518", "#E89A2C", "#ffffff"]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/shop-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardActions = __ds_scope.CardActions;

__ds_ns.Stats = __ds_scope.Stats;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
