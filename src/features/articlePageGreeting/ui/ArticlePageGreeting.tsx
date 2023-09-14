import { FC, memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { TextComponent } from '@shared/ui/deprecated/TextComponent';
import { Drawer } from '@shared/ui/redesigned/Drawer';
import { Modal } from '@shared/ui/redesigned/Modal';

const ArticlePageGreeting: FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const handleClose = () => setIsOpen(false);

  const text = (
    <TextComponent title={t('Welcome')} text={t('Here you can search and view articles on various topics')} />
  );

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} onClose={handleClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal isOpen={isOpen} lazy onClose={handleClose}>
      {text}
    </Modal>
  );
};

export default memo(ArticlePageGreeting);
