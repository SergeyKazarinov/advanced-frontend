export enum AppRoutesEnum {
  MAIN = 'main',
  SETTINGS = 'settings',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticlesDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/create';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';

export const AppRouteByPathPattern: Record<string, AppRoutesEnum> = {
  [getRouteMain()]: AppRoutesEnum.MAIN,
  [getRouteSettings()]: AppRoutesEnum.SETTINGS,
  [getRouteAbout()]: AppRoutesEnum.ABOUT,
  [getRouteProfile(':id')]: AppRoutesEnum.PROFILE,
  [getRouteArticles()]: AppRoutesEnum.ARTICLES,
  [getRouteArticlesDetails(':id')]: AppRoutesEnum.ARTICLE_DETAILS,
  [getRouteArticleCreate()]: AppRoutesEnum.ARTICLE_CREATE,
  [getRouteArticleEdit(':id')]: AppRoutesEnum.ARTICLE_EDIT,
  [getRouteAdmin()]: AppRoutesEnum.ADMIN_PANEL,
  [getRouteForbidden()]: AppRoutesEnum.FORBIDDEN,
};

// либо второй вариант ниже

export const RoutePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: getRouteMain(),
  [AppRoutesEnum.SETTINGS]: getRouteSettings(),
  [AppRoutesEnum.ABOUT]: getRouteAbout(),
  [AppRoutesEnum.PROFILE]: getRouteProfile('id'),
  [AppRoutesEnum.ARTICLES]: getRouteArticles(),
  [AppRoutesEnum.ARTICLE_CREATE]: getRouteArticleCreate(),
  [AppRoutesEnum.ARTICLE_EDIT]: getRouteArticleEdit(':id'),
  [AppRoutesEnum.ARTICLE_DETAILS]: getRouteArticlesDetails(':id'),
  [AppRoutesEnum.ADMIN_PANEL]: getRouteAdmin(),
  [AppRoutesEnum.FORBIDDEN]: getRouteForbidden(),
  [AppRoutesEnum.NOT_FOUND]: getRouteNotFound(),
};
