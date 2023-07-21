import { getUserAuthData } from '@entities/User';
import { createSelector } from '@reduxjs/toolkit';
import { AiFillHome } from 'react-icons/ai';
import { BsCardList, BsNewspaper } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { RoutePath } from '@shared/config/routeConfig';
import { ISidebarItem } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: ISidebarItem[] = [
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
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
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
      );
    }
    return sidebarItemsList;
  },
);
