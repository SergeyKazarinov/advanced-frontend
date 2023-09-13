import { t as createAsyncThunk, s as createSlice, _ as GenIcon, i as importShared, j as jsxRuntimeExports, d as classNames, m as Button, n as ThemeButtonEnum, p as SizeButtonEnum, u as useTranslation, l as TextComponent, E as TextAlignEnum, f as useSelector, H as HStack, F as Avatar, V as VStack, K as TextSizeEnum, $ as AiFillEye, T as TextComponent$1, a0 as AppImage, S as Skeleton, e as useAppDispatch, J as useInitialEffect, q as Skeleton$1, x as ToggleFeatures, C as Card, X as AppLink, a1 as getRouteArticlesDetails, G as Card$1, I as Avatar$1, a2 as AppLink$1, W as Button$1, a3 as toggleFeatures } from './index-e8277ff6.js';
import { D as DynamicModuleLoader } from './DynamicModuleLoader-b32a089d.js';

var ArticleSortFieldEnum = /* @__PURE__ */ ((ArticleSortFieldEnum2) => {
  ArticleSortFieldEnum2["VIEWS"] = "views";
  ArticleSortFieldEnum2["TITLE"] = "title";
  ArticleSortFieldEnum2["CREATED"] = "createdAt";
  return ArticleSortFieldEnum2;
})(ArticleSortFieldEnum || {});
var ArticleTypeEnum = /* @__PURE__ */ ((ArticleTypeEnum2) => {
  ArticleTypeEnum2["ALL"] = "ALL";
  ArticleTypeEnum2["IT"] = "IT";
  ArticleTypeEnum2["SCIENCE"] = "SCIENCE";
  ArticleTypeEnum2["ECONOMICS"] = "ECONOMICS";
  return ArticleTypeEnum2;
})(ArticleTypeEnum || {});
var ArticleBlockTypeEnum = /* @__PURE__ */ ((ArticleBlockTypeEnum2) => {
  ArticleBlockTypeEnum2["CODE"] = "CODE";
  ArticleBlockTypeEnum2["IMAGE"] = "IMAGE";
  ArticleBlockTypeEnum2["TEXT"] = "TEXT";
  return ArticleBlockTypeEnum2;
})(ArticleBlockTypeEnum || {});
var ArticleViewEnum = /* @__PURE__ */ ((ArticleViewEnum2) => {
  ArticleViewEnum2["BIG"] = "BIG";
  ArticleViewEnum2["SMALL"] = "SMALL";
  return ArticleViewEnum2;
})(ArticleViewEnum || {});

const getArticleDetailsData = (state) => state.articleDetails?.data;

const getArticleDetailsError = (state) => state.articleDetails?.error;

const getArticleDetailsIsLoading = (state) => state.articleDetails?.isLoading;

const fetchArticleById = createAsyncThunk("articleDetails/fetchArticleById", async (articleId, thunkAPI) => {
  try {
    if (!articleId) {
      throw new Error("Article not found");
    }
    const response = await thunkAPI.extra.api.get(
      `/articles/${articleId}`,
      {
        params: {
          _expand: "user"
        }
      }
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

const initialState = {
  isLoading: false,
  error: "",
  data: void 0
};
const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = void 0;
      state.isLoading = true;
    }).addCase(
      fetchArticleById.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    ).addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
const articleDetailsReducer = articleDetailsSlice.reducer;

// THIS FILE IS AUTO GENERATED
function ImCalendar (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.1","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function BiCopy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"}}]})(props);
}function BiSearchAlt2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}}]})(props);
}

const code = "_code_drrai_1";
const copyBtn = "_copyBtn_drrai_9";
const s$b = {
	code: code,
	copyBtn: copyBtn
};

const {memo: memo$c,useCallback} = await importShared('react');
const Code = ({ className, text }) => {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: classNames(s$b.code, {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: s$b.copyBtn, theme: ThemeButtonEnum.CLEAR, size: SizeButtonEnum.L, onClick: handleCopy, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BiCopy, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: text })
  ] });
};
const Code$1 = memo$c(Code);

const articleCodeBlock = "_articleCodeBlock_1nebd_1";
const s$a = {
	articleCodeBlock: articleCodeBlock
};

const {memo: memo$b} = await importShared('react');
const ArticleCodeBlock = ({ className, block }) => {
  useTranslation("article");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$a.articleCodeBlock, {}, [className]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Code$1, { text: block.code }) });
};
const ArticleCodeBlock$1 = memo$b(ArticleCodeBlock);

const articleImageBlock = "_articleImageBlock_1b0xr_1";
const s$9 = {
	articleImageBlock: articleImageBlock
};

const {memo: memo$a} = await importShared('react');
const ArticleImageBlock = ({ className, block }) => {
  useTranslation("article");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$9.articleImageBlock, {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: block.src, alt: block.title, className: s$9.image }),
    block.title && /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: block.title, align: TextAlignEnum.CENTER })
  ] });
};
const ArticleImageBlock$1 = memo$a(ArticleImageBlock);

const title$3 = "_title_15fkq_1";
const paragraph = "_paragraph_15fkq_5";
const s$8 = {
	title: title$3,
	paragraph: paragraph
};

const {memo: memo$9} = await importShared('react');
const ArticleTextBlock = ({ className, block }) => {
  useTranslation("article");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$8.articleTextBlock, {}, [className]), children: [
    block.title && /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: block.title, className: s$8.title }),
    block.paragraphs.map((paragraph) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: paragraph, className: s$8.paragraph }, paragraph))
  ] });
};
const ArticleTextBlock$1 = memo$9(ArticleTextBlock);

const renderBlock = (block) => {
  switch (block.type) {
    case ArticleBlockTypeEnum.CODE:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCodeBlock$1, { block }, block.id);
    case ArticleBlockTypeEnum.IMAGE:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleImageBlock$1, { block }, block.id);
    case ArticleBlockTypeEnum.TEXT:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleTextBlock$1, { block }, block.id);
    default:
      return null;
  }
};

const articleDetails$2 = "_articleDetails_1r6tq_1";
const avatar$2 = "_avatar_1r6tq_5";
const icon$2 = "_icon_1r6tq_9";
const s$7 = {
	articleDetails: articleDetails$2,
	avatar: avatar$2,
	icon: icon$2
};

const {memo: memo$8} = await importShared('react');
const ArticleDetailsDeprecated = () => {
  const article = useSelector(getArticleDetailsData);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { justify: "center", max: true, className: s$7.avatarWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: 200, src: article?.img, className: s$7.avatar }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { max: true, gap: "4", "data-testid": "ArticleDetails.Info", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: article?.title, text: article?.subtitle, size: TextSizeEnum.L }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { className: s$7.articleInfo, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AiFillEye, { className: s$7.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: String(article?.views) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { className: s$7.articleInfo, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImCalendar, { className: s$7.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: article?.createdAt })
      ] })
    ] }),
    article?.blocks.map(renderBlock)
  ] });
};
const ArticleDetailsDeprecated$1 = memo$8(ArticleDetailsDeprecated);

const articleDetails$1 = "_articleDetails_r5w8f_1";
const avatar$1 = "_avatar_r5w8f_5";
const icon$1 = "_icon_r5w8f_9";
const image$3 = "_image_r5w8f_13";
const s$6 = {
	articleDetails: articleDetails$1,
	avatar: avatar$1,
	icon: icon$1,
	image: image$3
};

const {memo: memo$7} = await importShared('react');
const ArticleDetailsRedesigned = () => {
  const article = useSelector(getArticleDetailsData);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { title: article?.title, size: "size_l", bold: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: article?.subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AppImage,
      {
        fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 420, border: "16px" }),
        src: article?.img,
        className: s$6.image
      }
    ),
    article?.blocks.map(renderBlock)
  ] });
};
const ArticleDetailsRedesigned$1 = memo$7(ArticleDetailsRedesigned);

const articleDetails = "_articleDetails_1r6tq_1";
const avatar = "_avatar_1r6tq_5";
const icon = "_icon_1r6tq_9";
const s$5 = {
	articleDetails: articleDetails,
	avatar: avatar,
	icon: icon
};

const {memo: memo$6} = await importShared('react');
const reducers = {
  articleDetails: articleDetailsReducer
};
const ArticleDetails = ({ className, id }) => {
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });
  let content;
  if (isLoading) {
    content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { className: s$5.avatar, width: 200, height: 200, border: "50%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { className: s$5.title, width: 300, height: 32 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { className: s$5.skeleton, width: 600, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { className: s$5.skeleton, width: "100%", height: 200 })
    ] });
  } else if (error) {
    content = /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: t("An error occurred while loading the page") });
  } else {
    content = /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleFeatures, { feature: "isAppRedesigned", on: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleDetailsRedesigned$1, {}), off: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleDetailsDeprecated$1, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicModuleLoader, { reducers, removeAfterUnmount: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VStack, { gap: "16", max: true, className: classNames(s$5.articleDetails, {}, [className]), children: content }) });
};
const ArticleDetails$1 = memo$6(ArticleDetails);

const BIG$3 = "_BIG_17u21_1";
const views$2 = "_views_17u21_1";
const header$1 = "_header_17u21_4";
const username$1 = "_username_17u21_8";
const date$1 = "_date_17u21_11";
const title$2 = "_title_17u21_14";
const image$2 = "_image_17u21_17";
const footer$2 = "_footer_17u21_23";
const textBlock$2 = "_textBlock_17u21_28";
const SMALL$3 = "_SMALL_17u21_33";
const imageWrapper$1 = "_imageWrapper_17u21_38";
const infoWrapper$2 = "_infoWrapper_17u21_54";
const types$2 = "_types_17u21_59";
const s$4 = {
	BIG: BIG$3,
	views: views$2,
	header: header$1,
	username: username$1,
	date: date$1,
	title: title$2,
	image: image$2,
	footer: footer$2,
	textBlock: textBlock$2,
	SMALL: SMALL$3,
	imageWrapper: imageWrapper$1,
	infoWrapper: infoWrapper$2,
	types: types$2
};

const {memo: memo$5} = await importShared('react');
const ArticleListItemDeprecated = ({ className, article, view, target }) => {
  const { t } = useTranslation("article");
  const types = /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: article.type.join(", "), className: s$4.types });
  const views = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: String(article.views), className: s$4.views }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AiFillEye, {})
  ] });
  if (view === ArticleViewEnum.BIG) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockTypeEnum.TEXT);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "ArticleListItem", className: classNames(s$4.articleListItem, {}, [className, s$4[view]]), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s$4.header, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: 30, src: article.user.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: article.user.username, className: s$4.username }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: article.createdAt, className: s$4.date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: article.title, className: s$4.title }),
      types,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AppImage,
        {
          src: article.img,
          className: s$4.image,
          alt: article.title,
          fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { width: "100%", height: 250 })
        }
      ),
      textBlock && /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleTextBlock$1, { block: textBlock, className: s$4.textBlock }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$4.footer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppLink, { to: getRouteArticlesDetails(article.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { theme: ThemeButtonEnum.CLEAR, children: t("Read more") }) }) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AppLink,
    {
      "data-testid": "ArticleListItem",
      target,
      to: getRouteArticlesDetails(article.id),
      className: classNames(s$4.articleListItem, {}, [className, s$4[view]]),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s$4.imageWrapper, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AppImage,
            {
              src: article.img,
              className: s$4.image,
              alt: article.title,
              fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { width: 200, height: 200 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: article.createdAt, className: s$4.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s$4.infoWrapper, children: [
          types,
          views
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: article.title, className: s$4.title })
      ] })
    }
  );
};
const ArticleListItemDeprecated$1 = memo$5(ArticleListItemDeprecated);

const BIG$2 = "_BIG_93aij_1";
const views$1 = "_views_93aij_1";
const image$1 = "_image_93aij_4";
const textBlock$1 = "_textBlock_93aij_9";
const SMALL$2 = "_SMALL_93aij_14";
const wrapper = "_wrapper_93aij_14";
const card$1 = "_card_93aij_17";
const info = "_info_93aij_31";
const footer$1 = "_footer_93aij_35";
const infoWrapper$1 = "_infoWrapper_93aij_39";
const types$1 = "_types_93aij_44";
const title$1 = "_title_93aij_51";
const s$3 = {
	BIG: BIG$2,
	views: views$1,
	image: image$1,
	textBlock: textBlock$1,
	SMALL: SMALL$2,
	wrapper: wrapper,
	card: card$1,
	info: info,
	footer: footer$1,
	infoWrapper: infoWrapper$1,
	types: types$1,
	title: title$1
};

const {memo: memo$4} = await importShared('react');
const ArticleListItemRedesigned = ({ className, article, view, target }) => {
  const { t } = useTranslation("article");
  /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: article.type.join(", "), className: s$3.types });
  const views = /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AiFillEye, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: String(article.views), className: s$3.views })
  ] });
  if (view === ArticleViewEnum.BIG) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockTypeEnum.TEXT);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card$1,
      {
        "data-testid": "ArticleListItem",
        className: classNames(s$3.articleListItem, {}, [className, s$3[view]]),
        max: true,
        padding: "24",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { max: true, gap: "16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { size: 32, src: article.user.avatar }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { bold: true, text: article.user.username }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: article.createdAt })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { bold: true, title: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { title: article.subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AppImage,
            {
              src: article.img,
              className: s$3.image,
              alt: article.title,
              fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 250 })
            }
          ),
          textBlock?.paragraphs && /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: textBlock.paragraphs.slice(0, 2).join(" "), className: s$3.textBlock }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { max: true, justify: "between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppLink$1, { to: getRouteArticlesDetails(article.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { variant: "outline", children: t("Read more") }) }),
            views
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AppLink$1,
    {
      "data-testid": "ArticleListItem",
      target,
      to: getRouteArticlesDetails(article.id),
      className: classNames(s$3.articleListItem, {}, [className, s$3[view]]),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card$1, { className: s$3.card, border: "round", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppImage,
          {
            src: article.img,
            className: s$3.image,
            alt: article.title,
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: 200, height: 200 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { className: s$3.info, gap: "4", max: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { bold: true, title: article.title, className: s$3.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "4", className: s$3.footer, max: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { justify: "between", max: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: article.createdAt, className: s$3.date }),
              views
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { size: 32, src: article.user.avatar }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { bold: true, text: article.user.username })
            ] })
          ] })
        ] })
      ] })
    }
  );
};
const ArticleListItemRedesigned$1 = memo$4(ArticleListItemRedesigned);

const {memo: memo$3} = await importShared('react');
const ArticleListItem = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ToggleFeatures,
  {
    feature: "isAppRedesigned",
    on: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleListItemRedesigned$1, { ...props }),
    off: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleListItemDeprecated$1, { ...props })
  }
);
const ArticleListItem$1 = memo$3(ArticleListItem);

const BIG$1 = "_BIG_m2yq2_1";
const views = "_views_m2yq2_1";
const header = "_header_m2yq2_4";
const username = "_username_m2yq2_8";
const date = "_date_m2yq2_11";
const title = "_title_m2yq2_14";
const image = "_image_m2yq2_17";
const footer = "_footer_m2yq2_23";
const textBlock = "_textBlock_m2yq2_28";
const SMALL$1 = "_SMALL_m2yq2_33";
const imageWrapper = "_imageWrapper_m2yq2_38";
const infoWrapper = "_infoWrapper_m2yq2_54";
const types = "_types_m2yq2_59";
const articleListItemRedesigned = "_articleListItemRedesigned_m2yq2_87";
const s$2 = {
	BIG: BIG$1,
	views: views,
	header: header,
	username: username,
	date: date,
	title: title,
	image: image,
	footer: footer,
	textBlock: textBlock,
	SMALL: SMALL$1,
	imageWrapper: imageWrapper,
	infoWrapper: infoWrapper,
	types: types,
	articleListItemRedesigned: articleListItemRedesigned
};

const {memo: memo$2} = await importShared('react');
const ArticleListItemSkeleton = ({ className, view }) => {
  const Card$2 = toggleFeatures({ name: "isAppRedesigned", on: () => Card$1, off: () => Card });
  const Skeleton$2 = toggleFeatures({
    name: "isAppRedesigned",
    on: () => Skeleton,
    off: () => Skeleton$1
  });
  const mainClass = toggleFeatures({
    name: "isAppRedesigned",
    on: () => s$2.articleListItemRedesigned,
    off: () => s$2.articleListItem
  });
  if (view === ArticleViewEnum.BIG) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(mainClass, {}, [className, s$2[view]]), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card$2, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s$2.header, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$2, { width: 30, height: 30, border: "50%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$2, { width: 150, height: 16, className: s$2.username }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$2, { width: 150, height: 16, className: s$2.date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$2, { width: 250, height: 24, className: s$2.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$2, { className: s$2.image, height: 300 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$2.footer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$2, { height: 36, width: 150 }) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(mainClass, {}, [className, s$2[view]]), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card$2, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$2.imageWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$2, { className: s$2.image, width: 200, height: 200 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s$2.infoWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$2, { width: 130, height: 16 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$2, { className: s$2.title, width: 150, height: 16 })
  ] }) });
};
const ArticleListItemSkeleton$1 = memo$2(ArticleListItemSkeleton);

const SMALL = "_SMALL_f7j5n_1";
const card = "_card_f7j5n_7";
const row = "_row_f7j5n_11";
const BIG = "_BIG_f7j5n_16";
const s$1 = {
	SMALL: SMALL,
	card: card,
	row: row,
	BIG: BIG
};

const {memo: memo$1} = await importShared('react');
const ArticleList = ({
  className,
  articles,
  isLoading,
  view = ArticleViewEnum.SMALL,
  target
}) => {
  const { t } = useTranslation("article");
  const getSkeletons = (view2) => new Array(view2 === ArticleViewEnum.SMALL ? 9 : 3).fill(0).map((item, index) => (
    // eslint-disable-next-line
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleListItemSkeleton$1, { view: view2 }, index)
  ));
  if (!isLoading && !articles.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$1.articleList, {}, [className, s$1[view]]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { size: TextSizeEnum.L, text: t("Articles not found"), align: TextAlignEnum.CENTER }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        HStack,
        {
          gap: "16",
          wrap: "wrap",
          className: classNames(s$1.articleListRedesigned, {}, [className]),
          "data-testid": "ArticleList",
          children: [
            articles.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleListItem$1, { view, article: item, className: s$1.card, target }, item.id)),
            isLoading && getSkeletons(view)
          ]
        }
      ),
      off: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$1.articleList, {}, [className, s$1[view]]), "data-testid": "ArticleList", children: [
        articles.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleListItem$1, { view, article: item, className: s$1.card, target }, item.id)),
        isLoading && getSkeletons(view)
      ] })
    }
  );
};
const ArticleList$1 = memo$1(ArticleList);

({
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  type: [ArticleTypeEnum.IT],
  user: {
    id: "1",
    username: "username",
    avatar: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
  },
  blocks: [
    {
      id: "1",
      type: ArticleBlockTypeEnum.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
      ]
    },
    {
      id: "4",
      type: ArticleBlockTypeEnum.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    <\/script>\n  </body>\n</html>;'
    },
    {
      id: "5",
      type: ArticleBlockTypeEnum.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
      ]
    },
    {
      id: "2",
      type: ArticleBlockTypeEnum.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта"
    },
    {
      id: "3",
      type: ArticleBlockTypeEnum.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    },
    {
      id: "7",
      type: ArticleBlockTypeEnum.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
      ]
    },
    {
      id: "8",
      type: ArticleBlockTypeEnum.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта"
    },
    {
      id: "9",
      type: ArticleBlockTypeEnum.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
      ]
    }
  ]
});

const stickyContentLayout = "_stickyContentLayout_1v8co_1";
const left = "_left_1v8co_7";
const content = "_content_1v8co_11";
const right = "_right_1v8co_19";
const s = {
	stickyContentLayout: stickyContentLayout,
	left: left,
	content: content,
	right: right
};

const {memo} = await importShared('react');
const StickyContentLayout = ({ className, content, left, right }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s.stickyContentLayout, {}, [className]), children: [
  left && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s.left, children: left }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s.content, children: content }),
  right && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s.right, children: right })
] });
const StickyContentLayout$1 = memo(StickyContentLayout);

export { ArticleList$1 as A, BiSearchAlt2 as B, StickyContentLayout$1 as S, ArticleDetails$1 as a, ArticleSortFieldEnum as b, ArticleTypeEnum as c, ArticleViewEnum as d, getArticleDetailsData as g };
