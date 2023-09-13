import { i as importShared, j as jsxRuntimeExports, d as classNames, A as AiFillStar, u as useTranslation, l as TextComponent, C as Card, V as VStack, B as BrowserView_1, M as Modal, H as HStack, m as Button, n as ThemeButtonEnum, o as MobileView_1, D as Drawer, p as SizeButtonEnum, r as rtkApi, f as useSelector, g as getUserAuthData, q as Skeleton } from './index-e8277ff6.js';
import { I as Input } from './Input-79f18921.js';

const star = "_star_1tley_1";
const hovered = "_hovered_1tley_6";
const selected = "_selected_1tley_10";
const s = {
	star: star,
	hovered: hovered,
	selected: selected
};

const {memo: memo$2,useState: useState$1} = await importShared('react');
const StarRating = ({ className, onSelect, size = 30, selectedStars = 0 }) => {
  const starts = [1, 2, 3, 4, 5];
  const [currentStarsCount, setCurrentStarsCount] = useState$1(selectedStars);
  const [isSelected, setIsSelected] = useState$1(Boolean(selectedStars));
  const handleHover = (starsCount) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };
  const handleLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };
  const handleClick = (starsCount) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(s.starRaiting, {}, [className]), children: starts.map((starNumber) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    AiFillStar,
    {
      fill: "none",
      strokeWidth: 90,
      className: classNames(
        s.star,
        {
          [s.hovered]: currentStarsCount >= starNumber,
          [s.selected]: isSelected
        },
        []
      ),
      size,
      onMouseEnter: handleHover(starNumber),
      onMouseLeave: handleLeave,
      onClick: handleClick(starNumber),
      "data-testid": `StarRating.${starNumber}`,
      "data-selected": currentStarsCount >= starNumber
    },
    starNumber
  )) });
};
const StarRating$1 = memo$2(StarRating);

const {memo: memo$1,useCallback: useCallback$1,useState} = await importShared('react');
const RatingCard = ({
  className,
  title,
  feedbackTitle,
  hasFeedback,
  onCancel,
  onAccept,
  rate
}) => {
  const { t } = useTranslation("article");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [starsCount, setStarsCount] = useState(rate ?? 0);
  const [feedback, setFeedback] = useState("");
  const handleSelectStars = useCallback$1(
    (selectedStarsCount) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsOpenModal(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );
  const handleAccept = useCallback$1(() => {
    setIsOpenModal(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);
  const handleCancel = useCallback$1(() => {
    setIsOpenModal(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);
  const modalContent = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: feedbackTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { "data-testid": "ArticleRating.Input", value: feedback, onChange: setFeedback, placeholder: t("feedback") })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-testid": "ArticleRating", max: true, className: classNames("", {}, [className]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { align: "center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextComponent, { title: starsCount ? t("Thanks") : title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating$1, { selectedStars: starsCount, size: 40, onSelect: handleSelectStars })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserView_1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { isOpen: isOpenModal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { max: true, gap: "32", children: [
      modalContent,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "16", max: true, justify: "end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { "data-testid": "ArticleRating.Close", theme: ThemeButtonEnum.OUTLINE_RED, onClick: handleCancel, children: t("Close") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { "data-testid": "ArticleRating.Send", theme: ThemeButtonEnum.OUTLINE, onClick: handleAccept, children: t("Send") })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileView_1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, { isOpen: isOpenModal, onClose: handleCancel, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gap: "32", children: [
      modalContent,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-testid": "ArticleRating.Feedback",
          theme: ThemeButtonEnum.OUTLINE,
          onClick: handleAccept,
          size: SizeButtonEnum.L,
          fullWidth: true,
          children: t("Send")
        }
      )
    ] }) }) })
  ] });
};
const RatingCard$1 = memo$1(RatingCard);

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query({
      query: ({ userId, articleId }) => ({
        url: "/article-ratings",
        params: {
          userId,
          articleId
        }
      })
    }),
    rateArticle: build.mutation({
      query: (arg) => ({
        url: "/article-ratings",
        method: "POST",
        body: arg
      })
    })
  })
});
const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
const useRateArticle = articleRatingApi.useRateArticleMutation;

const {memo,useCallback} = await importShared('react');
const ArticleRating = ({ className, articleId }) => {
  const { t } = useTranslation("article");
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? ""
  });
  const [rateArticleMutation] = useRateArticle();
  const handleRateArticle = useCallback(
    (starsCount, feedback) => {
      try {
        rateArticleMutation({
          articleId,
          userId: userData?.id ?? "",
          rate: starsCount,
          feedback
        });
      } catch (e) {
        console.log(e);
      }
    },
    [articleId, userData?.id, rateArticleMutation]
  );
  const handleAccept = useCallback(
    (starsCount, feedback) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );
  const handleCancel = useCallback(
    (starsCount) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "100%", height: 120 });
  }
  const rating = data?.[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RatingCard$1,
    {
      rate: rating?.rate,
      className,
      title: t("Rate the article"),
      feedbackTitle: t("Leave your feedback about the article"),
      hasFeedback: true,
      onAccept: handleAccept,
      onCancel: handleCancel
    }
  );
};
const ArticleRating$1 = memo(ArticleRating);

export { ArticleRating$1 as default };
