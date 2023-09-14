import { AiFillHome } from 'react-icons/ai';
import { BsCardList, BsNewspaper } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@entities/User';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@shared/const/router';

import { ISidebarItem } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: ISidebarItem[] = [
    {
      path: getRouteMain(),
      text: 'Main',
      Icon: AiFillHome,
    },
    {
      path: getRouteAbout(),
      text: 'About',
      Icon: BsCardList,
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'Profile',
        Icon: CgProfile,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'Articles',
        Icon: BsNewspaper,
        authOnly: true,
      },
    );
  }
  return sidebarItemsList;
});
