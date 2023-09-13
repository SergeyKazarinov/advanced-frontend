import { i as importShared, u as useTranslation, a4 as useJsonSettings, e as useAppDispatch, a5 as saveJsonSettings, j as jsxRuntimeExports, l as TextComponent, a6 as isMobile_1, D as Drawer, M as Modal, t as createAsyncThunk, N as createEntityAdapter, s as createSlice, a7 as ARTICLE_VIEW_LOCAL_STORAGE_KEY, f as useSelector, T as TextComponent$1, d as classNames, x as ToggleFeatures, V as VStack, L as ListBox, C as Card, a8 as CardThemeEnum, a9 as Flex, G as Card$1, aa as AiOutlineTable, ab as BsList, H as HStack, m as Button, n as ThemeButtonEnum, ac as useSearchParams, J as useInitialEffect, P as Page } from './index-e8277ff6.js';
import { b as ArticleSortFieldEnum, c as ArticleTypeEnum, d as ArticleViewEnum, A as ArticleList, B as BiSearchAlt2, S as StickyContentLayout } from './StickyContentLayout-63e39e33.js';
import { D as DynamicModuleLoader } from './DynamicModuleLoader-b32a089d.js';
import { I as Input } from './Input-79f18921.js';
import { I as Input$1 } from './Input-3c6acab9.js';

const {memo: memo$a,useEffect,useState} = await importShared('react');
const ArticlePageGreeting = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);
  const handleClose = () => setIsOpen(false);
  const text = /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: t("Welcome"), text: t("Here you can search and view articles on various topics") });
  if (isMobile_1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, { isOpen, onClose: handleClose, children: text });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { isOpen, lazy: true, onClose: handleClose, children: text });
};
const ArticlePageGreeting$1 = memo$a(ArticlePageGreeting);

const getArticlePageHasMore = (state) => state.articlesPage?.hasMore;

const getArticlePageIsLoading = (state) => state.articlesPage?.isLoading || false;

const getArticlePageNumber = (state) => state.articlesPage?.page || 1;

const getQueryParams = (params) => {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value !== void 0) {
      searchParams.set(name, value);
    }
  });
  return `?${searchParams.toString()}`;
};
const addQueryParams = (params) => {
  window.history.pushState(null, "", getQueryParams(params));
};

const getArticlePageLimit = (state) => state.articlesPage?.limit || 9;

const getArticlePageOrder = (state) => state.articlesPage?.order || "asc";

const getArticlePageSearch = (state) => state.articlesPage?.search ?? "";

const getArticlePageSort = (state) => state.articlesPage?.sort ?? ArticleSortFieldEnum.CREATED;

const getArticlePageType = (state) => state.articlesPage?.type ?? ArticleTypeEnum.ALL;

const fetchArticleList = createAsyncThunk(
  "articlesPage/fetchArticleList",
  async (_, thunkAPI) => {
    const limit = getArticlePageLimit(thunkAPI.getState());
    const sort = getArticlePageSort(thunkAPI.getState());
    const order = getArticlePageOrder(thunkAPI.getState());
    const search = getArticlePageSearch(thunkAPI.getState());
    const page = getArticlePageNumber(thunkAPI.getState());
    const type = getArticlePageType(thunkAPI.getState());
    try {
      addQueryParams({
        sort,
        order,
        search
      });
      const response = await thunkAPI.extra.api.get("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleTypeEnum.ALL ? void 0 : type
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

const articleAdapter = createEntityAdapter({
  selectId: (article) => article.id
});
const getArticles = articleAdapter.getSelectors(
  (state) => state.articlesPage || articleAdapter.getInitialState()
);
const articlePageSlice = createSlice({
  name: "articlePageSlice",
  initialState: articleAdapter.getInitialState({
    isLoading: false,
    error: void 0,
    view: ArticleViewEnum.SMALL,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    inited: false,
    limit: 9,
    sort: ArticleSortFieldEnum.CREATED,
    search: "",
    order: "asc",
    type: ArticleTypeEnum.ALL
  }),
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLE_VIEW_LOCAL_STORAGE_KEY
      );
      state.view = view;
      state.limit = view === ArticleViewEnum.BIG ? 4 : 9;
      state.inited = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleList.pending, (state, action) => {
      state.error = void 0;
      state.isLoading = true;
      if (action.meta.arg.replace) {
        articleAdapter.removeAll(state);
      }
    }).addCase(fetchArticleList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasMore = action.payload.length >= state.limit;
      if (action.meta.arg.replace) {
        articleAdapter.setAll(state, action.payload);
      } else {
        articleAdapter.addMany(state, action.payload);
      }
    }).addCase(fetchArticleList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});
const articlePageActions = articlePageSlice.actions;
const articlePageReducer = articlePageSlice.reducer;

const fetchNextArticlesPage = createAsyncThunk("articlesPage/fetchNextArticlesPage", async (_, thunkAPI) => {
  const hasMore = getArticlePageHasMore(thunkAPI.getState());
  const page = getArticlePageNumber(thunkAPI.getState());
  const isLoading = getArticlePageIsLoading(thunkAPI.getState());
  if (hasMore && !isLoading) {
    thunkAPI.dispatch(articlePageActions.setPage(page + 1));
    thunkAPI.dispatch(fetchArticleList({}));
  }
});

const getArticlePageInited = (state) => state.articlesPage?.inited;

const initArticlesPage = createAsyncThunk("articlesPage/initArticlesPage", async (searchParams, thunkAPI) => {
  const inited = getArticlePageInited(thunkAPI.getState());
  if (!inited) {
    const orderFromUtl = searchParams.get("order");
    const sortFromUtl = searchParams.get("sort");
    const searchFromUtl = searchParams.get("search");
    const typeFromUtl = searchParams.get("type");
    if (orderFromUtl) {
      thunkAPI.dispatch(articlePageActions.setOrder(orderFromUtl));
    }
    if (sortFromUtl) {
      thunkAPI.dispatch(articlePageActions.setSort(sortFromUtl));
    }
    if (searchFromUtl) {
      thunkAPI.dispatch(articlePageActions.setSearch(searchFromUtl));
    }
    if (typeFromUtl) {
      thunkAPI.dispatch(articlePageActions.setType(typeFromUtl));
    }
    thunkAPI.dispatch(articlePageActions.initState());
    thunkAPI.dispatch(fetchArticleList({}));
  }
});

const getArticlePageError = (state) => state.articlesPage?.error;

const getArticlePageView = (state) => state.articlesPage?.view || ArticleViewEnum.SMALL;

const {memo: memo$9} = await importShared('react');
const ArticleInfiniteList = ({ className }) => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: error, variant: "error" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleList, { isLoading, articles, view, className });
};
const ArticleInfiniteList$1 = memo$9(ArticleInfiniteList);

const select = "_select_pwvzy_1";
const label = "_label_pwvzy_5";
const selectElement = "_selectElement_pwvzy_9";
const option = "_option_pwvzy_16";
const disabled = "_disabled_pwvzy_21";
const s$7 = {
	select: select,
	label: label,
	selectElement: selectElement,
	option: option,
	disabled: disabled
};

const {useMemo: useMemo$2} = await importShared('react');
const Select = ({ className, label, options, value, onChange, readonly }) => {
  const optionList = useMemo$2(
    () => options?.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: s$7.option, value: item.value, children: item.content }, item.content)),
    [options]
  );
  const mods = {};
  const handleChange = (e) => {
    onChange?.(e.target.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$7.select, mods, [className]), children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames(s$7.label, { [s$7.disabled]: readonly }, []), children: `${label} >  ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: s$7.selectElement, value, onChange: handleChange, disabled: readonly, children: optionList })
  ] });
};

const articleSortSelector = "_articleSortSelector_9z3bb_1";
const s$6 = {
	articleSortSelector: articleSortSelector
};

const {memo: memo$8,useMemo: useMemo$1} = await importShared('react');
const ArticleSortSelector = ({ className, order, sort, onChangeOrder, onChangeSort }) => {
  const { t } = useTranslation("article");
  const orderOptions = useMemo$1(
    () => [
      {
        value: "asc",
        content: t("ascending")
      },
      {
        value: "desc",
        content: t("descending")
      }
    ],
    [t]
  );
  const sortFieldOptions = useMemo$1(
    () => [
      {
        value: ArticleSortFieldEnum.CREATED,
        content: t("date of creation")
      },
      {
        value: ArticleSortFieldEnum.TITLE,
        content: t("name")
      },
      {
        value: ArticleSortFieldEnum.VIEWS,
        content: t("views")
      }
    ],
    [t]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$6.articleSortSelectorRedesigned, {}, [className]), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent$1, { text: t("Sort by") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListBox, { items: sortFieldOptions, value: sort, onChange: onChangeSort }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListBox, { items: orderOptions, value: order, onChange: onChangeOrder })
      ] }) }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$6.articleSortSelector, {}, [className]), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            options: sortFieldOptions,
            label: t("Sort by"),
            value: sort,
            onChange: onChangeSort
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { options: orderOptions, label: t("By"), value: order, onChange: onChangeOrder })
      ] })
    }
  );
};
const ArticleSortSelector$1 = memo$8(ArticleSortSelector);

const tabs$2 = "_tabs_1ngph_1";
const s$5 = {
	tabs: tabs$2
};

const {memo: memo$7,useCallback: useCallback$5} = await importShared('react');
const Tabs$2 = ({ className, value, tabs, onTabClick }) => {
  const handleClick = useCallback$5(
    (tab) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$5.tabs, {}, [className]), children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: s$5.tab,
      theme: tab.value === value ? CardThemeEnum.NORMAL : CardThemeEnum.OUTLINE,
      onClick: handleClick(tab),
      children: tab.content
    },
    tab.value
  )) });
};
const TabsRedesigned = memo$7(Tabs$2);

const tabs$1 = "_tabs_1m41d_1";
const selected = "_selected_1m41d_7";
const s$4 = {
	tabs: tabs$1,
	selected: selected
};

const {memo: memo$6,useCallback: useCallback$4} = await importShared('react');
const Tabs = ({ className, value, tabs, onTabClick, direction, gap }) => {
  const handleClick = useCallback$4(
    (tab) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { direction, gap, align: "start", className: classNames(s$4.tabs, {}, [className]), children: tabs.map((tab) => {
    const isSelected = tab.value === value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card$1,
      {
        className: classNames(s$4.tabs, { [s$4.selected]: isSelected }),
        variant: isSelected ? "light" : "normal",
        onClick: handleClick(tab),
        border: "round",
        children: tab.content
      },
      tab.value
    );
  }) });
};
const Tabs$1 = memo$6(Tabs);

const {memo: memo$5,useCallback: useCallback$3,useMemo} = await importShared('react');
const ArticleTypeTabs = ({ className, value, onChangeType }) => {
  const { t } = useTranslation("article");
  const typeTabs = useMemo(
    () => [
      {
        value: ArticleTypeEnum.ALL,
        content: t("All")
      },
      {
        value: ArticleTypeEnum.IT,
        content: t("IT")
      },
      {
        value: ArticleTypeEnum.ECONOMICS,
        content: t("Economics")
      },
      {
        value: ArticleTypeEnum.SCIENCE,
        content: t("Science")
      }
    ],
    [t]
  );
  const handleChangeType = useCallback$3(
    (tab) => {
      onChangeType(tab.value);
    },
    [onChangeType]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs$1, { direction: "column", className, tabs: typeTabs, value, onTabClick: handleChangeType }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsRedesigned, { className, tabs: typeTabs, value, onTabClick: handleChangeType })
    }
  );
};
const ArticleTypeTabs$1 = memo$5(ArticleTypeTabs);

const articleViewSelector = "_articleViewSelector_1poww_1";
const viewSelected = "_viewSelected_1poww_1";
const articleViewSelectorRedesigned = "_articleViewSelectorRedesigned_1poww_5";
const notSelected = "_notSelected_1poww_8";
const icon = "_icon_1poww_11";
const s$3 = {
	articleViewSelector: articleViewSelector,
	viewSelected: viewSelected,
	articleViewSelectorRedesigned: articleViewSelectorRedesigned,
	notSelected: notSelected,
	icon: icon
};

const {memo: memo$4} = await importShared('react');
const viewTypes = [
  {
    view: ArticleViewEnum.SMALL,
    Icon: AiOutlineTable
  },
  {
    view: ArticleViewEnum.BIG,
    Icon: BsList
  }
];
const ArticleViewSelector = ({ className, view, onViewClick }) => {
  const handleClick = (newView) => () => {
    onViewClick?.(newView);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(Card$1, { className: classNames(s$3.articleViewSelectorRedesigned, {}, [className]), border: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { children: viewTypes.map((viewType) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        viewType.Icon,
        {
          size: 28,
          className: classNames(s$3.icon, {
            [s$3.notSelected]: viewType.view !== view
          }),
          onClick: handleClick(viewType.view)
        },
        viewType.view
      )) }) }),
      off: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s$3.articleViewSelector, {}, [className]), children: viewTypes.map((viewType) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          theme: ThemeButtonEnum.CLEAR,
          onClick: handleClick(viewType.view),
          className: classNames("", {
            [s$3.viewSelected]: viewType.view === view
          }),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(viewType.Icon, { size: 28 })
        },
        viewType.view
      )) })
    }
  );
};
const ArticleViewSelector$1 = memo$4(ArticleViewSelector);

const {useCallback: useCallback$2,useRef} = await importShared('react');

const useDebounce = (callback, delay) => {
  const timer = useRef();
  return useCallback$2(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [delay, callback]
  );
};

const {useCallback: useCallback$1} = await importShared('react');
const useArticleFilters = () => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlePageView);
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);
  const search = useSelector(getArticlePageSearch);
  const type = useSelector(getArticlePageType);
  const fetchData = useCallback$1(() => {
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);
  const debounceFetchData = useDebounce(fetchData, 500);
  const handleChangeView = useCallback$1(
    (newView) => {
      dispatch(articlePageActions.setView(newView));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const handleChangeOrder = useCallback$1(
    (newOrder) => {
      dispatch(articlePageActions.setOrder(newOrder));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const handleChangeSort = useCallback$1(
    (newSort) => {
      dispatch(articlePageActions.setSort(newSort));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const handleChangeSearch = useCallback$1(
    (search2) => {
      dispatch(articlePageActions.setSearch(search2));
      dispatch(articlePageActions.setPage(1));
      debounceFetchData();
    },
    [dispatch, debounceFetchData]
  );
  const handleChangeType = useCallback$1(
    (value) => {
      dispatch(articlePageActions.setType(value));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );
  return {
    handleChangeType,
    handleChangeSearch,
    handleChangeSort,
    handleChangeOrder,
    handleChangeView,
    view,
    sort,
    order,
    search,
    type
  };
};

const sortWrapper = "_sortWrapper_iejtx_1";
const search = "_search_iejtx_7";
const tabs = "_tabs_iejtx_11";
const s$2 = {
	sortWrapper: sortWrapper,
	search: search,
	tabs: tabs
};

const {memo: memo$3} = await importShared('react');
const ArticlesPageFilter = ({ className }) => {
  const { t } = useTranslation("article");
  const {
    handleChangeOrder,
    handleChangeSearch,
    handleChangeSort,
    handleChangeType,
    handleChangeView,
    order,
    search,
    sort,
    type,
    view
  } = useArticleFilters();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames(s$2.articlesPageFilter, {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: s$2.sortWrapper, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ArticleSortSelector$1,
        {
          order,
          sort,
          onChangeOrder: handleChangeOrder,
          onChangeSort: handleChangeSort
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleViewSelector$1, { view, onViewClick: handleChangeView })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: s$2.search, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: t("Serach"), value: search, onChange: handleChangeSearch }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleTypeTabs$1, { className: s$2.tabs, value: type, onChangeType: handleChangeType })
  ] });
};
const ArticlesPageFilter$1 = memo$3(ArticlesPageFilter);

const articlesFilters = "_articlesFilters_kqgrt_1";
const s$1 = {
	articlesFilters: articlesFilters
};

const {memo: memo$2} = await importShared('react');
const ArticlesFilters = ({
  className,
  onChangeOrder,
  onChangeSearch,
  onChangeSort,
  onChangeType,
  order,
  search,
  sort,
  value
}) => {
  const { t } = useTranslation("article");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card$1, { className: classNames(s$1.articlesFilters, {}, [className]), padding: "24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input$1, { placeholder: t("Serach"), value: search, onChange: onChangeSearch, addonLeft: /* @__PURE__ */ jsxRuntimeExports.jsx(BiSearchAlt2, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleTypeTabs$1, { className: s$1.tabs, value, onChangeType }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleSortSelector$1, { order, sort, onChangeOrder, onChangeSort })
  ] }) });
};
const ArticlesFilters$1 = memo$2(ArticlesFilters);

const {memo: memo$1} = await importShared('react');
const FiltersSelectorContainer = ({ className }) => {
  const { handleChangeOrder, handleChangeSearch, handleChangeSort, handleChangeType, order, search, sort, type } = useArticleFilters();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ArticlesFilters$1,
    {
      className,
      search,
      order,
      sort,
      value: type,
      onChangeSort: handleChangeSort,
      onChangeType: handleChangeType,
      onChangeOrder: handleChangeOrder,
      onChangeSearch: handleChangeSearch
    }
  );
};
const FiltersSelectorContainer$1 = memo$1(FiltersSelectorContainer);

const {memo} = await importShared('react');
const ViewSelectorContainer = ({ className }) => {
  const { handleChangeView, view } = useArticleFilters();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleViewSelector$1, { className, view, onViewClick: handleChangeView });
};
const ViewSelectorContainer$1 = memo(ViewSelectorContainer);

const articlePage = "_articlePage_r51ff_1";
const s = {
	articlePage: articlePage
};

const {useCallback} = await importShared('react');
const reducers = {
  articlesPage: articlePageReducer
};
const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);
  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });
  const content = /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToggleFeatures,
    {
      feature: "isAppRedesigned",
      on: /* @__PURE__ */ jsxRuntimeExports.jsx(
        StickyContentLayout,
        {
          content: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page, { "data-testid": "ArticlesPage", className: s.articlePageRed, onScrollEnd: handleLoadNextPart, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleInfiniteList$1, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArticlePageGreeting$1, {})
          ] }),
          left: /* @__PURE__ */ jsxRuntimeExports.jsx(ViewSelectorContainer$1, {}),
          right: /* @__PURE__ */ jsxRuntimeExports.jsx(FiltersSelectorContainer$1, {})
        }
      ),
      off: /* @__PURE__ */ jsxRuntimeExports.jsxs(Page, { "data-testid": "ArticlesPage", className: s.articlePage, onScrollEnd: handleLoadNextPart, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArticlesPageFilter$1, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleInfiniteList$1, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArticlePageGreeting$1, {})
      ] })
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicModuleLoader, { reducers, removeAfterUnmount: false, children: content });
};

export { ArticlesPage as default };
