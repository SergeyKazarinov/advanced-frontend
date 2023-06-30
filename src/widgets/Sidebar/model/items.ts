import { IconType } from 'react-icons/lib';
import { RoutePath } from 'shared/config/routeConfig';
import { AiFillHome } from 'react-icons/ai';
import { BsCardList } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: IconType;
  authOnly?: boolean;
}

export const SidebarItemsList: ISidebarItem[] = [
  {
    path: RoutePath.main,
    text: 'Main',
    Icon: AiFillHome,
  },
  {
    path: RoutePath.about,
    text: 'About',
    Icon: BsCardList,
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    Icon: CgProfile,
    authOnly: true,
  },
];
