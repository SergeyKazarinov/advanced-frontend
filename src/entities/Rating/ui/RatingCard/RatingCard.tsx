import { FC, memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures, toggleFeatures } from '@shared/lib/features';
import { Button as ButtonDeprecated, SizeButtonEnum, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@shared/ui/deprecated/Input';
import { TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { Button } from '@shared/ui/redesigned/Button';
import { Card as CardRedesigned } from '@shared/ui/redesigned/Card';
import { Drawer } from '@shared/ui/redesigned/Drawer';
import { Input } from '@shared/ui/redesigned/Input';
import { Modal } from '@shared/ui/redesigned/Modal';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { StarRating } from '@shared/ui/redesigned/StarRating';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

const RatingCard: FC<RatingCardProps> = ({
  className,
  title,
  feedbackTitle,
  hasFeedback,
  onCancel,
  onAccept,
  rate,
}) => {
  const { t } = useTranslation('article');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [starsCount, setStarsCount] = useState(rate ?? 0);
  const [feedback, setFeedback] = useState('');

  const handleSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsOpenModal(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const handleAccept = useCallback(() => {
    handleClose();
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const handleCancel = useCallback(() => {
    handleClose();
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <TextComponent title={feedbackTitle} />
          <Input
            data-testid="ArticleRating.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('feedback')}
          />
        </>
      }
      off={
        <>
          <TextComponentDeprecated title={feedbackTitle} />
          <InputDeprecated
            data-testid="ArticleRating.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('feedback')}
          />
        </>
      }
    />
  );

  const Card = toggleFeatures({ name: 'isAppRedesigned', on: () => CardRedesigned, off: () => CardDeprecated });

  return (
    <Card data-testid="ArticleRating" max className={className}>
      <VStack align="center">
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<TextComponent title={starsCount ? t('Thanks') : title} />}
          off={<TextComponentDeprecated title={starsCount ? t('Thanks') : title} />}
        />

        <StarRating selectedStars={starsCount} size={40} onSelect={handleSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isOpenModal} onClose={handleClose} lazy>
          <VStack max gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <HStack gap="16" max justify="end">
                  <Button data-testid="ArticleRating.Close" color="error" onClick={handleCancel}>
                    {t('Close')}
                  </Button>
                  <Button data-testid="ArticleRating.Send" onClick={handleAccept}>
                    {t('Send')}
                  </Button>
                </HStack>
              }
              off={
                <HStack gap="16" max justify="end">
                  <ButtonDeprecated
                    data-testid="ArticleRating.Close"
                    theme={ThemeButtonEnum.OUTLINE_RED}
                    onClick={handleCancel}
                  >
                    {t('Close')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    data-testid="ArticleRating.Send"
                    theme={ThemeButtonEnum.OUTLINE}
                    onClick={handleAccept}
                  >
                    {t('Send')}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isOpenModal} onClose={handleCancel}>
          <VStack gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <Button data-testid="ArticleRating.Feedback" onClick={handleAccept} size="l" fullWidth>
                  {t('Send')}
                </Button>
              }
              off={
                <ButtonDeprecated
                  data-testid="ArticleRating.Feedback"
                  theme={ThemeButtonEnum.OUTLINE}
                  onClick={handleAccept}
                  size={SizeButtonEnum.L}
                  fullWidth
                >
                  {t('Send')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
};

export default memo(RatingCard);
