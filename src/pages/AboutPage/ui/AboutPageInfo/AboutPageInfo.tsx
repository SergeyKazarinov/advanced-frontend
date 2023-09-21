import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import newDesign from '@shared/assets/advanced-frontend.jpg';
import oldDesign from '@shared/assets/old-design.jpg';
import { toggleFeatures } from '@shared/lib/features';
import { Card as CardDeprecated } from '@shared/ui/deprecated/Card';
import { TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { AppImage } from '@shared/ui/redesigned/AppImage';
import { Card as CardRedesigned } from '@shared/ui/redesigned/Card';
import { Link } from '@shared/ui/redesigned/Link';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent as TextComponentRedesigned } from '@shared/ui/redesigned/TextComponent';

import s from './AboutPageInfo.module.scss';

const AboutPageInfo: FC = () => {
  const { t } = useTranslation('about');

  const Card = toggleFeatures({ name: 'isAppRedesigned', on: () => CardRedesigned, off: () => CardDeprecated });
  const TextComponent = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => TextComponentRedesigned,
    // @ts-ignore
    off: () => TextComponentDeprecated,
  });

  return (
    <VStack className={s.aboutPage} align="center" gap="24">
      <TextComponent title={t('About site')} size="size_xl" />
      <Card padding="16" max>
        <TextComponent text={t('Site is in developing')} variant="error" align="center" />
        <TextComponent text={t('About site Description')} />
      </Card>
      <Card max padding="16">
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
      </Card>
      <Card max padding="16">
        <VStack gap="16">
          <TextComponent title={t('Internationalisation')} />
          <TextComponent text={t('Internationalisation description')} />
        </VStack>
      </Card>
      <Card max padding="16">
        <VStack gap="16">
          <TextComponent title={t('Articles')} />
          <TextComponent text={t('Articles description')} />
          <TextComponent text={t('Articles scroll')} />
          <TextComponent text={t('URLSearchParams')} />
        </VStack>
      </Card>
      <Card max padding="16">
        <VStack gap="16">
          <TextComponent title={t('Scrolling')} />
          <TextComponent text={t('Scrolling description')} />
        </VStack>
      </Card>
      <Card max padding="16">
        <VStack gap="16">
          <TextComponent title={t('Users')} />
          <TextComponent text={t('Users description')} />
          <TextComponent text={t('Users settings')} />
          <TextComponent text={t('Profile settings')} />
        </VStack>
      </Card>
      <Card max padding="16">
        <VStack gap="16">
          <TextComponent title={t('Server')} />
          <TextComponent text={t('Server description')} />
        </VStack>
      </Card>
      <Card max padding="16">
        <HStack gap="16">
          <TextComponent text={t('More Readme')} />
          <Link href="https://github.com/SergeyKazarinov/advanced-frontend">{t('Link to GitHub')}</Link>
        </HStack>
      </Card>
    </VStack>
  );
};

export default memo(AboutPageInfo);
