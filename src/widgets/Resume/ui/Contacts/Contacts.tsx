import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Link } from '@shared/ui/redesigned/Link';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { contactsList } from '../../const/contactsList';

import s from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

const Contacts: FC<ContactsProps> = ({ className }) => {
  const { t } = useTranslation('main');
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <VStack className={className} gap="16">
        <TextComponent title={t('Contacts')} align="center" className={s.title} variant="accent" />
        {contactsList.map((item) => (
          <Link href={item.href} key={item.href}>
            <HStack gap="16">
              <item.Icon size={18} className={s.icon} />
              {item.contact}
            </HStack>
          </Link>
        ))}
      </VStack>
    </motion.div>
  );
};

export default memo(Contacts);
