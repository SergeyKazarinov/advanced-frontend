import { i as importShared, u as useTranslation, a as useParams, j as jsxRuntimeExports, P as Page } from './index-e8277ff6.js';

const {memo} = await importShared('react');
const ArticleEditPage = () => {
  const { t } = useTranslation();
  useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Page, { children: t("No data") });
};
const ArticleEditPage$1 = memo(ArticleEditPage);

export { ArticleEditPage$1 as default };
