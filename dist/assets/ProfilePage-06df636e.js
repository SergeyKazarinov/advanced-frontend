import { i as importShared, u as useTranslation, j as jsxRuntimeExports, x as ToggleFeatures, L as ListBox, y as ListBoxDeprecated, H as HStack, d as classNames, z as Loader, l as TextComponent, w as TextThemeEnum, E as TextAlignEnum, V as VStack, F as Avatar, G as Card, S as Skeleton, T as TextComponent$1, I as Avatar$1, t as createAsyncThunk, s as createSlice, e as useAppDispatch, f as useSelector, g as getUserAuthData, m as Button, n as ThemeButtonEnum, J as useInitialEffect, a as useParams, P as Page } from './index-e8277ff6.js';
import { I as Input } from './Input-79f18921.js';
import { I as Input$1 } from './Input-3c6acab9.js';
import { D as DynamicModuleLoader } from './DynamicModuleLoader-b32a089d.js';

var CountryEnum = /* @__PURE__ */ ((CountryEnum2) => {
  CountryEnum2["Russia"] = "Russia";
  CountryEnum2["Belarus"] = "Belarus";
  CountryEnum2["Ukraine"] = "Ukraine";
  CountryEnum2["Kazakhstan"] = "Kazakhstan";
  CountryEnum2["Armenia"] = "Armenia";
  return CountryEnum2;
})(CountryEnum || {});

const {useCallback: useCallback$3,useMemo: useMemo$1} = await importShared('react');
const CountrySelect = ({ className, value, onChange, readonly }) => {
  const { t } = useTranslation("profile");
  const optionList = useMemo$1(
    () => [
      { value: CountryEnum.Armenia, content: CountryEnum.Armenia },
      { value: CountryEnum.Belarus, content: CountryEnum.Belarus },
      { value: CountryEnum.Kazakhstan, content: CountryEnum.Kazakhstan },
      { value: CountryEnum.Russia, content: CountryEnum.Russia },
      { value: CountryEnum.Ukraine, content: CountryEnum.Ukraine }
    ],
    []
  );
  const handleChange = useCallback$3(
    (value2) => {
      onChange?.(value2);
    },
    [onChange]
  );
  const props = {
    className,
    onChange: handleChange,
    value,
    defaultValue: t("Specify the country"),
    label: t("Specify the country"),
    readonly,
    items: optionList,
    direction: "topRight"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(ListBox, { ...props }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListBoxDeprecated,
        {
          className,
          onChange: handleChange,
          value,
          defaultValue: t("Specify the country"),
          label: t("Specify the country"),
          readonly,
          items: optionList,
          direction: "topRight"
        }
      )
    }
  );
};

var CurrencyEnum = /* @__PURE__ */ ((CurrencyEnum2) => {
  CurrencyEnum2["RUB"] = "RUB";
  CurrencyEnum2["EUR"] = "EUR";
  CurrencyEnum2["USD"] = "USD";
  return CurrencyEnum2;
})(CurrencyEnum || {});

const {memo: memo$2,useCallback: useCallback$2,useMemo} = await importShared('react');
const CurrencySelect = ({ className, value, onChange, readonly }) => {
  const { t } = useTranslation("profile");
  const optionList = useMemo(
    () => [
      { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
      { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
      { value: CurrencyEnum.USD, content: CurrencyEnum.USD }
    ],
    []
  );
  const handleChange = useCallback$2(
    (value2) => {
      onChange?.(value2);
    },
    [onChange]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListBox,
        {
          className,
          onChange: handleChange,
          value,
          defaultValue: t("Specify the currency"),
          label: t("Specify the currency"),
          readonly,
          items: optionList,
          direction: "topRight"
        }
      ),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListBoxDeprecated,
        {
          className,
          onChange: handleChange,
          value,
          defaultValue: t("Specify the currency"),
          label: t("Specify the currency"),
          readonly,
          items: optionList,
          direction: "topRight"
        }
      )
    }
  );
};
const CurrencySelect$1 = memo$2(CurrencySelect);

const profileCard = "_profileCard_1dovw_1";
const loading = "_loading_1dovw_6";
const error = "_error_1dovw_6";
const editing = "_editing_1dovw_10";
const s$1 = {
	profileCard: profileCard,
	loading: loading,
	error: error,
	editing: editing
};

const ProfileCardDeprecated = ({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry
}) => {
  const { t } = useTranslation("profile");
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { max: true, justify: "center", className: classNames(s$1.profileCard, {}, [className, s$1.loading]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { max: true, justify: "center", className: classNames(s$1.profileCard, {}, [className, s$1.error]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextComponent,
      {
        theme: TextThemeEnum.ERROR,
        title: t("An error occurred while loading the profile"),
        text: t("Try refreshing the page"),
        align: TextAlignEnum.CENTER
      }
    ) });
  }
  const mods = {
    [s$1.editing]: !readonly
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { max: true, className: classNames(s$1.profileCard, mods, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { justify: "center", max: true, children: data?.avatar && /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { src: data.avatar }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: data?.name || "",
        placeholder: t("Your name"),
        onChange: onChangeName,
        readonly,
        "data-testid": "ProfileCard.FirstName"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: data?.lastName || "",
        placeholder: t("Your Lastname"),
        onChange: onChangeLastName,
        readonly,
        "data-testid": "ProfileCard.LastName"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: data?.age || 0, placeholder: t("Your age"), onChange: onChangeAge, readonly }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: data?.city || "", placeholder: t("Your city"), onChange: onChangeCity, readonly }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: data?.username || "",
        placeholder: t("Your username"),
        onChange: onChangeUsername,
        readonly
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: data?.avatar || "",
        placeholder: t("Your avatar"),
        className: s$1.input,
        onChange: onChangeAvatar,
        readonly
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CurrencySelect$1, { value: data?.currency, onChange: onChangeCurrency, readonly }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CountrySelect, { value: data?.country, onChange: onChangeCountry, readonly })
  ] });
};

const profileCardRedesigned = "_profileCardRedesigned_1xsch_1";
const s = {
	profileCardRedesigned: profileCardRedesigned
};

const ProfileCardRedesigned = ({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry
}) => {
  const { t } = useTranslation("profile");
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { padding: "24", max: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { max: true, justify: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { border: "100%", width: 128, height: 128 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "32", max: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "16", max: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 30 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 30 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 30 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 30 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "16", max: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 30 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 30 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 30 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 30 })
        ] })
      ] })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { max: true, justify: "center", className: classNames(s.profileCardRedesigned, {}, [className, s.error]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextComponent$1,
      {
        variant: "error",
        title: t("An error occurred while loading the profile"),
        text: t("Try refreshing the page"),
        align: "center"
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { max: true, padding: "24", className: classNames(s.profileCardRedesigned, {}, [className]), children: [
    data?.avatar && /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { justify: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { src: data.avatar, size: 128 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "24", max: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "16", max: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input$1,
          {
            value: data?.name || "",
            label: t("Name"),
            onChange: onChangeName,
            readonly,
            "data-testid": "ProfileCard.FirstName"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input$1,
          {
            value: data?.lastName || "",
            label: t("Lastname"),
            onChange: onChangeLastName,
            readonly,
            "data-testid": "ProfileCard.LastName"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input$1, { value: data?.age || 0, label: t("Age"), onChange: onChangeAge, readonly }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input$1, { value: data?.city || "", label: t("City"), onChange: onChangeCity, readonly })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "16", max: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input$1, { value: data?.username || "", label: t("Username"), onChange: onChangeUsername, readonly }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input$1,
          {
            value: data?.avatar || "",
            label: t("Avatar"),
            className: s.input,
            onChange: onChangeAvatar,
            readonly
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CurrencySelect$1, { value: data?.currency, onChange: onChangeCurrency, readonly }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountrySelect, { value: data?.country, onChange: onChangeCountry, readonly })
      ] })
    ] })
  ] });
};

const ProfileCard = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ToggleFeatures,
  {
    feature: "isAppRedesigned",
    on: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCardRedesigned, { ...props }),
    off: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCardDeprecated, { ...props })
  }
);

const getProfileError = (state) => state.profile?.error;

const getProfileForm = (state) => state.profile?.form;

const getProfileIsLoading = (state) => state.profile?.isLoading;

const getProfileReadonly = (state) => state.profile?.readonly;

const getProfileValidateErrors = (state) => state.profile?.validateError;

const fetchProfileData = createAsyncThunk("profile/fetchProfileData", async (profileId, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get(
      `/profile/${profileId}`
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("Error");
  }
});

var ValidateProfileErrorEnum = /* @__PURE__ */ ((ValidateProfileErrorEnum2) => {
  ValidateProfileErrorEnum2["INCORRECT_USER_DATA"] = "INCORRECT_USER_DATA";
  ValidateProfileErrorEnum2["INCORRECT_AGE"] = "INCORRECT_AGE";
  ValidateProfileErrorEnum2["INCORRECT_COUNTRY"] = "INCORRECT_COUNTRY";
  ValidateProfileErrorEnum2["INCORRECT_CITY"] = "INCORRECT_CITY";
  ValidateProfileErrorEnum2["NO_DATA"] = "NO_DATA";
  ValidateProfileErrorEnum2["SERVER_ERROR"] = "SERVER_ERROR";
  return ValidateProfileErrorEnum2;
})(ValidateProfileErrorEnum || {});

const validateProfileData = (profile) => {
  if (!profile) {
    return [ValidateProfileErrorEnum.NO_DATA];
  }
  const { name, lastName, age, country, city } = profile;
  const errors = [];
  if (!name || !lastName) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_USER_DATA);
  }
  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_AGE);
  }
  if (!country) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_COUNTRY);
  }
  if (!city) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_CITY);
  }
  return errors;
};

const updateProfileData = createAsyncThunk("profile/updateProfileData", async (_, thunkAPI) => {
  const formData = getProfileForm(thunkAPI.getState());
  const errors = validateProfileData(formData);
  if (errors.length) {
    return thunkAPI.rejectWithValue(errors);
  }
  try {
    const response = await thunkAPI.extra.api.put(
      `/profile/${formData?.id}`,
      formData
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue([ValidateProfileErrorEnum.SERVER_ERROR]);
  }
});

const initialState = {
  readonly: true,
  isLoading: false,
  error: "",
  data: void 0,
  form: void 0
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadonly: (state, action) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action) => {
      state.form = {
        ...state.form,
        ...action.payload
      };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateError = void 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = void 0;
      state.isLoading = true;
    }).addCase(
      fetchProfileData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      }
    ).addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }).addCase(updateProfileData.pending, (state) => {
      state.validateError = void 0;
      state.isLoading = true;
    }).addCase(
      updateProfileData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.readonly = true;
        state.data = action.payload;
        state.form = action.payload;
        state.validateError = void 0;
      }
    ).addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateError = action.payload;
    });
  }
});
const profileActions = profileSlice.actions;
const profileReducer = profileSlice.reducer;

const getProfileData = (state) => state.profile?.data;

const {memo: memo$1,useCallback: useCallback$1} = await importShared('react');
const EditableProfileCardHeader = ({ className }) => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const readonly = useSelector(getProfileReadonly);
  const canEdit = authData?.id === profileData?.id;
  const onEdit = useCallback$1(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);
  const onCancelEdit = useCallback$1(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSave = useCallback$1(() => {
    dispatch(updateProfileData());
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { max: true, justify: "between", className: classNames("", {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: t("Profile") }),
    canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: readonly ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { theme: ThemeButtonEnum.OUTLINE, onClick: onEdit, "data-testid": "EditableProfileCardHeader.EditButton", children: t("Edit") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          theme: ThemeButtonEnum.OUTLINE_RED,
          onClick: onCancelEdit,
          "data-testid": "EditableProfileCardHeader.CancelButton",
          children: t("Cancel")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          theme: ThemeButtonEnum.OUTLINE,
          onClick: onSave,
          "data-testid": "EditableProfileCardHeader.SaveButton",
          children: t("Save")
        }
      )
    ] }) })
  ] });
};
const EditableProfileCardHeader$1 = memo$1(EditableProfileCardHeader);

const {memo,useCallback} = await importShared('react');
const reducers = {
  profile: profileReducer
};
const EditableProfileCard = ({ className, profileId }) => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const validateErrorTranslates = {
    [ValidateProfileErrorEnum.SERVER_ERROR]: t("Server error"),
    [ValidateProfileErrorEnum.INCORRECT_AGE]: t("Incorrect age"),
    [ValidateProfileErrorEnum.INCORRECT_COUNTRY]: t("Incorrect country"),
    [ValidateProfileErrorEnum.INCORRECT_USER_DATA]: t("Incorrect user data"),
    [ValidateProfileErrorEnum.INCORRECT_CITY]: t("Incorrect city"),
    [ValidateProfileErrorEnum.NO_DATA]: t("No data")
  };
  useInitialEffect(() => {
    if (profileId) {
      dispatch(fetchProfileData(profileId));
    }
  });
  const onChangeName = useCallback(
    (value) => {
      dispatch(profileActions.updateProfile({ name: value || "" }));
    },
    [dispatch]
  );
  const onChangeLastName = useCallback(
    (value) => {
      dispatch(profileActions.updateProfile({ lastName: value || "" }));
    },
    [dispatch]
  );
  const onChangeAge = useCallback(
    (value) => {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );
  const onChangeUsername = useCallback(
    (value) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );
  const onChangeAvatar = useCallback(
    (value) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicModuleLoader, { reducers, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { max: true, className: classNames("", {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditableProfileCardHeader$1, {}),
    validateErrors?.length && validateErrors.map((err) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextComponent,
      {
        theme: TextThemeEnum.ERROR,
        text: validateErrorTranslates[err],
        "data-testid": "EditableProfileCard.Error"
      },
      err
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProfileCard,
      {
        data: form,
        error,
        isLoading,
        onChangeName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        readonly
      }
    )
  ] }) });
};
const EditableProfileCard$1 = memo(EditableProfileCard);

const ProfilePage = () => {
  useTranslation("profile");
  const { profileId } = useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page, { "data-testid": "ProfilePage", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VStack, { gap: "16", max: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditableProfileCard$1, { profileId }) }) });
};

export { ProfilePage as default };
