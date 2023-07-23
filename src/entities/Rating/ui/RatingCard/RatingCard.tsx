import {
  FC, memo, useCallback, useState,
} from 'react';
import { classNames } from '@shared/lib/classNames';
import { HStack, VStack } from '@shared/ui/Stack';
import { Card } from '@shared/ui/Card';
import { useTranslation } from 'react-i18next';
import { TextComponent } from '@shared/ui/TextComponent';
import { StarRating } from '@shared/ui/StarRating';
import { Modal } from '@shared/ui/Modal';
import { Input } from '@shared/ui/Input';
import { Button, SizeButtonEnum, ThemeButtonEnum } from '@shared/ui/Button';
import { Drawer } from '@shared/ui/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';

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
  className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate,
}) => {
  const { t } = useTranslation('article');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [starsCount, setStarsCount] = useState(rate ?? 0);
  const [feedback, setFeedback] = useState('');

  const handleSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsOpenModal(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

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
      <Input value={feedback} onChange={setFeedback} placeholder={t('feedback')} />
    </>
  );

  return (
    <Card max className={classNames('', {}, [className])}>
      <VStack align="center">
        <TextComponent title={starsCount ? t('Thanks') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={handleSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isOpenModal}>
          <VStack max gap="32">
            {modalContent}
            <HStack gap="16" max justify="end">
              <Button
                theme={ThemeButtonEnum.OUTLINE_RED}
                onClick={handleCancel}
              >
                {t('Close')}
              </Button>
              <Button
                theme={ThemeButtonEnum.OUTLINE}
                onClick={handleAccept}
              >
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
