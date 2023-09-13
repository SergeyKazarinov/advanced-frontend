import { i as importShared, u as useTranslation, e as useAppDispatch, f as useSelector, g as getUserAuthData, j as jsxRuntimeExports, H as HStack, T as TextComponent, S as Skeleton, L as ListBox, h as getFeatureFlag, k as updateFeatureFlags, P as Page, V as VStack } from './index-e8277ff6.js';

const {memo,useState} = await importShared('react');
const DesignSwitcher = () => {
  const { t } = useTranslation("main");
  const isAppRedesigned = getFeatureFlag("isAppRedesigned");
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);
  const items = [
    {
      content: t("New"),
      value: "new"
    },
    {
      content: t("Old"),
      value: "old"
    }
  ];
  const handleChange = async (value) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlags({
          userId: authData.id,
          features: {
            isAppRedesigned: value === "new"
          }
        })
      ).unwrap();
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: t("Design Variang") }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: 120, height: 40, border: "20px" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ListBox, { onChange: handleChange, items, value: isAppRedesigned ? "new" : "old" })
  ] });
};
const DesignSwitcher$1 = memo(DesignSwitcher);

const SettingsPage = () => {
  const { t } = useTranslation("main");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page, { "data-testid": "SettingsPage", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: t("User Settings") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DesignSwitcher$1, {})
  ] }) });
};

export { SettingsPage as default };
