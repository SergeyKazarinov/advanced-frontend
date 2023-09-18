import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BiLogoGmail, BiSolidFileDoc } from 'react-icons/bi';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';

import { Link } from '@shared/ui/redesigned/Link';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import s from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

const contactsList = [
  {
    Icon: BsTelegram,
    contact: '@Skey92',
    href: 'https://t.me/SKey92',
  },
  {
    Icon: BsGithub,
    contact: 'SergeyKazarinov',
    href: 'https://github.com/SergeyKazarinov',
  },
  {
    Icon: BsLinkedin,
    contact: 'Sergey Kazarinov',
    href: 'https://www.linkedin.com/in/sergey-kazarinov-b621ba250/',
  },
  {
    Icon: BiLogoGmail,
    contact: 'kazarinov092@gmail.com',
    href: 'mailto:kazarinov092@gmail.com/',
  },
  {
    Icon: BiSolidFileDoc,
    contact: 'Resume',
    href: 'https://www.dropbox.com/scl/fi/w0126sgvl1soavob25blx/Resume.pdf?rlkey=coajavhxpy2b4yxeu3vxnhu1t&dl=0',
  },
];

const Contacts: FC<ContactsProps> = ({ className }) => {
  const { t } = useTranslation('main');
  return (
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
  );
};

export default memo(Contacts);
