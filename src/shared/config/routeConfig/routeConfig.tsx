import { AboutPageLazy } from 'pages/AboutPage';
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage';
import { ArticleEditPageLazy } from 'pages/ArticleEditPage';
import { ArticlesPageLazy } from 'pages/ArticlesPage';
import { MainPageLazy } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutesEnum {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: '/',
  [AppRoutesEnum.ABOUT]: '/about',
  [AppRoutesEnum.PROFILE]: '/profile/', // + id
  [AppRoutesEnum.ARTICLES]: '/articles',
  [AppRoutesEnum.ARTICLE_CREATE]: '/articles/create',
  [AppRoutesEnum.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutesEnum.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRoutesEnum.NOT_FOUND]: '*',
};

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
  [AppRoutesEnum.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
