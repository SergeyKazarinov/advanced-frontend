import { FC, memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import { Button, SizeButtonEnum, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { Card } from '@shared/ui/deprecated/Card';
import { Drawer } from '@shared/ui/deprecated/Drawer';
import { Input } from '@shared/ui/deprecated/Input';
import { Modal } from '@shared/ui/deprecated/Modal';
import { StarRating } from '@shared/ui/deprecated/StarRating';
import { TextComponent } from '@shared/ui/deprecated/TextComponent';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';

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

  const handleAccept = useCallback(() => {
    setIsOpenModal(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const handleCancel = useCallback(() => {
    setIsOpenModal(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <TextComponent title={feedbackTitle} />
      <Input data-testid="ArticleRating.Input" value={feedback} onChange={setFeedback} placeholder={t('feedback')} />
    </>
  );

  return (
    <Card data-testid="ArticleRating" max className={classNames('', {}, [className])}>
      <VStack align="center">
        <TextComponent title={starsCount ? t('Thanks') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={handleSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isOpenModal}>
          <VStack max gap="32">
            {modalContent}
            <HStack gap="16" max justify="end">
              <Button data-testid="ArticleRating.Close" theme={ThemeButtonEnum.OUTLINE_RED} onClick={handleCancel}>
                {t('Close')}
              </Button>
              <Button data-testid="ArticleRating.Send" theme={ThemeButtonEnum.OUTLINE} onClick={handleAccept}>
                {t('Send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isOpenModal} onClose={handleCancel}>
          <VStack gap="32">
            {modalContent}
            <Button
              data-testid="ArticleRating.Feedback"
              theme={ThemeButtonEnum.OUTLINE}
              onClick={handleAccept}
              size={SizeButtonEnum.L}
              fullWidth
            >
              {t('Send')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
};

export default memo(RatingCard);
