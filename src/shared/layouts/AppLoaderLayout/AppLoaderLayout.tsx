import { FC, memo } from 'react';

import { Skeleton } from '@shared/ui/redesigned/Skeleton';
import { HStack } from '@shared/ui/redesigned/Stack';

import { MainLayout } from '../MainLayout';

import s from './AppLoaderLayout.module.scss';

const AppLoaderLayout: FC = () => (
  <MainLayout
    header={
      <HStack className={s.header}>
        <Skeleton width={40} height={40} border="50%" />
      </HStack>
    }
    content={
      // <ResumeLayout
      //   contacts={<Skeleton width="350px" height={460} border="16px" />}
      //   skills={<Skeleton width="350px" height={415} border="16px" />}
      //   education={<Skeleton width="350px" height={300} border="16px" />}
      //   experience={<Skeleton width="100%" height="100vh" border="16px" />}
      // />
      <Skeleton width="100%" height="100%" border="24px" />
    }
    sidebar={<Skeleton border="32px" width={220} height="100%" />}
  />
);

export default memo(AppLoaderLayout);
