export enum AppRoutesEnum {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: '/',
  [AppRoutesEnum.ABOUT]: '/about',
  [AppRoutesEnum.PROFILE]: '/profile/',
  [AppRoutesEnum.ARTICLES]: '/articles',
  [AppRoutesEnum.ARTICLE_CREATE]: '/articles/create',
  [AppRoutesEnum.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutesEnum.ARTICLE_DETAILS]: '/articles/',
  [AppRoutesEnum.ADMIN_PANEL]: '/admin',
  [AppRoutesEnum.FORBIDDEN]: '/forbidden',
  [AppRoutesEnum.NOT_FOUND]: '*',
};
