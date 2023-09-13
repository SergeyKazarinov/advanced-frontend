import { t as createAsyncThunk, v as userActions, s as createSlice, U as USER_LOCAL_STORAGE_KEY, i as importShared, u as useTranslation, e as useAppDispatch, f as useSelector, j as jsxRuntimeExports, d as classNames, l as TextComponent, w as TextThemeEnum, m as Button, n as ThemeButtonEnum } from './index-e8277ff6.js';
import { D as DynamicModuleLoader } from './DynamicModuleLoader-b32a089d.js';
import { I as Input } from './Input-79f18921.js';

const getLoginError = (state) => state?.loginForm?.error || "";

const getLoginIsLoading = (state) => state?.loginForm?.isLoading || false;

const getLoginPassword = (state) => state?.loginForm?.password || "";

const getLoginUsername = (state) => state?.loginForm?.username || "";

const loginByUsername = createAsyncThunk(
  "login/loginByUsername",
  async (authData, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post("/login", authData);
      if (!response.data) {
        throw new Error();
      }
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

const initialState = {
  isLoading: false,
  username: "",
  password: ""
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.error = void 0;
      state.isLoading = true;
    }).addCase(
      loginByUsername.fulfilled,
      (state, action) => {
        state.isLoading = false;
        localStorage.setItem(
          USER_LOCAL_STORAGE_KEY,
          JSON.stringify(action.payload)
        );
      }
    ).addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
const loginActions = loginSlice.actions;
const loginReducer = loginSlice.reducer;

const loginForm = "_loginForm_xxt9k_1";
const input = "_input_xxt9k_7";
const loginBtn = "_loginBtn_xxt9k_11";
const title = "_title_xxt9k_16";
const s = {
	loginForm: loginForm,
	input: input,
	loginBtn: loginBtn,
	title: title
};

const {memo,useCallback} = await importShared('react');
const initialReducers = {
  loginForm: loginReducer
};
const LoginForm = ({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const errorMessage = t("The username or password you entered is incorrect");
  const onChangeUsername = useCallback(
    (value) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicModuleLoader, { reducers: initialReducers, removeAfterUnmount: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s.loginForm, {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: t("Authorization") ?? "", className: s.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { autoFocus: true, placeholder: t("Enter username") ?? "", value: username, onChange: onChangeUsername }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("Enter password") ?? "", type: "password", value: password, onChange: onChangePassword }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: errorMessage, theme: TextThemeEnum.ERROR }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: s.loginBtn, theme: ThemeButtonEnum.CLEAR, onClick: onLoginClick, disabled: isLoading, children: t("Sign In") })
  ] }) });
};
const LoginForm$1 = memo(LoginForm);

export { LoginForm$1 as default };
