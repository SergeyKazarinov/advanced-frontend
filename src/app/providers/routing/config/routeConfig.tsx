import { UserRoleEnum } from '@entities/User';
import { AboutPageLazy } from '@pages/AboutPage';
import { AdminPanelPageLazy } from '@pages/AdminPanelPage';
import { ArticleCreatePageLazy } from '@pages/ArticleCreatePage';
import { ArticleDetailsPageLazy } from '@pages/ArticleDetailsPage';
import { ArticleEditPageLazy } from '@pages/ArticleEditPage';
import { ArticlesPageLazy } from '@pages/ArticlesPage';
import { ForbiddenPageLazy } from '@pages/ForbiddenPage';
import { MainPageLazy } from '@pages/MainPage';
import { MicrofrontendPageLazy } from '@pages/MicrofrontendPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ProfilePageLazy } from '@pages/ProfilePage';
import { SettingsPageLazy } from '@pages/SettingsPage';
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
  getRouteMicrofrontend,
  getRouteNotFound,
  getRouteProfile,
  getRouteSettings,
} from '@shared/const/router';
import { AppRoutesProps } from '@shared/types';

export const routeConfig: Record<AppRoutesEnum, AppRoutesProps> = {
  [AppRoutesEnum.MAIN]: {
    path: getRouteMain(),
    element: <MainPageLazy />,
  },
  [AppRoutesEnum.SETTINGS]: {
    path: getRouteSettings(),
    element: <SettingsPageLazy />,
    authOnly: true,
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
  [AppRoutesEnum.MICROFRONTEND]: {
    path: getRouteMicrofrontend(),
    element: <MicrofrontendPageLazy />,
  },
  [AppRoutesEnum.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleCreatePageLazy />,
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
