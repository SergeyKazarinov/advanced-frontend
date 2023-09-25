import { FC, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import newDesign from '@shared/assets/advanced-frontend.jpg';
import oldDesign from '@shared/assets/old-design.jpg';
import { InViewAnimate } from '@shared/lib/animate/indes';
import { toggleFeatures } from '@shared/lib/features';
import { Card as CardDeprecated } from '@shared/ui/deprecated/Card';
import { TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { AppImage } from '@shared/ui/redesigned/AppImage';
import { Card as CardRedesigned } from '@shared/ui/redesigned/Card';
import { Link } from '@shared/ui/redesigned/Link';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent as TextComponentRedesigned } from '@shared/ui/redesigned/TextComponent';

import s from './AboutPageInfo.module.scss';

const Card = toggleFeatures({ name: 'isAppRedesigned', on: () => CardRedesigned, off: () => CardDeprecated });
const TextComponent = toggleFeatures({
  name: 'isAppRedesigned',
  on: () => TextComponentRedesigned,
  // @ts-ignore
  off: () => TextComponentDeprecated,
});

const AnimatedCard = ({ children }: { children: ReactNode }) => (
  <InViewAnimate className={s.cardWrapper}>
    {({ inView }) => (
      <Card padding="16" max className={`${s.unvisible} ${inView && s.visible}`}>
        {children}
      </Card>
    )}
  </InViewAnimate>
);

const AboutPageInfo: FC = () => {
  const { t } = useTranslation('about');

  return (
    <VStack className={s.aboutPage} align="center" gap="24">
      <TextComponent title={t('About site')} size="size_xl" />
      <AnimatedCard>
        <TextComponent text={t('Site is in developing')} variant="error" align="center" />
        <TextComponent text={t('About site Description')} />
      </AnimatedCard>
      <AnimatedCard>
        <VStack gap="16">
          <TextComponent title={t('Design')} />
          <TextComponent text={t('Design description')} />
          <TextComponent text={t('Design connection')} />
          <HStack max justify="center">
            <TextComponent text={t('login')} />
            <TextComponent text={t('password')} />
          </HStack>
          <HStack justify="center">
            <AppImage src={newDesign} className={s.image} />
            <AppImage src={oldDesign} className={s.image} />
          </HStack>
          <TextComponent text={t('Design theme')} />
        </VStack>
      </AnimatedCard>
      <AnimatedCard>
        <VStack gap="16">
          <TextComponent title={t('Internationalisation')} />
          <TextComponent text={t('Internationalisation description')} />
        </VStack>
      </AnimatedCard>
      <AnimatedCard>
        <VStack gap="16">
          <TextComponent title={t('Articles')} />
          <TextComponent text={t('Articles description')} />
          <TextComponent text={t('Articles scroll')} />
          <TextComponent text={t('URLSearchParams')} />
        </VStack>
      </AnimatedCard>
      <AnimatedCard>
        <VStack gap="16">
          <TextComponent title={t('Scrolling')} />
          <TextComponent text={t('Scrolling description')} />
        </VStack>
      </AnimatedCard>
      <AnimatedCard>
        <VStack gap="16">
          <TextComponent title={t('Users')} />
          <TextComponent text={t('Users description')} />
          <TextComponent text={t('Users settings')} />
          <TextComponent text={t('Profile settings')} />
        </VStack>
      </AnimatedCard>
      <AnimatedCard>
        <VStack gap="16">
          <TextComponent title={t('Server')} />
          <TextComponent text={t('Server description')} />
        </VStack>
      </AnimatedCard>
      <AnimatedCard>
        <HStack gap="16">
          <TextComponent text={t('More Readme')} />
          <Link href="https://github.com/SergeyKazarinov/advanced-frontend">{t('Link to GitHub')}</Link>
        </HStack>
      </AnimatedCard>
    </VStack>
  );
};

export default memo(AboutPageInfo);
