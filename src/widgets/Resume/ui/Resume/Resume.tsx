import { FC, memo } from 'react';

import ResumeLayout from '@shared/layouts/ResumeLayout/ResumeLayout';
import { VStack } from '@shared/ui/redesigned/Stack';

import Contacts from '../Contacts/Contacts';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Resume: FC = () => {
  const experienceAndProjects = (
    <VStack gap="32">
      <Experience />
      <Projects />
    </VStack>
  );

  return (
    <ResumeLayout
      contacts={<Contacts />}
      skills={<Skills />}
      education={<Education />}
      experience={experienceAndProjects}
    />
  );
};

export default memo(Resume);
