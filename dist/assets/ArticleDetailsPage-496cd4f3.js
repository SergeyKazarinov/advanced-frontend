import { i as importShared, j as jsxRuntimeExports, q as Skeleton, r as rtkApi, u as useTranslation, V as VStack, d as classNames, l as TextComponent, K as TextSizeEnum, t as createAsyncThunk, N as createEntityAdapter, s as createSlice, O as combineReducers, f as useSelector, Q as useNavigate, R as getRouteArticleEdit, W as Button, H as HStack, I as Avatar, T as TextComponent$1, G as Card, X as AppLink, Y as getRouteProfile, F as Avatar$1, g as getUserAuthData, e as useAppDispatch, J as useInitialEffect, z as Loader, Z as createSelector, m as Button$1, a as useParams, x as ToggleFeatures, P as Page, C as Card$1 } from './index-e8277ff6.js';
import { A as ArticleList, g as getArticleDetailsData, a as ArticleDetails, S as StickyContentLayout } from './StickyContentLayout-63e39e33.js';
import { D as DynamicModuleLoader } from './DynamicModuleLoader-b32a089d.js';

const {lazy: lazy$1,Suspense: Suspense$1} = await importShared('react');
const ArticleRating = lazy$1(() => import('./ArticleRating-8c54dd6f.js'));
const ArticleRatingLazy = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense$1, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 120 }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleRating, { ...props }) });

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit) => ({
        url: "/articles",
        params: {
          _limit: limit,
          _expand: "user"
        }
      })
    })
  }),
  overrideExisting: false
});
const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;

const {memo: memo$9} = await importShared('react');
const ArticleRecommendationsList = ({ className }) => {
  const { t } = useTranslation("article");
  const { data: articles, isLoading, error } = useArticleRecommendationsList(3);
  if (isLoading || error || !articles) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { "data-testid": "ArticleRecommendationsList", className: classNames("", {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { size: TextSizeEnum.L, title: t("Recomendations") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleList, { articles, target: "_blank" })
  ] });
};
const ArticleRecommendationsList$1 = memo$9(ArticleRecommendationsList);

const fetchCommentsByArticleId = createAsyncThunk(
  "articleDetailsPage/fetchCommentsByArticleId",
  async (articleId, thunkAPI) => {
    if (!articleId) {
      return thunkAPI.rejectWithValue("no articleId");
    }
    try {
      const response = await thunkAPI.extra.api.get("/comments", {
        params: {
          articleId,
          _expand: "user"
        }
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

const commentsAdapter = createEntityAdapter({
  selectId: (comment) => comment.id
});
const getArticleComments = commentsAdapter.getSelectors(
  (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);
const articleDetailsCommentSlice = createSlice({
  name: "articleDetailsCommentSlice",
  initialState: commentsAdapter.getInitialState({
    isLoading: false,
    error: void 0,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = void 0;
      state.isLoading = true;
    }).addCase(
      fetchCommentsByArticleId.fulfilled,
      (state, action) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      }
    ).addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
const articleDetailsCommentsReducer = articleDetailsCommentSlice.reducer;

const fetchArticleRecommendation = createAsyncThunk("articlesDetailsPage/fetchArticleRecommendation", async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.api.get("/articles", {
      params: {
        _limit: 4
      }
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("Error");
  }
});

const recommendationAdapter = createEntityAdapter({
  selectId: (article) => article.id
});
recommendationAdapter.getSelectors(
  (state) => state.articleDetailsPage?.recommendations || recommendationAdapter.getInitialState()
);
const articleDetailsPageRecommendationSlice = createSlice({
  name: "articleDetailsPageRecommendationSlice",
  initialState: recommendationAdapter.getInitialState({
    isLoading: false,
    error: void 0,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendation.pending, (state) => {
      state.error = void 0;
      state.isLoading = true;
    }).addCase(
      fetchArticleRecommendation.fulfilled,
      (state, action) => {
        state.isLoading = false;
        recommendationAdapter.setAll(state, action.payload);
      }
    ).addCase(fetchArticleRecommendation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
const articleDetailsPageRecommendationReducer = articleDetailsPageRecommendationSlice.reducer;

const articleDetailsPageReducers = combineReducers({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsPageRecommendationReducer
});

const {memo: memo$8,useCallback: useCallback$2} = await importShared('react');
const ArticleEditButton = () => {
  const { t } = useTranslation("article");
  const article = useSelector(getArticleDetailsData);
  const navigate = useNavigate();
  const handleEdit = useCallback$2(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [navigate, article]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleEdit, children: t("Edit") });
};
const ArticleEditButton$1 = memo$8(ArticleEditButton);

const {memo: memo$7} = await importShared('react');
const ArticleAdditionalInfo = ({ className, author, createdAt, views }) => {
  const { t } = useTranslation("article");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "32", className: classNames("", {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { src: author.avatar, size: 32 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: author.username, bold: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: createdAt })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleEditButton$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: t("{{count}} views", { count: views }) })
  ] });
};
const ArticleAdditionalInfo$1 = memo$7(ArticleAdditionalInfo);

const card = "_card_omi3g_1";
const s$2 = {
	card: card
};

const {memo: memo$6} = await importShared('react');
const AdditionalInfoContainer = ({ className }) => {
  const article = useSelector(getArticleDetailsData);
  if (!article) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { padding: "24", border: "round", className: s$2.card, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ArticleAdditionalInfo$1,
    {
      className,
      author: article.user,
      createdAt: article.createdAt,
      views: article.views
    }
  ) });
};
const AdditionalInfoContainer$1 = memo$6(AdditionalInfoContainer);

const commentItem = "_commentItem_1d28v_1";
const header = "_header_1d28v_6";
const loading = "_loading_1d28v_12";
const s$1 = {
	commentItem: commentItem,
	header: header,
	loading: loading
};

const {memo: memo$5} = await importShared('react');
const CommentItem = ({ className, comment, isLoading }) => {
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "CommentItem.Loading", className: classNames(s$1.commentItem, {}, [className, s$1.loading]), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s$1.header, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: 30, height: 30, border: "50%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { height: 16, width: 100 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 50 })
    ] });
  }
  if (!comment) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { "data-testid": "CommentItem.Content", max: true, className: classNames(s$1.commentItem, {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AppLink, { to: getRouteProfile(comment.user.id), className: s$1.header, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { size: 30, src: comment.user.avatar }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: comment.user.username })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { className: s$1.text, text: comment.text })
  ] });
};
const CommentItem$1 = memo$5(CommentItem);

const {memo: memo$4} = await importShared('react');
const CommentList = ({ className, comments, isLoading }) => {
  const { t } = useTranslation("article");
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "16", max: true, className: classNames("", {}, [className]), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommentItem$1, { isLoading: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommentItem$1, { isLoading: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommentItem$1, { isLoading: true })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(VStack, { gap: "16", max: true, className: classNames("", {}, [className]), children: comments?.length ? comments.map((comment) => /* @__PURE__ */ jsxRuntimeExports.jsx(CommentItem$1, { comment, isLoading }, comment.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { text: t("No comments") }) });
};
const CommentList$1 = memo$4(CommentList);

const {lazy} = await importShared('react');

const AddCommentFormAsync = lazy(() => import('./AddCommentForm-9e29dd20.js'));

const getArticleCommentsIsLoading = (state) => state.articleDetailsPage?.comments?.isLoading;

const addCommentForArticle = createAsyncThunk("articleDetails/addCommentForArticle", async (text, thunkAPI) => {
  const userData = getUserAuthData(thunkAPI.getState());
  const article = getArticleDetailsData(thunkAPI.getState());
  if (!userData || !text || !article) {
    return thunkAPI.rejectWithValue("No data");
  }
  try {
    const response = await thunkAPI.extra.api.post("/comments", {
      articleId: article.id,
      userId: userData.id,
      text
    });
    if (!response.data) {
      throw new Error();
    }
    thunkAPI.dispatch(fetchCommentsByArticleId(article.id));
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("Error");
  }
});

const {memo: memo$3,Suspense,useCallback: useCallback$1} = await importShared('react');
const ArticleDetailsComments = ({ className, id }) => {
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });
  const handleSendComment = useCallback$1(
    (text) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { max: true, className: classNames("", {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { size: TextSizeEnum.L, title: t("Comments") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AddCommentFormAsync, { onSendComment: handleSendComment }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommentList$1, { comments, isLoading })
  ] });
};
const ArticleDetailsComments$1 = memo$3(ArticleDetailsComments);

const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }
    return article.user.id === user.id;
  }
);

const {memo: memo$2,useCallback} = await importShared('react');
const ArticleDetailsPageHeader = ({ className }) => {
  const { t } = useTranslation("article");
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { max: true, justify: "between", className: classNames("", {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { onClick: handleBack, children: t("Back") }),
    canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleEditButton$1, {})
  ] });
};
const ArticleDetailsPageHeader$1 = memo$2(ArticleDetailsPageHeader);

const {memo: memo$1} = await importShared('react');
const DetailsContainer = ({ className }) => {
  const { articleId } = useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { max: true, className, padding: "24", border: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleDetails, { id: articleId }) });
};
const DetailsContainer$1 = memo$1(DetailsContainer);

const articleDetailsPage = "_articleDetailsPage_1eti8_1";
const recommendations = "_recommendations_1eti8_5";
const s = {
	articleDetailsPage: articleDetailsPage,
	recommendations: recommendations
};

const {memo} = await importShared('react');
const reducer = {
  articleDetailsPage: articleDetailsPageReducers
};
const ArticleDetailsPage = () => {
  const { articleId } = useParams();
  const { t } = useTranslation();
  if (!articleId) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicModuleLoader, { reducers: reducer, removeAfterUnmount: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(
        StickyContentLayout,
        {
          content: /* @__PURE__ */ jsxRuntimeExports.jsx(Page, { className: s.articleDetailsPage, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "16", max: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DetailsContainer$1, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleRatingLazy, { articleId }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleRecommendationsList$1, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleDetailsComments$1, { id: articleId })
          ] }) }),
          right: /* @__PURE__ */ jsxRuntimeExports.jsx(AdditionalInfoContainer$1, {})
        }
      ),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(Page, { className: s.articleDetailsPage, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "16", max: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleDetailsPageHeader$1, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleDetails, { id: articleId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ToggleFeatures,
          {
            feature: "isArticleRatingEnabled",
            on: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleRatingLazy, { articleId }),
            off: /* @__PURE__ */ jsxRuntimeExports.jsx(Card$1, { children: t("Скоро здесь будет новая фича") })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleRecommendationsList$1, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleDetailsComments$1, { id: articleId })
      ] }) })
    }
  ) });
};
const ArticleDetailsPage$1 = memo(ArticleDetailsPage);

export { ArticleDetailsPage$1 as default };
