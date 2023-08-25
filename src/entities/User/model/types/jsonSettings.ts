import { ThemeEnum } from '@shared/const/theme';

export interface IJsonSettings {
  theme?: ThemeEnum;
  isFirstVisit?: boolean;
  isArticlesPageWasOpened?: boolean;
}
