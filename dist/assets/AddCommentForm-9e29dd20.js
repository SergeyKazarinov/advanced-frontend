import { s as createSlice, i as importShared, u as useTranslation, e as useAppDispatch, f as useSelector, j as jsxRuntimeExports, H as HStack, d as classNames, m as Button } from './index-e8277ff6.js';
import { D as DynamicModuleLoader } from './DynamicModuleLoader-b32a089d.js';
import { I as Input } from './Input-79f18921.js';

const getAddCommentFormError = (state) => state?.addCommentForm?.error;

const getAddCommentFormText = (state) => state?.addCommentForm?.text ?? "";

const initialState = {
  text: ""
};
const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    }
  }
});
const addCommentFormActions = addCommentFormSlice.actions;
const addCommentFormReducer = addCommentFormSlice.reducer;

const addCommentForm = "_addCommentForm_1qv8m_1";
const input = "_input_1qv8m_6";
const s = {
	addCommentForm: addCommentForm,
	input: input
};

const {memo,useCallback} = await importShared('react');
const reducers = {
  addCommentForm: addCommentFormReducer
};
const AddCommentForm = ({ className, onSendComment }) => {
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  useSelector(getAddCommentFormError);
  const handleChange = useCallback(
    (value) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );
  const handleSendComment = useCallback(() => {
    onSendComment(text);
    dispatch(addCommentFormActions.setText(""));
  }, [dispatch, text, onSendComment]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicModuleLoader, { reducers, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    HStack,
    {
      "data-testid": "AddCommentForm",
      max: true,
      justify: "between",
      className: classNames(s.addCommentForm, {}, [className]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-testid": "AddCommentForm.Input",
            className: s.input,
            placeholder: t("Enter message text"),
            value: text,
            onChange: handleChange
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { "data-testid": "AddCommentForm.Button", onClick: handleSendComment, children: t("Send") })
      ]
    }
  ) });
};
const AddCommentForm$1 = memo(AddCommentForm);

export { AddCommentForm$1 as default };
