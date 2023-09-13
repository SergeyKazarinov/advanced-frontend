import { i as importShared, j as jsxRuntimeExports, d as classNames } from './index-e8277ff6.js';

const inputWrapper = "_inputWrapper_1e5ly_1";
const placeHolder = "_placeHolder_1e5ly_5";
const readonly = "_readonly_1e5ly_9";
const input = "_input_1e5ly_1";
const caretWrapper = "_caretWrapper_1e5ly_26";
const caret = "_caret_1e5ly_26";
const blink = "_blink_1e5ly_1";
const s = {
	inputWrapper: inputWrapper,
	placeHolder: placeHolder,
	readonly: readonly,
	input: input,
	caretWrapper: caretWrapper,
	caret: caret,
	blink: blink
};

const {memo,useEffect,useRef,useState} = await importShared('react');
const Input = ({
  className,
  type = "text",
  value,
  onChange,
  placeholder,
  autoFocus,
  readonly,
  ...otherProps
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef(null);
  const isCaretVisible = isFocus && !readonly;
  useEffect(() => {
    if (autoFocus) {
      setIsFocus(true);
      ref.current?.focus();
    }
  }, [autoFocus]);
  const handleChange = (e) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };
  const onBlur = () => {
    setIsFocus(false);
  };
  const onFocus = () => {
    setIsFocus(true);
  };
  const onSelect = (e) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };
  const mods = {
    [s.readonly]: readonly
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s.inputWrapper, mods, [className]), children: [
    placeholder && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s.placeHolder, children: `${placeholder} > ` }),
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
          onSelect,
          readOnly: readonly,
          ...otherProps
        }
      ),
      isCaretVisible && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: s.caret, style: { left: `${caretPosition * 9}px` } })
    ] })
  ] });
};
const Input$1 = memo(Input);

export { Input$1 as I };
