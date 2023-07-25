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
import { AppRoutesProps } from '@shared/types/router';
import { AppRoutesEnum, RoutePath } from '@shared/const/router';

export const routeConfig: Record<AppRoutesEnum, AppRoutesProps> = {
  [AppRoutesEnum.MAIN]: {
    path: RoutePath.main,
    element: <MainPageLazy />,
  },
  [AppRoutesEnum.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageLazy />,
  },
  [AppRoutesEnum.PROFILE]: {
    path: `${RoutePath.profile}:profileId`,
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_CREATE]: {
    path: RoutePath.article_create,
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_EDIT]: {
    path: RoutePath.article_edit,
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:articleId`,
    element: <ArticleDetailsPageLazy />,
    authOnly: true,
  },
  [AppRoutesEnum.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPageLazy />,
    authOnly: true,
    roles: [UserRoleEnum.ADMIN, UserRoleEnum.ADMIN],
  },
  [AppRoutesEnum.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPageLazy />,
    authOnly: true,
    roles: [UserRoleEnum.ADMIN, UserRoleEnum.ADMIN],
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
