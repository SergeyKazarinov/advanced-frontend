import { AiFillHome } from 'react-icons/ai';
import { BsCardList, BsNewspaper } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { IconType } from 'react-icons/lib';
import { RoutePath } from 'shared/config/routeConfig';

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
  {
    path: RoutePath.articles,
    text: 'Articles',
    Icon: BsNewspaper,
    authOnly: true,
  },
];
