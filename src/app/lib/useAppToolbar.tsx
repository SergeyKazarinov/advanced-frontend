import { ReactElement } from 'react';

import { AppRoutesEnum } from '@shared/const/router';
import { useRouterChange } from '@shared/lib/router/useRouterCahnge';
import { ScrollToolbar } from '@widgets/ScrollToolbar';

export const useAppToolbar = () => {
  const appRoute = useRouterChange();

  const toolbarByAppRout: OptionalRecord<AppRoutesEnum, ReactElement> = {
    [AppRoutesEnum.ARTICLES]: <ScrollToolbar />,
    [AppRoutesEnum.ARTICLE_DETAILS]: <ScrollToolbar />,
    [AppRoutesEnum.ABOUT]: <ScrollToolbar />,
  };

  return toolbarByAppRout[appRoute];
};
