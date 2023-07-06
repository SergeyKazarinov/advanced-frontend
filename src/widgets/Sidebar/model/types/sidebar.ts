import { IconType } from 'react-icons/lib';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: IconType;
  authOnly?: boolean;
}
