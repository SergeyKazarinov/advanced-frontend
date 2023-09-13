import { i as importShared, j as jsxRuntimeExports, d as classNames, H as HStack, T as TextComponent } from './index-e8277ff6.js';

const inputWrapper = "_inputWrapper_1eov4_1";
const addonLeft = "_addonLeft_1eov4_11";
const addonRight = "_addonRight_1eov4_12";
const withAddonLeft = "_withAddonLeft_1eov4_16";
const withAddonRight = "_withAddonRight_1eov4_20";
const readonly = "_readonly_1eov4_24";
const focused = "_focused_1eov4_28";
const input = "_input_1eov4_1";
const s = {
	inputWrapper: inputWrapper,
	addonLeft: addonLeft,
	addonRight: addonRight,
	withAddonLeft: withAddonLeft,
	withAddonRight: withAddonRight,
	readonly: readonly,
	focused: focused,
	input: input
};

const {memo,useEffect,useRef,useState} = await importShared('react');
const Input = ({
  className,
  type = "text",
  value,
  label,
  onChange,
  placeholder,
  autoFocus,
  readonly,
  addonLeft,
  addonRight,
  ...otherProps
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (autoFocus) {
      setIsFocus(true);
      ref.current?.focus();
    }
  }, [autoFocus]);
  const handleChange = (e) => {
    onChange?.(e.target.value);
  };
  const onBlur = () => {
    setIsFocus(false);
  };
  const onFocus = () => {
    setIsFocus(true);
  };
  const mods = {
    [s.readonly]: readonly,
    [s.focused]: isFocus,
    [s.withAddonLeft]: Boolean(addonLeft),
    [s.withAddonRight]: Boolean(addonRight)
  };
  const input = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s.inputWrapper, mods, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s.addonLeft, children: addonLeft }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s.caretWrapper, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref,
          onBlur,
          onFocus,
          className: classNames(s.input, {}, []),
          type,
          value,
          onChange: handleChange,
          readOnly: readonly,
          placeholder,
          ...otherProps
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s.addonRight, children: addonRight })
    ] })
  ] });
  if (label) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { max: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: label }),
      input
    ] });
  }
  return input;
};
const Input$1 = memo(Input);

export { Input$1 as I };
