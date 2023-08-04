import { UserRoleEnum } from '@entities/User';
import { AboutPageLazy } from '@pages/AboutPage';
import { AdminPanelPageLazy } from '@pages/AdminPanelPage';
import { ArticleDetailsPageLazy } from '@pages/ArticleDetailsPage';
import { ArticleEditPageLazy } from '@pages/ArticleEditPage';
import { ArticlesPageLazy } from '@pages/ArticlesPage';
import { ForbiddenPageLazy } from '@pages/ForbiddenPage';
import { MainPageLazy } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ProfilePageLazy } from '@pages/ProfilePage';
import {
  AppRoutesEnum,
  getRouteAbout,
  getRouteAdmin,
  getRouteArticleCreate,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteArticlesDetails,
  getRouteForbidden,
  getRouteMain,
  getRouteNotFound,
  getRouteProfile,
} from '@shared/const/router';
import { AppRoutesProps } from '@shared/types';

export const routeConfig: Record<AppRoutesEnum, AppRoutesProps> = {
  [AppRoutesEnum.MAIN]: {
    path: getRouteMain(),
    element: <MainPageLazy />,
  },
  [AppRoutesEnum.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPageLazy />,
  },
  [AppRoutesEnum.PROFILE]: {
    path: getRouteProfile(':profileId'),
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_DETAILS]: {
    path: getRouteArticlesDetails(':articleId'),
    element: <ArticleDetailsPageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: <AdminPanelPageLazy />,
    authOnly: true,
    roles: [UserRoleEnum.ADMIN, UserRoleEnum.MANAGER],
  },
  [AppRoutesEnum.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPageLazy />,
    authOnly: true,
    roles: [UserRoleEnum.ADMIN, UserRoleEnum.MANAGER],
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};
